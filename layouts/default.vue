<template>
    <div :class="$i18n.locale == 'bn' ? 'font-banglaFont' : 'font-sans'">
      <PrimaryNavbar />
      <slot />

      <PrimaryFooter />
    </div>
</template>
<script setup>
import WhiteNavbar from "~/components/app/WhiteNavbar";
import PrimaryNavbar from "~/components/app/PrimaryNavbar";
import Footer from "~/components/app/Footer";
import PrimaryFooter from "~/components/app/PrimaryFooter";
</script>

<style>


</style>