import { createSlice } from "@reduxjs/toolkit"

export const passwordSlice = createSlice({
	name: "password",
	initialState: {
		value: null,
		valid: true,
		repeated: true,
	},
	reducers: {
		passwordChange: (state, action) => {
			state.value = action.payload.length > 0 ? action.payload : null
		},
		passwordValid: (state, action) => {
			state.valid = action.payload
		},
		passwordRepeated: (state, action) => {
			state.repeated = action.payload
		},
	},
})
export const { passwordChange, passwordValid, passwordRepeated } = passwordSlice.actions

export default passwordSlice.reducer
