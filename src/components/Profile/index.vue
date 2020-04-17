<template>
    <div class="profile shadow">
        <img :src="profile.image" alt="Profile image" @click="() => $emit('delete')" class="card-img img-home">
        <div class="conclusions">
            <p :key="conc" v-for="conc in profile.conclusions">{{ conc }}</p>
        </div>
        
    </div>
</template>

<script>

    export default {
        name: 'Profile',
        props: {
            profile :{
                type: Object,
                default: {}
            }
        }
    }
</script>

<style lang="scss">
   $component: 'profile';

    .#{$component} {
        height: 100%;
        
        .conclusions {
            padding: 0.5rem;
        }

        .img-container {
            height: 200px;
        }

        .img-home {
            height: 200px;
            -o-object-fit: cover;
            object-fit: cover;

        }
    }

</style>
