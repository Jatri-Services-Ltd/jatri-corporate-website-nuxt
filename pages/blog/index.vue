<script setup>
import blogData from "~/dataStore/blog.js";

useAsyncData(() => {
  return blogData;
})
</script>


<template>
  <!-- Banner Start -->
  <section class="relative">
    <div class="blog_bg h-36 md:h-80"></div>
  </section>
  <!-- Banner End -->

  <!-- Card Section Start -->
  <section class="px-5 sm:px-10 2xl:container 2xl:mx-auto">
    <div data-aos="zoom-in">
      <div class="flex flex-col justify-center items-center gap-3 my-10">
        <h1 class="corporate_color text-3xl md:text-5xl uppercase heading_text">
          Featured articles
        </h1>
        <p class="text-black body_text text-sm md:text-lg body_text">
          Here’s a sneak peek at the latest happenings in Jatri
        </p>
      </div>
    </div>
    <div class="card_bg py-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- TASK START -->
        <div v-for="blog in blogData" :key="blog.title" data-aos="fade-up">
          <div class="
        bg-white
        md:bg-transparent
        shadow
        md:shadow-none
        mx-auto
        mb-5
        h-full
        rounded-lg
      ">
            <img class="rounded-t-lg" :src="blog.titleImage" alt="" />
            <div class="pt-2 px-2 md:px-0">
              <h1 class="
            corporate_color
            mt-2
            font-bold
            text-2xl
            tracking-tight
            subheading_text
          ">
                {{blog.title}}
              </h1>
              <p class="
            py-3
            text-gray-700 text-justify text-sm
            leading-6
            body_text
          ">
                <span v-html="blog.smallDescription"></span>

              </p>
            </div>
            <div class="flex justify-between items-center mt-3 px-2 md:px-0 py-3">
              <div class="flex justify-between gap-1">
                <div class="
              text-white
              corporate_bg_color
              flex
              justify-center
              items-center
              h-8
              w-8
              rounded-full
            ">
                  <i class="fa fa-user"></i>
                </div>
                <div class="flex flex-col justify-between">
                  <p class="text-sm">{{blog.createdBy}}</p>
                  <p class="text-xs text-gray-400">{{blog.createdDateTime}}</p>
                </div>
              </div>
              <nuxt-link :to="'blog/'+blog.slug" class="
            text-white
            corporate_bg_color
            rounded-md
            px-5
            py-3
            text-sm
          ">Read more</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!----- Body End ----->
</template>