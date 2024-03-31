import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    }, 
  },
};

export function ChartDirhams() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        borderColor: 'rgb(33, 58, 139)',
        backgroundColor: 'rgb(241, 247, 255)',
        borderRadius: "2",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        Date.prototype.subtractDays = function(nrOfDays) {
          var day = 1000 * 60 * 60 * 24;
          return new Date(this - (day * nrOfDays));
        }
        const start_date = new Date().subtractDays(7).toLocaleDateString().split("").map(item => item === '.' ? '/' : item).join('');
        const end_date = new Date().toLocaleDateString().split("").map(item => item === '.' ? '/' : item).join('');
        const response = await axios({
          method: 'get',
          url: `https://3e98-95-26-80-219.ngrok-free.app/api/v1/daily_rates?start_date=${start_date}&end_date=${end_date}&cur=AED`,
          headers: {
            'Content-Type': 'application/json',
            "ngrok-skip-browser-warning": true,
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0NEBnbWFpbC5jb20iLCJpZCI6NCwiZW1haWwiOiJ0ZXN0NEBnbWFpbC5jb20iLCJpYXQiOjE3MTE4OTEyNjAsImV4cCI6MTcxMTg5MzA2MH0.XrBXTMM1WgJ-NcsR7jnwIxiAKF3Gtigbe2H-Eg_fZk8MWjs2Z1da-ZgibitoJ9R_U8G6f0WssF_4VqD-flmPDw'
          }
        });
        console.log(response.data.rates[0].cur_unit_rate)
        const data = response.data;
        const labels = data.map((entry, i) => entry.date.data.rates[i].cur_unit_rate);
        console.log(labels)
        const values = data.map(entry => entry.value);
        
        setChartData({
          labels,
          datasets: [
            {
              label: '',
              data: values,
              borderColor: 'rgb(33, 58, 139)',
              backgroundColor: 'rgb(241, 247, 255)',
              borderRadius: "2",
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return <Line options={options} data={chartData} />;
}
