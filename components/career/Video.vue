<script setup>
const videoPlay = ref(true);
const youtubeLink = inject("youtubeLink")
</script>


<template>
    <section class="py-10 lg:py-[100px]">
        <div class="custom-container">
            <div>
                <div class="h-[220px] md:h-[640px]">
                    <iframe width="100%" height="100%"
                        :src="youtubeLink+'?rel=0'"></iframe>
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