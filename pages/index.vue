<script setup>
import CountUp from 'vue-countup-v3'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, FreeMode } from 'swiper';
const modules = [FreeMode, Pagination];

useHead({
  title: 'Jatri | convenient travel experience in Bangladesh',
  meta: [
    {
      name: "author",
      content: "Jatri Services Limited"
    },
    {
      name: 'keywords',
      content: 'Ride-Sharing, Rental, Ticketing'
    },
    {
      property: 'og:title',
      content: 'https://jatri.co/'
    },
    {
      property: 'og:image', 
      name: "image", 
      content: './assets/images/logo/favicon.png'
    },
    {
      property: 'og:description', 
      content: 'Jatri is a public transport journey planner, digital ticketing and mobility marketplace, driving productivity by helping drivers to offer reliable transport to the commuters through our state-of-the-art technology.'
    },
    {
      name: 'description', 
      content: 'Jatri is a public transport journey planner, digital ticketing and mobility marketplace, driving productivity by helping drivers to offer reliable transport to the commuters through our state-of-the-art technology.'
    },
  ]
});

// useServerSeoMeta({
//   // title: 'Jatri | convenient travel experience in Bangladesh',
//   ogTitle: 'https://jatri.co/',
//   description: 'Jatri is a public transport journey planner, digital ticketing and mobility marketplace, driving productivity by helping drivers to offer reliable transport to the commuters through our state-of-the-art technology.',
//   ogDescription: 'Jatri is a public transport journey planner, digital ticketing and mobility marketplace, driving productivity by helping drivers to offer reliable transport to the commuters through our state-of-the-art technology.',
//   ogImage: 'src/images/logo/favicon.png',
// })
</script>

