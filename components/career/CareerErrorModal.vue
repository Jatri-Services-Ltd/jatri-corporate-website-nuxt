<script setup>
const error = inject("error")
const isModalOpen = inject("isModalOpen")
const closeModal = () => {
  error.value = false
}
</script>

<template>
  <div class="mx-4 px-4 py-6 sm:w-[380px] bg-white rounded-md shadow-xl flex justify-center items-center">
    <div class="text-center">
      <img class="mx-auto" src="~/assets/images/job_circular/error.svg" alt="">
      <div class="my-6">
        <p class="mb-2 text-dark text-xl font-medium">Application submission failed</p>
        <p class="text-[#676769] text-sm">
          Your application was not successful. Please try again.
        </p>
      </div>
      <button @click="closeModal" class="w-full px-6 py-2.5 bg-corporate rounded-full font-medium text-white text-sm">Try again</button>
    </div>
  </div>
</template>