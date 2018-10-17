import {SET_PRODUCT, SET_CLASS_AMOUNT, SET_DOLLAR_AMOUNT, SET_DATE} from '../actions/product-selection';


const initialState = {
	product: 0,
	classAmount: '',
	dollarAmount: '',
	date: new Date()
}

export const setProduct = (state=initialState, action) => {

	if (action.type === SET_PRODUCT) {
		return Object.assign({}, state, {product: action.product})
	}
	if (action.type === SET_CLASS_AMOUNT) {
		return Object.assign({}, state, {classAmount: action.classAmount})
	}
	if (action.type === SET_DOLLAR_AMOUNT) {
		return Object.assign({}, state, {dollarAmount: action.dollarAmount})
	}
	if (action.type === SET_DATE) {
		return Object.assign({}, state, {date: action.date})
	}
	else return state;
}