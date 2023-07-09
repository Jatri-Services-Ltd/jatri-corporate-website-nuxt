<template>
    <div>
{{ route.params.slug }}
    </div>
</template>

<script setup>
import {ref} from 'vue';
import careerData from "~/dataStore/career.js";
const route = useRoute();

const jobDetails = ref({})

onMounted(() => {
    jobDetails.value = careerData.find(data => data.slug === route.params.slug)
})
</script>

<style scoped>

</style>