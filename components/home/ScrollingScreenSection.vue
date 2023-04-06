
<style scoped>
.screen-move {
  animation: screenMove 10s linear infinite 1s;
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

<template>
  <section class="custom-container">
    <div class="pb-32">
      <div class="grid lg:grid-rows-2 lg:grid-cols-3 gap-4 lg:gap-8">
        <div class="w-full lg:row-span-2 bg-grey rounded-3xl pt-14 px-14 overflow-hidden h-[480px] lg:h-[816px]">
          <img src="~/assets/images/svg/screen1.svg" alt="screen img" class="screen-move block m-auto">
          <img src="~/assets/images/svg/screen1.svg" alt="screen img" class="screen-move block m-auto">
          <img src="~/assets/images/svg/screen1.svg" alt="screen img" class="screen-move block m-auto">
          <img src="~/assets/images/svg/screen1.svg" alt="screen img" class="screen-move block m-auto">
          <img src="~/assets/images/svg/screen1.svg" alt="screen img" class="screen-move block m-auto">
        </div>

        <div class="bg-grey rounded-3xl pt-6 px-6 grid grid-cols-2 lg:grid-cols-1 lg:justify-center place-content-end gap-8">
          <div>
            <img src="~/assets/images/svg/green-user.svg" alt="screen img" class="mb-[18px] m-auto">
            <p class="text-dark text-base lg:text-2xl font-medium text-center">You can bid your fare and choose your desired car.</p>
          </div>

          <div>
            <img src="~/assets/images/svg/bidding-ongoing1.svg" alt="Bidding Ongoing Img" class="m-auto">
          </div>
        </div>

        <div class="bg-cyan-500">03</div>
        <div class="lg:col-span-2 bg-blue-700">04</div>
      </div>
    </div>
  </section>
</template>