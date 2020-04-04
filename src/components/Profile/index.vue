<template>
    <div class="profile">
        <img :src="image" alt="Profile image">
    </div>
</template>

<script>

    export default {
        name: 'Profile',
        props: {
            image :{
                type: String,
                default: ''
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
