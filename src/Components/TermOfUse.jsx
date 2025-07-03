import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfUse = () => {
  return (
    <div className="bg-white px-4 py-16 md:px-10 lg:px-20 text-[#0D1B2A] leading-relaxed">
      <Helmet>
        <title>Terms of Use | Nagreen Tech</title>
      </Helmet>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms of Use</h1>
        <p className="text-sm text-gray-500 mb-10 text-center">Last updated February 01, 2024</p>

        <p className="mb-6">
          These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and <strong>Nagreen Tech</strong> (“Company“, “we”, “us”, or “our”), concerning your access to and use of the <strong>https://nagreentech.com</strong> website as well as any related media forms, mobile apps, or services (collectively, the “Site”).
        </p>

        <p className="mb-6">
          By accessing the Site, you agree to be bound by these Terms. If you do not agree, please do not use our services.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-2">TABLE OF CONTENTS</h2>
        <ul className="list-decimal list-inside mb-8 text-sm text-gray-700 space-y-1">
          <li>Agreement to Terms</li>
          <li>Intellectual Property Rights</li>
          <li>User Representations</li>
          <li>User Registration</li>
          <li>Products</li>
          <li>Purchases and Payment</li>
          <li>Return Policy</li>
          <li>Prohibited Activities</li>
          {/* Continue table as before */}
        </ul>

        <h2 className="text-lg font-semibold mb-2">1. AGREEMENT TO TERMS</h2>
        <p className="mb-4">
          By using our Site, you confirm that you accept these terms and agree to comply with them. If you do not agree to these terms, you must not use our Site.
        </p>

        <h2 className="text-lg font-semibold mb-2">2. INTELLECTUAL PROPERTY RIGHTS</h2>
        <p className="mb-4">
          All content on our Site, including code, graphics, and trademarks, is the property of Nagreen Tech or our licensors and protected by copyright and trademark laws.
        </p>

        <h2 className="text-lg font-semibold mb-2">3. USER REPRESENTATIONS</h2>
        <p className="mb-4">
          You confirm that you are over 18, that all information you provide is accurate, and that you will not use our Site for any unlawful or unauthorized purpose.
        </p>

        {/* Section 4: User Registration */}
        <h2 className="text-lg font-semibold mb-2">4. USER REGISTRATION</h2>
        <p className="mb-4">
          You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
        </p>

        {/* Section 5: Products */}
        <h2 className="text-lg font-semibold mb-2">5. PRODUCTS</h2>
        <p className="mb-4">
          Our e-commerce store specializes in fashion and clothing products for men and women. We offer a wide range of items, including dresses, blazer sets, pants, T-shirts, nightwear, leggings, and many more stylish apparel options designed to suit diverse tastes and preferences.
        </p>
        <p className="mb-4">
          We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.
        </p>
        <p className="mb-4">
          All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
        </p>
        <p className="mb-4">
          <strong>Delivery information:</strong> We offer free Standard shipping on all orders over $50 and we have a premium fast shipping option as well. Normally, we take 2–3 days to ship your order. We ship through USPS, FedEx, UPS, or DHL.
        </p>

        {/* Section 6: Purchases and Payment */}
        <h2 className="text-lg font-semibold mb-2">6. PURCHASES AND PAYMENT</h2>
        <p className="mb-4">We accept the following forms of payment:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Visa</li>
          <li>Mastercard</li>
          <li>American Express</li>
          <li>Discover</li>
          <li>PayPal</li>
          <li>Bank Transfer</li>
        </ul>
        <p className="mb-4">
          You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
        </p>
        <p className="mb-4">
          Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in U.S. dollars.
        </p>
        <p className="mb-4">
          You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider instantly when you place the order for any such amounts. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
        </p>
        <p className="mb-4">
          We reserve the right to refuse any order placed through the Site. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.
        </p>

        {/* Section 7: Return Policy */}
        <h2 className="text-lg font-semibold mb-2">7. RETURN POLICY</h2>
        <p className="mb-4">
          Please review our Return Policy posted on the Site prior to making any purchases.
        </p>

        {/* Section 8: Prohibited Activities */}
        <h2 className="text-lg font-semibold mb-2">8. PROHIBITED ACTIVITIES</h2>
        <p className="mb-4">
          You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
        </p>
        <p className="mb-4">As a user of the Site, you agree not to:</p>
        <ul className="list-disc list-inside space-y-1 text-sm mb-6">
          <li>Systematically retrieve data or other content to compile a database without written permission.</li>
          <li>Trick, defraud, or mislead users or us to access sensitive account info.</li>
          <li>Circumvent security features or restrictions.</li>
          <li>Disparage or harm the Site or its reputation.</li>
          <li>Harass or harm another person using info from the Site.</li>
          <li>Misuse support services or submit false reports.</li>
          <li>Engage in unauthorized framing or linking.</li>
          <li>Upload viruses or spam content.</li>
          <li>Use automated scripts or tools for unauthorized activity.</li>
          <li>Impersonate another user or use someone else's credentials.</li>
          <li>Interfere with the Site’s normal operations or services.</li>
          <li>Reverse engineer or copy the Site’s code.</li>
          <li>Use the Site to compete with us or for unauthorized commercial activity.</li>
          <li>Sell or transfer your user profile.</li>
          <li>Collect data like emails for spamming or auto-registration.</li>
        </ul>

        {/* Section 9: USER GENERATED CONTRIBUTIONS */}
        <h2 className="text-lg font-semibold mt-10 mb-2">9. USER GENERATED CONTRIBUTIONS</h2>
        <p className="mb-4">
          The Site does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, “Contributions”). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Site Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
          <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
          <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.</li>
          <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.</li>
          <li>Your Contributions are not false, inaccurate, or misleading.</li>
          <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
          <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
          <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
          <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
          <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
          <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
          <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors;</li>
          <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
          <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.</li>
          <li>Any use of the Site or the Marketplace Offerings in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site and the Marketplace Offerings.</li>
        </ul>

        {/* Section 10: CONTRIBUTION LICENSE */}
        <h2 className="text-lg font-semibold mt-10 mb-2">10. CONTRIBUTION LICENSE</h2>
        <p className="mb-4">
          You and Site agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
        </p>
        <p className="mb-4">
          By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such feedback for any purpose without compensation to you.
        </p>
        <p className="mb-4">
          We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
        </p>

        {/* Section 11: GUIDELINES FOR REVIEWS */}
        <h2 className="text-lg font-semibold mt-10 mb-2">11. GUIDELINES FOR REVIEWS</h2>
        <p className="mb-4">
          We may provide you areas on the Site to leave reviews or ratings. When posting a review, you must comply with the following criteria:
        </p>
        <ol className="list-decimal list-inside mb-4 space-y-1 text-sm">
          <li>You should have firsthand experience with the person/entity being reviewed;</li>
          <li>Your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language;</li>
          <li>Your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability;</li>
          <li>Your reviews should not contain references to illegal activity;</li>
          <li>You should not be affiliated with competitors if posting negative reviews;</li>
          <li>You should not make any conclusions as to the legality of conduct;</li>
          <li>You may not post any false or misleading statements;</li>
          <li>You may not organize a campaign encouraging others to post reviews, whether positive or negative.</li>
        </ol>
        <p className="mb-4">
          We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review.
        </p>

        {/* Section 12: SUBMISSIONS */}
        <h2 className="text-lg font-semibold mt-10 mb-2">12. SUBMISSIONS</h2>
        <p className="mb-4">
          You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site or the Marketplace Offerings (“Submissions”) provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.
        </p>

        {/* Section 13: SITE MANAGEMENT */}
        <h2 className="text-lg font-semibold mt-10 mb-2">13. SITE MANAGEMENT</h2>
        <p className="mb-4">
          We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site and the Marketplace Offerings.
        </p>

        {/* Section 14: PRIVACY POLICY */}
        <h2 className="text-lg font-semibold mt-10 mb-2">14. PRIVACY POLICY</h2>
        <p className="mb-4">
          We care about data privacy and security. Please review our Privacy Policy: <a href="https://daleshankle.shop/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">https://daleshankle.shop/privacy-policy</a>. By using the Site or the Marketplace Offerings, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the Site and the Marketplace Offerings are hosted in the United States. If you access the Site or the Marketplace Offerings from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Site, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.
        </p>

        {/* Section 15: TERM AND TERMINATION */}
        <h2 className="text-lg font-semibold mt-10 mb-2">15. TERM AND TERMINATION</h2>
        <p className="mb-4">
          These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE AND THE MARKETPLACE OFFERINGS (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE AND THE MARKETPLACE OFFERINGS OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
        </p>
        <p className="mb-4">
          If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
        </p>

        {/* Section 16: MODIFICATIONS AND INTERRUPTIONS */}
        <h2 className="text-lg font-semibold mt-10 mb-2">16. MODIFICATIONS AND INTERRUPTIONS</h2>
        <p className="mb-4">
          We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Marketplace Offerings without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site or the Marketplace Offerings.
        </p>
        <p className="mb-4">
          We cannot guarantee the Site and the Marketplace Offerings will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site or the Marketplace Offerings at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site or the Marketplace Offerings during any downtime or discontinuance of the Site or the Marketplace Offerings. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or the Marketplace Offerings or to supply any corrections, updates, or releases in connection therewith.
        </p>

        {/* Section 17: GOVERNING LAW */}
        <h2 className="text-lg font-semibold mt-10 mb-2">17. GOVERNING LAW</h2>
        <p className="mb-4">
          These Terms of Use and your use of the Site and the Marketplace Offerings are governed by and construed in accordance with the laws of the United States applicable to agreements made and to be entirely performed within the United States, without regard to its conflict of law principles.
        </p>

        {/* Section 18: DISPUTE RESOLUTION */}
        <h2 className="text-lg font-semibold mt-10 mb-2">18. DISPUTE RESOLUTION</h2>
        <h3 className="font-semibold mt-4 mb-1">Informal Negotiations</h3>
        <p className="mb-4">
          To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Use (each “Dispute” and collectively, the “Disputes”) brought by either you or us (individually, a “Party” and collectively, the “Parties”), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
        </p>
        <h3 className="font-semibold mt-4 mb-1">Binding Arbitration</h3>
        <p className="mb-4">
          If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association (“AAA”) and, where appropriate, the AAA’s Supplementary Procedures for Consumer Related Disputes (“AAA Consumer Rules”), both of which are available at the AAA website www.adr.org. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. If such costs are determined by the arbitrator to be excessive, we will pay all arbitration fees and expenses. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in Garden City, Idaho. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.
        </p>
        <p className="mb-4">
          If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in Garden City, Idaho, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Terms of Use.
        </p>
        <p className="mb-4">
          If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
        </p>
        <h3 className="font-semibold mt-4 mb-1">Restrictions</h3>
        <p className="mb-4">
          The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
        </p>
        <h3 className="font-semibold mt-4 mb-1">Exceptions to Informal Negotiations and Arbitration</h3>
        <p className="mb-4">
          The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
        </p>

        {/* Section 19: CORRECTIONS */}
        <h2 className="text-lg font-semibold mt-10 mb-2">19. CORRECTIONS</h2>
        <p className="mb-4">
          There may be information on the Site that contains typographical errors, inaccuracies, or omissions that may relate to the Marketplace Offerings, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
        </p>

        {/* Section 20: DISCLAIMER */}
        <h2 className="text-lg font-semibold mt-10 mb-2">20. DISCLAIMER</h2>
        <p className="mb-4 whitespace-pre-line">
          THE SITE IS PROVIDED{"\n"}
          ON AN AS-IS AND AS-AVAILABLE BASIS. YOU{"\n"}
          AGREE THAT YOUR USE OF THE SITE SERVICES WILL BE AT YOUR SOLE RISK. TO THE{"\n"}
          FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR{"\n"}
          IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT{"\n"}
          LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR{"\n"}
          PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT{"\n"}
          THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY{"\n"}
          WEBSITES LINKED TO THIS SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY{"\n"}
          FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2){"\n"}
          PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM{"\n"}
          YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF{"\n"}
          OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL{"\n"}
          INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION{"\n"}
          TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH{"\n"}
          MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY{"\n"}
          ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF{"\n"}
          ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR{"\n"}
          OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE,{"\n"}
          OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A{"\n"}
          THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE{"\n"}
          APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A{"\n"}
          PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU{"\n"}
          AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE{"\n"}
          PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU{"\n"}
          SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
        </p>

        {/* Section 21: LIMITATIONS OF LIABILITY */}
        <h2 className="text-lg font-semibold mt-10 mb-2">21. LIMITATIONS OF LIABILITY</h2>
        <p className="mb-4">
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>

        {/* Section 22: INDEMNIFICATION */}
        <h2 className="text-lg font-semibold mt-10 mb-2">22. INDEMNIFICATION</h2>
        <p className="mb-4">
          You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms of Use; (3) any breach of your representations and warranties set forth in these Terms of Use; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
        </p>

        {/* Section 23: USER DATA */}
        <h2 className="text-lg font-semibold mt-10 mb-2">23. USER DATA</h2>
        <p className="mb-4">
          We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
        </p>

        {/* Section 24: ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES */}
        <h2 className="text-lg font-semibold mt-10 mb-2">24. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
        <p className="mb-4">
          Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
        </p>

        {/* Section 25: CALIFORNIA USERS AND RESIDENTS */}
        <h2 className="text-lg font-semibold mt-10 mb-2">25. CALIFORNIA USERS AND RESIDENTS</h2>
        <p className="mb-4">
          If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
        </p>

        {/* Section 26: MISCELLANEOUS */}
        <h2 className="text-lg font-semibold mt-10 mb-2">26. MISCELLANEOUS</h2>
        <p className="mb-4">
          These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use.
        </p>
        <h2 className="text-lg font-semibold mt-10 mb-2">27. CONTACT US</h2>
        <p>
          If you have any questions about these Terms, you may contact us at:
          <br />
          <strong>Email:</strong>{' '}
          <a href="mailto:greentcstore@gmail.com" className="text-green-600 hover:underline">
            greentcstore@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
