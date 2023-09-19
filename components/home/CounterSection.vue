<template>
  <section class="custom-container relative -mt-[72px] mb-[100px]">
    <div class="bg-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] rounded-[20px] mx-[100px] px-14 py-8 flex justify-between items-center gap-4">
      <div class="flex items-center gap-6">
        <img src="~/assets/images/home/counter-user-icon.png" alt="User icon">
        <div>
          <h4 class="text-4xl	font-bold text-dark">{{ $t('n-counter-item1-amount') }}</h4>
          <p class="mt-2 text-base font-medium text-[#676769]">{{ $t('n-counter-item1-title') }}</p>
        </div>
      </div>

      <div class="flex items-center gap-6">
        <img src="~/assets/images/home/counter-ticket-icon.png" alt="Ticket icon">
        <div>
          <h4 class="text-4xl	font-bold text-dark">{{ $t('n-counter-item2-amount') }}</h4>
          <p class="mt-2 text-base font-medium text-[#676769]">{{ $t('n-counter-item2-title') }}</p>
        </div>
      </div>

      <div class="flex items-center gap-6">
        <img src="~/assets/images/home/counter-partner-icon.png" alt="Partner icon">
        <div>
          <h4 class="text-4xl	font-bold text-dark">{{ $t('n-counter-item3-amount') }}</h4>
          <p class="mt-2 text-base font-medium text-[#676769]">{{ $t('n-counter-item3-title') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>