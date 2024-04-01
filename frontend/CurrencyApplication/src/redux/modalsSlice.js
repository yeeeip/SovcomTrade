import { createSlice } from "@reduxjs/toolkit"

export const modalsSlice = createSlice({
	name: "modals",
	initialState: {
		currencyError: null,
		offerCreditAccountError: null,
		offerDebitAccountError: null,
		offerCourseError: null,
		offerTimeError: null,
		offerValueError: null,
	},
	reducers: {
		setCurrencyError: (state, action) => {
			state.currencyError = action.payload
		},
		setOfferCreditAccountError: (state, action) => {
			state.offerCreditAccountError = action.payload
		},
		setOfferDebitAccountError: (state, action) => {
			state.offerDebitAccountError = action.payload
		},
		setOfferCourseError: (state, action) => {
			state.offerCourseError = action.payload
		},
		setOfferTimeError: (state, action) => {
			state.offerTimeError = action.payload
		},
		setOfferValueError: (state, action) => {
			state.offerValueError = action.payload
		},
	},
})
export const { setCurrencyError, setOfferCreditAccountError, setOfferDebitAccountError, setOfferCourseError, setOfferTimeError, setOfferValueError } =
	modalsSlice.actions

export default modalsSlice.reducer
