<template>
  <section class="relative custom-container mt-12 mb-0 sm:mb-12 lg:mb-[120px] lg:mt-[120px]">
    <div class="py-10 lg:py-16 px-4 sm:px-8 md:px-10 lg:px-[60px] rounded-b-none sm:rounded-2xl bg-[url('~/assets/images/common/call-to-action-bg.png')] bg-center bg-cover bg-no-repeat">
      <h4 class="text-dark font-medium text-2xl lg:text-[45px] lg:leading-[52px]">Grow your business with us</h4>
      <p class="pt-4 pb-8 lg:pb-10 text-dark text-sm xl:text-base w-full sm:w-2/3 xl:w-1/2">Lorem ipsum dolor sit amet consectetur. Vestibulum at pretium maecenas scelerisque id nec volutpat. Ac arcu nisl eget ultrices.</p>
      <router-link :to="localePath('/contact-us')" class="bg-dark py-2.5 lg:py-4 px-[30px] lg:px-14 rounded-full text-white text-sm lg:text-base">Contact us</router-link>
    </div>
  </section>
</template>

<style scoped>
@media screen and (max-width: 412px) {
  .custom-container {
    @apply px-0
  }
}
</style>