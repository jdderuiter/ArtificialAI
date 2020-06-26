<template>
  <div class="slider">
    <div class="min">{{question.min}}</div>
    <vue-slider v-model="value"  :tooltip="'always'" min=0 max=100 v-bind:style="{ flex : 1, margin: '0 20px'  }" @change="$emit('change', value)"></vue-slider>
    <div class="max">{{question.max}}</div>
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
  props: {
    question:{
      type: Object
    } 
  },

  data: function () {
    return {
      value: 0,
    }
  }
}
</script>

<style lang="scss">
  $component: 'slider';

    .#{$component} {
      color: #ffffff;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: center;
    }
    
</style>