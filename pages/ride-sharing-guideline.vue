<template>
    <header>
        <div class="ride-sharing-guideline-header py-5 md:py-8 text-white">
            <div class="custom-container">
                <div class="flex items-center gap-3 mb-[10px]">
                    <p class="text-xs sm:text-sm">Home</p>
                    <div class="relative">
                        <div class="right-arrow absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
                    </div>
                    <p class="text-xs sm:text-sm ml-2 md:ml-3">Others</p>
                    <div class="relative">
                        <div class="right-arrow absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
                    </div>
                    <p class="text-xs sm:text-sm ml-2 md:ml-3">Ride Sharing Guideline</p>
                </div>
                <h2 class="text-[28px] md:text-4xl font-medium">Ride Sharing Guideline</h2>
            </div>
        </div>
    </header>
    <main>
        <section class="py-20 custom-container">
            <div class="bg-[] rounded-2xl p-8"></div>
        </section>
    </main>
</template>

<script setup>

</script>

<style scoped>
.ride-sharing-guideline-header{
    background-image: url('/images/ride-sharing/ride-sharing-guideline-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;

}
.right-arrow {
	height: 0px; 
    width: 0px;
	border: 3.8px solid;
	border-color: 
		white
		white
		transparent
		transparent;
	transform: rotate(45deg);
}

</style>