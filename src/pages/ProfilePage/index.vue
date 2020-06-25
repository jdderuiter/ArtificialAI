<template>
    <div class="profiles">
        <h1>Jouw profiel</h1>
        <!-- Loop trough profiles currently in the store -->
        <ul class="list-group-flush">
            <li class="list-group-item">
            AI vond je {{allAnswers[0]}} procent man
            </li>
            <li class="list-group-item">
                AI vond je {{allAnswers[1]}} jaar oud
            </li>
            <li class="list-group-item">
                AI vond je {{allAnswers[2]}} procent blij
            </li>
            <li class="list-group-item">
                AI vond je {{allAnswers[3]}} procent aantrekkelijk
            </li>
            <li class="list-group-item">
                AI vond je {{allAnswers[4]}} procent Nederlander
            </li>
            <li class="list-group-item">
                AI schat je uurloon op {{allAnswers[5]}} euro
            </li>
            <li class="list-group-item">
                AI denkt dat je {{allAnswers[6]}} jaar oud wordt
            </li>
        </ul>
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
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-radius: 10px;
        padding: 20px;
        border: #6c757d42 2px solid;
    
        h1 {
            text-align: center;
        }
    }

</style>
