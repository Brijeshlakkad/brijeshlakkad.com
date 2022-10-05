import { combineReducers } from "redux"
import resumeReducer, { resumeInitialState } from "./resume"

import localesReducer, { localesInitialState } from "./locales"

export const initialState = {
	locales: localesInitialState,
	resume: resumeInitialState
}

export default combineReducers({
	locales: localesReducer,
	resume: resumeReducer
})
