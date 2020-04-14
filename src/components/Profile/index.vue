<template>
    <div class="profile">
        <img :src="profile.image" alt="Profile image" @click="() => $emit('delete')">
        <div>{{profile._id}}</div>
        <ul>
            <li :key="conc" v-for="conc in profile.conclusions">{{ conc }}</li>
        </ul>
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
        //Styles go here
    }

</style>
