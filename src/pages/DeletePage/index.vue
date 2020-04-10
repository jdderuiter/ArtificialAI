<template>
    <div class="logout-page">
        <h1>Kies jouw foto om het feest te verlaten!</h1>
        <div class="row">
            <rating-answer v-for="(profile, index) in profiles"  :image="profile.image" :key="index" @click="logout(profile)" />
        </div>
        <profile-modal />
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import RatingAnswer from '@/components/RatingAnswer'
    import ProfileModal from '@/components/ProfileModal'

    export default {
        name: "DeletePage",
        components: {
            RatingAnswer,
            ProfileModal
        },
        computed: {
            ...mapGetters({
                profiles: 'profiles/list',
            })
        },
        data() {
            return {
                selected: {},
            }
        },
        methods: {
            ...mapActions({
                getProfiles: 'profiles/getProfiles',
            }),
            logout (profile) {
                console.log("logout", profile)
            }
        },
        mounted () {
            this.getProfiles()
        }
    }
</script>

<style lang="scss">
    $component: 'logout-page';

    .#{$component} {
        text-align: center;
    }

</style>
