<template>
    <div class="test">
        <img :src="stream">
        <div id="log">{{ stream }}</div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import $socket from '@/socket-instance';

    export default {
        name: 'TestPage',
        data() {
            return {
                stream: {}
            }
        },
        mounted () {
            $socket.on('stream',(image) => {
                this.stream = image
            });
        }

    }
</script>

<style lang="scss">
    $component: 'test';

    .#{$component} {
        //Styles go here

    }

</style>
