<script setup>
import careerData1 from "~/dataStore/career.js";
const router = useRoute()
//router.params.slug


const career = ref({})
onMounted(() => {
  career.value = careerData1.find(b => b.slug === router.params.slug)
})

const generateImg = (iconPath) => {
  return new URL(`../../../assets/images/${iconPath}`, import.meta.url).href;
}

useHead({
  title: 'Jatri | Career',
  meta: [
    {
      name: 'description', 
      content: 'Jatri office is full of fast-paced problem-solvers intent on driving change in transport. As a member of our organization, you will be a part of a wonderful environment of learning and creativity.'
    },
  ]
});
</script>

  <template>
    <section class="relative">
      <div class="career_page_bg h-full py-24">
        <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto">

          <!-- Banner Section Start -->
          <div class="flex justify-between align-middle items-center">
            <div class="banner_text w-1/2 uppercase corporate_color">
              <div data-aos="fade-up">
                <h4 class="text-3xl sm:text-3xl md:text-5xl xl:text-6xl font-light subheading_text tracking-wide">Join</h4>
                <h5 class="text-xl sm:text-2xl xl:text-5xl font-light subheading_text tracking-wide">The Winning</h5>
                <h1 class="text-5xl sm:text-6xl xl:text-9xl font-light heading_text tracking-wide">Team</h1>
              </div>
            </div>
            <div class="banner_side_img w-1/2 flex justify-center items-center">
              <div data-aos="zoom-in">
                <img class="w-48 lg:w-96" src="~/assets/images/banner/career-banner-side-img.png" alt="">
              </div>
            </div>
          </div>
          <!-- Banner Section End -->

          <!-- Heading Section Start -->
          <div class="my-8">
            <div data-aos="fade-up">
              <h1 class="uppercase w-full text-xl lg:text-3xl corporate_color_dark heading_text">job Openings</h1>
            </div>
          </div>
          <!-- Heading Section End -->

          <!-- Description Section Start -->
          <div class="my-8">
            <div class="bg-gray-100 rounded-sm shadow p-3 md:p-5">

              <div class="flex flex-wrap justify-between items-start align-top ">
                <!-- Banner -->
                <div class="w-full md:w-1/4 p-1 md:p-4">
                  <div data-aos="zoom-in">
                    <img class="w-full md:w-60 rounded-md" :src="generateImg(career.iconPath)" alt="">
                  </div>
                </div>

                <!-- Designation -->
                <div class="w-full md:w-2/4 p-1 md:p-4 flex flex-wrap md:flex-col justify-start xl:gap-1">

                  <p class="w-full corporate_color text-xl sm:text-xl md:text-3xl xl:text-5xl font-extrabold subheading_text">{{career.title}}</p>

                  <div class="w-1/2 md:w-full mt-4 md:mt-0">
                    <!-- <p class="text-gray-400 text-sm md:text-2xl body_text">Operations</p> -->
                    <div class="rating">
                      <ul class="rate-area">
                        <input type="radio" id="5-star" name="crating" value="5">
                        <label for="5-star" title="Amazing">5 stars</label>

                        <input type="radio" id="4-star" name="crating" value="4">
                        <label for="4-star" title="Good">4 stars</label>

                        <input type="radio" id="3-star" name="crating" value="3">
                        <label for="3-star" title="Average">3 stars</label>

                        <input type="radio" id="2-star" name="crating" value="2">
                        <label for="2-star" title="Not Good">2 stars</label>

                        <input type="radio" id="1-star" required="" name="crating" value="1" aria-required="true">
                        <label for="1-star" title="Bad">1 star</label>
                      </ul>
                    </div>
                  </div>

                  <div class="leading-3 w-1/2 md:w-full mt-4">
                    <p class="text-xs md:text-sm font-semibold body_text corporate_color">Application Deadline</p>
                    <p class="text-sm text-gray-400 body_text" v-html="career.deadline"></p>
                  </div>

                </div>

                <!-- Estimate Time -->
                <div class="w-full md:w-1/4  p-2 md:p-4 flex flex-col justify-end items-end gap-2">
                  <!-- <p class="corporate_color">13 Days left</p> -->
                </div>
              </div>

              <!-- Description -->
              <div class="w-full mt-2" v-html="career.description">


              </div>

              <!-- About -->
              <div class="flex flex-wrap justify-between align-middle items-center mt-10">

                <div class="w-1/3 md:w-1/6 flex flex-col justify-start gap-1">
                  <p class="text-lg md:text-2xl corporate_color body_text font-semibold"> Salary Range</p>

                  <div class="leading-3">
                    <p class="text-xs md:text-sm corporate_color body_text">BDT {{career.salary}} </p>
                    <!-- <p class="text-xs md:text text-gray-400 body_text">Full Time</p> -->
                  </div>
                </div>

                <div class="w-1/3 md:w-1/6 flex flex-col justify-start gap-1">
                  <p class="text-lg md:text-2xl corporate_color body_text font-semibold"> Job Nature</p>

                  <div class="leading-3">
                    <p class="text-xs md:text corporate_color body_text">{{career.employment_type}}</p>
                  </div>
                </div>

                <div class="w-1/3 md:w-1/6 flex flex-col justify-start gap-1">
                  <p class="text-lg md:text-2xl corporate_color body_text font-semibold"> Job Location</p>

                  <div class="leading-3">
                    <p class="text-xs md:text corporate_color body_text">{{career.location}}</p>
                  </div>
                </div>

                <div class="w-full md:w-3/6 flex flex-col justify-start md:justify-end h-full mt-5 md:mt-0">
                  <!-- <Button @click="showModal = !showModal" class=" corporate_bg_color text-white rounded px-9 py-5 md:px-12 ">Apply Now</Button> -->
                  <p class="text-lg md:text-2xl corporate_color body_text font-semibold"> Mail your CV to</p>

                  <div class="leading-3">
                    <p class="text-sm md:text corporate_color body_text"><a href="mailto:career@jatri.co">{{career.mail_to}}</a></p>
                    <!-- <p class="text-xs md:text text-gray-400 body_text">Full Time</p> -->
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!-- Description Section End -->

        </div>
      </div>
    </section>
  </template>
