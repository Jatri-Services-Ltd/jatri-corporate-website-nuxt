<script setup>
const error = inject("error")
const openModal = inject("openModal")
const closeModal = () => {
  error.value = false
}
</script>

<template>
  <div class="flex justify-center items-center">
    <div class="w-[380px] h-[288px] bg-white rounded-2xl">
      <div class="py-6 px-4">
        <div class="flex flex-col justify-center items-center">
          <img src="~/assets/images/job_circular/error.svg" alt="">
        </div>
        <p class="mt-6 text-dark text-xl font-medium text-center">Application submission failed</p>
        <p class="mt-6 text-[#676769] text-sm font-normal text-center">Your application was not successful. Please
          try again.</p>
        <button @click="closeModal" class="w-full bg-corporate rounded-full text-center text-white text-sm py-2 mt-4">Try again</button>
      </div>
    </div>
  </div>
</template>