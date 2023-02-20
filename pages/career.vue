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

          <!-- Position Section Start -->
          <div class="my-8">
            <!-- Single Post -->
            <!-- Software Engineer (Laravel) -->
            <div data-aos="fade-up">
              <div
                      class="career_card flex flex-wrap justify-between items-start align-top p-5 my-8"
              >
                <div class="w-1/2 md:w-1/6 p-4 career_img_wrapper">
                  <img
                          class="w-40 rounded-md"
                          src="~/assets/images/job_circular/team_lead.jpg"
                          alt=""
                  />
                </div>

                <div
                        class="w-1/2 md:w-1/6 p-4 flex flex-col justify-start gap-2"
                >
                  <p class="corporate_color subheading_text">
                    Software Engineer (Backend)
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
                  <ul class="list-disc ml-4">
                    <li>Produce simple, maintainable code while always looking to improve on it.</li>
                    <li>
                      Bring new ideas according to the requirements & complete the code properly.
                    </li>
                    <li>
                      Deep understanding of RDBMS, NoSQL, and their usage.
                    </li>
                    <li>
                      Good understanding of OOP principles, SOLID principles, and their practical usage.
                    </li>
                  </ul>
                  <a
                          class="bg-corporate text-white text-sm text-center p-1 rounded-md w-24"
                          href="./description/software-engineer-laravel"
                  >View More</a
                  >
                </div>

                <div
                        class="w-full md:w-1/6 p-4 flex flex-col justify-end items-end gap-2"
                >
                  <p class="corporate_color">Salary : BDT 35,000-55,000 </p>
                  <p class="text-gray-400">Full Time</p>
                </div>
              </div>
            </div>
            <!-- Software Engineer (Andriod) -->
            <div data-aos="fade-up">
              <div
                      class="career_card flex flex-wrap justify-between items-start align-top p-5 my-8"
              >
                <div class="w-1/2 md:w-1/6 p-4 career_img_wrapper">
                  <img
                          class="w-40 rounded-md"
                          src="~/assets/images/job_circular/Software-Engineer(Android).jpg"
                          alt=""
                  />
                </div>

                <div
                        class="w-1/2 md:w-1/6 p-4 flex flex-col justify-start gap-2"
                >
                  <p class="corporate_color subheading_text">
                    Software Engineer (Android)
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
                  <ul class="list-disc ml-4">
                    <li>  Working on our android applications to implement new features & drive improvements to the existing codebase.</li>
                    <li>
                          Take ownership and have an impact on the product.
                    </li>
                    <li>
                          Engage in knowledge-sharing within your team as well as beyond.
                    </li>
                  </ul>
                  <a
                          class="bg-corporate text-white text-sm text-center p-1 rounded-md w-24"
                          href="./description/software-engineer-android"
                  >View More</a
                  >
                </div>

                <div
                        class="w-full md:w-1/6 p-4 flex flex-col justify-end items-end gap-2"
                >
                  <p class="corporate_color">Salary : BDT 40,000-60,000</p>
                  <p class="text-gray-400">Full Time</p>
                </div>
              </div>
            </div>
            <!-- Digital Marketing Specialist -->
            <div data-aos="fade-up">
              <div
                class="career_card flex flex-wrap justify-between items-start align-top p-5 my-8"
              >
                <div class="w-1/2 md:w-1/6 p-4 career_img_wrapper">
                  <img class="w-40 rounded-md" src="~/assets/images/job_circular/manager_accounts.jpg" alt="" />
                </div>

                <div
                  class="w-1/2 md:w-1/6 p-4 flex flex-col justify-start gap-2"
                >
                  <p class="corporate_color subheading_text">
                    Executive - Accounts & Finance
                  </p>
                  <!-- <p class="text-gray-400">Operations</p> -->
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
                  <ul class="list-disc ml-4">
                    <li>Record all transactions in Accounting Software</li>
                    <li>Maintain daily transactions filing both hardcopy & softcopy</li>
                    <li>Bookkeeping for daily transactions</li>
                  </ul>
                  <a
                    class="bg-corporate text-white text-sm text-center p-1 rounded-md w-24"
                    href="./description/executive-account&finance"
                    >View More</a
                  >
                </div>

                <div
                  class="w-full md:w-1/6 p-4 flex flex-col justify-end items-end gap-2"
                >
                  <p class="corporate_color">Salary : BDT 20,000-25,000 </p>
                  <p class="text-gray-400">Full Time</p>
                </div>
              </div>
            </div>
            <!-- Ux Designer -->
            <div data-aos="fade-up">
              <div
                      class="career_card flex flex-wrap justify-between items-start align-top p-5 my-8"
              >
                <div class="w-1/2 md:w-1/6 p-4 career_img_wrapper">
                  <img class="w-40 rounded-md" src="~/assets/images/job_circular/creative_head.jpg" alt="" />
                </div>

                <div
                        class="w-1/2 md:w-1/6 p-4 flex flex-col justify-start gap-2"
                >
                  <p class="corporate_color subheading_text">
                    UX Designer
                  </p>
                  <!-- <p class="text-gray-400">Operations</p> -->
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
                  <ul class="list-disc ml-4">
                    <li>Understand product specifications, and business needs and create the design to deliver a user-friendly interface</li>
                    <li>Translate concepts into user flows, wireframes, mockups, and prototypes that lead to intuitive user experiences.</li>
                    <li>Design according to the flows, detailed wireframes, high-fidelity mockups, to clickable prototypes to express the vision.</li>
                    <li>Research and conduct informal testing to validate design directions and try to generate key features.</li>
                  </ul>
                  <a
                          class="bg-corporate text-white text-sm text-center p-1 rounded-md w-24"
                          href="./description/ux-designer"
                  >View More</a
                  >
                </div>

                <div
                        class="w-full md:w-1/6 p-4 flex flex-col justify-end items-end gap-2"
                >
                  <p class="corporate_color">Salary : Negotiable</p>
                  <p class="text-gray-400">Full Time</p>
                </div>
              </div>
            </div>




            <!-- Sr executive business development -->
