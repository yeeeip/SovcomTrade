import React, { useEffect, useState } from "react"
import { Line } from "react-chartjs-2"
import axios from "axios"
import styled from "styled-components"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const ChartP = styled.p`
	margin-top: 10px;
	margin-right: 10px;
	font-family: TT Travels;
	font-size: 14px;
	font-weight: 600;
	line-height: 13.76px;
	text-align: left;
	color: #213a8b;

	display: flex;
	justify-content: flex-end;
`
const ChartSpan = styled.span`
	margin-top: 10px;
	margin-right: 10px;
	font-family: TT Travels;
	font-size: 14px;
	font-weight: 400;
	line-height: 13.76px;
	text-align: left;
	color: #213a8b;

	display: flex;
	justify-content: flex-end;
`
const ChartTitle = styled.span`
	margin-top: 10px;
	font-family: TT Travels;
	font-size: 16px;
	font-weight: 400;
	line-height: 13.76px;
	text-align: left;
	color: #213a8b;
	display: flex;
`


export let priceChange
export let dayUpdateCourse

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
	},
}

export function ChartYuan({interval, key}) {
	const [chartData, setChartData] = useState({
		labels: [],
		datasets: [
			{
				label: "",
				data: [],
				borderColor: "rgb(33, 58, 139)",
				backgroundColor: "rgb(241, 247, 255)",
			},
		],
	})

	useEffect(() => {
		const fetchData = async () => {
			try {
				//тут шаманство со временем
				Date.prototype.subtractDays = function (nrOfDays) {
					var day = 1000 * 60 * 60 * 24
					return new Date(this - day * nrOfDays)
				}
				const formDate = (inputDate) => {
					const date = new Date(inputDate)
					const day = date.getDate()
					const month = date.getMonth() + 1
					return `${day < 10 ? "0" + day : day}.${month < 10 ? "0" + month : month}`
				}
				const SITE_URL = "https://089c-95-26-80-149.ngrok-free.app"
				const start_date = new Date()
					.subtractDays(interval)
					.toLocaleDateString()
					.split("")
					.map((item) => (item === "." ? "/" : item))
					.join("")
				const end_date = new Date()
					.toLocaleDateString()
					.split("")
					.map((item) => (item === "." ? "/" : item))
					.join("")
				console.log(end_date)

				const response = await axios({
					method: "get",
					url: `${SITE_URL}/api/v1/daily_rates?start_date=${start_date}&end_date=${end_date}&cur=CNY`,
					headers: {
						"Content-Type": "application/json",
						"ngrok-skip-browser-warning": true,
						Authorization: `Bearer ${sessionStorage.getItem("token")}`,
					},
				})
				const data = response.data
				const labels = data.rates.map((entry) => formDate(entry.time))
				const values = data.rates.map((entry) => entry.cur_unit_rate)

				priceChange = data.rates[response.data.rates.length - 1].cur_unit_rate - data.rates[response.data.rates.length - 2].cur_unit_rate
				dayUpdateCourse = new Date(data.rates[response.data.rates.length - 1].time).toLocaleDateString()
				setChartData({
					labels,
					datasets: [
						{
							label: "",
							data: values,
							borderColor: "rgb(33, 58, 139)",
							backgroundColor: "rgb(241, 247, 255)",
						},
					],
				})
			} catch (error) {
				console.error("Error fetching data:", error)
				if (err.response?.status === 401) {
					alert("Ваша сессия истекла. Войдите снова")
					navigate("/entry", { replace: true })
				}
			}
		}

		fetchData()
	}, [])

	return (
		<div>
			<Line options={options} data={chartData} />
			<div style={{display:"flex", justifyContent:"space-between"}}>
				<div>
					<ChartTitle>Курсы по отношению к рублю</ChartTitle>
				</div>
				<div>
					<ChartP style={{ color: priceChange >= 0 ? "green" : "red" }}>
					{priceChange && (priceChange >= 0 ? "+" : "") + (priceChange && priceChange.toFixed(3))}
					</ChartP>
					<ChartSpan>{`Последнее обновление курса: ${dayUpdateCourse}`}</ChartSpan>
				</div>
			</div>
		</div>
	)
}
