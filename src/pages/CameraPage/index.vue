<template>
    <div class="camera-page">
        <camera />
    </div>
</template>

<script>
    import Camera from '@/components/Camera'

    export default {
        name: 'CameraPage',
        components: {
            Camera
        },
        methods: {
        }

    }
</script>

<style lang="scss">
    $component: 'camera-page';

    .#{$component} {
        //Styles go here
    }

</style>
