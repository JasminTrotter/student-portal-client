import {SET_PRODUCT, SET_CLASS_AMOUNT, SET_DOLLAR_AMOUNT} from '../actions/product-selection';


const initialState = {
	product: 0,
	classAmount: '',
	dollarAmount: ''
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
	else return state;
}