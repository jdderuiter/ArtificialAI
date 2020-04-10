<template>
    <div class="rate-page">
        <div>{{questions[currentQuestion]}}</div>
        <div class="row">
            <rating-answer v-for="(profile, index) in profiles"  :image="profile.image" :key="index" />
        </div>
        <button type="button" class="btn btn-primary" :disabled="buttonDisabled" @click="nextQuestion">Primary</button>
    </div>
</template>

<script>

    import {mapActions, mapGetters} from "vuex";
    import RatingAnswer from '@/components/RatingAnswer'

    export default {
        name: "Rating",
        components: {
            RatingAnswer
        },
        computed: {
            ...mapGetters({
                profiles: 'profiles/list',
            })
        },

        data() {
            return {
                currentQuestion: 0,
                questions: [
                    'Wie vind je het mooist?',
                    'Wie houdt het meest van popmuziek?',
                    'Wie is er single?'
                ],
                buttonDisabled: false,
            }
        },

        watch: {
            currentQuestion: function () {
                if(this.currentQuestion === (this.questions.length - 1)) {
                    this.buttonDisabled = true
                }
            }
        },

        methods: {
            nextQuestion() {
                this.currentQuestion ++
            },
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
    $component: 'rate-page';

    .#{$component} {
        text-align: center;
    }

</style>
