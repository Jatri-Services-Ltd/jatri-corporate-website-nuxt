<script setup>
const activeTab = ref(0)

const switchtab = (n) => {
  activeTab.value = n
}
</script>

<template>
    <section class="custom-container">
        <h3 class="primary-heading text-center">Our products</h3>

        <div class="mt-10 mb-14">
            <input class="radio" id="radio-one" name="group" type="radio" checked value="0" v-model="activeTab">
            <input class="radio" id="radio-two" name="group" type="radio" value="1" v-model="activeTab">
            <input class="radio" id="radio-three" name="group" type="radio" value="2" v-model="activeTab">
            <div class="tabs flex justify-center">
                <div class="bg-[#FDE5E2] inline-block px-1 py-3 rounded-full">
                    <label @click="switchtab(0)" class="tab" id="tab-one" for="radio-one" data-i="0">User</label>
                    <label @click="switchtab(1)" class="tab" id="tab-two" for="radio-two" data-i="1">Partner</label>
                    <label @click="switchtab(2)" class="tab" id="tab-three" for="radio-three" data-i="2">Business solutions</label>
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

<style scoped>
.radio {
  @apply hidden
}

.tabs .tab {
    @apply px-6 py-2.5 bg-transparent text-dark text-base font-medium rounded-full cursor-pointer transition-[color,background] duration-500
}

#radio-one:checked ~ .tabs #tab-one,
#radio-two:checked ~ .tabs #tab-two,
#radio-three:checked ~ .tabs #tab-three {
    @apply bg-primary text-white
}

#radio-one:checked ~ .tabs #tab-one,
#radio-two:checked ~ .tabs #tab-two,
#radio-three:checked ~ .tabs #tab-three {
    @apply bg-primary text-white
}

.panels {
    @apply pt-6 lg:pt-14 w-full flex justify-center space-x-6 lg:space-x-10 overflow-hidden lg:overflow-visible
}
.panels .panel {
  @apply h-[460px] w-[340px] overflow-hidden flex-shrink-0 rounded-3xl flex flex-col justify-center transform scale-100 duration-1000 transition-transform
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

#radio-one:checked ~ .panels #panel-one,
#radio-two:checked ~ .panels #panel-two,
#radio-three:checked ~ .panels #panel-three {
    @apply lg:scale-110
}

#radio-one:checked ~ .panels #panel-one .panel-content h5,
#radio-two:checked ~ .panels #panel-two .panel-content h5,
#radio-three:checked ~ .panels #panel-three .panel-content h5 {
  @apply text-left text-xl
}

#radio-one:checked ~ .panels #panel-one .panel-content p,
#radio-two:checked ~ .panels #panel-two .panel-content p,
#radio-three:checked ~ .panels #panel-three .panel-content p {
    @apply text-left text-sm
}

#radio-one:checked ~ .panels #panel-one .panel-hidden-content ,
#radio-two:checked ~ .panels #panel-two .panel-hidden-content ,
#radio-three:checked ~ .panels #panel-three .panel-hidden-content  {
  @apply translate-y-0 h-full
}
</style>