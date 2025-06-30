"use client";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header (fixed) */}
      <header className="w-full bg-header-blue text-white flex items-center justify-between px-6 py-4 fixed top-0 left-0 z-50">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold font-serif">Geek Services</span>
        </div>
        <div className="flex items-center gap-6 text-base font-semibold">
          <span className="hidden sm:inline">info@allitexpert.com</span>
          <span className="flex items-center gap-1"><span role="img" aria-label="US Flag">🇺🇸</span>+1-(888)-404-6710</span>
        </div>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-20" />

      <section className="py-16 bg-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 font-serif">Refund and Cancellation Policy</h1>
        <p className="mb-6 text-lg font-serif">Welcome to "Geek Services" Refund Policy. For subscription-based plans, a full refund will be issued if Geek Services has not been able to resolve even a single issue for you within the first 30 days of the subscription. If there are one or more resolved issues, the fees for the Subscription Service will not be refundable. Notwithstanding this Geek Services, at its sole discretion and on a case-by-case basis, agree to a refund of Subscription fees after deducting charges for servicing the Customer.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2 font-serif">For incident-based plans, you will be eligible for refund when any of the following criterions are met:</h2>
        <ul className="list-disc pl-8 mb-6 text-lg font-serif">
          <li>You have all the prerequisites which were required to resolve the problem</li>
          <li>Issue was not resolved until the time account was active</li>
          <li>30 days have not passed after the issue was last worked upon by a Geek Services Technology technician</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-2 font-serif">Service Plans</h2>
        <p className="mb-6 text-lg font-serif">You may order Services by submitting Plan Orders through the Geek Services Websites or by calling Geek Services. Once Geek Services accepts the Plan Order submitted by you, then you will receive an email from Geek Services at the email address that you provide or have provided to Geek Services as part of the Registration Process for the Services. Geek Services is not responsible for rendering Services in connection with any Plan Order that it has not accepted. Upon acceptance by Geek Services of a Plan Order, you will have a Service Plan.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2 font-serif">Undertaking</h2>
        <p className="mb-6 text-lg font-serif">Subject to the Terms and Conditions, and other terms specific to each Service Plan, Geek Services will address your query using commercially reasonable efforts in providing appropriate solutions under the Services. In most cases, Geek Services will attempt problem diagnosis and a solution through chat, email or other means as it deems most appropriate under the circumstances including remote access. You understand that if remote access is used on your computer there will be no residual software from the remote session; however, there may be a text file placed on your computer that will explain the work that was done on your computer. If such a text file is placed on your computer, you have the option to either save the file for future reference or to delete it from your computer. All undertakings under Service Plans are subject to Geek Services's Limited Warranty, which is set forth below. You agree to pay all Services Fee and any other applicable fee/charges as set out in the relevant Plan Order in accordance with the Payment Terms provided below.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2 font-serif">Payment</h2>
        <p className="mb-6 text-lg font-serif">Services against any Plan Order will be available once you have made payment for Services according to the requirements of the corresponding Plan Order. Geek Services has no obligation to render Services under any Service Plan if the payments as required under any Plan Order have not been made. You understand that certain Service Plans may have fee including, but not limited to "Service Fee" and/or "Activation Fee" payable either on an annual basis ("Annual Payment Plan") or on a monthly basis ("Recurring Payment Plan"). Subject to the applicable Term Plan, all payments under the Annual Plan shall be made upfront at time of commencement of the subscription cycle.</p>
        <p className="mb-6 text-lg font-serif">For payments under the Recurring Payment Plan, apart from the monthly installments of the Service Fee, payable over a one (1) year payment term, you may be charged an additional non-refundable Activation Fee at the time of registration, as specified in the Plan Order. The fee (including Activation Fee) will not be refunded in case of cancellation of the Service Plan unless otherwise stated in the Plan Order.</p>
        <p className="mb-6 text-lg font-serif">All fee under this clause or a relevant Plan Order, is payable at the time of commencement of the Service Plan. When you purchased the Service, you agreed to a specific price and plan, where such plan maybe for a term of one, two or three years ("Term Plan"). All terms of Service Fee and/or any other fee payable under any mode of payment for a Subscription shall be set forth in the applicable Plan Order. Similarly, some plans may offer a discount on the Service if you sign up for other Geek Services services ("Bundle Discount"). You agree to maintain your Service and the bundled services for the applicable term. If you signed up for a Term Plan or a Bundle Discount,the price available with those plans is valid until one of the following occurs:</p>
        <ul className="list-disc pl-8 mb-6 text-lg font-serif">
          <li>The Term Plan expires</li>
          <li>You drop one of the Geek Services services you were required to purchase to receive the special rate as notified to Geek Services</li>
          <li>You terminate the agreement/Service Plan before the expiry of the relevant term.</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-2 font-serif">Credit Card Billing</h2>
        <p className="mb-6 text-lg font-serif">You may be asked to provide us with a credit card number from a card issuer that we accept in order to activate your Service. You hereby authorize Geek Services to charge and/or place a hold on your credit card with respect to any unpaid charges for Services or any related equipment. You authorize the issuer of the credit card to pay any amounts described herein without requiring a signed receipt, and you agree that these charges are to be accepted as authorization to the issuer of the credit card to pay any amounts described herein without requiring a signed receipt, and you agree that these charges are to be accepted as authorization to the issuer of the credit card to pay all such amounts. You authorize Geek Services and/or any other company who bills products or services, or acts as billing agent for Geek Services to continue to attempt to charge and/or place holds with respect to all sums described herein, or any portion thereof, to your credit card until such amounts are paid in full.</p>
        <p className="mb-6 text-lg font-serif">You agree to provide Geek Services with updated credit card information upon Geek Services's request and any time the information you previously provided is no longer valid.</p>
        <p className="mb-6 text-lg font-serif">You acknowledge and agree that neither Geek Services nor any Geek Services affiliated company will have any liability whatsoever for any non-sufficient funds or other charges incurred by you as a result of such attempts to charge, and/or place holds on, your credit card. If you mistakenly provide a debit card number, instead of a credit card number, you authorize all charges described herein to be applied to such debit card unless and until you provide a credit card number. In the event you are enrolled, or later enroll, in an automatic payment or electronic funds transfer plan, you agree that all sums described herein may be charged, at Geek Services's option, to the account number provided for such automatic payment or electronic funds transfer plan.</p>
        <p className="mb-6 text-lg font-serif">When payment is made by credit card or debit card, payment will also be subject to the terms and conditions established by the credit or debit card issuer. If charges cannot be processed through your credit card, or if your bank draft or electronic funds transfer is returned for insufficient funds, we may, at our discretion, charge you an additional fee.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2 font-serif">Third Party Agreements</h2>
        <p className="mb-6 text-lg font-serif">As part of the Services, Geek Services may suggest certain third-party services to you. If you choose to subscribe to or otherwise use any third-party services, your use of any such services is subject to the terms of service of such third-party service provider. You agree to comply with such provider's terms of service and that the third-party provider is solely responsible for delivery of its service(s) to you and your use of them. Third party services include, but are not limited to technical support, Websites, training, music, gaming and storage services that Geek Services may elect to make available from time to time. Violation of such third-party provider's terms of service may, in Geek Services's sole discretion, result in the termination of your customer account and use of service.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2 font-serif">Limited-Service Warranty</h2>
        <p className="mb-6 text-lg font-serif">Geek Services DISCLAIMS ALL WARRANTIES EXPRESS OR IMPLIED AS TO THE SERVICES, THE MATERIALS AND THE SOFTWARE WHETHER IN THE NATURE OF MERTCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, OR OTHERWISE. IN THE EVENT THAT YOU ARE NOT SATISFIED WITH THE SERVICES, YOUR SOLE REMEDY IS TO (A) ALLOW Geek Services TO REPERFORM THE SERVICES SUBJECT TO DISPUTE, (B) RE-DOWNLOAD AND REINSTALL THE SOFTWARE. SOME OF THE Geek Services SERVICE PLANS COME WITH A 7- DAY LIMITED-SERVICE WARRANTY AS PROVIDED IN ONLINE DOCUMENTATION FOR THOSE SPECIFIC PLANS. THIS 7- DAY LIMITED-SERVICE WARRANTY IS SUBJECT TO FULFILLMENT OF THE TERMS FOR THE SPECIFIC SERVICE PLAN WHICH IS IN ADDITION TO THE TERMS AND CONDITIONS IN THIS DOCUMENT.</p>
        <p className="mb-6 text-lg font-serif">Geek Services AND/OR ITS RESPECTIVE SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY OF THE INFORMATION CONTAINED IN THE SERVICES, MATERIALS OR THE SOFTWARE FOR ANY PURPOSE WHATSOEVER. ALL MATERIALS AND SOFTWARE ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND WHATSOEVER. Geek Services AND/OR ITS RESPECTIVE SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES OF ANY KIND WHETHER EXPRESS OR IMPLIED WITH REGARD TO THIS INFORMATION, INCLUDING ALL WARRANTIES AND CONDITIONS OF MERCHANTABILITY, WHETHER EXPRESS, IMPLIED OR STATUTORY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NONINFRINGEMENT.</p>
        <p className="mb-6 text-lg font-serif">THE MATERIALS COULD INCLUDE TECHNICAL INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. Geek Services AND/OR ITS RESPECTIVE SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE MATERIALS AND/OR THE SOFTWARE DESCRIBED HEREIN AT ANY TIME. IN NO EVENT SHALL Geek Services AND/OR ITS RESPECTIVE SUPPLIERS BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA REVENUE OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, INCURRED BY YOU OR ANY THIRD PARTY, WHETHER ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF SERVICES, MATERIALS OR SOFTWARE, FAILURE TO PROVIDE THE SAME, OR INFORMATION AVAILABLE IN THE MATERIALS.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2 font-serif">Limitation of Liability</h2>
        <p className="mb-6 text-lg font-serif">Notwithstanding anything to the contrary in no event shall Geek Services be liable to you in excess of the amounts actually paid by you to Geek Services under the Plan Order that is the subject of the dispute.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2 font-serif">Limitations on Actions</h2>
        <p className="mb-6 text-lg font-serif">Any cause of action by you must be commenced within 3 months after the cause of action arose or it shall be forever waived and barred.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2 font-serif">Term and Termination</h2>
        <p className="mb-6 text-lg font-serif">Geek Services at its sole election may terminate or suspend your Service immediately without notice if, in the sole discretion of Geek Services:</p>
        <ul className="list-disc pl-8 mb-6 text-lg font-serif">
          <li>You are in breach of any of the Terms and Conditions (including but not limited to all policies regarding abuse and acceptable use of the Service) or any license for Third Party Software</li>
          <li>Your use of the Service is prohibited by law or is disruptive to, adversely impacts or causes a malfunction to the Service, Geek Services's network, or the use and enjoyment of Geek Services's other users</li>
          <li>Geek Services receives an order from a court to terminate the Service you are availing</li>
          <li>If Geek Services for any reason ceases to offer the Service</li>
          <li>If you are no longer a Geek Services Customer</li>
          <li>Geek Services determines that you are abusing the Service. Geek Services, in its sole discretion, may refuse to accept your request for the Service, renewal or re-subscription following a termination or suspension of your use of the Service</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-2 font-serif">Severability</h2>
        <p className="mb-6 text-lg font-serif">If any provision of the Terms of Service be held invalid or unenforceable, that portion shall be enforced to the maximum extent possible, and all other provisions contained in the Terms of Service shall remain in full force and effect. Geek Services's failure to enforce any provision of the Terms of Service shall not be deemed a waiver of such provision nor of the right to enforce such provision.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2 font-serif">No Offer</h2>
        <p className="mb-6 text-lg font-serif">The Geek Services Websites is available internationally and may contain references to Geek Services products, services, and programs that are not available in a viewer's country. These references do not imply that Geek Services intends to make such products, services, or programs available in such country.</p>
        <h2 className="text-2xl font-bold mt-8 mb-2 font-serif">Modification</h2>
        <p className="mb-6 text-lg font-serif">Geek Services reserves the right to amend the Terms and Condition, and the Geek Services Websites at any time by posting a revised version of the Terms and Conditions on the Geek Services Websites <a href="https://geek-services.com/terms-and-conditions.php" className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">here</a>, sending information regarding any amendment to the Terms of Service to the email address you provide to Geek Services in connection with registration. You are responsible for regularly reviewing the Geek Services website to be notified of any amendments to the Terms and Conditions.</p>
      </section>

      {/* Footer (fixed) */}
      <footer className="bg-[#2e2e2e] text-white py-8 px-4 mt-auto w-full">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <div className="flex flex-wrap gap-8 text-base font-serif justify-center">
            <a href="/aboutus" className="hover:underline">About Us</a>
            <a href="/privacypolicy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms & Conditions</a>
            <a href="/refundpolicy" className="hover:underline">Refund Policy</a>
            <a href="/contactus" className="hover:underline">Contact Us</a>
          </div>
          <div className="text-sm font-serif text-center">Copyrights © 2025 Geek Services. All Rights Reserved</div>
          <div className="text-center text-2xl font-bold mt-2 font-serif">Geek Services</div>
        </div>
      </footer>
      {/* Spacer for fixed footer */}
      <div className="h-32" />
    </div>
  );
} 