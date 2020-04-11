<template>
    <div class="rate-page">
        <div>{{questions[currentQuestion]}}</div>
        <div class="row">
            <rating-answer
                    v-for="(profile, index) in profiles"
                    :image="profile.image"
                    :key="index"
                    @select="select(profile._id)"
            />
        </div>

        <button type="button" class="btn btn-secondary btn-lg" :disabled="(!enoughAnswersGiven || buttonDisabled)" @click="nextQuestion">Next Question</button>
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
                enoughAnswersGiven: false,
                buttonDisabled: false,
                selectedAnswers: []
            }
        },

        watch: {
            currentQuestion: function () {
                if(this.currentQuestion === (this.questions.length)) {
                    this.buttonDisabled = true
                }
            },
            selectedAnswers: function () {
                if(this.selectedAnswers.length === 3) {
                    this.enoughAnswersGiven = true
                } else {
                    this.enoughAnswersGiven = false
                }
            }
        },

        methods: {
            nextQuestion() {
                this.currentQuestion ++
                this.selectedAnswers = []
            },
            select(index) {
                console.log(index)
                this.selectedAnswers.push(index)
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
