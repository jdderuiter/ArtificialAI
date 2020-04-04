import $socket from '@/socket-instance';

const saveImage = ( { commit }, img) => {
    $socket.emit('uploadImage', img)
}

const socket_profiles = ( { commit }, profiles) => {
    console.log('profiles updated', profiles)
}

export default {
    saveImage,
    socket_profiles
}
