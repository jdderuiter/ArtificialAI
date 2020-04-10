<template>
    <div>
        <div>{{questions[currentQuestion]}}</div>


        <button type="button" class="btn btn-primary" :disabled="buttonDisabled" @click="nextQuestion">Primary</button>

    </div>
</template>

<script>

    export default {
        name: "rating",

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
            }
        }
    }
</script>

<style scoped>

</style>
