/*
*   CHANGE DATA IN STORE 
*/

import Vue from 'vue';

export default {
    SET_PROFILES(state, payload) {
        Vue.set(state, 'list', payload);
    }
};
