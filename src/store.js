import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Create Modules object
const modules = {};

// Dynamically import and namespace Vuex modules
const moduleNames = [
	'profiles',
];

moduleNames.forEach(name => {
	const module = require(`./storeModules/${name}`);

	modules[name] = {
		namespaced: true,
		...module.default
	};
});

const store = new Vuex.Store({
	modules,
	strict: true
});

export default store;
