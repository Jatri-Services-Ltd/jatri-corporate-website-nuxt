<template>
  <WhiteNavbar />
  <slot />
  <Footer />
</template>
<script setup>
import WhiteNavbar from "~/components/app/WhiteNavbar";
import Footer from "~/components/app/Footer";
</script>