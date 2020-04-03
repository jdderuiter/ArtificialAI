import Vue from 'vue';

export default {
    SET_MOBILE (state, payload) {
        Vue.set(state, 'mobile', payload);
    },
    SET_NETWORK (state, payload) {
        Vue.set(state, 'network', payload);
    }
};
