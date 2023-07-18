<template>
    <header class="blog-header-bg h-[124px] sm:h-[220px] w-full flex items-center">
        <div class="custom-container mx-auto text-white">
            <h1 class="text-[28px] md:text-[57px] leading-9 md:leading-[64px] font-medium mb:font-semibold mb-2">Jatri Blog</h1>
            <p class="text-sm md:text-base">Our articles, and our most recent updates. Find out everything there is to know about us.</p>
        </div>
    </header>
    <BlogHeroSection />
</template>

<script setup>

</script>

<style scoped>
.blog-header-bg{
    background-image: url('/images/blog/blog-header-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}
</style>