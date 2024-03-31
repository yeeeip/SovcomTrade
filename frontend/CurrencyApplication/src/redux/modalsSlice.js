import { createSlice } from "@reduxjs/toolkit"

export const modalsSlice = createSlice({
	name: "modals",
	initialState: {
		currencyError: null,
		offerCreditAccountError: null,
		offerDebitAccountError: null,
		offerCursError: null,
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
		setOfferCursError: (state, action) => {
			state.offerCursError = action.payload
		},
		setOfferTimeError: (state, action) => {
			state.offerTimeError = action.payload
		},
		setOfferValueError: (state, action) => {
			state.offerValueError = action.payload
		},
	},
})
export const { setCurrencyError, setOfferCreditAccountError, setOfferDebitAccountError, setOfferCursError, setOfferTimeError, setOfferValueError } =
	modalsSlice.actions

export default modalsSlice.reducer
