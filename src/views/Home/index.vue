<template>
    <div class="home">
        <div class="home__text">
            <h1>Bootstrap starter template</h1>
            <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'Home',

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
