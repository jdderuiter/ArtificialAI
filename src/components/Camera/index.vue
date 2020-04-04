<template>
    <div class="camera">
        <div>
            <video ref="video" class="camera__video" width="640" height="480" autoplay></video>
        </div>
        <div>
            <button id="snap" v-on:click="capture()">Snap Photo</button>
        </div>
        <canvas ref="canvas" class="camera__canvas" width="640" height="480"></canvas>
        <ul>
            <li v-for="c in captures" :key="c">
                <img v-bind:src="c" height="50" />
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

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
            if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                    this.video.srcObject = stream;
                    this.video.play();
                });
            }
        },
        methods: {
            ...mapActions({
                saveImage: 'profiles/saveImage',
            }),
            capture () {
                this.canvas = this.$refs.canvas;
                var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480);
                const img = this.canvas.toDataURL("image/png")
                this.captures.push(img);
                this.saveImage(img)
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
