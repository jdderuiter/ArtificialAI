<template>
    <div class="logout-page">
        <h1>Kies jouw foto om het feest te verlaten!</h1>
        <div class="row">
            <rating-answer v-for="(profile, index) in profiles"  :image="profile.image" :key="index" @select="popup(profile)" />
        </div>
        <profile-modal v-if="deleting" :profile="selected" @close="closeModal" @delete="deleteUser"/>
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
                deleting: false,
                selected: {},
            }
        },
        methods: {
            ...mapActions({
                getProfiles: 'profiles/getProfiles',
                deleteProfile: 'profiles/deleteProfile'
            }),
            popup (profile) {
                console.log("logout", profile)
                this.deleting = true
                this.selected = profile
            },
            closeModal () {
                this.deleting = false;
            },
            deleteUser () {
                this.closeModal()
                this.deleteProfile(this.selected._id)
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
