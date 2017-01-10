import * as types from "../mutation-type.js";
const state = {
	data: []
};

const actions = {};

const mutations = {
	[types.ADD_INFO](state, {
		txt
	}) {
		state.data.push(txt);
	}
};
export default {
	state,
	actions,
	mutations
}