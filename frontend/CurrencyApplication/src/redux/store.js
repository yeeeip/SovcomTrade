import { configureStore } from "@reduxjs/toolkit"
import registerReducer from "./registerSlice.js"
import loginReducer from "./loginSlice.js"
export default configureStore({
	reducer: {
		register: registerReducer,
		login: loginReducer,
	},
})
