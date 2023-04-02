import WhiteNavbar from '~~/components/app/WhiteNavbar.vue';

<template>
    <section class="relative">
        <div class="corporate_bg_color flex justify-center items-center contact_us_head">
            <h2 class="text-xl md:text-5xl text-center">Cancellation Policy
            </h2>
        </div>

        <div class="contact_form py-10">
            <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto">
                <div class="grid grid-cols-6 gap-4">
                    <div class="col-start-2 col-span-4 conditions">
<!--                        <ul class="body_text">-->
<!--                            <li class="corporate_color">Jatri’s responsibilities do not exceed to issues beyond:</li>-->
<!--                            <ul class="nested_ul">-->
<!--                                <li>Providing a valid ticket for its network of transportation operators (“operators”).</li>-->
<!--                                <li>Issuing  refund and support in case of cancellation for advance purchasing ticket</li>-->
<!--                            </ul>-->
<!--                            <li class="corporate_color">Our responsibilities do not comprise of the following:</li>-->
<!--                            <ul class="nested_ul">-->
<!--                                <li>Whether or not the operator's vehicle reaches on time.</li>-->
<!--                                <li>The behavior of the bus operator's employees.</li>-->
<!--                                <li>The vehicle’s seats and conditions not being up to par compared to the customer's expectations.</li>-->
<!--                                <li>Whether the operator cancels the trip or changes vehicle and/or seat.</li>-->
<!--                                <li>Whether the baggage of the customer gets lost /stolen or damaged in any form.</li>-->
<!--                                <li>Whether the customer mistakenly waits at an incorrect boarding point</li>-->
<!--                            </ul>-->
<!--                            <li class="bold_list">Whether or not the operator decides to select an alternate boarding point or use an alternate vehicle to help customers reach the departure point.</li>-->
<!--                            <li class="bold_list">Any fees charged by payment gateways, credit / debit cards, mobile payment gateways (e.g. bKash, cards) are non refundable due to the policies of the respective organizations, which is beyond Jatri's control.</li>-->
<!--                            <li class="bold_list">The bus operator reserves the right to cancel / delay trips, change buses and change seats due to unavoidable reasons.</li>-->
<!--                            <li class="bold_list">Neither the bus operator nor Jatri will bear any consequences for the passenger carrying illegal goods.</li>-->
<!--                            <li class="bold_list">Bus fare may vary due to demand.</li>-->
<!--                            <li class="corporate_color">Refund Policy:</li>-->
<!--                            <ul>-->
<!--                                <li class="bold_list">Subscription:</li>-->
<!--                                <ul>-->
<!--                                    <li>In case of one purchasing subscription package, no refunds will be provided.</li>-->
<!--                                    <li>No partial refund is applicable for subscription package</li>-->
<!--                                </ul>-->
<!--                                <li class="bold_list">Ticketing:</li>-->
<!--                                <ul>-->
<!--                                    <li><b>For ticket cancellation, passenger must call or mail (support@jatri.co)</b> Jatri within 10 minutes after purchasing ticket.</li>-->
<!--                                    <li>Upon receiving refund requests in the format outlined below, Jatri will process refund within 5 business days (excluding holidays / weekends).</li>-->
<!--                                    <li>Refunds will be given only through bKash or Bank transfer. For refunds through mobile payment gateways (e.g. bKash), a fee is charged by the mobile payment company.</li>-->
<!--                                    <li>In case of any accident or technical error in the middle of the trip, Jatri may refund the money according to the stations.</li>-->
<!--                                    <li>In case of cancellation or reissue of any advance ticketing, Jatri may refund the money or reissue new tickets according to the number of unused tickets and cancellation period must be five days before expiry.</li>-->
<!--                                    <li>No refund will be provided if passengers have to pay any extra charges due to selecting the wrong destination point.</li>-->
<!--                                </ul>-->
<!--                            </ul>-->
<!--                        </ul>-->

