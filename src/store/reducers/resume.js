import { FETCH_RESUME } from "../types";

const initialState = {
	data: {}
}

const reducer = (state, action) => {
	if (typeof state === 'undefined') state = initialState;
	switch (action.type) {
		case FETCH_RESUME:
			return {
				...state,
				data: action.data
			};
		default:
			return state;
	}
}
export {
	reducer as default,
	initialState as resumeInitialState
};
