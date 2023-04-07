<style scoped>
.tabs .tab {
    @apply bg-transparent px-6 py-2.5 text-base text-dark font-medium rounded-full cursor-pointer transition-[color,background] duration-500
}

#one:checked ~ .tabs #tab-one,
#two:checked ~ .tabs #tab-two,
#three:checked ~ .tabs #tab-three {
    @apply bg-primary text-white gap-6 xl:gap-10
}

.panels {
    @apply mt-14 grid grid-cols-3
}
.panels .panel {
  @apply h-[460px] w-[340px] overflow-hidden rounded-3xl flex flex-col justify-center transform scale-100 duration-1000 transition-[transform,width]
}
.panel-content {
    @apply px-5 py-6
}
.panel-content .title {
    @apply text-white text-[45px] leading-[52px] font-semibold text-center transition-[text-align,font-size] duration-300
 }
.panel-content .description {
    @apply text-white text-base mt-1 text-center transition-[text-align,font-size] duration-300
 }

.panel-hidden-content {
    @apply shadow-[0_0_24px_rgba(116,19,9,0.3)] rounded-3xl px-5 py-6 space-y-6 transform translate-y-56 h-0 transition-[transform,height] duration-300
}

.radio {
  @apply hidden
}

#one:checked ~ .panels #panel-one,
#two:checked ~ .panels #panel-two,
#three:checked ~ .panels #panel-three {
    @apply scale-110
}

#one:checked ~ .panels #panel-one .panel-content h5,
#two:checked ~ .panels #panel-two .panel-content h5,
#three:checked ~ .panels #panel-three .panel-content h5 {
  @apply text-left text-xl
}
#one:checked ~ .panels #panel-one .panel-content p,
#two:checked ~ .panels #panel-two .panel-content p,
#three:checked ~ .panels #panel-three .panel-content p {
    @apply text-left text-sm
}

#one:checked ~ .panels #panel-one .panel-hidden-content ,
#two:checked ~ .panels #panel-two .panel-hidden-content ,
#three:checked ~ .panels #panel-three .panel-hidden-content  {
  @apply translate-y-0 h-full
}
</style>

<template>
    <section class="custom-container">
        <h3 class="primary-heading text-center">Our products</h3>

        <div class="mt-10 mb-14">
            <input class="radio" id="one" name="group" type="radio" checked>
            <input class="radio" id="two" name="group" type="radio">
            <input class="radio" id="three" name="group" type="radio">
            <div class="tabs flex justify-center">
                <div class="bg-[#FDE5E2] inline-block px-1 py-3 rounded-full">
                    <label class="tab" id="tab-one" for="one">User</label>
                    <label class="tab" id="tab-two" for="two">Partner</label>
                    <label class="tab" id="tab-three" for="three">Business solutions</label>
                </div>
            </div>
            
            
            <div class="panels">
                <div class="panel bg-primary" id="panel-one">
                    <div class="panel-content">
                        <h5 class="title">Users</h5>
                        <p class="description">Our plethora of services makes the users life convenien</p>
                    </div>

                    <div class="panel-hidden-content bg-primary">
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                    </div>
                </div>

                <div class="panel bg-info" id="panel-two">
                    <div class="panel-content">
                        <h5 class="title">Users</h5>
                        <p class="description">Our plethora of services makes the users life convenien</p>
                    </div>

                    <div class="panel-hidden-content">
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                    </div>
                </div>

                <div class="panel bg-success" id="panel-three">
                    <div class="panel-content">
                        <h5 class="title">Users</h5>
                        <p class="description">Our plethora of services makes the users life convenien</p>
                    </div>

                    <div class="panel-hidden-content">
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                        <div class="flex items-center gap-4">
                            <img src="~/assets/images/svg/product-jatri-logo.svg" alt="jatri logo">
                            <p class="text-white text-2xl font-medium">Jatri Rental</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>