<template>
<div class="col-3 answer py-3 img-container">
    <div class="selected"/>
    <img :src="image" alt="Card image cap" class="card-img img-home">
    <button class="btn btn-outline-primary selected" @click="() => $emit('select')">deze</button>
</div>

</template>

<script>
    export default {
        name: "RatingAnswer",
        props: {
            image: {
                type: String,
                default: '',
            }
        },

        data() {
            return {
                render: null,
            }
        },
    }
</script>

<style lang="scss">
    $component: 'answer';

    .#{$component} {
        .img-container {
            height: 200px;
        }

        .img-home {
            height: 200px;
            -o-object-fit: cover;
            object-fit: cover;
        }

        .selected {
            position: absolute;
            width: 60%;
            top: 75%;
            left: 20%;
            background-color: rgba(255,255,255,0.5);
        }
    }
</style>
