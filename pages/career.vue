import WhiteNavbar from '~~/components/app/WhiteNavbar.vue';
<script setup>
useServerSeoMeta({
  title: 'Jatri | Career',
  description: 'Jatri office is full of fast-paced problem-solvers intent on driving change in transport. As a member of our organization, you will be a part of a wonderful environment of learning and creativity',
})
</script>

<template>
    <section class="relative">
      <div class="career_page_bg h-full py-16 md:py-24">
        <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto">
          <!-- Banner Section Start -->
          <div class="flex justify-between align-middle items-center">
            <div class="banner_text w-1/2 uppercase corporate_color">
              <div data-aos="fade-up">
                <h4
                  class="text-3xl sm:text-3xl md:text-5xl xl:text-6xl font-light subheading_text tracking-wide"
                >
                  Join
                </h4>
                <h5
                  class="text-xl sm:text-2xl xl:text-5xl font-light subheading_text tracking-wide"
                >
                  The Winning
                </h5>
                <h1
                  class="text-5xl sm:text-6xl xl:text-9xl font-light heading_text tracking-wide"
                >
                  Team
                </h1>
              </div>
            </div>
            <div class="banner_side_img w-1/2 flex justify-center items-center">
              <div data-aos="zoom-in">
                <img
                  class="w-48 lg:w-96"
                  src="~/assets/images/banner/career-banner-side-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!-- Banner Section End -->

          <!-- Filter Section Start -->
          <div class="flex justify-between align-middle items-center my-8">
            <div data-aos="fade-up">
              <h1
                class="uppercase w-full text-xl lg:text-3xl corporate_color_dark heading_text"
              >
                job Openings
              </h1>
            </div>

            <div data-aos="fade-up">
              <div class="w-full flex flex-wrap justify-end">
                <div class="w-full flex flex-wrap pr-0">
                  <div class="relative w-full border-none">
                    <select
                      class="bg-gray-100 appearance-none border-none outline-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full"
                    >
                      <option value="Latest" class="pt-6">Latest</option>
                      <option value="Last 15 Days">Last 15 Days</option>
                      <option value="Last 20 Days">Last 20 Days</option>
                      <option value="Last Month">Last Month</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2"
                    >
                      <i class="fas fa-chevron-down corporate_color"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Filter Section End -->
