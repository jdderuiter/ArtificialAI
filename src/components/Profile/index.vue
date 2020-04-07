<template>
    <div class="profile">
        <img :src="profile.image" alt="Profile image">
        <div>{{profile._id}}</div>
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
