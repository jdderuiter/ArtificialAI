<template>
    <div class="camera-page">
        <camera />
        <div>
            <div id="question">{{questionsArray[question]}} </div>
            <div id="answer"> Antwoord op de vorige vraag is: {{answer}} </div>
        </div>
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
                    'AI kijkt naar je uurloon',
                    'AI kijkt naar je levensverwachting',
                ],
                isAnswered :false,
            }
        },
        computed: {
            ...mapGetters({
                question: 'questions/question',
                answer: 'questions/answer',
            })
        },
        methods: { 

        }
    }

</script>

<style lang="scss">
    $component: 'camera-page';

    .#{$component} {
        position: relative;
        text-align: center;

        #question {
            width: 100vw;
            height: 50px;
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 100;
            color: #f2f2f2; 
        }
        #answer {
            width: 100vw;
            height: 70px;
            position: relative;
            top: 10%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 100;
            color: #a3aeee; 
        }
    }
    

</style>
