<script setup>
useServerSeoMeta({
  title: 'Jatri | Contact us',
  description: 'Got a question? For any kind of assistance in using our services, don’t hesitate to get in touch at support@jatri.co.',
})
</script>

<template>
  <!-- Banner Start -->
  <section class="relative">
    <div class="contact_us_bg h-44 sm:h-36 md:h-96"></div>
  </section>
  <!-- Banner End -->

  <!-- Card Section Start -->
  <section>
    <div class="card_bg py-5">
      <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto">
        <div data-aos="zoom-in">
          <div class="google_map">
            <!-- <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58409.19454592528!2d90.36879301071171!3d23.79815608950397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2904478f792a496d!2sJatri!5e0!3m2!1sen!2sbd!4v1630840441476!5m2!1sen!2sbd"
              style="border: 0"
              class="w-full h-full"
              allowfullscreen=""
              loading="lazy"
            ></iframe> -->

            <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d767.4944418864527!2d90.41576915084973!3d23.788732473452082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c78b536b0123%3A0x5110f3412a200876!2sRubaiyat!5e0!3m2!1sen!2sbd!4v1663754573398!5m2!1sen!2sbd"
              style="border: 0"
              class="w-full h-full"
              allowfullscreen=""
              loading="lazy">
            </iframe> -->


            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4341.605374399455!2d90.41447981069771!3d23.788697166739926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70da71206d7%3A0x2904478f792a496d!2sJatri%20Services%20Limited!5e0!3m2!1sen!2sbd!4v1676195551736!5m2!1sen!2sbd"
                    style="border: 0"
                    class="w-full h-full"
                    allowfullscreen=""
                    loading="lazy">
            </iframe>

          </div>
        </div>

        <div class="contact_form md:flex md:justify-between md:gap-10 my-10">
          <form action="" class="md:w-1/2">
            <div data-aos="fade-up">
              <div class="flex flex-col items-start gap-3">
                <div class="flex flex-col gap-2 w-full">
                  <label for="" class="corporate_color subheading_text">{{ $t('name') }}</label>
                  <input
                      type="text"
                      placeholder="Your Name..."
                      class="bg-blue-50 text-gray-800 placeholder-gray-400 w-full p-3 rounded-md border-0 focus:outline-none"
                  />
                </div>

                <div class="flex flex-col gap-2 w-full">
                  <label for="" class="corporate_color subheading_text">{{ $t('email') }}</label>
                  <input
                      type="email"
                      placeholder="Your Email..."
                      class="bg-blue-50 text-gray-800 placeholder-gray-400 w-full p-3 rounded-md border-0 focus:outline-none"
                  />
                </div>

                <div class="flex flex-col gap-2 w-full">
                  <label for="" class="corporate_color subheading_text">{{ $t('subject') }}</label>
                  <input
                      type="text"
                      placeholder="Subject..."
                      class="bg-blue-50 text-gray-800 placeholder-gray-400 w-full p-3 rounded-md border-0 focus:outline-none"
                  />
                </div>

                <div class="flex flex-col gap-2 w-full">
                  <label for="" class="corporate_color subheading_text">{{ $t('message') }}</label>
                  <textarea
                      id=""
                      required
                      class="bg-blue-50 text-gray-800 w-full min-h-[100px] max-h-[300px] h-28 placeholder-gray-400 rounded-md p-2 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-300"
                      placeholder="Message...">
                    </textarea>
                </div>

                <button type="submit" class="corporate_bg_color rounded-md text-white uppercase text-center p-4 w-full">
                  {{ $t('send') }}
                </button>
              </div>
            </div>
          </form>

          <div class="md:w-1/2 mt-10 md:mt-0">
            <div data-aos="fade-up">
              <h1 class="uppercase corporate_color text-2xl md:text-5xl subheading_text">
                {{ $t('contact-us-title') }}
              </h1>

              <p class="text-justify leading-6 my-3">
                {{ $t('contact-us-des') }}
              </p>

              <div class="flex justify-start items-center gap-5 my-4">
                <div class="text-white corporate_bg_color flex justify-center items-center text-sm md:text-lg h-10 md:h-14 w-10 md:w-14 rounded-full">
                  <i class="fa fa-user"></i>
                </div>
                <div class="leading-5 md:leading-10">
                  <p class="corporate_color_dark text-md">{{ $t('phone') }}</p>
                  <a href="tel:09642080808" class="corporate_color text-sm">{{ $t('phone-number') }}</a>
                </div>
              </div>

              <div class="flex justify-start items-center gap-5 my-4">
                <div class="text-white corporate_bg_color flex justify-center items-center text-sm md:text-lg h-10 md:h-14 w-10 md:w-14 rounded-full">
                  <i class="fa fa-map-marker-alt"></i>
                </div>
                <div class="leading-5 md:leading-10">
                  <p class="corporate_color_dark text-md">{{ $t('address') }}</p>
                  <p class="corporate_color text-sm">
                    {{ $t('address-des') }}
                  </p>
                </div>
              </div>

              <div class="flex justify-start items-center gap-5 my-4">
                <div class="text-white corporate_bg_color flex justify-center items-center text-sm md:text-lg h-10 md:h-14 w-10 md:w-14 rounded-full">
                  <i class="fa fa-envelope"></i>
                </div>
                <div class="leading-5 md:leading-10">
                  <p class="corporate_color_dark text-md">{{ $t('email') }}</p>
                  <a href="mailto:support@jatri.co" class="corporate_color text-sm">support@jatri.co</a>
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