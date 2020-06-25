<template>
    <div class="questions">
        <div>{{ questionsArray[currentQuestion].question }}</div>
        <Slider ref="slider" />
        <button v-on:click="nextQuestion">Volgende vraag</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import Slider from '@/components/Slider';

    export default {
        name: 'Questions',
        components: {
            Slider
        },
        data() {
            return {
                questionsArray: [
                    {
                        question: 'Is deze persoon man of vrouw?',
                        min: 'man',
                        max: 'vrouw'
                    },
                    {
                        question: 'Hoe oud is deze persoon?',
                        min: 0,
                        max: 100
                    },
                    {
                        question: 'Is deze persoon blij?',
                        min:'verdietig',
                        max: 'blij'
                    },
                    {
                        question: 'Hoe aantrekkelijk is deze persoon?',
                        min: 0,
                        max: 100
                    },
                    {
                        question: 'Is deze persoon Nederlander?',
                        min: 'ja',
                        max: 'nee',
                    },
                    {
                        question: 'Wat is het maandelijks inkomen van deze persoon?',
                        min: 0,
                        max: 10000,
                    },
                    {
                        question: 'Wat is de levensverwachting van deze persoon?',
                        min: 0 ,
                        max: 100
                    },

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
                this.setAnswer(this.$refs.slider.$data.value)
                this.currentQuestion++
                this.setQuestion(this.currentQuestion);
                console.log(this.currentQuestion)
                this.currentQuestion >= 7 && this.$router.push('profile')
            },
        },
    }
</script>

<style lang="scss">
    $component: 'questions';

    .#{$component} {
        color: #f2f2f2;
    }
</style>
