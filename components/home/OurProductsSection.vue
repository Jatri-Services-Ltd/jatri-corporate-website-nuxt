<style scoped>
.tabs .tab {
    @apply bg-transparent px-6 py-2.5 text-base text-dark font-medium rounded-full cursor-pointer transition-[color,background] duration-500
}

#radio1:checked ~ .tabs #tab-one,
#radio2:checked ~ .tabs #tab-two,
#radio3:checked ~ .tabs #tab-three {
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

#radio1:checked ~ .panels #panel-one,
#radio2:checked ~ .panels #panel-two,
#radio3:checked ~ .panels #panel-three {
    @apply scale-110
}

#radio1:checked ~ .panels #panel-one .panel-content h5,
#radio2:checked ~ .panels #panel-two .panel-content h5,
#radio3:checked ~ .panels #panel-three .panel-content h5 {
  @apply text-left text-xl
}
#radio1:checked ~ .panels #panel-one .panel-content p,
#radio2:checked ~ .panels #panel-two .panel-content p,
#radio3:checked ~ .panels #panel-three .panel-content p {
    @apply text-left text-sm
}

#radio1:checked ~ .panels #panel-one .panel-hidden-content ,
#radio2:checked ~ .panels #panel-two .panel-hidden-content ,
#radio3:checked ~ .panels #panel-three .panel-hidden-content  {
  @apply translate-y-0 h-full
}

input {
  position: absolute;
  opacity: 0;
}

.radio_wrap {
  position: relative;
  overflow: hidden;
  z-index: 0;
  --i: 0;
  width: 600px;
  background: #FDE5E2;
  border-radius: 2rem;
}

.radio_wrap:before {
  content: "";
  position: absolute;
  z-index: -1;
  width: calc(100% / 3);
  top: 1px;
  left: calc(var(--i) * (100% / 3));
  height: 100%;
  background: #F04935;
  transition: .3s ease-in-out;
  border-radius: 2rem;
}

label {
  min-width: calc(100% / 3);
  position: relative;
  z-index: 2;
  float: left;
  text-align: center;
  text-shadow: none;
  color: grey;
  font-size: 16px;
  transition: color .3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;
}

input:checked + label {
  color: white;
}
</style>

<script setup>
const activeTab = ref(0)

const switchtab = (n) => {
  activeTab.value = n
}
</script>

<template>
    <section class="custom-container">
        <h3 class="primary-heading text-center">Our products</h3>


        <div class="radio_wrap" :style="{'--i': activeTab}">
            <input type="radio" id="radio1" name="radio1" value="0" v-model="activeTab">
            <label @click="switchtab(0)" for="radio1" data-i="0">User</label>
            <input type="radio" id="radio2" name="radio2" value="1" v-model="activeTab">
            <label @click="switchtab(1)" for="radio2" data-i="1">Partner</label>
            <input type="radio" id="radio3" name="radio3" value="2" v-model="activeTab">
            <label @click="switchtab(2)" for="radio3" data-i="2">Business Solutions</label>

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

        



        <!-- <div class="mt-10 mb-14">
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
        </div> -->

    </section>
</template>