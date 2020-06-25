import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const namespaced = true;

const state = {
	question: 0,
	answer: 0,
	allAnswers: [],
};

export default {
	namespaced,
	state,
	actions,
	getters,
	mutations,
};
