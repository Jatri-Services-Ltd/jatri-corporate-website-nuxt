
<template>
  <section class="custom-container pt-10 pb-[120px] border-b border-b-body/20">
    <h1 class="text-[57px] leading-[64px] font-semibold">Press center</h1>

    <div class="relative">
      <input type="radio" name="tabs" value="1" id="tab-one" checked />
      <input type="radio" name="tabs" value="2" id="tab-two" />
      <input type="radio" name="tabs" value="3" id="tab-three" />

      <div class="tabs-buttons pt-6 pb-10 flex gap-4 border-b border-b-[#EDEDED] z-50">
        <label for="tab-one">Press release</label>
        <label for="tab-two">Press kit</label>
        <label for="tab-three">Press inquires</label>
      </div>

      <div class="tabs-items pt-9 relative">
        <div class="tabs-item">Tabs item1</div>
        <div class="tabs-item">Tabs item2</div>
        <div class="tabs-item">Tabs item3</div>
      </div>

    </div>
  </section>
</template>

<style scoped>
input[type="radio"] {
  @apply absolute opacity-0 transition-all
}
label {
  @apply px-6 py-[11px] bg-transparent border border-[#EDEDED] rounded-full text-dark text-base font-medium cursor-pointer transition-all duration-500
}
#tab-one:checked ~ .tabs-buttons label:first-child,
#tab-two:checked ~ .tabs-buttons label:nth-child(2),
#tab-three:checked ~ .tabs-buttons label:last-child {
  @apply bg-dark text-white border-dark
}
.tabs-items .tabs-item {
 @apply absolute left-0 right-0 opacity-0
}
#tab-one:checked ~ .tabs-items .tabs-item:first-child,
#tab-two:checked ~ .tabs-items .tabs-item:nth-child(2),
#tab-three:checked ~ .tabs-items .tabs-item:last-child {
  @apply opacity-100
}

</style>