import Recovery from "./components/RegisterPage/Recovery.jsx"
import Registration from "./components/RegisterPage/Registration.jsx"
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom"
import MainPage from "./components/MainPage/MainPage.jsx"
import Entry from "./components/RegisterPage/Entry.jsx"
import { CurrencyModal } from "./components/Modals/Currency/CurrencyModal.jsx"
import { History } from "./components/HistoryPage/History.jsx"
import { Button } from "./components/RegisterPage/styles/Button.jsx"

function App() {
	return (
		<BrowserRouter basename='/'>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Button href={"/registration"} content={"registration"} />
							<br />
							<Button href={"/recovery"} content={"recovery"} />
							<br />
							<Button href={"/mainPage"} content={"mainPage"} />
							<br />
							<Button href={"/entry"} content={"entry"} />
							<br />
							<Button href={"/сurrencyModal"} content={"сurrencyModal"} />
							<br />
							<Button href={"/history"} content={"history"} />
							<br />
						</>
					}
				/>
				<Route path='registration' element={<Registration />} />
				<Route path='recovery' element={<Recovery />} />
				<Route path='mainPage' element={<MainPage />} />
				<Route path='entry' element={<Entry />} />
				<Route path='сurrencyModal' element={<CurrencyModal />} />
				<Route path='history' element={<History />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
