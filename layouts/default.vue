<template>
    <div :class="$i18n.locale == 'bn' ? 'font-banglaFont' : 'font-sans'">
      <WhiteNavbar />
      <slot />

      <Footer />
    </div>
</template>
<script setup>
import WhiteNavbar from "~/components/app/WhiteNavbar";
import Footer from "~/components/app/Footer";
</script>

<style>


</style>