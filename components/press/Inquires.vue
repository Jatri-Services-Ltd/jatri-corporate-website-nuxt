<template>
    <div class="custom-container mt-6 md:mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-10 pb-12 md:pb-[120px]">
            <div class="mb-12 md:mb-0">
                <form>
                    <div class="mb-4">
                        <label for="" class="block mb-[10px]">Name*</label>
                        <input type="text" placeholder="Enter your name" class="bg-grey px-4 py-[18px] rounded-[4px] w-full placeholder:text-sm placeholder:text-[#676769]">
                    </div>
                    <div class="mb-4">
                        <label for="" class="block mb-[10px]">Email*</label>
                        <input type="text" placeholder="Enter email" class="bg-grey px-4 py-[18px] rounded-[4px] w-full  placeholder:text-sm placeholder:text-[#676769]">
                    </div>
                    <div class="mb-4">
                        <label for="" class="block mb-[10px]">Phone*</label>
                        <input type="text" placeholder="Enter phone" class="bg-grey px-4 py-[18px] rounded-[4px] w-full  placeholder:text-sm placeholder:text-[#676769]">
                    </div>
                    <div class="mb-4">
                        <label for="" class="block mb-[10px]">Publication/Media/Entity</label>
                        <input type="text" placeholder="Enter your Publication/Media/Entity" class="bg-grey px-4 py-[18px] rounded-[4px] w-full  placeholder:text-sm placeholder:text-[#676769]">
                    </div>
                    <div class="mb-4">
                        <label for="" class="block mb-[10px]">Publication/Media/Entity</label>
                        <input type="text" placeholder="Enter your Publication/Media/Entity" class="bg-grey px-4 py-[18px] rounded-[4px] w-full  placeholder:text-sm placeholder:text-[#676769]">
                    </div>
                    <div class="mb-8 md:mb-14">
                        <label for="" class="block mb-[10px]">Message*</label>
                       <textarea rows="6" class="bg-grey px-4 py-[18px] rounded-[4px] w-full  placeholder:text-sm placeholder:text-[#676769]" placeholder="Type your message"></textarea>
                    </div>
                    <button class="h-10 md:h-[60px] w-[149px] md:w-[250px] flex justify-center items-center gap-2 rounded-full bg-corporate text-white text-sm md:text-xl font-medium">
                        <img class="h-4 md:h-6 w-4 md:w-6" src="/images/press/send-icon.svg" alt="Submit inquiry">
                        <span>Submit inquiry</span>
                    </button>
                </form>
            </div>
            <div>
                <div class="border border-lightGrey rounded-2xl p-6">
                    <img class="h-6 md:h-7 w-6 md:w-7" src="/images/press/info-icon.svg" alt="Press Info">
                    <p class="mt-3 mb-5 text-xl">This form is only for press related inquiries.</p>
                    <p class="text-xl"> We are unable to respond to customer service inquiries through this contact form. If you’re having an issue with any of our services and would like to reach Customer Service, click below:</p>
                    <div class="mt-4">
                        <nuxt-link to="#" class="bg-lightGrey h-9 w-[150px] flex justify-center items-center text-xs font-medium rounded-full text-dark">
                            Customer service
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
textarea{
    resize: none;
}
</style>