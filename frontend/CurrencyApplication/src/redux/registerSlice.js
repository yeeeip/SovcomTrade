import { createSlice } from "@reduxjs/toolkit"

export const registerSlice = createSlice({
	name: "register",
	initialState: {
		email: {
			value: null,
			valid: true,
		},
		password: {
			value: null,
			valid: true,
		},
		secondPassword: {
			value: null,
			valid: true,
		},
		phone: {
			value: null,
			valid: true,
		},
		firstName: {
			value: null,
			valid: true,
		},
		secondName: {
			value: null,
			valid: true,
		},
		middleName: {
			value: null,
			valid: true,
		},
		generalError: {
			value: null,
			valid: false,
		},
	},
	reducers: {
		emailChange: (state, action) => {
			state.email.value = action.payload
		},
		emailValid: (state, action) => {
			state.email.valid = action.payload
		},
		passwordChange: (state, action) => {
			state.password.value = action.payload
		},
		passwordValid: (state, action) => {
			state.password.valid = action.payload
		},
		secondPasswordChange: (state, action) => {
			state.secondPassword.value = action.payload
		},
		secondPasswordValid: (state, action) => {
			state.secondPassword.valid = action.payload
		},
		phoneChange: (state, action) => {
			state.phone.value = action.payload
		},
		phoneValid: (state, action) => {
			state.phone.valid = action.payload
		},
		firstNameChange: (state, action) => {
			state.firstName.value = action.payload
		},
		firstNameValid: (state, action) => {
			state.firstName.valid = action.payload
		},
		secondNameChange: (state, action) => {
			state.secondName.value = action.payload
		},
		secondNameValid: (state, action) => {
			state.secondName.valid = action.payload
		},
		middleNameChange: (state, action) => {
			state.middleName.value = action.payload
		},
		generalErrorChange: (state, action) => {
			state.generalError.value = action.payload
		},
		generalErrorValid: (state, action) => {
			state.generalError.valid = action.payload
		},
	},
})
export const {
	emailChange,
	emailValid,
	passwordChange,
	passwordValid,
	secondPasswordChange,
	secondPasswordValid,
	phoneChange,
	phoneValid,
	firstNameChange,
	firstNameValid,
	secondNameChange,
	secondNameValid,
	middleNameChange,
	generalErrorChange,
	generalErrorValid,
} = registerSlice.actions

export default registerSlice.reducer
