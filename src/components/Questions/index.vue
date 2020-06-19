<template>
    <div class="questions">
        <div>{{ questionsArray[currentQuestion] }}</div>
        <button v-on:click="nextQuestion">Volgende vraag</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'Questions',
        data() {
            return {
                questionsArray: [
                    'Is deze persoon man of vrouw?',
                    'Hoe oud is deze persoon?',
                    'Is deze persoon blij?',
                    'Hoe aantrekkelijk is deze persoon?',
                    'Is deze persoon Nederlander?',
                    'Wat is het maandelijks inkomen van deze persoon?',
                    'Wat is de levensverwachting van deze persoon?',
                ],
                currentQuestion: 0,
                answer: 0,
            }
        },
        mounted() {
            this.setQuestion(0);
        },
        methods: {
            ...mapActions({
                setQuestion: 'questions/setQuestion',
                setAnswer: 'questions/setAnswer',
            }),

            nextQuestion() {
                // TODO: add slider and set this.answer as its value, pass this.answer with this.setAnswer instead of the random number.
                this.setAnswer((Math.random() * 100).toFixed())
                this.currentQuestion >= 6
                    ? (this.currentQuestion = 0)
                    : this.currentQuestion++
                this.setQuestion(this.currentQuestion);
            },
        },
    }
</script>

<style lang="scss">
    $component: 'questions';

    .#{$component} {
        //Styles go here
    }
</style>
