/*
*   CHANGE DATA IN STORE 
*/

import Vue from 'vue';

export default {
    SET_STREAM(state, payload) {
        Vue.set(state, 'stream', payload);
    }
};
