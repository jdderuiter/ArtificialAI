<template>
    <div class="profiles">
        <profile v-for="(profile, index) in profiles" :key="index" :image="profile.image"/>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import Profile from '@/components/Profile'

    export default {
        name: 'Profiles',
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
