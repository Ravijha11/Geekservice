"use client";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-center mb-8">Terms &amp; Conditions</h1>
        <div className="space-y-8 text-lg font-serif text-left">
          <div>
            <h2 className="text-2xl font-bold mb-2">Credit Card Policy</h2>
            <p>Of a credit card number, you authorize all charges described herein to be applied to such debit card unless and until you provide a credit card number. In the event you are enrolled, or later enroll, in an automatic payment or electronic funds transfer plan, you agree that all sums described herein may be charged, at geek-services.com&apos;s option, to the account number provided for such automatic payment or electronic funds transfer plan. When payment is made by credit card or debit card, payment will also be subject to the terms and conditions established by the credit or debit card issuer. If charges cannot be processed through your credit card, or if your bank draft or electronic funds transfer is returned for insufficient funds, Then will proceed through cheque.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Renewal Policy</h2>
            <p>You agree and acknowledge that a Subscription under the Recurring Payment Plan will automatically renew for a month, unless notified otherwise by You (&quot;Auto Renewal&quot;). However, a Subscription under the Annual Payment Plan does not automatically renew and expires at the end of the applicable Term Plan.</p>
            <p>Your credit card will be charged with the amount of the then prevailing subscription charges as per the payment option that you selected at the time of registering with geek-services.com.</p>
            <p>If you would like to opt out of the Auto Renewal, please call us and speak with one of our customer service representative at least 30 days prior to your subscription end date to discontinue your service.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Refund Policy</h2>
            <p>For subscription based plans, a full refund will be issued if geek-services.com has not been able to resolve even a single issue for you within the first 30 days of the subscription.</p>
            <p>If there are one or more resolved issues, the fees for the Subscription Service will not be refundable. Notwithstanding this geek-services.com may, at its sole discretion and on a case by case basis, agree to a refund of Subscription fees after deducting charges for servicing the Customer.</p>
            <p>For incident based plans, you will be eligible for refund when any of the following criterions are met:</p>
            <ul className="list-disc pl-8">
              <li>You have all the prerequisites which were required to resolve the problem and Issue was not resolved till the time account was active.</li>
              <li>The issue is out of scope for the particular plan</li>
              <li>07 days have not passed after the issue was last worked upon by an geek-services.com technician</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Acceptable User Policy (AUP) and Privacy Policy</h2>
            <p>The geek-services.com Acceptable User Policy (AUP) and the Privacy Policy which is an integral part of these Terms and Conditions, is incorporated here by reference. If you have not yet reviewed the geek-services.com &quot;AUP&quot; and the Privacy Policy, then please do so prior to agreeing to these Terms and Conditions. You agree that beyond the Personal Information identified in the Privacy Policy, any information or data disclosed or sent to geek-services.com over the telephone, electronically or otherwise, is not confidential or proprietary to you.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Personal and Non-Commercial Use Limitation</h2>
            <p>Unless otherwise specified, the Services, Materials and Software are solely for your personal and non-commercial use in addressing matters covered by your Service Plan. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, modify, create derivative works from, transfer, distribute or sell any information, software, products or services obtained from the Services, Materials, or Software. Any Services, Materials, and Software are available only in connection with Services under a valid Service Plan.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">No Unlawful or Prohibited Use</h2>
            <p>As a condition of your use of the geek-services.com Portal or any Services, you will not use the Materials, Software or Services for any purpose that is unlawful or prohibited by these Terms of Use. ...</p>
          </div>
          {/* Continue with the rest of the provided content, using headings and paragraphs as above for clarity and readability. */}
        </div>
      </section>
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
    </div>
  );
} 