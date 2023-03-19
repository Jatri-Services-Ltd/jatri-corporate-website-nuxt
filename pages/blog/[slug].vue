<script setup>
import blogData1 from "~/dataStore/blog.js";
const router = useRoute()
//router.params.slug


const blog = ref({})
onMounted(() => {
  blog.value = blogData1.find(b => b.slug === router.params.slug)
})

const generateImg = (titleImage) => {
  return new URL(`../../assets/images/${titleImage}`, import.meta.url).href;
}

useHead({
  title: 'Jatri | Blog',
  meta: [
    {
      name: 'description', 
      content: 'Get a sneak peek at the latest happenings in Jatri. Check out all the latest stories and insights on our pioneering technology revolutionizing Bangladeshi public transport.'
    },
  ]
});
</script>

<template>

  <!-- Banner Start -->
  <section class="relative">
    <div class="blog_description_bg h-36 md:h-80"></div>
  </section>
  <!-- Banner End -->

  <!-- Card Section Start -->
  <section>
    <div class="py-10">
      <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto">

        <div class="bg-transparent">

          <div class="">
            <div data-aos="zoom-in">
              <img class="rounded-t-lg" :src="generateImg(blog.titleImage)" alt="" />
            </div>
          </div>


        </div>

          <div v-html="blog.description"></div>

        <div class="mt-5">
          <div class="flex justify-between items-center">
            <div class="flex justify-between gap-1">
              <div class="text-white corporate_bg_color flex justify-center items-center h-8 w-8 rounded-full">
                <i class="fa fa-user"></i>
              </div>
              <div class="flex flex-col justify-between">
                <p class="text-sm body_text font-semibold">{{blog.createdBy}}</p>
                <p class="text-xs text-gray-400 body_text">{{blog.createdDateTime}}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>



</template>