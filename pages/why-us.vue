
import WhiteNavbar from '~~/components/app/WhiteNavbar.vue';
<script setup>
useServerSeoMeta({
  title: 'Jatri | Why us | simple and convenient | safety and security',
  description: 'Open up the app and find the service you need in minutes. Book a trip, board the vehicle and we’ll take you there safe and sound.',
})
</script>


<template>
    <!-- Banner Start -->
    <section class="relative">
      <div class="why_us_bg h-36 md:h-80">
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
              Why Us
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
                        Simple <br />
                        And <br />
                        Convenient
                      </h1>
                      <p class="whyus_card_description body_text">
                        Whether you’re managing your fleet or booking a trip,
                        convenience is key. Just open up the app and find the
                        service you need in mere minutes.
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
                      <h1 class="whyus_card_title heading_text">
                        <br />
                        Comfortable <br />
                        commute <br />
                      </h1>
                      <p class="whyus_card_description body_text">
                        Our partners and merchants are your trustworthy
                        companions on road trips. Book a trip, board the vehicle
                        and we’ll take you there safe and sound.
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
                        Safety <br />
                        and <br />
                        Security
                      </h1>
                      <p class="whyus_card_description body_text">
                        Our prime focus is to serve quality, affordable and
                        hassle-free service. Our support staff are at your beck
                        and call, ready to help whenever you need it.
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