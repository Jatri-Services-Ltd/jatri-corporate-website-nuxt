<script setup>
const config = useRuntimeConfig();
const { data } = await useFetch(config.public.apiURL + '/api/v1/get-career-banners')

const bannerImages = data.value.data;
const chunkSize = Math.round(bannerImages.length / 2);
const slicedImages = [];

const chunkBannerImages = {
    firstSlider: data.value.data.slice(0, chunkSize),
    secondSlider: data.value.data.slice(chunkSize),
}
</script>

<template>
    <div class="marquee">
        <div class="marquee-content">
            <div class="marquee-item" v-for="slideImage in chunkBannerImages.firstSlider" :key="slideImage">
                <img :src="'https://sgp1.digitaloceanspaces.com/storage.jatri.co/' + slideImage" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.marquee {
    overflow: hidden;
}

.marquee-content {
    display: flex;
    animation: scrolling 3s linear infinite;
}

.marquee-item {
    flex: 0 0 604px;
    margin: 0 1vw;
    height: 300px;
}

.marquee-item:nth-child(2), 
.marquee-item:nth-child(6) {
   flex-basis: 286px;
}

.marquee-item:nth-child(3),
.marquee-item:nth-child(7) {
   flex-basis: 498px;
}

.marquee-item:nth-child(4),
.marquee-item:last-child {
   flex-basis: 392px;
}

.marquee-item img {
    display: block;
    width: 100%;
    height: 100%;
}

@keyframes scrolling {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translatex(-25vw);
    }
}
</style>