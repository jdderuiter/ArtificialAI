<template>
<div class="col-3 answer py-3 img-container">
    <div class="selected"/>
    <img :src="image" alt="Card image cap" class="card-img img-home">
    <button v-bind:class="{selected: isSelected}" :disabled="disabled" class="btn btn-outline-primary" @click="toggleSelection">
        deze
    </button>
</div>

</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "RatingAnswer",
        props: {
            image: {
                type: String,
                default: '',
            },
            enoughAnswersGiven: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                render: null,
                isSelected: false,
                disabled: false
            }
        },

        methods: {
            toggleSelection() {
                this.isSelected ? this.$emit('deselect') : this.$emit('select')

                this.isSelected = !this.isSelected

            }
        },

        watch: {
            enoughAnswersGiven: function () {
                if(this.enoughAnswersGiven && !this.isSelected) {
                    this.disabled = true
                } else {
                    this.disabled = false
                }
            }
        }
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

        .btn {
            position: absolute;
            width: 60%;
            top: 75%;
            left: 20%;
            background-color: rgb(255,255,255);
        }
        .selected {
            background-color: #2461fe;
            color: white;
        }
    }
</style>
