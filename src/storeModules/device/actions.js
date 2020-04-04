import $socket from '@/socket-instance';

const initSocket = ( { commit }, socket ) => {
    console.log("init")
    $socket.emit('send', 'hoi')
}

const setNetworkStatus = ( { commit } ) => {
    let status = navigator.onLine ? "online" : "offline"
    commit('SET_NETWORK', status)
}

const socket_receive = ( { commit }, data ) => {
    console.log("received the message from server", data)
}

export default {
    setNetworkStatus,
    socket_receive,
    initSocket
}
