import { createSlice } from "@reduxjs/toolkit"

export const currencyModal = createSlice({
	name: "currencyModal",
	initialState: {
		currencyOpen: false,
		currencySwap: true,
	},
	reducers: {
		setCurrencyOpen: (state, action) => {
			state.currencyOpen = action.payload
		},
		setCurrencySwap: (state, action) => {
			state.currencySwap = action.payload
		},
	},
})
export const { setCurrencyOpen, setCurrencySwap } = currencyModal.actions

export default currencyModal.reducer
