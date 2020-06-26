<template>
    <div class="camera-page">
        <div>
            <camera />
            <div id="question">{{questionsArray[question]}}</div>
            <div id="answer">Antwoord wordt berekend: {{answer}}</div>
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
            }),
        },

        watch: {
            question: function (val) {
                console.log(val)
                if(val >= 7) {
                    var elem = document.getElementsByTagName('canvas')[0]
                    elem.parentNode.removeChild(elem)
                    this.$router.push('profile')
                }

            }
        },
    }

</script>

<style lang="scss">
    $component: 'camera-page';

    .#{$component} {
        position: relative;
        text-align: center;

        #answer {
            width: 100%;
            height: 50px;
            position: absolute;
            top: 0%;
            left: 50%;
            transform: translate(-50%, -100%);
            z-index: 100;
        }

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
