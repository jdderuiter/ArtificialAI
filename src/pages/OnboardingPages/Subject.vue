<template>
    <div class="onboarding-subject">
        <h1>Laat je beoordelen door een AI</h1>
        <p>Tegenwoordig worden er veel conclusies gemaakt op basis van gezichtsherkenning door AI (Artificial Intelligence). Deze keuzes kunnen heel bizar en raar zijn.
            Vandaag krijg je te zien wat voor profiel een AI over jou zou maken.</p>
        <router-link class="nav-link" to="/camera">Beginnen</router-link>
    </div>
</template>

<script>
    export default {
        name: "OnboardingSubject"
    }
</script>

<style lang="scss">
    $component: 'onboarding-subject';

    .#{$component} {
        //Styles go here
        text-align: center;
    }

</style>
