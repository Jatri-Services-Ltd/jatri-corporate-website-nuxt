<script setup>
const config = useRuntimeConfig();
const { data } = await useFetch(config.public.apiURL + '/api/v1/get-career-active-jobs')

</script>

<template>
  <div id="job-opening" class="py-10 lg:py-[100px]">
    <div class="custom-container">
      <h2 class="text-[28px] lg:text-4xl leading-9 lg:leading-[44px] text-dark font-medium mb-8 lg:mb-10">Current open
        roles</h2>
      <template v-if="data.data.length">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <div v-for="job in data.data" :key="job.id" class="p-4 md:p-6 rounded-2xl border border-1-[#DBDBDB]">
            <div class="xl:flex items-center justify-between">
              <div>
                <h5 class="text-base lg:text-xl font-semibold text-dark">{{ job.title }}</h5>
                <div class="my-2 flex gap-2 items-center">
                  <p class="text-sm lg:text-base font-medium text-secondaryDark">Salary: <span>{{ job.salary_range
                  }}</span>
                  </p>
                  <div class="h-[6px] w-[6px] bg-[#DBDBDB] rounded-full"></div>
                  <p class="text-sm lg:text-base font-medium text-secondaryDark capitalize">
                    {{ job.employment_status.toLowerCase().replaceAll('_', ' ').replaceAll('-', ' ') }}</p>
                </div>
                <p class="text-sm lg:text-base font-medium text-[#4D4D4F]">Application deadline: <span>
                    {{ $dayjs(job.deadline).format('D MMM, YYYY') }}
                  </span></p>
              </div>
              <div class="xl:pt-0 pt-4 inline-block">
                <router-link :to="{ path: '/career/job-details/' + job.id }"
                  class="flex justify-center items-center gap-2 pl-4 pr-2 py-2.5 rounded-full border border-[#DBDBDB] bg-white">
                  <span class="inline-block text-sm font-medium text-dark">View details</span>
                  <img src="/images/career/arrow-right.svg" alt="arrow right">
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-4 lg:mt-6">
          <div class="border border-[#DBDBDB] rounded-2xl p-4 md:p-6">
            <p class="text-dark text-base lg:text-xl font-semibold mb-2">Can't find a suitable role?</p>
            <p class="text-secondaryDark text-sm lg:text-base">Share your resume with us at <a
                href="mailto:careers@jatri.co" class="underline text-info">careers@jatri.co</a></p>
          </div>
        </div>
      </template>

      <div v-else class="border border-lightGrey rounded-2xl px-4 py-6 md:py-12 text-center">
        <div>
          <img src="/images/career/no-opening.png" alt="Jatri Career" class="mx-auto w-[106px] md:w-auto">
        </div>
        <div class="mt-4 md:mt-6">
          <h4 class="text-dark text-xl md:text-[28px] md:leading-9 font-medium">No openings right now</h4>
          <p class="mt-2 text-secondaryDark text-sm md:text-base">
            For updates, keep an eye here. <br>
            Share your CV with us at <span><a class="font-medium underline text-info"
                href="mailto:careers@jatri.co">careers@jatri.co</a></span> if you're still interested.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>