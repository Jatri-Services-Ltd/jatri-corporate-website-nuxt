<template>
    <div class="border-b border-lightGrey py-6 lg:py-10">
        <div class="custom-container">
            <p class="text-dark text-[28px] lg:text-[57px] leading-9 lg:leading-[64px] font-semibold">Contact us</p>
        </div>
    </div>
    <div class="mt-6 lg:mt-10 custom-container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-0 lg:gap-x-10">
            <div class="order-2 lg:order-1">
                <div class="border border-lightGrey rounded-2xl p-5">
                    <div class="flex items-center gap-5">
                        <img src="/images/contact-us/call-icon.svg" alt="Contact us">
                        <div>
                            <p class="text-sm lg:text-base text-secondaryDark mb-1">Call us</p>
                            <p class="text-dark font-medium text-base lg:text-xl">09642080808</p>
                        </div>
                    </div>
                    <div class="border-b border-lightGrey ml-10 pt-4 mb-4"></div>
                    <div class="flex items-center gap-5">
                        <img src="/images/contact-us/mail-icon.svg" alt="Contact us">
                        <div>
                            <p class="text-sm lg:text-base text-secondaryDark mb-1">Write us at</p>
                            <p class="text-dark font-medium text-base lg:text-xl">support@jatri.co</p>
                        </div>
                    </div>
                    <div class="border-b border-lightGrey ml-10 pt-4 mb-4"></div>
                    <div class="flex items-center gap-5">
                        <img src="/images/contact-us/map-icon.svg" alt="Contact us">
                        <div>
                            <p class="text-sm lg:text-base text-secondaryDark mb-1">Visit us</p>
                            <p class="text-dark font-medium text-base lg:text-xl">Road 24, House 15, Gulshan-02, Dhaka 1212</p>
                        </div>
                    </div>
                    <div class="ml-10 pt-4">
                        <button class="h-10 w-[145px] flex items-center gap-2 justify-center border border-lightGrey rounded-full">
                            <p class="font-medium text-sm">Google map</p>
                            <img src="/images/contact-us/map-arrow.svg" alt="Show google map">
                        </button>
                    </div>
                </div>
            </div>
            <div class="order-1 lg:order-2 mb-12 lg:mb-0">
                <div class="bg-grey rounded-2xl p-8">
                    <form action="">
                        <div class="mb-4">
                            <label for="" class="mb-[10px] font-medium text-base block">Name</label>
                            <input type="text" placeholder="Enter your name" class="bg-white w-full px-4 py-[18px] placeholder:text-[#676769] placeholder:text-sm focus:outline-none">
                        </div>
                        <div class="mb-4">
                            <label for="" class="mb-[10px] font-medium text-base block">Email</label>
                            <input type="text" placeholder="Enter email" class="bg-white w-full px-4 py-[18px] placeholder:text-[#676769] placeholder:text-sm focus:outline-none">
                        </div>
                        <div class="mb-6 lg:mb-12">
                            <label for="" class="mb-[10px] font-medium text-base block">Message</label>
                            <textarea rows="6" class="bg-white w-full px-4 py-[18px] placeholder:text-[#676769] placeholder:text-sm focus:outline-none" placeholder="Type your message"></textarea>
                        </div>
                        <button type="submit" class="bg-corporate text-white h-10 lg:h-[60px] w-[149px] lg:w-[250px] flex items-center gap-2 justify-center border border-lightGrey rounded-full">
                            <img class="h-4 lg:h-6 w-4 lg:w-6" src="/images/contact-us/send-icon.svg" alt="Send Message">
                            <span class="inline-block text-sm lg:text-xl font-medium">Send message</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="pt-12 lg:pt-[120px]">
        <AboutUsLookingForTalent />
    </div>
</template>

<script setup>

</script>

<style scoped>
textarea {
  resize: none;
}
</style>