<template>
    <div>
        <CareerHeader />
        <div class="bg-[#F7F7F7] py-[76px] relative">
        <div class="flex justify-center items-center">
            <div class="slider pl-[26px]">
                <div class="slider-row"></div>
            </div>
            <h2 class="text-white absolute text-[57px] leading-[64px] font-medium">Life at Jatri</h2>
        </div>
    </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.slider {
  width: 100%;
  overflow: hidden;
  height: 500px;
}

.slider-row {
    height: 500px;
    background-repeat: no-repeat;
    background-image: url('/images/career/life-at-jatri.png');
    animation: slide 25s linear infinite;
  }

@keyframes slide {
  from { background-position-x: 0; }
  to   { background-position-x: -2200px; }
}
</style>