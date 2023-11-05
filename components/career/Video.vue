<script setup>
const videoPlay = ref(true);
</script>


<template>
    <section class="py-10 lg:py-[100px]">
        <div class="custom-container">
            <div>
                <div v-if="videoPlay" @click="videoPlay = !videoPlay">
                    <img src="/images/career/career-video-poster.png" alt="Video poster" class="w-full cursor-pointer" />
                </div>

                <div v-else class="h-[220px] md:h-[640px]">
                    <iframe width="100%" height="100%"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"></iframe>
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