<!--            <div data-aos="fade-up">-->
<!--              <div-->
<!--                      class="career_card flex flex-wrap justify-between items-start align-top p-5 my-8"-->
<!--              >-->
<!--                <div class="w-1/2 md:w-1/6 p-4 career_img_wrapper">-->
<!--                  <img class="w-40 rounded-md" src="~/assets/images/job_circular/manager_accounts.jpg" alt="" />-->
<!--                </div>-->

<!--                <div-->
<!--                        class="w-1/2 md:w-1/6 p-4 flex flex-col justify-start gap-2"-->
<!--                >-->
<!--                  <p class="corporate_color subheading_text">-->
<!--                    Sr. Executive Business Development-->
<!--                  </p>-->
<!--                  &lt;!&ndash; <p class="text-gray-400">Operations</p> &ndash;&gt;-->
<!--                  <div class="rating">-->
<!--                    <ul class="rate-area">-->
<!--                      <input-->
<!--                              type="radio"-->
<!--                              id="5-star"-->
<!--                              name="crating"-->
<!--                              value="5"-->
<!--                      />-->
<!--                      <label for="5-star" title="Amazing">5 stars</label>-->

<!--                      <input-->
<!--                              type="radio"-->
<!--                              id="4-star"-->
<!--                              name="crating"-->
<!--                              value="4"-->
<!--                      />-->
<!--                      <label for="4-star" title="Good">4 stars</label>-->

<!--                      <input-->
<!--                              type="radio"-->
<!--                              id="3-star"-->
<!--                              name="crating"-->
<!--                              value="3"-->
<!--                      />-->
<!--                      <label for="3-star" title="Average">3 stars</label>-->

<!--                      <input-->
<!--                              type="radio"-->
<!--                              id="2-star"-->
<!--                              name="crating"-->
<!--                              value="2"-->
<!--                      />-->
<!--                      <label for="2-star" title="Not Good">2 stars</label>-->

<!--                      <input-->
<!--                              type="radio"-->
<!--                              id="1-star"-->
<!--                              required=""-->
<!--                              name="crating"-->
<!--                              value="1"-->
<!--                              aria-required="true"-->
<!--                      />-->
<!--                      <label for="1-star" title="Bad">1 star</label>-->
<!--                    </ul>-->
<!--                  </div>-->
<!--                </div>-->

<!--                <div-->
<!--                        class="w-full md:w-3/6 p-4 flex flex-col justify-start gap-2"-->
<!--                >-->
<!--                  &lt;!&ndash; <p class="text-justify font-thin">-->
<!--                    Transportation has been a major pain point for the people of-->
<!--                    Bangladesh for many years, and we aim to eradicate these-->
<!--                    issues with cutting-edge technology. We empower drivers to-->
<!--                    earn money on the go. We ensure access to our millions of-->
<!--                    users, empowering drivers to digitally book trips and-->
<!--                    maximize their rental business revenue. So, we are in need-->
<!--                    of a team member who will facilitate our rental operational-->
<!--                    process & partner acquisition activities. jatri new-->
<!--                  </p> &ndash;&gt;-->
<!--                  <ul class="list-disc ml-4">-->
<!--                    <li>-->
<!--                      Research &amp; identify opportunities that come up in new and existing markets-->
<!--                    </li>-->
<!--                    <li>-->
<!--                      Communicate with clients to understand their needs and offer solutions-->
<!--                      accordingly-->
<!--                    </li>-->
<!--                    <li>-->
<!--                      Develop and present customized proposals for clients based on specific business-->
<!--                      needs-->
<!--                    </li>-->
<!--                    <li>-->
<!--                      Prepare and deliver pitches and presentations to potential new clients-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                  <a-->
<!--                          class="bg-corporate text-white text-sm text-center p-1 rounded-md w-24"-->
<!--                          href="./description/sr-executive-business-development/"-->
<!--                  >View More</a-->
<!--                  >-->
<!--                </div>-->

<!--                <div-->
<!--                        class="w-full md:w-1/6 p-4 flex flex-col justify-end items-end gap-2"-->
<!--                >-->
<!--                  <p class="corporate_color">Salary : Negotiable</p>-->
<!--                  <p class="text-gray-400">Full Time</p>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
            <!-- no vaccancy -->
            <!-- <div data-aos="fade-up">
            <div class="
                  bg-gray-100
                  flex flex-wrap
                  justify-between
                  items-start
                  align-top
                  p-5
                  my-4
                ">


              <div class="w-full flex justify-center items-center gap-4">
                <img src="~/assets/images/oppps/Frame.png" alt="">
                <h1 class="font-bold text-3xl corporate_color">No vacancies available right now.</h1>
              </div>




            </div>
          </div> -->

            <!-- <div class="flex justify-center items-center align-middle h-40">
              <p class="text-gray-500">No vacancies available right now.</p>
            </div> -->
          </div>
          <!-- Position Section End -->
        </div>
      </div>
    </section>
</template>