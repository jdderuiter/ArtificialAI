import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const namespaced = true;

const state = {
	stream: {}
};

export default {
	namespaced,
	state,
	actions,
	getters,
	mutations
};
