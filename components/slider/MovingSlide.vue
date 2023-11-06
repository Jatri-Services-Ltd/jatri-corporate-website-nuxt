<script setup>
import { ref } from 'vue';

const props = defineProps({
  barStyle: Object,
  duration: {
    type: String,
    default: '30s',
  },
  direction: {
    type: String,
    default: 'normal',
  },
  delay: {
    type: String,
    default: '0s',
  },
  paused: {
    type: Boolean,
    default: false,
  },
});

const customStyle = ref({
  ...props.barStyle,
  'animation-duration': props.duration,
  'animation-direction': props.direction,
  'animation-delay': props.delay,
  'animation-play-state': props.paused ? 'paused' : 'running',
});
</script>

<template>
  <div class="moving-slide-container">
    <div class="moving-slide-element" :style="customStyle">
      <div class="moving-slide-bar">
        <slot></slot>
      </div>
      <div class="moving-slide-bar ml-4 md:ml-8">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes moveSlideshow {
  100% {
    transform: translateX(-50%);
  }
}

.moving-slide-container {
  @apply w-full overflow-hidden
}

.moving-slide-element {
  @apply relative flex min-w-fit overflow-hidden animate-[moveSlideshow_linear_infinite]
}

.moving-slide-element {
  transform: translate3d(0, 0, 0);
}

.moving-slide_bar {
  @apply w-1/2
}
</style>