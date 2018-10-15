import {SET_PRODUCT} from '../actions/product-selection';

const initialState = {
	product: 0
}

export const setProduct = (state=initialState, action) => {

	if (action.type === SET_PRODUCT) {
		return Object.assign({}, state, {product: action.product})
	}
	else return state;
}