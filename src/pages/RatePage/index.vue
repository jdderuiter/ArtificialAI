<template>
    <div class="rate-page">
        <div><h1>{{questions[currentQuestion]}}</h1></div>
        <div class="row">
            <rating-answer
                    v-for="(profile, index) in selectedProfiles"
                    :image="profile.image"
                    :key="index"
                    :enoughAnswersGiven="enoughAnswersGiven"
                    :currentQuestion="currentQuestion"
                    @select="select(profile._id)"
                    @deselect="deselect(profile._id)"
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
            }),
            selectedProfiles() {
                if (this.currentQuestion != -1)
                return this.shuffelArray(this.profiles)
            }
        },

        data() {
            return {
                currentQuestion: 0,
                questions: [
                    'Wie is de uitbundigste?',
                    'Wie doet er geen opleiding?',
                    'Wie is het aggressiefst?',
                    'Wie danst het best?',
                    'Wie heeft de meeste bedpartners gehad?',
                    'Wie houdt het meest van popmuziek?',
                    'Wie is er single?',

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
            select(profileId) {
                this.selectedAnswers.push(profileId)
                console.log(this.selectedAnswers)
            },
            deselect(profileId) {
                const index = this.selectedAnswers.indexOf(profileId)
                if (index > -1) {
                    this.selectedAnswers.splice(index, 1);
                }
                console.log(this.selectedAnswers)
            },
            shuffelArray(array) {
                for(let i = array.length - 1; i > 0; i--){
                    const j = Math.floor(Math.random() * i)
                    const temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                }
                return array
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
