<template>
    <div class="camera">
        <video ref="video" class="camera__video" autoplay></video>

        <div class="camera__content">
            <div class="camera__content__frame"></div>
            <div class="camera__content__text">
                <h1>{{ text }}</h1>
                <!-- Use a button to pause/play the video with JavaScript -->
                <button id="snap" @click="capture()" type="button" class="btn btn-primary btn-lg">Neem foto</button>
            </div>
            
        </div>
        <canvas ref="canvas" class="camera__canvas" width="640" height="480"></canvas>
    </div>
</template>

<script>
    export default {
        name: 'Camera',
        data() {
            return {
                video: {},
                canvas: {},
                captures: [],
                text: "Neem een foto om toegang te krijgen!"
            }
        },
        mounted() {
            this.video = this.$refs.video;
            // Setup camera stream if camera exists
            if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                    this.video.srcObject = stream;
                    this.video.play();
                });
            }
        },
        methods: {
            capture () {
                // Save screenshot of camera feed to canvas & convert to img
                this.canvas = this.$refs.canvas;
                var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480);
                const img = this.canvas.toDataURL("image/png")

                //Save image to array of thumbnails
                this.captures.push(img);

                //Emit event to parent
                this.$emit('photo', img)

                this.text = "Bedankt!"
                this.video.pause()

                setTimeout(() => {
                    this.video.play()
                    this.text = "Neem een foto om toegang te krijgen!"
                }, 2000);
            }
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
        display: flex;
        align-items: center;
        justify-content: center;

        &__video {
            background-color: #000000;
            position: absolute;
            min-width: 100%;
            min-height: 100%;
            display: block;
        }

        &__content {
            text-align: center;
            z-index: 99;
            display: flex;
            flex-flow: column;
            align-items: center;

            &__text {
                margin-top: 1rem;
                font-weight: bold;
                button {
                    margin-top: 1rem;
                    background-color: $secondary-color;
                    border: 1px solid $secondary-color;
                    &:hover, &:focus {
                        background-color: darken($secondary-color, 10);
                        border: 1px solid darken($secondary-color, 10);
                    }
                }
            }

            &__frame {
                width: 40rem;
                border: 5px dashed $primary-color;
                height: 40rem;
                opacity: 0.5;
            }
            
        }

        &__canvas {
            display: none;
        }

        li {
            display: inline;
            padding: 5px;
        }
    }   

</style>
