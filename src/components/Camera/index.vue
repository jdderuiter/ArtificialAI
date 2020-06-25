<template>
    <div class="camera" ref="camera">
        <video ref="video" class="camera__video" autoplay="true"></video>
        <canvas ref="canvas" class="camera__canvas"></canvas>
    </div>
</template>

<script>
    import $socket from '@/socket-instance';
    import * as faceapi from 'face-api.js';

    const MODEL_URL = '/models'

    export default {
        name: 'Camera',
        data() {
            return {
                canvas: {},
                context: {},
                video: {},
            }
        },
        props: {
        },
        methods: {
            loadCamera (stream) {
                try {
                    this.video.srcObject = stream;
                } catch (error) {
                    this.video.src = URL.createObjectURL(stream);
                }
            },
            loadFail () {
                console.log("Camera not conected")
            },
            draw () {
                this.context.drawImage(this.video, 0, 0, this.context.width, this.context.height);
                $socket.emit('stream',this.canvas.toDataURL('image/webp'));
            },
            initAI () {
                console.log("load ai models")
                Promise.all([
                    faceapi.loadSsdMobilenetv1Model(MODEL_URL),
                    faceapi.loadFaceLandmarkModel(MODEL_URL),
                    faceapi.loadFaceRecognitionModel(MODEL_URL),
                ]).then(this.startVideo)

            },
            startVideo () {
                navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia );

                if(navigator.getUserMedia)
                {
                    navigator.getUserMedia({
                        video: true,
                        audio: false
                    },this.loadCamera,this.loadFail);
                }

                this.video.addEventListener('play', () => {
                    //create the canvas from video element as we have created above
                    const canvas = faceapi.createCanvasFromMedia(this.video);
                    canvas.style.position = "absolute";
                    canvas.style.top = "0";
                    canvas.style.left = "0";
                    canvas.style.height = "100vh";

                    //append canvas to body or the dom element where you want to append it
                    this.$refs.camera.append(canvas)

                    // displaySize will help us to match the dimension with video screen and accordingly it will draw our detections
                    // on the streaming video screen
                    const displaySize = { width: this.video.clientWidth, height: this.video.clientHeight }

                    faceapi.matchDimensions(canvas, displaySize)

                    setInterval(async () => {
                        const detections = await faceapi.detectAllFaces(this.video).withFaceLandmarks().withFaceDescriptors()
                        const resizedDetections = faceapi.resizeResults(detections, displaySize)
                        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
                        faceapi.draw.drawDetections(canvas, resizedDetections)
                        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
                    }, 100)
                })

                this.draw()

                setInterval(() => {
                    this.draw();
                },16);
            }
        },
        mounted () {
            this.canvas = this.$refs.canvas;
            this.context = this.canvas.getContext('2d');

            this.canvas.width = 900;
            this.canvas.height = 700;

            this.context.width = this.canvas.width;
            this.context.height = this.canvas.height;

            this.video = this.$refs.video;


            this.initAI()
        }
    }
</script>

<style lang="scss">
    $component: 'camera';

    .#{$component} {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;

        &__video {
            background-color: #000000;
            position: absolute;
            min-width: 100%;
            min-height: 100%;
            display: block;
            // transform: rotateY(180deg);
            // -webkit-transform:rotateY(180deg); /* Safari and Chrome */
            // -moz-transform:rotateY(180deg); /* Firefox */
        }

        &__canvas {
            display: none;
        }
    }

</style>
