<script setup>
useServerSeoMeta({
  title: 'Jatri | About us',
  description: 'We work equally with bus operators, drivers and regulators of Bangladesh to solve transportation problems from the very core.',
})
const { locale } = useI18n();
</script>


<template>
  <!-- Banner Start -->
  <section class="relative">
    <div class="about_us_bg h-full py-24">
      <div
          class="
            w-9/12
            md:w-6/12
            lg:w-4/12
            xl:w-5/12
            pl-5
            sm:pl-10
            2xl:pl-40
            pr-5
            py-4
            rounded-r-lg
            text-white
            corporate_bg_color
          "
      >
        <div data-aos="fade-up">
          <div class="mt-4 mb-8 uppercase about_us_banner">
              <span class="text-sm sm:text-md xl:text-4xl"
              ><i class="fas fa-quote-left"></i
              ></span>
            <h3 class="my-1 text-md sm:text-sm xl:text-4xl subheading_text">
              We are committed
            </h3>
            <br />
            <h4 class="text-lg sm:text-lg xl:text-2xl subheading_text">
              to revolutionize
            </h4>
            <br />
            <h2 class="text-lg sm:text-2xl xl:text-5xl heading_text">
              the transportation
            </h2>
            <br />
            <h3 class="text-lg sm:text-xl xl:text-3xl subheading_text">
              landscape in
            </h3>
            <br />
            <h1 class="text-3xl sm:text-4xl xl:text-6xl heading_text">
              Bangladesh<span
                class="bottom_quotation text-sm sm:text-md xl:text-4xl"
            ><i class="fas fa-quote-right"></i
            ></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Banner End -->

  <!-- Main Section Start -->

  <section class="about_page_main_section_bg">
    <!-- Mission Start -->
    <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto">
      <div class="uppercase corporate_color py-6">
        <div data-aos="fade-up">
          <h3 class="text-xl xl:text-5xl font-light subheading_text">
            {{ $t('our-derived') }}
          </h3>
          <h1
              class="
                text-5xl
                xl:text-6xl
                font-light
                subheading_text
                tracking-wide
              "
          >
          {{ $t('mission') }}
          </h1>
        </div>
      </div>

      <div class="mt-4 md:flex md:justify-between md:gap-4">
        <div class="md:w-1/2 h-full">
          <div data-aos="fade-up">
            <img src="~/assets/images/others/about_mission.png" alt="" />
          </div>
        </div>
        <div class="md:w-1/2 h-full">
          <div data-aos="fade-up">
            <p class="text-justify body_text">
              {{ $t('about-us-mission-des1') }}
            </p>
            <br />
            <p class="text-justify body_text">
              {{ $t('about-us-mission-des2') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Mission End -->

    <!-- Serve Start -->
    <div class="my-5">
      <div data-aos="zoom-in">
        <div class="flex justify-end items-end">
          <div class="w-3/5 h-2 corporate_bg_color"></div>
        </div>
      </div>
      <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto">
        <div class="about_heading uppercase corporate_color text-right py-6">
          <div data-aos="fade-up">
            <h3 class="text-xl xl:text-5xl font-light subheading_text">
              {{ $t('who-we') }}
            </h3>
            <h1
                class="
                  text-5xl
                  xl:text-6xl
                  font-light
                  subheading_text
                  tracking-wide
                "
            >
            {{ $t('serve') }}
            </h1>
          </div>
        </div>
        <div data-aos="fade-up">
          <p class="text-justify body_text">
            {{ $t('who-we-serve-content') }}
          </p>
        </div>

        <div class="about_section_card mt-5 md:flex md:justify-between gap-8">
          <!-- card-1 -->
          <div data-aos="fade-up">
            <div
                class="
                  max-w-md
                  py-4
                  px-8
                  shadow-lg
                  my-28
                  text-white
                  corporate_bg_color
                "
            >
              <div class="flex justify-center -mt-24">
                <img
                    class="w-30 h-30 object-cover rounded-md"
                    src="~/assets/images/card/partner_card.jpg"

                />
              </div>
              <div>
                <h2 class="text-center text-4xl font-semibold heading_text">
                  {{ $t('who-we-serve-partner-title') }}
                </h2>
                <p class="mt-2 leading-5 text-justify body_text">
                  {{ $t('who-we-serve-partner-des') }}
                </p>
              </div>
            </div>
          </div>
          <!-- card-2 -->
          <div data-aos="fade-up">
            <div
                class="
                  max-w-md
                  py-4
                  px-8
                  shadow-lg
                  my-28
                  text-white
                  corporate_bg_color
                "
            >
              <div class="flex justify-center -mt-24">
                <img
                    class="w-30 h-30 object-cover rounded-md"
                    src="~/assets/images/card/driver_card.jpg"
                />
              </div>
              <div>
                <h2 class="text-center text-4xl font-semibold heading_text">
                  {{ $t('who-we-serve-operator-title') }}
                </h2>
                <p class="mt-2 leading-5 text-justify body_text">
                  {{ $t('who-we-serve-operator-des') }}
                </p>
              </div>
            </div>
          </div>
          <!-- card-3 -->
          <div data-aos="fade-up">
            <div
                class="
                  max-w-md
                  py-4
                  px-8
                  shadow-lg
                  my-28
                  text-white
                  corporate_bg_color
                "
            >
              <div class="flex justify-center -mt-24">
                <img
                    class="w-30 h-30 object-cover rounded-md"
                    src="~/assets/images/card/user_card.jpg"
                />
              </div>
              <div>
                <h2 class="text-center text-4xl font-semibold heading_text">
                  {{ $t('who-we-serve-passenger-title') }}
                </h2>
                <p class="mt-2 leading-5 text-justify body_text">
                  {{ $t('who-we-serve-passenger-des') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Serve End -->

    <!-- Commitment Start -->
    <div class="mt-5">
      <div data-aos="zoom-in">
        <div class="flex justify-start items-start">
          <div class="w-3/5 h-2 corporate_bg_color"></div>
        </div>
      </div>
      <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto my-5">
        <div class="about_heading uppercase corporate_color py-6">
          <div data-aos="fade-up">
            <h3 class="text-xl xl:text-5xl font-light subheading_text">
              {{ $t('our') }}
            </h3>
            <h1
                class="
                  text-4xl
                  xl:text-6xl
                  font-light
                  subheading_text
                  tracking-wide
                "
            >
            {{ $t('commitment') }}
            </h1>
          </div>
        </div>
        <div data-aos="fade-up">
          <p class="text-justify leading-5 body_text">
            {{ $t('our-commitment-des') }}
          </p>
        </div>
      </div>
      <div data-aos="fade-up">
        <img
            class="w-screen"
            src="~/assets/images/background/commitment_bg.jpg"
            alt=""
        />
      </div>
    </div>
    <!-- Commitment End -->
  </section>

  <!-- Main Section End -->
</template>