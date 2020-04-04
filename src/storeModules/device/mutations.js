import Vue from 'vue';

export default {
    SET_MOBILE (state, payload) {
        Vue.set(state, 'mobile', payload);
    },
    SET_NETWORK (state, payload) {
        Vue.set(state, 'network', payload);
    },
    SET_SOCKET: (state, socket) => {
        Vue.set(state, 'io', socket);
    }
};
