<template>
    <div class="test">
        <img :src="stream" />
        <questions />
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import $socket from '@/socket-instance'
    import Questions from '@/components/Questions'

    export default {
        name: 'TestPage',
        components: {
            Questions,
        },
        data() {
            return {
                stream: {},
            }
        },
        mounted() {
            $socket.on('stream', (image) => {
                this.stream = image
            })
        },
    }
</script>

<style lang="scss">
    $component: 'test';

    .#{$component} {
        position: relative;
        text-align: center;

        .questions {
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        //Styles go here
    }
</style>
