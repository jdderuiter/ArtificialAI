<template>
    <div class="camera-page">
        <camera />
        <div id="question">{{questionsArray[question]}} // antwoord: {{answer}}</div>

    </div>
</template>

<script>
    import Camera from '@/components/Camera'
    import { mapGetters } from 'vuex';

    export default {
        name: 'CameraPage',
        components: {
            Camera
        },
        data() {
            return {
                questionsArray: [
                    'AI kijkt of je man of vrouw bent',
                    'AI kijkt hou oud je bent',
                    'AI kijk hoe blij je bent',
                    'AI kijkt hoe aantrekkelijk je bent',
                    'AI kijkt waar je vandaan komt',
                    'AI kijkt naar je maandelijkse inkomen',
                    'AI kijkt naar je levensverwachting',
                ],
            }
        },
        computed: {
            ...mapGetters({
                question: 'questions/question',
                answer: 'questions/answer',
            })
        },
        methods: {
        },
    }

</script>

<style lang="scss">
    $component: 'camera-page';

    .#{$component} {
        //Styles go here
        position: relative;
        text-align: center;

        #question {
            width: 100%;
            height: 50px;
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 100;
        }
    }

</style>
