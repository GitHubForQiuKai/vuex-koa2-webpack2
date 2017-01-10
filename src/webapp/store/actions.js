import * as types from "./mutation-type.js";
export
const addInfo = ({
	commit
}, data) => {
	commit(types.ADD_INFO, {
		txt: data.txt
	})
}