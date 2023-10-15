<template>
    <div :class="$i18n.locale == 'bn' ? 'font-banglaFont' : 'font-sans'">
      <GlobalNavbar/>
      <slot />
      <PrimaryFooter />
    </div>
</template>
<script setup>
import PrimaryFooter from "~/components/app/PrimaryFooter";
import GlobalNavbar from "~/components/app/GlobalNavbar";
</script>