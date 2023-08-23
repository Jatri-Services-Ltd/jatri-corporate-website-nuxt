<template>
    <header>
        <div class="ride-sharing-guideline-header py-5 md:py-8 text-white">
            <div class="custom-container">
                <div class="flex items-center gap-3 mb-[10px]">
                    <p class="text-xs sm:text-sm">Home</p>
                    <div class="relative">
                        <div class="right-arrow absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
                    </div>
                    <p class="text-xs sm:text-sm ml-2 md:ml-3">Others</p>
                    <div class="relative">
                        <div class="right-arrow absolute top-0 bottom-0 left-0 right-0 m-auto"></div>
                    </div>
                    <p class="text-xs sm:text-sm ml-2 md:ml-3">Ride Sharing Guideline</p>
                </div>
                <h2 class="text-[28px] md:text-4xl font-medium">Ride Sharing Guideline</h2>
            </div>
        </div>
    </header>
    <main>
        <section class="py-5 md:py-10 custom-container">
            <div class="bg-[#FEF2F0] rounded-2xl p-4 md:p-8 flex flex-col md:flex-row md:justify-between items-center gap-y-6">
             <div>
               <p class="text-black text-lg md:text-[36px] font-medium leading-7 md:leading-[44px]">রাইড শেয়ারিং নীতিমালা সংক্রান্ত তথ্য</p>
               <p class="text-black text-sm font-normal leading-5 mt-3">রাইড শেয়ারিং নীতিমালা তথ্য মেনে চলুন। নিরাপদ সড়ক ব্যবস্থা বজায় রাখুন।</p>
             </div>
             <div class="flex gap-x-2 rounded-full bg-corporate text-white px-4 py-2">
               <img src="../assets/images/common/download.svg" alt="">
               <p class="text-xl font-medium">রাইড শেয়ারিং সার্ভিস নীতিমালা-২০১৭</p>
             </div>
            </div>
        </section>

      <section class="py-5 md:py-10 custom-container">
          <p class="w-full md:w-[40%] break-normal text-[24px] md:text-[28px] pb-6 md:pb-8">ট্রাফিক রুলস আন্ড রেগুলেশন্স অনুযায়ী অপরাধ এবং নতুন আইন:</p>

          <table width="100%">
            <thead class="bg-[#1E88E5]">
                <td class="text-center border-r border-r-white font-bold text-xl text-white py-4 md:py-6 rounded-tl-lg w-1/2">অপরাধ</td>
                <td class="text-center font-bold text-xl text-white rounded-tr-lg">নতুন আইন</td>
            </thead>
            <tr v-for="data in dataList" :key="data.index" class="text-center text-lg md:text-xl font-normal text-black border border-[#DBDBDB]">
              <td class="border-r border-[#DBDBDB] py-4">{{data.name}}</td>
              <td>{{data.law}}</td>
            </tr>
          </table>
      </section>

      <section class="custom-container">
        <p class="font-normal text-black text-[24px] md:text-[28px]">ট্রাফিক রুলস আন্ড রেগুলেশন্স ফ্লো-চার্ট :</p>
        <div class="flex flex-col md:flex-row justify-between gap-8">
            <div class="bg-[#FEF2F0] rounded-lg p-4 md:p-8 flex justify-center items-center w-full md:w-1/2">
              <img src="../assets/images/common/trafic_flochart.png" alt="">
            </div>
          <div class="bg-[#FEF2F0] rounded-lg p-4 md:p-8 flex justify-center items-center w-full md:w-1/2">
            <img src="../assets/images/common/trafic_flochart2.png" alt="">
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between gap-8 mt-4">
          <div class="bg-[#FEF2F0] rounded-lg p-4 md:p-8 flex justify-center items-center w-full md:w-1/2">
            <img src="../assets/images/common/trafic_flochart3.png" alt="">
          </div>
          <div class="bg-[#FEF2F0] rounded-lg p-4 md:p-8 flex justify-center items-center w-full md:w-1/2">
            <img src="../assets/images/common/trafic_flochart4.png" alt="">
          </div>
        </div>
      </section>
    </main>
</template>

<script setup>
const dataList  = [
  {
    "name": "অবৈধ পার্কিং",
    "law": "সর্বোচ্চ ৫,০০০ টাকা জরিমানা",
  },
  {
    "name": "হেলমেট না থাকলে",
    "law": "সর্বোচ্চ ১০,০০০ টাকা জরিমানা",
  },
  {
    "name": "সিটবেল্ট না বাধলে",
    "law": "সর্বোচ্চ ৫,০০০ টাকা জরিমানা",
  },
  {
    "name": "চালক ফোন এ কথা বললে",
    "law": "সর্বোচ্চ ৫,০০০ টাকা জরিমানা",
  },
  {
    "name": "লাইসেন্স ছাড়া গাড়ি চালানো",
    "law": "৬ মাসের জেল এবং ২৫,০০০ টাকা জরিমানা",
  },
  {
    "name": "ভুয়া লাইসেন্স দেখালে",
    "law": "১-৫ লাখ টাকা বা ৬ মাস থেকে ২ বছরের জেল",
  },
  {
    "name": "রুট পারমিট ছাড়া যানবাহন",
    "law": "৬ মাসের জেল কিংবা ২৫,০০০ টাকা জরিমানা অথবা উভয়ই",
  },
  {
    "name": "ওভার স্পিডিং",
    "law": "৩ মাসের জেল কিংবা ১০,০০০ টাকা জরিমানা অথবা উভয়ই",
  },
  {
    "name": "নিষিদ্ধ হর্ন বাজানো",
    "law": "৩ মাসের জেল কিংবা ১৫,০০০ টাকা জরিমানা অথবা উভয়ই",
  },
  {
    "name": "উল্টো পথে গাড়ি চালালে",
    "law": "৩ মাসের জেল কিংবা ১০,০০০ টাকা জরিমানা অথবা উভয়ই",
  },
  {
    "name": "ট্র্যাফিক সংকেত না মানলে",
    "law": "৩ মাসের জেল কিংবা ১০,০০০ টাকা জরিমানা অথবা উভয়ই",
  },
  {
    "name": "রেজিস্ট্রেশনবিহীন যানবাহন",
    "law": "৬ মাসের জেল কিংবা ৫০,০০০ টাকা জরিমানা অথবা উভয়ই",
  },
  {
    "name": "ফিটনেসবিহীন যানবাহন",
    "law": "৬ মাসের জেল কিংবা ২৫,০০০ টাকা জরিমানা অথবা উভয়ই",
  },
  {
    "name": "গাড়ির বডি মডিফিকেশন",
    "law": "৩ বছরের জেল কিংবা ৩০০,০০০ টাকা জরিমানা অথবা উভয়ই",
  },
]
</script>

<style scoped>
.ride-sharing-guideline-header{
    background-image: url('/images/ride-sharing/ride-sharing-guideline-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;

}
.right-arrow {
	height: 0px; 
    width: 0px;
	border: 3.8px solid;
	border-color: 
		white
		white
		transparent
		transparent;
	transform: rotate(45deg);
}

</style>