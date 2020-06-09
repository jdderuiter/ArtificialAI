<template>
    <div class="test">
        <video ref="video" src="" id="video" style="width:100%; height: 100%;" autoplay="true"></video>
        <br>
        <canvas ref="canvas" style="display:none;" id="preview"></canvas>
        <div id="log">{{ log }}</div>
    </div>
</template>

<script>
    import $socket from '@/socket-instance';

    export default {
        name: 'TestPage',
        components: {
            
        },
        data() {
            return {
                log: '',
                canvas: {},
                context: {},
                video: {},
            }
        },
        methods: {
            loadCamera (stream) {
                try {
                    this.video.srcObject = stream;
                } catch (error) {
                    this.video.src = URL.createObjectURL(stream);
                }

                this.log = "Camera connected";
            },
            loadFail () {
                this.log = "Camera not connected"
            },
            draw () {
                this.context.drawImage(this.video, 0, 0, this.context.width, this.context.height);
                $socket.emit('stream',this.canvas.toDataURL('image/webp'));
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

            navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia );
            
            if(navigator.getUserMedia)
            {
                navigator.getUserMedia({
                    video: true, 
                    audio: false
                },this.loadCamera,this.loadFail);
            }

            this.draw()
    
            setInterval(() => {
                this.draw();
            },16);
        }

    }
</script>

<style lang="scss">
    $component: 'test';

    .#{$component} {
        //Styles go here

    }

</style>
