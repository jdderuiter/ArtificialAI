<template>
    <div class="home">
        <div class="home__text">
            <h1>Bootstrap starter template</h1>
            <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
        </div>
        
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
