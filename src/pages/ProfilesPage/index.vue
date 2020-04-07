<template>
    <div class="profiles">
        <!-- Loop trough profiles currently in the store -->
        <profile v-for="(profile, index) in profiles" :key="index" :profile="profile"/>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import Profile from '@/components/Profile'

    export default {
        name: 'ProfilesPage',
        components: {
            Profile
        },
        computed: {
            ...mapGetters({
                profiles: 'profiles/list',
            })
        },
        methods: {
            ...mapActions({
                getProfiles: 'profiles/getProfiles',
            })
        },
        mounted () {
            // On page load, fetch the profiles that are online already
            // (Action in the global store)
            this.getProfiles()
        }

    }
</script>

<style lang="scss">
    $component: 'profiles';

    .#{$component} {
        //Styles go here
    }

</style>
