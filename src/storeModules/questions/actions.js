/*
*   LOGIC BEFORE CHANGING DATA FROM STORE
*/

import $socket from '@/socket-instance';

const setQuestion = ( { commit }, question) => {
    // Emit the image (base 64) to socket
    $socket.emit('setQuestion', question)
    commit('SET_QUESTION', question)

}

const setAnswer = ( { commit }, answer) => {
    // Emit the image (base 64) to socket
    $socket.emit('setAnswer', answer)
    commit('SET_ANSWER', answer)
}

// ACTION CALLED BY BACKEND AUTOMATICALLY (magic 🧙🏻‍♂️)
const socket_question = ( { commit }, question) => {
    //Save questions to our store (->mutations)
    commit('SET_QUESTION', question)
}

const socket_answer = ( { commit }, question) => {
    //Save questions to our store (->mutations)
    commit('SET_ANSWER', question)
}

export default {
    setQuestion,
    setAnswer,
    socket_question,
    socket_answer,
}
