import { configureStore } from "@reduxjs/toolkit"
import registerReducer from "./registerSlice.js"
import loginReducer from "./loginSlice.js"
import modalsReducer from "./modalsSlice.js"
import offerModalReducer from "./offerModalSlice.js"
import currencyModalReducer from "./currencyModalSlice.js"
export default configureStore({
	reducer: {
		register: registerReducer,
		login: loginReducer,
		modals: modalsReducer,
		offerModal: offerModalReducer,
		currencyModal: currencyModalReducer,
	},
})
