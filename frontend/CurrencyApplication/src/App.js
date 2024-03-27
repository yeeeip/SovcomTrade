import Recovery from "./components/Recovery.jsx"
import Registration from "./components/Registration.jsx"
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom"

function App() {
	return (
		<BrowserRouter basename='/'>
			<Routes>
				<Route path='registration' element={<Registration />} />
				<Route path='recovery' element={<Recovery />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
