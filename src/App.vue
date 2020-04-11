<template>
    <div id="app">
        <!-- @TODO: delete navbar -->
        <navbar />
        <div class="app-content container">
            <router-view/>
        </div>
    </div>
</template>

<script>
// import { mapActions } from 'vuex';
import Navbar from '@/components/Navbar'

export default {
    name: 'App',
    components: {
        Navbar
    },
    mounted() {
    },
    methods: {
        // ...mapActions({
            // initSocket: 'profiles/initSocket',
        // })
    },
}
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
