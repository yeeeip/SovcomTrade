import Recovery from "./components/RegisterPage/Recovery.jsx"
import Registration from "./components/RegisterPage/Registration.jsx"
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom"

function App() {
	return (
		<BrowserRouter basename='/'>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<a href='/registration'>Registration</a>
							<br />
							<a href='/recovery'>Recovery</a>
							<br />
						</>
					}
				/>
				<Route path='registration' element={<Registration />} />
				<Route path='recovery' element={<Recovery />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
