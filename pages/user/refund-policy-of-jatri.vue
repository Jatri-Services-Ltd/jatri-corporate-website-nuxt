import WhiteNavbar from '~~/components/app/WhiteNavbar.vue';

<template>
    <section class="relative">
        <div class="corporate_bg_color flex justify-center items-center contact_us_head">
            <h2 class="text-xl md:text-2xl text-center">REFUND POLICY OF JATRI.CO</h2>
        </div>

        <div class="contact_form py-10">
            <div class="px-5 sm:px-10 2xl:container 2xl:mx-auto">
                <div class="grid grid-cols-6 gap-4">
                    <div class="col-start-2 col-span-4 conditions">
                        <ul class="body_text list-disc">
                            <p class="font-bold text-lg my-4">Before buying a ticket, customers are requested to read the following cancellation and refund policies carefully.</p>
                            <p class="corporate_color text-xl font-bold body_text my-4">Cancellation Policy</p>
                            <ol class="list-decimal">
                                <p>Tickets bought through Jatri.co can be cancelled as per the cancellation policy below. However, as a ticket selling agent, Jatri.co is bound to comply with the terms set by the operator/event organizer/vendor whose ticket it is selling. So, if the operator/event organizer denies refund even though claim was made within the terms mentioned here, Jatri.co will be unable to issue such refund</p>
                            </ol>
                            <p class="corporate_color text-xl font-bold body_text my-4 mt-4">Auto cancellation</p>
                            <ol class="list-disc text-sm">
                                <li class="ml-4">The ticket will be treated as cancelled if passenger fails to report at the reporting station before the departure schedule</li>
                            </ol>

                            <p class="corporate_color text-xl font-bold body_text my-4">Failure to Pay</p>
                            <ol class="list-disc text-sm">
                                <li  class="ml-4">No ticket will be activated unless the customer has paid the full amount mentioned on the screen</li>
                                <li  class="ml-4">For mobile payments, it is the responsibility of the customer to input transaction ID (if applicable), PIN, OTP properly within time to confirm his ticket by himself. Jatri.co sometimes does the verification for the customer as a courtesy, but it is not jatri.co’s responsibility or service promise.</li>
                                <li  class="ml-4">Tickets will be automatically canceled if customer does not confirm payment within 30 minutes. For mobile payments customer must complete payment and also verify transaction within this stipulated time. During Eid sales month, Jatri.co will not do any verification on behalf of the customers</li>
                            </ol>

                            <p class="corporate_color text-xl font-bold body_text my-4">Ticket cancellation eligibility <br>
                                Regular Time (Non-Eid Period)
                                </p>
                            <ol class="list-disc text-sm">
                                <p>To be eligible for refund, customer needs to cancel the ticket from jatri.co before the applicable time before the departure. And must report the cancelation to the support center (i.e Call 09642080808 or email to info@jatri.co) of Jatri.co</p>
                                <table class="table-auto border border-corpo mt-4 my-4">
                                    <thead>
                                      <tr >
                                        <th class="border">Operator</th>
                                        <th class="border px-4">Hours before trip time</th>
                                        <th class="border px-4">Remarks</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td class="border p-2">Jatri Online</td>
                                        <td class="border p-2">12</td>
                                        <td class="border p-2">Excluding 12:00 AM to 06:00 AM</td>
                                      </tr>
                                      
                                    </tbody>
                                  </table>
                            </ol>

                            <p class="corporate_color text-xl font-bold body_text my-4">During Eid</p>
                            <ol class="list-disc text-sm">
                                <li  class="ml-4">For eid tickets, customers are eligible for refund ONLY if the operator cancels the trip and cannot provide an alternative arrangement</li>
                            </ol>

                            <p class="corporate_color text-xl font-bold body_text my-4">Refund Policy <br>
                                Regular Time (Non-Eid Period)
                                </p>
                            <ol class="list-disc text-xs">
                                <li  class="ml-4">No ticket will be refunded unless it has been cancelled as per the cancellation policy above.</li>
                                <li  class="ml-4">In case of technical problem or any failed transaction due to network failure, time delay on complete payment, input transaction ID/validation of transaction (in case of mobile payment) or any other situation where payment is successful but ticket is not generated on that case, no refunds will be processed without a written request in the correct format (as outlined below) sent to support@ Jatri.co within the timeframe requirement given above</li>
                                <ul>Refund Request Format :</ul>
                                <li class="ml-4">o Ticket # (required if a ticket was issued)</li>
                                <li class="ml-4">o Mobile number used while buying the ticket</li>
                                <li class="ml-4">o Category (e.g Bus/Cruise)</li>
                                <li class="ml-4">o Date of payment</li>
                                <li class="ml-4">o Method of Payment (e.g., bkash, card etc.)</li>
                                <li class="ml-4">o Mobile payment trxID (for mobile payments)</li>
                                <ul class="ml-4">o Where refund should be given to:</ul>
                                <li class="ml-4"> Personal bKash Number (If paid through bkash) OR</li>
                                <li class="ml-4">  OR Bank details (if paid through card/online baking/DBBL mobile banking) with Account Number, Bank Account Name, Bank Name, Branch Name and Routing Code.</li>
                                <li class="ml-4"> No cash refund given</li>
                                <li class="ml-4"> For cards, refund will be given only to the card used for purchases</li>
                            </ol>
                            <p class="corporate_color text-xl font-bold body_text my-4">During Eid</p>
                            <ol class="list-disc text-sm">
                                <li  class="ml-4">Customers MUST claim refund at the operator’s counters in case of trip cancellations</li>
                            </ol>

                            <p class="corporate_color text-xl font-bold body_text my-4">Timeline of refund <br>
                                Regular Time (Non-Eid Period)
                                </p>
                            <ol class="list-disc text-sm">
                                <li  class="ml-4">Upon receiving refund requests accurately in the format outlined above, Jatri.co will process refund within 15 business days (excluding holidays / weekends), subject to verification by the transportation operator/event organizer.</li>
                                <li  class="ml-4">For clarity, timing commitment starts from the time of receiving the ACCURATE information, mistakes will cause delays</li>
                                <li  class="ml-4">Further if the operator/event organizer takes time to verify eligibility or denies refund, Jatri.co will not be able to fulfill the request</li>
                                <li  class="ml-4">o In case of payments through bKash, credit card, debit card or internet banking, after Jatri.co processes the refund, the payment gateway or bank may take up to 1 week to 2 weeks to credit the amount to customer account, which is beyond Jatri.co’s responsibility. Once Jatri.co has processed the refund, customers are requested to enquire at their respective bank(s) about the status of the refund.</li>
                            </ol>

                            <p class="corporate_color text-xl font-bold body_text my-4">During Eid</p>
                            <ol class="list-disc text-sm">
                                <li class="ml-4">Customer must claim refund from bus operator’s counter before trip time</li>
                            </ol>

                            <p class="corporate_color text-xl font-bold body_text my-4">Amount of refund</p>
                            <ol class="list-disc text-sm">
                                <li class="ml-4">Fees charged by payment gateways, credit / debit cards, mobile payment gateways (e.g. bKash) are non-refundable due to the policies of the respective organizations, which is beyond Jatri.co's control</li>
                                <li class="ml-4">Jatri.co convenience fee is refundable only in case of trip cancellations by operators during non-eid times. For Eid tickets, convenience fee is non-refundable even if the operator has cancelled the trip. This fee is also non-refundable if the passenger cancels the tickets due to a change of decision to travel.</li>
                                <li class="ml-4">As per policy of an operator, Jatri.co may deduct a certain percentage (%) of the ticket price towards cancellation fee, where-ever applicable</li>
                                <li class="ml-4">For refunds through mobile payment gateways (e.g. bKash), a fee is charged by the mobile payment company which will be deducted from the eligible refund amount. Similar condition will apply if the bank charges any such additional fee</li>
                            </ol>


                            <p class="corporate_color text-xl font-bold body_text my-4">Special circumstances</p>
                            <ol class="list-disc text-sm">
                                <li class="ml-4">If a customer has sent payment to Jatri.co but the e-ticket is not confirmed or generated, i.e., there is no transaction ID or tickets booked/reserved by the mobile number of the mobile payment account, he can claim for refund in the similar procedure as above, without the ticket number. Such refunds will be given 7 business days (excluding Friday and Saturday) AFTER the event/trip has taken place. This is applicable for eid times also.</li>
                                <li class="ml-4">If a customer has made an excess or less payment for a ticket accidentally, he is eligible for refund but he must claim for the refund within 24 hours of making the payment</li>
                                <li class="ml-4">If a customer has reserved a ticket and made a payment, however, for some reason, the ticket purchase process was not successful and a ticket was not issued, a customer can claim refund as per the policy above. Ticket number is not required, but mobile # used for booking and other information are required.</li>
                                <li class="ml-4">For refunds through mobile payment gateways (e.g. bKash), a fee is charged by the mobile payment company which will be deducted from the eligible refund amount. Similar condition will apply if the bank charges any such additional fee</li>
                                <li class="ml-4">In case of card payments, last 4 digits of the card, type of card is also needed. It is to be noted that for reasons beyond Jatri.co’s control, card payment may sometimes require time to post on the payment gateway’s panel which Jatri.co uses to verify payment. Jatri.co can only verify payment after it has been posted on the said panel.</li>
                                <li class="ml-4">In case of BKash payments, full mobile number will be required. It is to be noted that for reasons beyond Jatri.co’s control, payment may require some times to post on the payment gateway’s panel which Jatri.co uses to verify payment. Jatri.co can only verify payment after it has been posted on the said panel.</li>
                                <p class="text-xl">Note: Terms and conditions of refund policy might time to time update or changed without any notice.</p>
                            </ol>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>