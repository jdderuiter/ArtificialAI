/*
*   GET DATA FROM STORE
*/

import $socket from '@/socket-instance';

export default {
    question: (state) => state.question,
    answer: (state) => state.answer,
};
