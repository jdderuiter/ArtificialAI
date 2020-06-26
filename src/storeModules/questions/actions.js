/*
*   LOGIC BEFORE CHANGING DATA FROM STORE
*/

import $socket from '@/socket-instance';

const setQuestion = ( { commit, getters }, question) => {
    // Emit the image (base 64) to socket
    $socket.emit('setQuestion', question)
    commit('SET_QUESTION', question)
    commit('UPDATE_ALL_ANSWERS', getters.answer)
}

const setAnswer = ( { commit }, answer) => {
    // Emit the image (base 64) to socket
    $socket.emit('setAnswer', answer)
    commit('SET_ANSWER', answer)
}

// ACTION CALLED BY BACKEND AUTOMATICALLY (magic 🧙🏻‍♂️)
const socket_question = ( { commit, getters }, question) => {
    //Save questions to our store (->mutations)
    commit('SET_QUESTION', question)
    commit('UPDATE_ALL_ANSWERS', getters.answer)
}

const socket_answer = ( { commit }, question) => {
    commit('SET_ANSWER', question)
}

export default {
    setQuestion,
    setAnswer,
    socket_question,
    socket_answer,
}
