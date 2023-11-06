<script setup>
const config = useRuntimeConfig();
const {data} = await useFetch(config.public.apiURL + '/api/v1/get-career-active-jobs')

</script>

<template>
  <div id="job-opening" class="py-10 lg:py-[100px]">
    <div class="custom-container">
      <h2 class="text-[28px] lg:text-4xl leading-9 lg:leading-[44px] text-dark font-medium mb-8 lg:mb-10">Current open roles</h2>
      <div v-if="data.data.length" class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
        <div v-for="job in data.data" :key="job.id" class="p-6 rounded-2xl border border-1-[#DBDBDB]">
          <div class="xl:flex items-center justify-between">
            <div>
              <h5 class="text-base lg:text-xl font-semibold text-dark">{{job.title}}</h5>
              <div class="my-2 flex gap-2 items-center">
                <p class="text-sm lg:text-base font-medium text-secondaryDark">Salary: <span>{{job.salary_range}}</span></p>
                <div class="h-[6px] w-[6px] bg-[#DBDBDB] rounded-full"></div>
                <p class="text-sm lg:text-base font-medium text-secondaryDark capitalize">{{job.employment_status.toLowerCase().replaceAll('_', ' ').replaceAll('-', ' ')}}</p>
              </div>
              <p class="text-sm lg:text-base font-medium text-[#4D4D4F]">Application deadline: <span>
                {{$dayjs(job.deadline).format('D MMM, YYYY')}}
              </span></p>
            </div>
            <div class="xl:pt-0 pt-4">
              <router-link :to="{ path: '/career/job-details/' + job.id}"  class="flex justify-center items-center gap-2 h-10 w-[130px] rounded-full border border-[#DBDBDB] bg-white pl-2">
                <span class="inline-block text-sm leading-5 font-medium text-dark">View details</span>
                <div><img class="h-4 w-4" src="/images/career/arrow-right.svg" alt=""></div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="border border-[#DBDBDB] rounded-2xl py-16 ">
        <div class="flex justify-center">
          <img src="/images/career/no-opening.png" class="h-[120px] w-40 object-cover" alt="Jatri Career">
        </div>
        <p class="text-center text-base md:text-xl font-medium text-dark mt-6 w-full md:w-2/3 xl:w-1/2 2xl:w-1/3 mx-auto px-4">We don't have any openings right now. Keep an eye here to receive updates.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-4 lg:mt-6">
        <div class="border border-[#DBDBDB] rounded-2xl p-4 md:p-6">
          <p class="text-dark text-base lg:text-xl font-semibold mb-2">Can't find a suitable role?</p>
          <p class="text-secondaryDark text-sm lg:text-base">Share your resume with us at <a href="mailto:careers@jatri.co" class="underline text-info">careers@jatri.co</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>