import { createSlice } from "@reduxjs/toolkit"

export const offerModalSlice = createSlice({
	name: "offerModal",
	initialState: {
		credit: null,
		debit: null,
		course: null,
		value: null,
		deadline: null,
		offerOpen: false,
		offerSwap: true,
	},
	reducers: {
		setOfferCredit: (state, action) => {
			state.credit = action.payload
		},
		setOfferDebit: (state, action) => {
			state.debit = action.payload
		},
		setOfferCourse: (state, action) => {
			state.course = action.payload
		},
		setOfferValue: (state, action) => {
			state.value = action.payload
		},
		setOfferDeadline: (state, action) => {
			state.deadline = action.payload
		},
		setOfferOpen: (state, action) => {
			state.offerOpen = action.payload
		},
		setOfferSwap: (state, action) => {
			state.offerSwap = action.payload
		},
	},
})
export const { setOfferCredit, setOfferDebit, setOfferCourse, setOfferValue, setOfferDeadline, setOfferOpen, setOfferSwap } = offerModalSlice.actions

export default offerModalSlice.reducer
