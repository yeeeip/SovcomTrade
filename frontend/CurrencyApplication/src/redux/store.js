import { configureStore } from "@reduxjs/toolkit"
import registerReducer from "./registerSlice.js"
import loginReducer from "./loginSlice.js"
import modalsReducer from "./modalsSlice.js"
export default configureStore({
	reducer: {
		register: registerReducer,
		login: loginReducer,
		modals: modalsReducer,
	},
})
