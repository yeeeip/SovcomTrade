import { configureStore } from "@reduxjs/toolkit"
import registerReducer from "./registerSlice.js"
export default configureStore({
	reducer: {
		register: registerReducer,
	},
})
