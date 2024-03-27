import { createSlice } from "@reduxjs/toolkit"

export const emailSlice = createSlice({
	name: "email",
	initialState: {
		value: null,
		valid: true,
	},
	reducers: {
		emailChange: (state, action) => {
			state.value = action.length > 0 ? action.payload : null
		},
		emailValid: (state, action) => {
			state.valid = action.payload
		},
	},
})
export const { emailChange, emailValid } = emailSlice.actions

export default emailSlice.reducer
