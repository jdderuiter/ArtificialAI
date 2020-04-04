import $socket from '@/socket-instance';

const saveImage = ( { commit }, img) => {
    $socket.emit('uploadImage', img)
}

const getProfiles = () => {
    $socket.emit('getProfiles')
}

const socket_profiles = ( { commit }, profiles) => {
    commit('SET_PROFILES', profiles)
}

export default {
    saveImage,
    socket_profiles,
    getProfiles
}
