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
            <h2 class="text-xl md:text-5xl text-center">Terms and Conditions</h2>
        </div>

        <div class="contact_form py-10">
            <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto">
                <div class="grid grid-cols-6 gap-4">
                    <div class="col-start-2 col-span-4 conditions">
                        <ul class="body_text">
                            <li class="corporate_color">Jatri’s responsibilities do not exceed to issues beyond:</li>
                            <ul class="nested_ul">
                                <li>Providing a valid ticket for its network of transportation operators (“operators”).</li>
                                <li>Issuing  refund and support in case of cancellation for advance purchasing ticket</li>
                            </ul>
                            <li class="corporate_color">Our responsibilities do not comprise of the following:</li>
                            <ul class="nested_ul">
                                <li>Whether or not the operator's vehicle reaches on time.</li>
                                <li>The behavior of the bus operator's employees.</li>
                                <li>The vehicle’s seats and conditions not being up to par compared to the customer's expectations.</li>
                                <li>Whether the operator cancels the trip or changes vehicle and/or seat.</li>
                                <li>Whether the baggage of the customer gets lost /stolen or damaged in any form.</li>
                                <li>Whether the customer mistakenly waits at an incorrect boarding point</li>
                            </ul>
                            <li class="bold_list">Whether or not the operator decides to select an alternate boarding point or use an alternate vehicle to help customers reach the departure point.</li>
                            <li class="bold_list">Any fees charged by payment gateways, credit / debit cards, mobile payment gateways (e.g. bKash, cards) are non refundable due to the policies of the respective organizations, which is beyond Jatri's control.</li>
                            <li class="bold_list">The bus operator reserves the right to cancel / delay trips, change buses and change seats due to unavoidable reasons.</li>
                            <li class="bold_list">Neither the bus operator nor Jatri will bear any consequences for the passenger carrying illegal goods.</li>
                            <li class="bold_list">Bus fare may vary due to demand.</li>
                            <li class="corporate_color">Refund Policy:</li>
                            <ul>
                                <li class="bold_list">Subscription:</li>
                                <ul>
                                    <li>In case of one purchasing subscription package, no refunds will be provided.</li>
                                    <li>No partial refund is applicable for subscription package</li>
                                </ul>
                                <li class="bold_list">Ticketing:</li>
                                <ul>
                                    <li><b>For ticket cancellation, passenger must call or mail (support@jatri.co)</b> Jatri within 10 minutes after purchasing ticket.</li>
                                    <li>Upon receiving refund requests in the format outlined below, Jatri will process refund within 5 business days (excluding holidays / weekends).</li>
                                    <li>Refunds will be given only through bKash or Bank transfer. For refunds through mobile payment gateways (e.g. bKash), a fee is charged by the mobile payment company.</li>
                                    <li>In case of any accident or technical error in the middle of the trip, Jatri may refund the money according to the stations.</li>
                                    <li>In case of cancellation or reissue of any advance ticketing, Jatri may refund the money or reissue new tickets according to the number of unused tickets and cancellation period must be five days before expiry.</li>
                                    <li>No refund will be provided if passengers have to pay any extra charges due to selecting the wrong destination point.</li>
                                </ul>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>