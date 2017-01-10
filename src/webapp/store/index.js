import Vue from 'vue';
import Vuex from 'vuex';
import database from "./modules/database.js";
import * as actions from "./actions.js";
Vue.use(Vuex);
export default new Vuex.Store({
	actions,
	modules: {
		database
	}
})