<template>
    <div class="profile-modal">
        <div class="profile-modal__backdrop"></div>
        <div class="profile-modal__text p-3">
            <h2>{{ text }}</h2>
            <div class="row">
                <div class="col-4 answer py-3">
                    <img :src="profile.image" alt="Card image cap" class="card-img img-home shadow-sm">
                </div>
            </div>
           <div class="row">
               <div class="col-6"></div>
               <div class="col-6"></div>
           </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ProfileModal',
        props: {
            profile :{
                type: Object,
                default: {}
            },
            text: {
                type: String,
                default: "Weet je zeker dat je het feest wilt verlaten?"
            }
        }
    }
</script>

<style lang="scss">
    $component: 'profile-modal';

    .#{$component} {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &__backdrop{
            background-color: #000000b3;
            position: absolute;
            min-width: 100%;
            min-height: 100%;
            display: block;
        }

        &__text {
            text-align: center;
            z-index: 99;
            display: flex;
            flex-flow: column;
            align-items: center;
            background-color: #ffffff;
            min-width: 20rem;
            min-height: 20rem;

            .row {
                justify-content: center
            }
        }

        .img-home {
            height: 200px;
            -o-object-fit: cover;
            object-fit: cover;
            box-shadow: none !important;

            &:hover{
                box-shadow: none !important;
            }
        }
    }

</style>
