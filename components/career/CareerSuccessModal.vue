<script setup>
const success = inject("success")
const openModal = inject("openModal")
const closeModal = () => {
  success.value = false
  openModal.value = false
}

</script>

<template>
    <div class="flex justify-center items-center">
      <div class="w-[380px] h-[288px] bg-white rounded-2xl">
        <div class="py-6 px-4">
          <div class="flex flex-col justify-center items-center">
            <img src="~/assets/images/job_circular/success.svg" alt="">
          </div>
          <p class="mt-6 text-dark text-xl font-medium text-center">Application submitted</p>
          <p class="mt-6 text-[#676769] text-sm font-normal text-center">Your application has been submitted successful. We appreciate your interest. We will get back to you for further procedures. </p>
          <button @click="closeModal" class="w-full bg-corporate rounded-full text-center text-white text-sm py-2 mt-4">Okay</button>
        </div>
      </div>
    </div>
</template>