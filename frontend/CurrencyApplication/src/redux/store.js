import { configureStore } from "@reduxjs/toolkit"
import emailReducer from "./emailSlice.js"
import passwordReducer from "./passwordSlice.js"
export default configureStore({
	reducer: {
		email: emailReducer,
		password: passwordReducer,
	},
})
