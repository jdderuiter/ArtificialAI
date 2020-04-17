<template>
    <div class="profiles">
        <h1>Nu op het feest:</h1>
        <!-- Loop trough profiles currently in the store -->
        <div class="row">
            <div class="col-3 answer py-3 img-container" v-for="(profile, index) in profiles" :key="index">
                <profile :profile="profile" @delete="deleteProfile(profile._id)"/>
            </div>
        </div>
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
                deleteProfile: 'profiles/deleteProfile'
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
        h1 {
            text-align: center;
        }
    }

</style>
