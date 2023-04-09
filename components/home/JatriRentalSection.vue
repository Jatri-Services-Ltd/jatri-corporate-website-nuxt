<style scoped>
.rental-animation,
.rental-animation2  {
    display: flex;
    gap: 6px;
    padding: 0 30px;
}
.rental-animation {
    animation: rentalMove 3s linear infinite;
    will-change: transform;
}
.rental-animation2 {
    animation: rentalMove2 3s linear infinite;
    will-change: transform;
}


@keyframes rentalMove {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

@keyframes rentalMove2 {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}

.sticky-wrapper .sticky-item {
  transform: translateZ(0);
  will-change: transform, opacity;
  height: 1300px;
  position: sticky;
  top: calc(25vh + 52px - 215px - 40px);
  transition: all 0.3s;
  animation: slideDown  0.35s ease-out;
}
.sticky-wrapper .sticky-item .card-container {
  top: 50px;
  position: absolute;
  left: 0;
  transform: translateZ(0);
  width: 100%;
  /*height: 570px;*/
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}


@keyframes sticky-slide-in {
  from {
    opacity: 50%;
    transform: translateX(100px) scale(0.5);
  }
  80%  {
    opacity: 90%;
  }
  to {
    opacity: 100%;
    transform: scale(1);
  }
}

</style>

<template>
  <div class="sticky-wrapper">
    <div class="sticky-item">
      <div class="card-container">
        <section class="custom-container">
          <div>
            <div class="bg-[#FDE5E2] relative rounded-3xl overflow-hidden">
              <div class="pt-8 xl:pt-16 pb-40 px-6 text-center">
                <h3 class="primary-heading">Jatri Ticket</h3>
                <p class="text-[#151414] text-base mt-2 mb-6">Lorem ipsum dolor sit amet consectetur. Suspendisse cras arcu est et dignissim non lacus neque sit.</p>
                <a href="#" class="bg-[#F04935] text-white text-center px-6 py-2.5 rounded-full text-sm">Learn More</a>
              </div>

              <div class="relative">
                <div class="bg-[#FCD7D3] py-2.5 overflow-hidden transform -rotate-[5deg] -translate-x-6 w-[2000px] absolute -top-20 z-0">
                  <div class="flex w-max">
                    <div class="rental-animation2">
                      <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                      <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation2">
                      <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                      <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation2">
                      <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                      <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation2">
                      <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                      <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation2">
                      <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                      <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation2">
                      <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                      <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation2">
                      <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                      <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation2">
                      <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                      <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation2">
                      <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                      <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                    </div>
                  </div>
                </div>

                <div class="bg-[#F04935] py-2.5 overflow-hidden transform rotate-[5deg] -translate-x-6 w-[2000px] z-10">
                  <div class="flex w-max">
                    <div class="rental-animation">
                      <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                      <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation">
                      <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                      <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation">
                      <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                      <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation">
                      <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                      <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation">
                      <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                      <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation">
                      <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                      <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation">
                      <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                      <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation">
                      <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                      <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                    </div>

                    <div class="rental-animation">
                      <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                      <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                    </div>
                  </div>
                </div>
              </div>

              <img src="~/assets/images/svg/rental-sec-bg.svg" alt="rental bg img" class="w-full rounded-3xl">
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="sticky-item">
      <div class="card-container">
        <section class="custom-container">
          <div class="relative rounded-3xl overflow-hidden" style="background: red;">
            <div class="pt-8 xl:pt-16 pb-40 px-6 text-center">
              <h3 class="primary-heading">Jatri Rental</h3>
              <p class="text-[#151414] text-base mt-2 mb-6">Lorem ipsum dolor sit amet consectetur. Suspendisse cras arcu est et dignissim non lacus neque sit.</p>
              <a href="#" class="bg-[#F04935] text-white text-center px-6 py-2.5 rounded-full text-sm">Learn More</a>
            </div>

            <div class="relative">
              <div class="bg-[#FCD7D3] py-2.5 overflow-hidden transform -rotate-[5deg] -translate-x-6 w-[2000px] absolute -top-20 z-0">
                <div class="flex w-max">
                  <div class="rental-animation2">
                    <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                    <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation2">
                    <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                    <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation2">
                    <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                    <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation2">
                    <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                    <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation2">
                    <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                    <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation2">
                    <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                    <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation2">
                    <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                    <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation2">
                    <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                    <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation2">
                    <img src="~/assets/images/svg/light-wheel.svg" alt="percentage icon">
                    <p class="text-[#F7A299] text-xl font-medium">Fixed & low fare rides</p>
                  </div>
                </div>
              </div>

              <div class="bg-[#F04935] py-2.5 overflow-hidden transform rotate-[5deg] -translate-x-6 w-[2000px] z-10">
                <div class="flex w-max">
                  <div class="rental-animation">
                    <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                    <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation">
                    <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                    <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation">
                    <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                    <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation">
                    <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                    <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation">
                    <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                    <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation">
                    <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                    <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation">
                    <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                    <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation">
                    <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                    <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                  </div>

                  <div class="rental-animation">
                    <img src="~/assets/images/svg/percentage-round.svg" alt="percentage icon">
                    <p class="text-white text-xl font-medium">Fixed & low fare rides</p>
                  </div>
                </div>
              </div>
            </div>

            <img src="~/assets/images/svg/rental-sec-bg.svg" alt="rental bg img" class="w-full rounded-3xl">
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
