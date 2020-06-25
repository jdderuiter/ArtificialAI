<template>
  <div class="slider">
    <vue-slider v-model="value"></vue-slider>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: 'Slider',
  components:{
    VueSlider
  },
  data: function () {
    return {
      value: 0
    }
  }
}
</script>

<style lang="scss">
  $component: 'slider';

    .#{$component} {
      color: #ffffff;
    }
    
</style>