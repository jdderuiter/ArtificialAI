<template>
    <div class="col-3 answer py-3">
        <img :src="image" alt="Card image cap" class="card-img img-home shadow-sm">
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
        .img-home {
            height: 200px;
            -o-object-fit: cover;
            object-fit: cover;

            &:hover, &:focus {
                box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important
            }
        }
    }
</style>
