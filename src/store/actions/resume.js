import data from '../../lib/asssets/resume.json';
import { FETCH_RESUME } from "../types";

const fetchResume = () => {
	return {
		type: FETCH_RESUME,
		resume: data
	}
}

export {
	fetchResume
};
