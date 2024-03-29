import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
	name: "login",
	initialState: {
		token: null,
		bankAccounts: null,
		firstName: null,
		lastName: null,
		middleName: null,
	},
	reducers: {
		setBankAccounts: (state, action) => {
			state.bankAccounts = action.payload
		},
		setFirstName: (state, action) => {
			state.firstName = action.payload
		},
		setLastName: (state, action) => {
			state.lastName = action.payload
		},
		setMiddleName: (state, action) => {
			state.middleName = action.payload
		},
		setToken: (state, action) => {
			state.token = action.payload
		},
	},
})
export const { setBankAccounts, setFirstName, setLastName, setMiddleName, setToken } = loginSlice.actions

export default loginSlice.reducer
