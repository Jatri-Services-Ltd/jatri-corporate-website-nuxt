<style scoped>
.tabs .tab {
    @apply bg-transparent px-6 py-2.5 text-base text-dark font-medium rounded-full cursor-pointer transition-[color,background] duration-500
}

#one:checked ~ .tabs #tab-one,
#two:checked ~ .tabs #tab-two,
#three:checked ~ .tabs #tab-three {
    @apply bg-primary text-white
}

.panels .panel {
  @apply rounded-3xl transform scale-100 duration-1000 w-[300px] transition-[transform,width]
}
.panel .panel-des {
    display:none;
}
.panel-title{
  font-size:1.5em;
  font-weight:bold
}
.radio{
  display:none;
}

#one:checked ~ .panels #one-panel,
#two:checked ~ .panels #two-panel,
#three:checked ~ .panels #three-panel {
    transform: scale(1.2);
    width: 320px;
}

#one:checked ~ .panels #one-panel .panel-des,
#two:checked ~ .panels #two-panel .panel-des,
#three:checked ~ .panels #three-panel .panel-des {
  display:block
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
            
            <div class="panels mt-10 grid grid-cols-3 gap-6 xl:gap-10">
                <div class="panel bg-corporate" id="one-panel">
                    <div class="panel-title">Why Learn CSS?</div>
                    <p class="panel-des">Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background images and change the layout of your page — your web pages can feel like works of art!</p>
                </div>
                <div class="panel bg-info" id="two-panel">
                    <div class="panel-title">Take-Away Skills</div>
                    <p class="panel-des">You will learn many aspects of styling web pages! You’ll be able to set up the correct file structure, edit text and colors, and create attractive layouts. With these skills, you’ll be able to customize the appearance of your web pages to suit your every need!</p>
                </div>
                <div class="panel bg-success" id="three-panel">
                    <div class="panel-title">Note on Prerequisites</div>
                    <p class="panel-des">We recommend that you complete Learn HTML before learning CSS.</p>
                </div>
            </div>
        </div>

    </section>
</template>