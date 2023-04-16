<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const activeTab = ref(0)
const autoSlideInterVal = ref(null)
var round = 0;
const switchTab = (n, click=false) => {
  if(n === 2 &&  click) {
    round = 2
  } else {
    round = n
  }
  clearInterval(autoSlideInterVal.value)
  activeTab.value = n
  let nodeElement = document.getElementsByClassName('radio_wrap')[0]
  let tabPane = document.querySelector('.radio_wrap')
  let totalWidth = 0;
  for (let i = 0; i < n; i++) {
    totalWidth += nodeElement.children[i].clientWidth
  }
  let tabWith = nodeElement.children[n].clientWidth
  tabPane.style.setProperty("--left", `${totalWidth}px`);
  tabPane.style.setProperty("--tabWidth", `${tabWith}px`);
  startInterval()
}

onMounted(() => {
  let box = document.querySelector('.radio_wrap')
  box.style.setProperty("--left", `0px`);
  box.style.setProperty("--tabWidth", `84px`);

  startInterval()
})

const startInterval = () => {
  autoSlideInterVal.value = setInterval( () => {
    round += 1
    if(round === 3) {
      round = 0
    }
    console.log(round)
    switchTab(round)
  }, 2000)

}
onUnmounted(() => {
  clearInterval(autoSlideInterVal.value)
})

</script>

<template>
    <section class="custom-container py-12 lg:py-[120px]">
        <h3 class="text-dark text-4xl lg:text-[57px] lg:leading-[64px] font-semibold text-center">Our products</h3>

     <div class="mt-10 mb-14"> 
        <input type="radio" id="radio1" name="radio1" value="0" v-model="activeTab">
        <input type="radio" id="radio2" name="radio2" value="1" v-model="activeTab">
        <input type="radio" id="radio3" name="radio3" value="2" v-model="activeTab">
        <div class="radio_wrap_container">
          <div class="radio_wrap" :style="{'--i': activeTab}">
            <label @click="switchTab(0, true)" for="radio1" data-i="0">User</label>
            <label @click="switchTab(1, true)" for="radio2" data-i="1">Partner</label>
            <label @click="switchTab(2, true)" for="radio3" data-i="2">Business Solutions</label>
          </div>
        </div>

        <div class="panels">
            <div class="panel bg-primary" @mouseover="switchTab(0, true)" id="panel-one">
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

            <div class="panel bg-info" @mouseover="switchTab(1, true)" id="panel-two">
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

            <div class="panel bg-success" @mouseover="switchTab(2, true)" id="panel-three">
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
.radio_wrap_container {
  background: #FDE5E2;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: max-content;
  padding: 6px 6px;
  border-radius: 2rem;
}
.radio_wrap {
  position: relative;
  overflow: hidden;
  z-index: 0;
  --i: 0;
  display: flex;
  justify-content: center;
}

input {
  position: absolute;
  opacity: 0;
}

.radio_wrap::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: var(--tabWidth);
  top: 1px;
  left: var(--left);
  height: 100%;
  background: #F04935;
  transition: .3s ease-in-out;
  border-radius: 2rem;
}

label {
  position: relative;
  z-index: 2;
  text-align: center;
  color: black;
  font-size: 16px;
  transition: color .3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;
}

label:first-child {
  width: 84px;
}
label:nth-child(2) {
  width: 105px;
}
label:last-child {
  width: 191px;
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

#radio1:checked ~ .panels #panel-one,
#radio2:checked ~ .panels #panel-two,
#radio3:checked ~ .panels #panel-three {
    @apply lg:scale-110
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
</style>

