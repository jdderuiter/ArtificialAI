/*
*   CHANGE DATA IN STORE
*/

import Vue from 'vue';

export default {
    SET_QUESTION(state, payload) {
        Vue.set(state, 'question', payload);

    },
    SET_ANSWER(state, payload) {
        Vue.set(state, 'answer', payload);
        state.allAnswers.push(payload);
    }
};
