import WhiteNavbar from '~~/components/app/WhiteNavbar.vue';
<script setup>
useServerSeoMeta({
  title: 'Jatri',
  description: 'Got a question? For any kind of assistance in using our services, don’t hesitate to get in touch at support@jatri.co.',
})
</script>

<template>
    <section class="relative">
        <div class="corporate_bg_color flex justify-center items-center contact_us_head">
            <h2 class="text-xl md:text-5xl text-center">{{ $t('terms_condition') }}</h2>
        </div>

        <div class="contact_form py-10">
            <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto">
                <div class="grid grid-cols-6 gap-4">
                    <div class="col-start-2 col-span-4 conditions">
                        <ul class="body_text">
                            <li class="corporate_color">{{ $t('terms_condition_header') }}</li>
                            <ul class="nested_ul">
                                <li> {{ $t('terms_condition1') }}</li>
                                <li> {{ $t('terms_condition2') }}</li>
                            </ul>
                            <li class="corporate_color">{{ $t('terms_condition_subheader') }}</li>
                            <ul class="nested_ul">
                                <li>{{ $t('terms_condition_sub1') }}</li>
                                <li>{{ $t('terms_condition_sub2') }}</li>
                                <li>{{ $t('terms_condition_sub3') }}</li>
                                <li>{{ $t('terms_condition_sub4') }}</li>
                                <li>{{ $t('terms_condition_sub5') }}</li>
                                <li>{{ $t('terms_condition_sub6') }}</li>
                            </ul>
                            <li class="bold_list">{{ $t('terms_condition_sublist1') }}</li>
                            <li class="bold_list">{{ $t('terms_condition_sublist2') }}</li>
                            <li class="bold_list">{{ $t('terms_condition_sublist3') }}</li>
                            <li class="bold_list">{{ $t('terms_condition_sublist4') }}</li>
                            <li class="bold_list">{{ $t('terms_condition_sublist5') }}</li>
                            <li class="corporate_color">{{ $t('refund_policy') }}:</li>
                            <ul>
                                <li class="bold_list">{{ $t('subscription') }}:</li>
                                <ul>
                                    <li>{{ $t('subscription_desc1') }}</li>
                                    <li>{{ $t('subscription_desc2') }}</li>
                                </ul>
                                <li class="bold_list">{{ $t('ticket-refund') }}</li>
                                <ul>
                                    <li>{{ $t('ticketing_desc1') }}</li>
                                    <li>{{ $t('ticketing_desc2') }}</li>
                                    <li>{{ $t('ticketing_desc3') }}</li>
                                    <li>{{ $t('ticketing_desc4') }}</li>
                                    <li>{{ $t('ticketing_desc5') }}</li>
                                    <li>{{ $t('ticketing_desc6') }}</li>
                                </ul>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>