
<script setup>
useServerSeoMeta({
  title: 'Jatri | Why us | simple and convenient | safety and security',
  description: 'Open up the app and find the service you need in minutes. Book a trip, board the vehicle and we’ll take you there safe and sound.',
})
</script>

<template>
    <!-- Banner Start -->
    <section class="relative">
      <div class="why_us_bg h-36 md:h-80 p-4">
        <div
          class="
            container
            mx-auto
            flex
            justify-center
            items-center
            align-middle
            h-full
          "
        >
          <div data-aos="zoom-in">
            <h5
              class="
                uppercase
                text-3xl
                sm:text-5xl
                md:text-7xl
                lg:text-9xl
                text-center
                corporate_color
                font-black
                heading_text
              "
            >
            {{ $t('why-us-title') }}
            </h5>
          </div>
        </div>
      </div>
    </section>
    <!-- Banner End -->

    <!-- Card Section Start -->
    <section>
      <div class="card_bg">
        <div class="container mx-auto py-5 md:py-24">
          <div class="container px-5 py-5 md:py-24 mx-auto">
            <div class="flex flex-wrap -m-4 h-auto">
              <div class="p-4 w-full md:w-1/3 h-full">
                <div data-aos="fade-up">
                  <div class="why_us_card corporate_bg_color">
                    <div class="whyus_card_body">
                      <h1 class="whyus_card_title heading_text">
                        {{ $t('simple') }} <br />
                        {{ $t('and') }} <br />
                        {{ $t('convenient') }}
                      </h1>
                      <p class="whyus_card_description body_text">
                        {{ $t('simple-convenient-des') }}
                      </p>
                    </div>
                    <img
                      class="whyus_card_img"
                      src="~/assets/images/card/convenient_card.jpg"
                      alt="blog"
                    />
                  </div>
                </div>
              </div>

              <div class="p-4 w-full md:w-1/3 h-full">
                <div data-aos="fade-up">
                  <div class="why_us_card corporate_bg_color">
                    <div class="whyus_card_body">
                      <h1 class="whyus_card_title heading_text"><br />
                        {{ $t('comfortable') }}<br />
                        {{ $t('commute') }}
                      </h1>
                      <p class="whyus_card_description body_text">
                        {{ $t('comfortable-commute-des') }}
                      </p>
                    </div>
                    <img
                      class="whyus_card_img"
                      src="~/assets/images/card/comfortable_card.jpg"
                      alt="blog"
                    />
                  </div>
                </div>
              </div>

              <div class="p-4 w-full md:w-1/3 h-full">
                <div data-aos="fade-up">
                  <div class="why_us_card corporate_bg_color">
                    <div class="whyus_card_body">
                      <h1 class="whyus_card_title heading_text">
                        {{ $t('safety') }} <br />
                        {{ $t('and') }} <br />
                        {{ $t('security') }}
                      </h1>
                      <p class="whyus_card_description body_text">
                        {{ $t('safety-security-des') }}
                      </p>
                    </div>
                    <img
                      class="whyus_card_img"
                      src="~/assets/images/card/safety_and_secutiry_card.jpg"
                      alt="blog"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Card Section End -->
</template>