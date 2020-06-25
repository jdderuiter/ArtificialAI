<template>
    <div class="profiles">
        <h1>Profiel</h1>
        <!-- Loop trough profiles currently in the store -->
        <div>
            AI vond je {{allAnswers[0]}} procent man
        </div>
        <div>
            AI vond je {{allAnswers[1]}} jaar oud
        </div>
         <div>
            AI vond je {{allAnswers[2]}} procent blij
        </div>
         <div>
            AI vond je {{allAnswers[3]}} procent aantrekkelijk
        </div>
         <div>
            AI vond je {{allAnswers[4]}} procent Nederlander
        </div>
         <div>
            AI schat je uurloon op {{allAnswers[5]}} euro
        </div>
         <div>
            AI denkt dat je {{allAnswers[6]}} jaar oud wordt
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
                allAnswers: 'questions/allAnswers',
            })
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
