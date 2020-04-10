<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/profiles">Profielen</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/rating">Rating</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

    export default {
        name: 'Navbar',

    }
</script>

<style lang="scss">
    $component: 'navbar';

    .#{$component} {
        //Styles go here
    }

</style>
