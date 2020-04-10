<template>
    <div class="camera">
        <div>
            <video ref="video" class="camera__video" width="640" height="480" autoplay></video>
        </div>
        <div>
            <button id="snap" @click="capture()" type="button" class="btn btn-secondary btn-lg">Snap Photo</button>
        </div>
        <canvas ref="canvas" class="camera__canvas" width="640" height="480"></canvas>
        <ul>
            <li v-for="c in captures" :key="c">
                <img :src="c" height="50" />
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Camera',
        data() {
            return {
                video: {},
                canvas: {},
                captures: []
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
            }
        }
    }
</script>

<style lang="scss">
    $component: 'camera';

    .#{$component} {
        text-align: center;
        color: #2c3e50;

        &__video {
            background-color: #000000;
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
