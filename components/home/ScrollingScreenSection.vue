
<template>
  <section class="custom-container mt-10">
    <div class="pb-32">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        <div class="row-span-3 w-full bg-grey rounded-3xl pt-14 px-14 overflow-hidden h-[480px] lg:h-[816px]">
          <img src="~/assets/images/svg/screen1.svg" alt="screen img" class="screen-move block m-auto">
          <img src="~/assets/images/svg/screen1.svg" alt="screen img" class="screen-move block m-auto">
          <img src="~/assets/images/svg/screen1.svg" alt="screen img" class="screen-move block m-auto">
          <img src="~/assets/images/svg/screen1.svg" alt="screen img" class="screen-move block m-auto">
          <img src="~/assets/images/svg/screen1.svg" alt="screen img" class="screen-move block m-auto">
        </div>

        <div class="lg:row-span-2 bg-grey rounded-3xl px-6 md:px-8 grid grid-cols-2 md:grid-cols-1 sm:justify-center items-center gap-4 sm:gap-8">
          <div>
            <img src="~/assets/images/svg/green-user.svg" alt="screen img" class="block md:m-auto">
            <p class="mt-[18px] text-dark text-base sm:text-2xl font-medium md:text-center">You can bid your fare and choose your desired car.</p>
          </div>

          <div class="flex justify-end md:justify-center self-end">
            <img src="~/assets/images/svg/bidding-ongoing1.svg" alt="Bidding Ongoing Img" class="pt-6">
          </div>
        </div>

        <div class="lg:row-span-2 bg-grey rounded-3xl px-6 md:px-8 grid grid-cols-2 md:grid-cols-1 sm:justify-center items-center gap-4 sm:gap-8">
          <div>
            <img src="~/assets/images/svg/green-user.svg" alt="screen img" class="block md:m-auto">
            <p class="mt-[18px] text-dark text-base sm:text-2xl font-medium md:text-center">Safer trips with our safety tools and features.</p>
          </div>

          <div class="flex justify-end md:justify-center self-end">
            <img src="~/assets/images/svg/bidding-ongoing1.svg" alt="Bidding Ongoing Img" class="pt-6">
          </div>
        </div>

        <div class="lg:col-span-2 bg-grey rounded-3xl p-12 overflow-hidden">
          <p class="text-2xl text-[#8D8D8F]">Get ready, Book & GO!</p>
          <h3 class="primary-heading mt-2 mb-6">Your mobility super-app</h3>
          <div class="inline-block m-auto">
            <a href="https://play.google.com/store/apps/details?id=com.jatri.jatriuser&hl=en&gl=US" target="_blank" class="flex justify-center items-center gap-2.5 rounded-full bg-success px-8 py-3.5 cursor-pointer">
              <img src="~/assets/images/svg/google-play-icon-white.svg" alt="Google play icon">
              <span class="text-base font-medium text-white">Play store</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.screen-move {
  animation: screenMove 5s linear infinite 1s;
  will-change: transform;
}

@keyframes screenMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>