<script setup>
import careerData from "~/dataStore/career.js";

useAsyncData(() => {
  return careerData;
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

        <!-- Position Section Start -->
        <div class="my-8">
          <!-- Single Post -->
          <!-- Software Engineer (Laravel) -->
          <div v-for="careerList in careerData" :key="careerList.title" data-aos="fade-up">
            <div
                class="career_card flex flex-wrap justify-between items-start align-top p-5 my-8"
            >
              <div class="w-1/2 md:w-1/6 p-4 career_img_wrapper">
                <img
                    class="w-40 rounded-md"
                    :src="careerList.iconPath"
                    alt=""
                />
              </div>

              <div
                  class="w-1/2 md:w-1/6 p-4 flex flex-col justify-start gap-2"
              >
                <p class="corporate_color subheading_text">
                  {{ careerList.title }}
                </p>
                <div class="rating">
                  <ul class="rate-area">
                    <input
                        type="radio"
                        id="5-star"
                        name="crating"
                        value="5"
                    />
                    <label for="5-star" title="Amazing">5 stars</label>

                    <input
                        type="radio"
                        id="4-star"
                        name="crating"
                        value="4"
                    />
                    <label for="4-star" title="Good">4 stars</label>

                    <input
                        type="radio"
                        id="3-star"
                        name="crating"
                        value="3"
                    />
                    <label for="3-star" title="Average">3 stars</label>

                    <input
                        type="radio"
                        id="2-star"
                        name="crating"
                        value="2"
                    />
                    <label for="2-star" title="Not Good">2 stars</label>

                    <input
                        type="radio"
                        id="1-star"
                        required=""
                        name="crating"
                        value="1"
                        aria-required="true"
                    />
                    <label for="1-star" title="Bad">1 star</label>
                  </ul>
                </div>
              </div>

              <div
                  class="w-full md:w-3/6 p-4 flex flex-col justify-start gap-2"
              >
                <div v-html="careerList.short_description"></div>

                <nuxt-link
                    class="bg-corporate text-white text-sm text-center p-1 rounded-md w-24"
                    :to="'career/'+careerList.slug"
                >View More</nuxt-link
                >
              </div>

              <div
                  class="w-full md:w-1/6 p-4 flex flex-col justify-end items-end gap-2"
              >
                <p class="corporate_color">Salary : BDT {{careerList.salary}} </p>
                <p class="text-gray-400">{{careerList.employment_type}}</p>
              </div>
            </div>
          </div>

          <!-- <div class="flex justify-center items-center align-middle h-40">
            <p class="text-gray-500">No vacancies available right now.</p>
          </div> -->
        </div>
        <!-- Position Section End -->
      </div>
    </div>
  </section>
</template>