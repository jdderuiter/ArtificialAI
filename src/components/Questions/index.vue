<template>
    <div class="questions">
        <div>{{ questionsArray[currentQuestion] }}</div>
        <button v-on:click="nextQuestion">Volgende vraag</button>
    </div>
</template>

<script>
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
            }
        },
        methods: {
            nextQuestion() {
                this.currentQuestion >= 6
                    ? (this.currentQuestion = 0)
                    : this.currentQuestion++
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
