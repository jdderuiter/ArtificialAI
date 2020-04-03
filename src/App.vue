<template>
    <div id="app">
        <navbar />
        <div class="app-content container">
            <router-view/>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Navbar from '@/components/Navbar'

export default {
    name: 'App',
    components: {
        Navbar
    },
    mounted() {
        this.setNetworkStatus()
        window.addEventListener('online',  () => {
            this.setNetworkStatus()
        });
         window.addEventListener('offline',  () => {
            this.setNetworkStatus()
        });
    },
    methods: {
        ...mapActions({
            setNetworkStatus: 'device/setNetworkStatus'
        })
    },
}
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
