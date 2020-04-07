<template>
    <div class="home">
        <!-- On 'photo' emit call store action -->
        <camera  @photo="(img) => saveImage(img)"/>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Camera from '@/components/Camera'

    export default {
        name: 'CameraPage',
        components: {
            Camera
        },
        methods: {
            ...mapActions({
                saveImage: 'profiles/saveImage',
            }),
        }

    }
</script>

<style lang="scss">
    $component: 'home';

    .#{$component} {
        //Styles go here

        &__text {
            padding: 3rem 1.5rem;
            text-align: center;
        }
    }

</style>
