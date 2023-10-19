<template>
  <div>
    <div
      v-if="eventData.event_data && eventData.event_data.length"
      class="md:mt-[96px] font-[Inter] max-w-[1240px] mx-auto"
    >
      <div class="flex overflow-x-auto gap-x-[24px] mt-[40px] w-full">
        <div
          class="mx-5 md:mx-0 flex gap-x-[24px] overflow-x-auto mt-[40px] py-4"
        >
          <div
            v-for="carType in eventData.event_data"
            :key="carType.id"
            class="shrink-0"
          >
            <button
              @click="changeCarTypeId(carType.id)"
              :class="
                carType.id === seletedCarTypeId ? 'bg-black text-white' : ''
              "
              class="px-[24px] py-[13px] rounded-full leading-5 text-[14px] font-[500]"
            >
              {{ carType.name }}
            </button>
          </div>
        </div>
      </div>

      <hr class="mt-[16px] md:mt-[26px] hidden md:block" />

      <div
        class="mt-[16px] md:mt-[34px] grid grid-cols-2 md:grid-cols-3 gap-[10px] md:gap-x-[65px] md:gap-y-[40px] px-[18px] md:px-0"
      >
        <div
          class="w-full md:w-[370px]"
          v-for="cardData in filteredEventList"
          :key="cardData.id"
        >
          <div
            :style="imageStyleObject(cardData.banner)"
            class="banner-background h-[96px] md:h-[240px] rounded-t-xl"
          ></div>
          <div class="p-[20px] bg-[#F7F7F7] rounded-b-xl">
            <div class="h-[50px] md:h-[64px] overflow-hidden">
              <p
                class="leading-[24px] text-[16px] md:leading-[32px] md:text-[24px] font-[500] text-[#151414] break-words"
              >
                {{
                  cardData.event_name.length > MAX_EVENT_NAME_LENGTH
                    ? `${cardData.event_name.slice(
                        0,
                        MAX_EVENT_NAME_LENGTH
                      )}...`
                    : `${cardData.event_name}`
                }}
              </p>
            </div>
            <p
              class="text-[#8D8D8F] md:text-black leading-[16px] text-[12px] font-[400] mt-[5px]"
            >
              STARTS FROM
            </p>
            <p
              class="text-black leading-[20px] text-[16px] font-[500] mt-[5px] flex gap-x-2 break-all"
            >
              <!-- <img
                src="@/assets/events-card/Vector.svg"
                alt=""
                class="w-5 h-4 "
              /> -->
              {{ cardData.est_fare }} BDT
            </p>
            <p
              class="text-[#676769] leading-[17px] md:leading-[20px] text-[11px] font-[500] mt-[16px]"
            >
              *Terms and conditions applied
            </p>
            <div class="mt-[16px] md:mt-[16px] flex justify-center">
              <button
                @click="handleEventBooking(cardData)"
                class="bg-[#f04935] text-white leading-[20px] text-[14px] w-full py-2 rounded-full text-center font-[500]"
              >
                Book now
                <span>
                  <img
                    src="@/assets/images/svg/right-arrow.svg"
                    alt=""
                    class="h-3 w-3 inline ml-2"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EventsNotFound v-else />
  </div>
</template>
<script setup>
import * as URL from "@/urls/apis";
import { useToast } from "primevue/usetoast";

const MAX_EVENT_NAME_LENGTH = 45;
const toast = useToast();
const config = useRuntimeConfig().public;
const { isLoggedIn } = useAuthentication();

const url = `${config.api_base_url}${URL.EVENT_DATA}`;
const eventData = ref(null);
try {
  const { data } = await useFetch(url);
  eventData.value = data.value;
} catch (error) {
  toast.add({
    severity: "error",
    summary: "Error",
    detail: error.response.data.message,
    life: 6000,
  });
}

const seletedCarTypeId = ref(eventData.value?.event_data[0]?.id);

const filteredEventList = computed(() => {
  return eventData.value.event_data.filter(
    (e) => e.id === seletedCarTypeId.value
  )[0].events;
});

const changeCarTypeId = (id) => {
  seletedCarTypeId.value = id;
};

const imageStyleObject = (image) => {
  return {
    backgroundImage: `url(${config.image_base_url + image})`,
  };
};

const handleEventBooking = async (evntData) => {
  sessionStorage.clear();
  sessionStorage.setItem("selectedEvent", JSON.stringify(evntData));
  if (isLoggedIn.value) {
    await navigateTo({
      path: "/confirm-event",
    });
    // window.scrollTo(0, 0);
  } else {
    await navigateTo({
      path: "/mobile-verification",
      query: {
        lastPath: "/book-for-events",
      },
    });
    // window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.banner-background {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
