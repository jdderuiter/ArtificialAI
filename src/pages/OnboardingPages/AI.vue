<template>
    <div class="onboarding-ai">
    <h1>Jij bent een AI</h1>
        <p>Tegenwoordig worden er veel conclusies gemaakt op basis van gezichtsherkenning door AI (Artificial Intelligence). Deze keuzes kunnen heel bizar en raar zijn.
            Vandaag neem jij de rol aan van AI en beoordeel je een persoon alsof je een AI bent.</p>
    <router-link class="nav-link" to="/watch">Beginnen</router-link>
    </div>
</template>

<script>
    export default {
        name: "OnboardingAi"
    }
</script>

<style lang="scss">
    $component: 'onboarding-ai';

    .#{$component} {
        //Styles go here
        text-align: center;
    }

</style>
