<template>
    <div :class="$i18n.locale == 'bn' ? 'font-banglaFont' : 'font-sans'">
<!--      <PrimaryNavbar />-->
      <GlobalNavbar/>
      <slot />
      <PrimaryFooter />
    </div>
</template>
<script setup>
import PrimaryNavbar from "~/components/app/PrimaryNavbar";
import PrimaryFooter from "~/components/app/PrimaryFooter";
import GlobalNavbar from "../components/app/GlobalNavbar";
</script>