<template>
  <!-- Banner Section Start -->
  <section class="corporate_bg_color h-full md:bg-gray-200 relative">
    <div class="corporate_bg_color md:mt-20 h-80 sm:h-96 flex justify-between 2xl:justify-center 2xl:items-center">
      <div
          class="w-full px-5 sm:px-10 2xl:container 2xl:mx-auto flex justify-between align-middle">

        <div class="w-1/2 sm:w-1/2 lg:flex-grow self-center">
          <div data-aos="zoom-out-up" data-aos-duration="1000">
            <div class="banner_text uppercase text-white font-extrabold">
              <h1 class="text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-light subheading_text tracking-wide">
                {{ $t('empowering') }}</h1>
              <h1 class="text-xl sm:text-2xl md:text-5xl xl:text-6xl font-light subheading_text tracking-wide">
                {{ $t('bangladesh_to') }}</h1>
              <!-- <h1 class="text-3xl md:text-4xl lg:text-5xl ">Travel</h1> -->
              <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-8xl font-light heading_text tracking-wide">  {{ $t('travel_better') }}
                </h1>
            </div>
          </div>
        </div>

        <div class="w-1/2 sm:w-1/2 lg:max-w-lg lg:w-full self-end">
          <div data-aos="zoom-out-down">
            <img class="home_banner_img" alt="hero" src="~/assets/images/banner/banner-2.png" draggable="false">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Counter Section Start -->
  <section class="md:mt-16">
    <div class="counter_bg">
      <div data-aos="fade-up">
        <div class="container mx-auto py-16 md:py-20 lg:py-24">
          <h5 class="uppercase text-2xl md:text-3xl lg:text-4xl text-center text-white font-bold tracking-widest"> {{ $t('counter_total') }}</h5>
          <div class="sm:flex mt-4 lg:mt-3">

            <div class="single_counter my-5 sm:my-0 w-full sm:w-1/3">
              <div class="flex justify-center items-center">
                <p class="corporate_color counter_number purecounter subheading_text">
                  <count-up :end-val="35"></count-up>
                </p>
                <p class="corporate_color counter_number_sub text-4xl">k</p>
                <p class="corporate_color counter_number_sub">+</p>
              </div>
              <p class="counter_tag"> {{ $t('rental_partners') }}</p>
            </div>

            <div class="single_counter my-5 sm:my-0 w-full sm:w-1/3">
              <div class="flex justify-center items-center">
                <!-- data-purecounter-decimals="1" -->
                <p class="corporate_color counter_number purecounter">
                  <count-up :end-val="11"></count-up>
                </p>
                <p class="corporate_color counter_number_sub">+ million</p>
              </div>
              <p class="counter_tag">{{ $t('ticket_sold') }}</p>
            </div>

            <div class="my-5 sm:my-0 w-full sm:w-1/3">
              <div class="flex justify-center items-center">
                <p class="corporate_color counter_number purecounter">
                  <count-up :end-val="1000"></count-up>
                </p>
                <p class="corporate_color counter_number_sub">+</p>
              </div>
              <p class="counter_tag">{{ $t('buses') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Counter Section End -->

  <!-- Card Section Start -->
  <section>
    <div class="card_bg">
      <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto py-10 lg:py-20 2xl:py-24">
        <h5 class="corporate_color">
          <span class="text-2xl md:text-3xl xl:text-5xl font-bold">{{ $t('card_header1') }}</span>
          <br>
          <span class="text-4xl md:text-6xl xl:text-7xl font-extrabold heading_text">{{ $t('card_header2') }}</span>
        </h5>

        <div class="container lg:px-5 py-10 lg:py-24 mx-auto">
          <div data-aos="fade-up">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 sm:w-1/3">
                <div class="card corporate_bg_color">
                  <img class="card_img" src="~/assets/images/card/ticketing_card.jpg" alt="blog">
                  <div class="card_body">
                    <h1 class="card_title font-bold subheading_text">{{ $t('ticketing') }}</h1>
                    <p class="card_description body_text">{{ $t('ticketing_description') }}</p>
                  </div>
                  <div class="card_footer">
                    <button class="card_btn corporate_color body_text " onclick="window.location.href = 'https://ticket.jatri.co/'">{{ $t('ticketing_booking') }}</button>
                  </div>
                </div>
              </div>

              <div class="p-4 sm:w-1/3">
                <div class="card corporate_bg_color">
                  <img class="card_img" src="~/assets/images/card/partner_card-2.jpg" alt="blog">
                  <div class="card_body">
                    <h1 class="card_title font-bold subheading_text">{{ $t('rentals') }}</h1>
                    <p class="card_description body_text">{{ $t('rentals_description') }}</p>
                  </div>
                  <div class="card_footer">
                    <button class="card_btn corporate_color body_text" onclick="window.location.href = 'https://rental.jatri.co/'">{{ $t('rentals_booking') }}</button>
                  </div>
                </div>
              </div>

              <div class="p-4 sm:w-1/3">
                <div class="card corporate_bg_color">
                  <img class="card_img" src="~/assets/images/card/career_card.jpg" alt="blog">
                  <div class="card_body">
                    <h1 class="card_title font-bold subheading_text">{{ $t('career') }}</h1>
                    <p class="card_description body_text">{{ $t('career_description') }}</p>
                  </div>
                  <div class="card_footer">
                    <button class="card_btn corporate_color body_text" onclick="window.location.href = './career'">{{ $t('career_booking') }}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Card Section End -->

  <!-- App Section Start -->
  <section>
    <div class="app_bg">
      <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto flex sm:flex-row flex-col justify-between items-center py-5 sm:py-0">
        <div data-aos="fade-up">
          <div class="lg:max-w-lg lg:w-full sm:w-1/2">
            <img class="object-cover object-center rounded" alt="hero" src="~/assets/images/banner/app_banner.png">
          </div>
        </div>
        <div data-aos="fade-up">
          <div class="lg:max-w-lg lg:w-full sm:w-1/2 text-right text-white 2xl:pr-20 flex flex-col md:mb-0 justify-end items-end">
            <div class="mt-5 sm:mt-0">
              <h3 class="text-xl lg:text-3xl uppercase subheading_text">{{ $t('download') }} </h3>
              <h1 class="text-4xl lg:text-7xl uppercase heading_text">{{ $t('the_app') }} </h1>
              <p class="text-sm lg:text-lg font-light body_text">{{ $t('download_desc') }}</p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser" class="">
              <img class="w-40 rounded-full" src="~/assets/images/logo/android_btn.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- App Section End -->

  <!-- How it work section Start -->
  <section>
    <div class="my-7 flex-grow lg:flex lg:justify-between lg:gap-5 text-white w-full bg-white">
      <div class="pr-5 lg:pr-0 w-full lg:w-1/3">
        <div data-aos="fade-up">
          <div class="corporate_bg_color rounded-r-2xl py-9 pl-5 sm:pl-10 2xl:pl-40 pr-5">
<!--            <h3 class="text-2xl lg:text-3xl uppercase subheading_text">How</h3>-->
            <h1 class="text-4xl lg:text-5xl uppercase heading_text">{{ $t('how_it_works') }}</h1>
            <div class="mt-5">
              <ul class="list-none">
                <li class="flex justify-start align-top items-start gap-3 mt-2 mb-8">
                  <div class="corporate_color bg-white rounded-full px-2 py-1">
                    <i class="far fa-star"></i>
                  </div>
                  <span class="text-justify body_text text-sm lg:text-lg font-light">
                       {{ $t('how_it_works_des1') }}
                    </span>
                </li>
                <li class="flex justify-start align-top items-start gap-3 mt-2 mb-8">
                  <div class="corporate_color bg-white rounded-full px-2 py-1">
                    <i class="far fa-star"></i>
                  </div>
                  <span class="text-justify body_text text-sm lg:text-lg font-light">
                    {{ $t('how_it_works_des2') }}

                    </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="pl-5 lg:pl-0 w-full lg:w-2/3">
        <div data-aos="fade-up">
          <div class="corporate_bg_dark rounded-l-2xl my-5 lg:my-0 py-11 pl-5 sm:pl-10 pr-5 sm:pr-10 2xl:pr-28">
            <div class="sm:flex justify-between items-center sm:gap-5 h-full">
              <ul class="list-none">
                <li class="gap-3 mt-2 mb-8 md:mb-28">
                  <div class=" w-full rounded-full flex justify-start align-middle items-center mb-4 gap-3">
                    <div class="corporate_bg_color text-white w-8 h-8 rounded-full flex justify-center align-middle items-center">
                      <i class="far fa-star"></i>
                    </div>
                    <h5 class="text-white text-2xl subheading_text">{{ $t('ticketing') }}</h5>
                  </div>
                  <span class="text-justify body_text text-sm lg:text-lg font-light">
                       {{ $t('how_it_works_tickting_des1_part1') }}<br>
                       {{ $t('how_it_works_tickting_des1_part2') }}

                    </span>
                </li>


              </ul>

              <ul class="list-none ml">
                <li class="gap-3 mt-2 mb-8">
                  <div class=" w-full rounded-full flex justify-start align-middle items-center mb-4 gap-3">
                    <div class="corporate_bg_color text-white w-8 h-8 rounded-full flex justify-center align-middle items-center">
                      <i class="far fa-star"></i>
                    </div>
                    <h5 class="text-white text-2xl subheading_text">{{ $t('rentals') }}</h5>
                  </div>
                  <span class="text-justify body_text text-sm lg:text-lg font-light">
                     {{ $t('how_it_works_rentals_des') }}
                    </span>
                </li>
                <li class="gap-3 mt-2 mb-8">
                  <div class=" w-full rounded-full flex justify-start align-middle items-center mb-4 gap-3">
                    <div class="corporate_bg_color text-white w-8 h-8 rounded-full flex justify-center align-middle items-center">
                      <i class="far fa-star"></i>
                    </div>
                    <h5 class="text-white text-2xl subheading_text">{{ $t('how_it_works_coach') }}</h5>
                  </div>
                  <span class="text-justify body_text text-sm lg:text-lg font-light">
                       {{ $t('how_it_works_coach_desc') }}
                    </span>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- How it work section End -->

  <!-- About section Start -->
  <section>
    <div data-aos="fade-up">
      <div class="my-7 flex-grow lg:flex lg:justify-between text-white w-full">

        <div class="corporate_bg_color w-full lg:w-1/3 py-20 pl-10 lg:pl-16 2xl:pl-52 pr-14 xl:pr-16 order-last lg:order-first">
          <div class="flex justify-center items-center mb-3">
            <img class="w-2/4 sm:w-1/4" src="~/assets/images/logo/logo-white.png" alt="">
          </div>
          <swiper
              :spaceBetween="30"
              :pagination="{
              clickable: true,
    }"
              :modules="modules"
              class="mySwiper"
          >
            <swiper-slide>
              <p class="body_text text-sm lg:text-lg font-light text-white text-justify leading-6">{{ $t('carousel_desc1') }}</p>
            </swiper-slide>
            <swiper-slide>
              <p class="body_text text-sm lg:text-lg font-light text-white text-justify leading-6">{{ $t('carousel_desc2') }}</p>
            </swiper-slide>
          </swiper>
        </div>

        <div class="about_bg h-72 lg:h-auto w-full lg:w-2/3 order-first lg:order-last"></div>

      </div>
    </div>
  </section>
  <!-- About section End -->

  <!-- News Section Start -->
  <section>
    <div class="news_bg">
      <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto py-16 lg:py-28">

        <div class="text-center text-white md:mb-10">
          <h1 class="text-4xl md:text-6xl heading_text">{{ $t('highlight') }}</h1>
        </div>

        <div class="flex-grow lg:flex lg:justify-between gap-5 mt-6 h-full">
          <div class="w-full lg:w-2/3 h-full">

            <div data-aos="fade-up">
              <div class="news_card order-1 lg:order-1">
                <a href="https://www.techinasia.com/jatri-pre-series-a-funding"
                   class="news_card_title corporate_color" target="_blank">
                  <img class="w-full" src="~/assets/images/news_card/news_card_recent.jpg" alt="blog">
                  <div class="h-1/2">
                    <div class="p-6">
                      <h1 class="news_card_title corporate_color font-bold body_text">
                        Bangladeshi transport app secures $1.2m to fuel national expansion
                      </h1>
                      <p class="news_card_description body_text">Jatri, a Bangladesh-based public transportation platform, has secured US$1.2 million in its most recent fundraise.</p>
                    </div>
                    <div class="news_card_footer">
                      <div class="news_footer_author">
                        <i class="fa fa-user"></i>
                      </div>
                      <div class="flex flex-col justify-between">
                        <p class="corporate_color" onclick="window.location.href = 'https://www.techinasia.com/'">Tech In Asia</p>
                        <p class="text-gray-400">September 13, 2021</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>


            <div class="w-full gap-5 h-full">
              <div data-aos="fade-up">
                <div class="news_card order-2 lg:order-4 md:flex md:justify-between gap-5">
                  <div class="p-2 flex justify-center items-center align-middle 2xl:p-5">
                    <img class=" rounded-md" src="~/assets/images/news_card/daily-star.png" alt="blog">
                  </div>
                  <div>
                    <a href="https://www.thedailystar.net/business/news/bus-owners-announce-jatri-dhakas-e-ticketing-partner-3170171" target="_blank">
                      <div class="p-2 2xl:p-6">
                        <h1 class="news_card_title corporate_color font-bold body_text">Bus owners association announce Jatri as Dhaka’s e-ticketing partner</h1>
                        <p class="news_card_description body_text">The Dhaka Road Transport Owners' Association has recently announced Jatri Services Ltd as its partner to roll out e-ticketing services for all 5,650 buses operational in Dhaka city.Mr. Khandkar Enayet Ullah, general secretary of the association, has recently shared the information through a press briefing.</p>
                      </div>
                      <div class="news_card_footer">
                        <div class="news_footer_author">
                          <i class="fa fa-user"></i>
                        </div>
                        <div class="flex flex-col justify-between">
                          <p class="corporate_color" onclick="window.location.href = 'https://www.tbsnews.net/'">The Daily Star</p>
                          <p class="text-gray-400">January 22, 2023</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full gap-5 h-full">
              <div data-aos="fade-up">
                <div class="news_card order-2 lg:order-4 md:flex md:justify-between gap-5">
                  <div class="p-2 flex justify-center items-center align-middle 2xl:p-5">
                    <img class=" rounded-md" src="~/assets/images/news_card/owner-assosiation.png" alt="blog">
                  </div>
                  <div>
                    <a href="https://www.dhakatribune.com/business/2023/01/10/bus-owners-association-and-jatri-to-bring-more-bus-companies-under-e-ticketing-system" target="_blank">
                      <div class="p-2 2xl:p-6">
                        <h1 class="news_card_title corporate_color font-bold body_text">Bus owners association and Jatri to bring more bus companies under the e-ticketing system.
                        </h1>
                        <p class="news_card_description body_text">A press conference was held at the Dhaka Road Transport Owners Association (DSPMS) headquarters regarding the inclusion of 15 more bus companies under the ongoing e-ticketing system in Dhaka.
                          In this press meeting, it was stated that Jatri Services will cover these routes as the e-ticketing partner to roll out as announced before
                        </p>
                      </div>
                      <div class="news_card_footer">
                        <div class="news_footer_author">
                          <i class="fa fa-user"></i>
                        </div>
                        <div class="flex flex-col justify-between">
                          <p class="corporate_color" onclick="window.location.href = 'https://www.tbsnews.net/'">e-ticketing system</p>
                          <p class="text-gray-400">January 22, 2023</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full gap-5 h-full">
              <div data-aos="fade-up">
                <div class="news_card order-2 lg:order-4 md:flex md:justify-between gap-5">
                  <div class="p-2 flex justify-center items-center align-middle 2xl:p-5">
                    <img class=" rounded-md" src="~/assets/images/news_card/news_card_tbs_news.jpg" alt="blog">
                  </div>
                  <div>
                    <a href="https://www.tbsnews.net/dropped/startups/mass-transportation-startup-jatri-raises-12-million-301750" target="_blank">
                      <div class="p-2 2xl:p-6">
                        <h1 class="news_card_title corporate_color font-bold body_text">Mass transportation startup Jatri raises $1.2 million</h1>
                        <p class="news_card_description body_text">Jatri is rapidly expanding its operations throughout Bangladesh with double-digit month on month growth through strategic government and private sector partnerships...</p>
                      </div>
                      <div class="news_card_footer">
                        <div class="news_footer_author">
                          <i class="fa fa-user"></i>
                        </div>
                        <div class="flex flex-col justify-between">
                          <p class="corporate_color" onclick="window.location.href = 'https://www.tbsnews.net/'">The Business Standard</p>
                          <p class="text-gray-400">September 13, 2021</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full gap-5 h-full">
              <div data-aos="fade-up">
                <div class="news_card order-2 lg:order-4 md:flex md:justify-between gap-5">
                  <div class="p-2 flex justify-center items-center align-middle 2xl:p-5">
                    <img class=" rounded-md" src="~/assets/images/news_card/news_card_daily_star.jpg" alt="blog">
                  </div>
                  <div>
                    <a href="https://www.thedailystar.net/business/news/jatri-raises-12-million-expand-operation-across-country-2174786" target="_blank">
                      <div class="p-2 2xl:p-6">
                        <h1 class="news_card_title corporate_color font-bold body_text">Jatri raises $1.2 million to expand operation across country</h1>
                        <p class="news_card_description body_text">Tech-based transportation platform Jatri has raised $1.2 million or nearly Tk 10.03 crore in its latest round of fund-raising to expand its operation across the country...</p>
                      </div>
                      <div class="news_card_footer">
                        <div class="news_footer_author">
                          <i class="fa fa-user"></i>
                        </div>
                        <div class="flex flex-col justify-between">
                          <p class="corporate_color" onclick="window.location.href = 'https://www.thedailystar.net/'">The Daily Star</p>
                          <p class="text-gray-400">September 13, 2021</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-1/3">
            <div data-aos="fade-up">
              <div class="news_card order-2 lg:order-4">
                <div class="p-2 flex justify-center items-center align-middle 2xl:p-5">
                  <img class=" rounded-md" src="~/assets/images/news_card/news_card-1.jpg" alt="blog">
                </div>
                <div>
                  <a href="https://e27.co/live-bus-tracking-app-jatri-attracts-funding-from-uae-investors-to-revitalise-public-transportation-in-bangladesh-20200123/" target="_blank">
                    <div class="p-2 2xl:p-6">
                      <h1 class="news_card_title corporate_color font-bold body_text">Bus ticketing app Jatri attracts funding from UAE VCs to revitalise public transportation in Bangladesh</h1>
                      <p class="news_card_description body_text">Jatri's enables digital tracking and ticketing, and also allows bus operators to improve schedule adherence and optimise travel times...</p>
                    </div>
                    <div class="news_card_footer">
                      <div class="news_footer_author">
                        <i class="fa fa-user"></i>
                      </div>
                      <div class="flex flex-col justify-between">
                        <p class="corporate_color" onclick="window.location.href = 'https://e27.co/'">e27</p>
                        <p class="text-gray-400">January 23, 2020</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div class="news_card order-2 lg:order-4">
                <div class="p-2 flex justify-center items-center align-middle 2xl:p-5">
                  <img class=" rounded-md" src="~/assets/images/news_card/pos-machine.png" alt="blog">
                </div>
                <div>
                  <a href="https://today.thefinancialexpress.com.bd/metro-news/e-ticketing-for-all-mirpur-route-buses-from-today-1668268482?amp=true" target="_blank">
                    <div class="p-2 2xl:p-6">
                      <h1 class="news_card_title corporate_color font-bold body_text">The Bus Owners Association and Jatri are working together to bring more bus companies into the e-ticketing system.</h1>
                      <p class="news_card_description body_text">After successful introduction of e-ticketing under a pilot system through eight companies operating from Mirpur, the Dhaka Bus Owners' Association (DBOA) has now decided to introduce electronic ticketing through 30 bus companies more.
                      </p>
                    </div>
                    <div class="news_card_footer">
                      <div class="news_footer_author">
                        <i class="fa fa-user"></i>
                      </div>
                      <div class="flex flex-col justify-between">
                        <p class="corporate_color" onclick="window.location.href = 'https://e27.co/'">e-ticketing system</p>
                        <p class="text-gray-400">January 22, 2023</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div class="news_card order-2 lg:order-4">
                <div class="p-2 flex justify-center items-center align-middle 2xl:p-5">
                  <img class=" rounded-md" src="~/assets/images/news_card/jatri_signed.jpg" alt="blog">
                </div>
                <div>
                  <a href="https://thefinancialexpress.com.bd/trade/public-transportation-app-jatri-to-make-passenger-experience-happier-1579796363" target="_blank">
                    <div class="p-2 2xl:p-6">
                      <h1 class="news_card_title corporate_color font-bold body_text">Public transportation app Jatri to make passenger experience happier</h1>
                      <p class="news_card_description body_text">Bangladeshi technology start-up, Jatri, announced that it has closed a seed round for an undisclosed amount backed by Superangel, Falcon Network...</p>
                    </div>
                    <div class="news_card_footer">
                      <div class="news_footer_author">
                        <i class="fa fa-user"></i>
                      </div>
                      <div class="flex flex-col justify-between">
                        <p class="corporate_color" onclick="window.location.href = 'https://thefinancialexpress.com.bd/'">The Financial Express</p>
                        <p class="text-gray-400">August 31, 2021</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              <div class="w-full">
                <div class="news_card order-4 lg:order-3">
                  <a href="https://futurestartup.com/2020/02/13/jatri-founder-and-ceo-aziz-arman-interview/" target="_blank">
                    <div class="p-6">
                      <h1 class="news_card_title corporate_color font-bold body_text">Jatri Founder and CEO Aziz Arman Talks Smart Mobility Solution to...</h1>
                      <p class="news_card_description body_text">Jatri is the first bus tracking and digital ticketing platform in Bangladesh. Founded in 2019, the company aims to transform public transportation in Bangladesh and beyond through improving the experience of public..</p>
                    </div>
                    <div class="news_card_footer">
                      <div class="news_footer_author">
                        <i class="fa fa-user"></i>
                      </div>
                      <div class="flex flex-col justify-between">
                        <p class="corporate_color" onclick="window.location.href = 'https://www.techinasia.com/'">Future Startup</p>
                        <p class="text-gray-400">February 13, 2020</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- News Section End -->

  <!-- Featured Section Start -->
  <section>
    <div class="corporate_bg_color">
      <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto py-20">
        <div class="flex flex-col justify-center text-center text-white">
          <h1 class="text-2xl md:text-3xl uppercase subheading_text">{{ $t('features') }}</h1>
          <!-- <p class="text-xs font-thin mt-3 md:mt-0">Lorem ipsum dolor sit amet.</p> -->
        </div>
        <div class="flex flex-col md:flex-row justify-around align-middle items-center mt-5">
          <a href="https://www.techinasia.com/jatri-pre-series-a-funding" target="_blank">
            <div data-aos="flip-up">
              <img src="~/assets/images/press/1.png" alt="" class="w-28 md:w-48">
            </div>
          </a>
          <a href="https://techcrunch-com.cdn.ampproject.org/c/s/techcrunch.com/2021/10/15/meet-the-startups-changing-mobility-for-emerging-middle-classes/amp/" target="_blank">
            <div data-aos="flip-up">
              <img src="~/assets/images/press/7.png" alt="" class="white_filter p-5 w-28 md:w-48">
            </div>
          </a>
          <a href="https://www.dealstreetasia.com/stories/fundiin-jatri-raise-funds-260194/" target="_blank">
            <div data-aos="flip-up">
              <img src="~/assets/images/press/6.png" alt="" class="white_filter p-5 w-28 md:w-40">
            </div>
          </a>
          <a href="https://e27.co/live-bus-tracking-app-jatri-attracts-funding-from-uae-investors-to-revitalise-public-transportation-in-bangladesh-20200123/" target="_blank">
            <div data-aos="flip-up">
              <img src="~/assets/images/press/3.png" alt="" class="p-8 sm:p-12 w-28 sm:w-36 md:w-48">
            </div>
          </a>
          <a href="https://www.wamda.com/2021/08/lessons-mena-rise-bus-sharing-bangladesh" target="_blank">
            <div data-aos="flip-up">
              <img src="~/assets/images/press/5.png" alt="" class="white_filter p-5 w-28 md:w-48">
            </div>
          </a>
          <a href="https://thefinancialexpress.com.bd/trade/public-transportation-app-jatri-to-make-passenger-experience-happier-1579796363" target="_blank">
            <div data-aos="flip-up">
              <img src="~/assets/images/press/2.png" alt="" class="w-28 md:w-48">
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- Featured Section End -->

  <!-- Testimonial Section Start -->
  <section>
    <div data-aos="fade-up">
      <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto py-20">
        <div class="flex flex-col justify-center text-center corporate_color">
          <h1 class="text-2xl md:text-3xl uppercase text-gray-400 font-bold">Don't just Take Our Word For It</h1>
        </div>

        <swiper
          :breakpoints="{
            320: {
              slidesPerView: 1
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }"
          :spaceBetween="30"
          :freeMode="true"
          :pagination="{
            clickable: true,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="lg:mb-0 mb-6 p-4 pt-12">
              <div class="flex flex-col justify-center items-center text-center relative min-h-[335px] corporate_bg_color rounded-2xl testimonial_body md:py-10">
                <img src="~/assets/images/testimonial/partnerImage.jpg"  alt="testimonial" class="absolute -top-10 w-24 h-24 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" >
                <div class="pt-16 pb-5 px-8 font-thin text-white">
                  <p class="leading-relaxed text-sm body_text">I really appreciate the expansion opportunity Jatri has provided for my rental car service. With inter-city rides coming in regularly, I’ve managed to organically boost my income and grow my rental business.</p>
                  <span class="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                  <h2 class="font-medium title-font tracking-wider text-lg body_text">Our partner</h2>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="lg:mb-0 mb-6 p-4 pt-12 swiper-slide">
              <div class="flex flex-col justify-center items-center text-center relative min-h-[335px] corporate_bg_color rounded-2xl testimonial_body md:py-10">
                <img src="~/assets/images/testimonial/ownerImage.jpg"  alt="testimonial" class="absolute -top-10 w-24 h-24 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" >
                <div class="pt-16 pb-5 px-8 font-thin text-white">
                  <p class="leading-relaxed text-sm body_text">Jatri’s fleet management is a blessing to my business. It is incredibly convenient and time-saving, and helps run my bus service smoothly.</p>
                  <span class="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                  <h2 class="font-medium title-font tracking-wider text-lg body_text">Bus Owner</h2>
                </div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="lg:mb-0 mb-6 p-4 pt-12 swiper-slide">
              <div class="flex flex-col justify-center items-center text-center relative min-h-[335px] corporate_bg_color rounded-2xl testimonial_body md:py-10">
                <img src="~/assets/images/testimonial/user_01.jpg"  alt="testimonial" class="absolute -top-10 w-24 h-24 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" >
                <div class="pt-16 pb-5 px-8 font-thin text-white">
                  <p class="leading-relaxed text-sm body_text">Jatri is the go-to rental solution for my family on vacations. Planning a trip takes a lot of effort and energy, so finding a trustworthy rental car within an hour definitely helps speed up our plans!</p>
                  <span class="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                  <h2 class="font-medium title-font tracking-wider text-lg body_text">User</h2>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <!-- <div class="swiper-container mySwiperTestimonial mt-5 md:mt-0">
          <div class="py-9 swiper-wrapper">

            <div class="lg:mb-0 mb-6 p-4 swiper-slide">
              <div class="flex flex-col justify-center items-center text-center relative corporate_bg_color rounded-2xl testimonial_body md:py-10">
                <img src="~/assets/images/testimonial/partnerImage.jpg"  alt="testimonial" class="absolute -top-10 w-24 h-24 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" >
                <div class="pt-16 pb-5 px-8 font-thin text-white">
                  <p class="leading-relaxed text-sm body_text">I really appreciate the expansion opportunity Jatri has provided for my rental car service. With inter-city rides coming in regularly, I’ve managed to organically boost my income and grow my rental business.</p>
                  <span class="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                  <h2 class="font-medium title-font tracking-wider text-lg body_text">Our partner</h2>
                </div>
              </div>
            </div>

            <div class="lg:mb-0 mb-6 p-4 swiper-slide">
              <div class="flex flex-col justify-center items-center text-center relative corporate_bg_color rounded-2xl testimonial_body md:py-10">
                <img src="~/assets/images/testimonial/ownerImage.jpg"  alt="testimonial" class="absolute -top-10 w-24 h-24 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" >
                <div class="pt-16 pb-5 px-8 font-thin text-white">
                  <p class="leading-relaxed text-sm body_text">Jatri’s fleet management is a blessing to my business. It is incredibly convenient and time-saving, and helps run my bus service smoothly.</p>
                  <span class="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                  <h2 class="font-medium title-font tracking-wider text-lg body_text">Bus Owner</h2>
                </div>
              </div>
            </div>

            <div class="lg:mb-0 mb-6 p-4 swiper-slide">
              <div class="flex flex-col justify-center items-center text-center relative corporate_bg_color rounded-2xl testimonial_body md:py-10">
                <img src="~/assets/images/testimonial/user_01.jpg"  alt="testimonial" class="absolute -top-10 w-24 h-24 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" >
                <div class="pt-16 pb-5 px-8 font-thin text-white">
                  <p class="leading-relaxed text-sm body_text">Jatri is the go-to rental solution for my family on vacations. Planning a trip takes a lot of effort and energy, so finding a trustworthy rental car within an hour definitely helps speed up our plans!</p>
                  <span class="inline-block h-1 w-10 rounded bg-white mt-6 mb-4"></span>
                  <h2 class="font-medium title-font tracking-wider text-lg body_text">User</h2>
                </div>
              </div>
            </div>

          </div>
          <div class="swiper-pagination mt-5"></div>
        </div> -->

      </div>
    </div>
  </section>
  <!-- Testimonial Section End -->

</template>



  <!-- Banner Section End -->
  <!-- <select v-model="locale">
    <option value="en">en</option>
    <option value="bn">bn</option>
  </select>
  <p>{{ $t('title') }}</p> -->