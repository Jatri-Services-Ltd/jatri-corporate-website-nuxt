<template>
    <div class="custom-container mx-auto pb-[120px]">
        <div class="border-b border-lightGrey">
            <h3 class="text-[28px] leading-9 font-medium inline-block recent-articles relative">Recent articles</h3>
        </div>
        <template v-if="recentArticle.length > 0">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mt-7 md:mt-8">
                <div v-for="article in recentArticle" :key="article.id">
                    <img :src="article.img" alt="" class="w-full mb-4 md:mb-6">
                    <nuxt-link to="#" class="text-base md:text-2xl font-medium">{{ article.title }}</nuxt-link>
                    <div class="flex items-center mt-2">
                        <p class="text-[#676769] text-sm md:text-base">{{ article.author }}</p>
                        <span class="inline-block mx-0 md:mx-1 text-[#676769] text-sm md:text-base">/</span>
                        <p class="text-[#676769] text-sm md:text-base">{{ article.createdAt }}</p>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
const blogData = [
    {
        id: 1,
        img: '/images/blog/recent-blog-1.jpg',
        title: 'Rediscovering the beauty of Bangladesh: A one day trip',
        author: 'Author name',
        createdAt: '12 Feb 2023'
    },
    {
        id: 2,
        img: '/images/blog/recent-blog-2.jpg',
        title: 'Rediscovering the beauty of Bangladesh: A one day trip',
        author: 'Author name',
        createdAt: '12 Feb 2023'
    },
    {
        id: 3,
        img: '/images/blog/recent-blog-3.jpg',
        title: 'Rediscovering the beauty of Bangladesh: A one day trip',
        author: 'Author name',
        createdAt: '12 Feb 2023'
    },
    {
        id: 4,
        img: '/images/blog/recent-blog-4.jpg',
        title: 'Rediscovering the beauty of Bangladesh: A one day trip',
        author: 'Author name',
        createdAt: '12 Feb 2023'
    },
    {
        id: 5,
        img: '/images/blog/recent-blog-5.jpg',
        title: 'Rediscovering the beauty of Bangladesh: A one day trip',
        author: 'Author name',
        createdAt: '12 Feb 2023'
    },
    {
        id: 6,
        img: '/images/blog/recent-blog-6.jpg',
        title: 'Rediscovering the beauty of Bangladesh: A one day trip',
        author: 'Author name',
        createdAt: '12 Feb 2023'
    },
    {
        id: 7,
        img: '/images/blog/recent-blog-7.jpg',
        title: 'Rediscovering the beauty of Bangladesh: A one day trip',
        author: 'Author name',
        createdAt: '12 Feb 2023'
    },
    {
        id: 8,
        img: '/images/blog/recent-blog-8.jpg',
        title: 'Rediscovering the beauty of Bangladesh: A one day trip',
        author: 'Author name',
        createdAt: '12 Feb 2023'
    },
    {
        id: 9,
        img: '/images/blog/recent-blog-9.jpg',
        title: 'Rediscovering the beauty of Bangladesh: A one day trip',
        author: 'Author name',
        createdAt: '12 Feb 2023'
    },
]

const recentArticle = ref([])

onMounted(() => {
    recentArticle.value = blogData
})
</script>

<style scoped>
.recent-articles::before{
    content: "";
    position: absolute;
    height: 3px;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: black;
}
</style>