<!--  Dt -->

                        <ul class ="body_text ">
                            <li class="corporate_color">Cancellation Policy:</li>
                            <li class="">Tickets purchased through the Jatri app/web portal are subject to cancellation according to the rules below. Jatri will not be able to issue a refund if the company refuses to refund even though a  claim has been received within the limits  below.</li>
                        </ul>
                        <ul class ="body_text nested_ul">
                            <li class="corporate_color">Failure to Pay:</li>
                            <ul class="nested_ul">
                                <li class="">Tickets will not be provided until all fees have been paid in full. The buyer is responsible for validating and activating the mobile payment ticket. Jatri verifies client information on a regular basis, however this is neither an obligation nor a promise of service</li>
                                <li class="">Customers who pay through app/web portal must complete the transaction and verify their ticket within the specified timeframe. During public holidays and festivals, Jatri does not provide refunds to consumers.</li>
                            </ul>
                            <li class="corporate_color">Ticket cancellation eligibility</li>
                            <li class="corporate_color">Regular Time</li>
                            <li class="">To be eligible for a refund, the customer must cancel the ticket before the planned travel date or provide the relevant reimbursement information (discussed in detail below):</li>
                        </ul>
                        <table class="border-collapse border border-gray-800 ride_share_tble_head w-full" >
                            <thead>
                            <tr>
                                <th class="border-r">
                                    Jatri
                                </th>
                                <th class="border-r">Hours before trip time</th>
                                <th>Remarks</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="text-center p-5 border-r">Every Passengers</td>
                                <td class="text-center border-r p-5">12</td>
                                <td class="text-center p-5">Excluding 12:00 am to 7:00 am</td>
                            </tr>
                            </tbody>
                        </table>
                        <ul class="nested_ul">
                            <li class="">After the grace time passed, the trip was cancelled.</li>
                        </ul>
                        <ul class="body_text">
                            <li class="corporate_color">During Eid</li>
                            <ul class="nested_ul">
                                <li class="">Customers are only entitled to a refund if the bus company cancels the journey and is unable to find an alternative.</li>

                            </ul>
                            <li class="corporate_color">Refund Policy
                            </li>
                        </ul>
                        <ul class="body_text">
                            <li class="corporate_color">Regular Time
                            </li>
                            <ul class="nested_ul body_text pl-5">
                              <li>To cancel a ticket, the customer must call Jatri customer service to cancel the ticket. Otherwise, the cancellation request will not be processed.</li>
                                <li>Tickets are non-refundable unless cancelled in accordance with the cancellation policy above
                                </li>
                            </ul>
                        </ul>
                        <ul class="body_text">
                            <li class="corporate_color">Timeline of refund:</li>
                            <li>Once Jatri receives correct refund requests in the above-mentioned manner, refunds will be handled within 12 working days</li>
                        </ul>
                        <ul class="body_text">
                            <li class="corporate_color">Amount of refund:
                            </li>
                            <li>
                                Jatri service fees, payment gateway fees, credit/debit card fees and mobile payment gateway fees (e.g. bKash) are non-refundable due to individual legal entity restrictions over which Jatri has no control.
                            </li>
                        </ul>
                        <ul class="body_text">
                            <li class="corporate_color">Terms and Conditions:</li>
                            <ul class="body_text list-decimal pl-5">
                                <li>Jatri's obligations are limited to: We provide refund and  cancellation assistance in         accordance with Jatri's policy.</li>
                                <li class="">Our obligations exclude:</li>
                                <ul class="nested_ul body_text pl-5">
                                    <li>The bus seats did not meet customer expectations.  The bus company cancels the trip by changing the vehicle type or changing the seat.
                                    </li>
                                    <li>Customer's baggage has been lost, stolen or damaged. </li>
                                </ul>
                                <li>Passengers should arrive at the boarding place 30 minutes before the bus departs. If not, the ticket is ruled void.</li>
                                <li>Jatri retains the rights, to cancel tickets, modify and rearrange seats for any unavoidable circumstances </li>
                                <li>Jatri is not responsible for the carriage of illegal goods by passengers.</li>

                            </ul>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>