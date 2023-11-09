<script setup>
const toggleModal = inject("toggleModal")
</script>

<template>
  <div class="mx-4 px-4 py-6 sm:w-[380px] bg-white rounded-md shadow-xl flex justify-center items-center">
    <div class="text-center">
      <img class="mx-auto" src="~/assets/images/job_circular/success.svg" alt="">
      <div class="my-6">
        <p class="mb-2 text-dark text-xl font-medium">Application submitted</p>
        <p class="text-[#676769] text-sm">
          Your application has been submitted successfully. We appreciate your interest.
          We will get back to you for further procedures.
        </p>
      </div>
      <button @click="toggleModal"
        class="w-full px-6 py-2.5 bg-corporate rounded-full font-medium text-white text-sm">Okay</button>
    </div>
  </div>
</template>