<script setup>
const videoPlay = ref(true);
const youtubeLink = inject("youtubeLink")
</script>


<template>
    <section class="py-10 lg:py-[100px]">
        <div class="custom-container">
            <div>
                <div v-if="videoPlay" class="relative">
                    <img src="/images/career/career-video-poster.png" alt="Video poster" class="hidden md:block w-full cursor-pointer" />
                    <img src="/images/career/career-video-poster-small.png" alt="Video poster" class="block md:hidden w-full cursor-pointer" />
                    <div @click="videoPlay = !videoPlay" class="w-14 lg:w-24 h-14 lg:h-24 rounded-full bg-white grid place-content-center cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <img src="/images/career/play-icon.png" alt="Play icon" class="w-4 h-5 lg:w-auto lg:h-auto" />
                    </div>
                </div>

                <div v-else class="h-[220px] md:h-[640px]">
                    <iframe width="100%" height="100%"
                        :src="youtubeLink" allow="autoplay"></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
iframe {
    @apply rounded-2xl md:rounded-[32px]
}
</style>