<template>
    <div class="test">
        <img :src="stream" />
        <questions />
    </div>
</template>

<script>
    import $socket from '@/socket-instance'
    import Questions from '@/components/Questions'

    export default {
        name: 'Watchpage',
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
            width: 80%;
            top: 10%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #f2f2f2;
        }
        //Styles go here
    }
</style>
