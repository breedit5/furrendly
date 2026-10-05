'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CSAEPolicyPage() {
  return (
    <section className="min-h-screen bg-white text-gray-800 py-12 sm:py-16 lg:py-20 px-4 font-['Arial']">
      <div className="max-w-5xl mx-auto">

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900">
          Child Safety & CSAE Policy
        </motion.h1>

        {/* CONTENT BOX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white shadow-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200"
        >

          {/* BADGE */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 
               px-6 py-3 rounded-2xl text-gray-700 font-medium">
              <span className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
              <span className="text-gray-800 text-sm sm:text-base font-medium">
                Furrendly Child Safety Policy
              </span>
              <span className="text-xs sm:text-sm font-semibold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-xl ml-2">
                Effective Date: May 1, 2026
              </span>
            </div>
          </div>

          <p className="mb-10 text-base sm:text-lg leading-8 text-black">
            ZERO TOLERANCE: Furrendly (com.breedit.app) has an absolute zero-tolerance policy against Child Sexual Abuse and Exploitation (CSAE) in any form.
          </p>

          <div className="space-y-12">

            <Section
              number="1"
              title="Overview & Purpose"
              content={
                <p>
                  Furrendly (com.breedit.app), developed by Furrendly Pvt. Ltd., is a community platform exclusively designed for pet owners and animal lovers in India. The app enables pet matchmaking, pet care services, nutrition guidance, grooming bookings, and community engagement among pet parents.
                  <br /><br />
                  This policy establishes Furrendly's explicit commitment to child safety and the prevention of Child Sexual Abuse and Exploitation (CSAE). It is published in compliance with Google Play's Child Safety Standards policy, which requires all social and community apps to maintain publicly accessible standards that prohibit CSAE, provide safety contact information, and declare in-app mechanisms for user feedback and content moderation.
                </p>
              }
            />

            <Section
              number="2"
              title="Explicit Prohibition of CSAE"
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li>Child Sexual Abuse and Exploitation (CSAE) of any kind</li>
                  <li>Sexual grooming, solicitation, or exploitation targeting minors</li>
                  <li>Creation, sharing, transmission, or storage of Child Sexual Abuse Material (CSAM)</li>
                  <li>Any communication intended to harm, exploit, or sexualize individuals under the age of 18</li>
                  <li>Sharing of any content that depicts, suggests, or promotes the sexual abuse of children</li>
                  <li>Any behavior that circumvents age verification or safety mechanisms to expose minors to harmful content</li>
                  <li>Any user found engaging in the above behaviors will face immediate and permanent removal from the platform. Furrendly will fully cooperate with law enforcement agencies in all cases involving CSAE.</li>
                </ul>
              }
            />

            <Section
              number="3"
              title="App Safety Design"
              content={
                <div className="space-y-4">
                  <p><strong>3.1 Platform Nature</strong><br />
                  Furrendly is a pet-centric community platform. All matchmaking, social, and community features on Furrendly are strictly intended for adult pet owners interacting about their animals. The platform is not a dating or romantic service for humans.</p>

                  <p><strong>3.2 Age Restriction</strong><br />
                  Furrendly (com.breedit.app) is intended for users aged 18 years and above. Users are required to confirm they are adults during the account registration process. The app does not knowingly allow minors to create accounts or use the platform.</p>

                  <p><strong>3.3 Content Moderation</strong><br />
                  All user-generated content on Furrendly is subject to moderation, including:
                  </p>
                  <ul className="list-disc pl-6">
                    <li>Automated screening for prohibited content types</li>
                    <li>Manual review of flagged and reported content</li>
                    <li>Immediate removal of content violating this policy</li>
                    <li>Permanent suspension of accounts engaging in prohibited behavior</li>
                  </ul>
                </div>
              }
            />

            <Section
              number="4"
              title="In-App Reporting Mechanism"
              content={
                <div className="space-y-4">
                  <p><strong>4.1 Report User</strong><br />
                  Users can report any other user by navigating to their profile and selecting the 'Report User' option. Reports are reviewed by the moderation team within 24 hours.</p>

                  <p><strong>4.2 Report Content / Post</strong><br />
                  Any post, image, or content on the platform can be reported by tapping the options menu (three dots) and selecting 'Report'. Categories include: inappropriate content, harmful content, child safety concern, and spam.</p>

                  <p><strong>4.3 Report Chat / Message</strong><br />
                  Users can report individual messages within the chat interface using the long-press menu and selecting 'Report Message'.</p>

                  <p><strong>4.4 Direct Safety Email</strong><br />
                  Users may also report concerns directly to: team@furrendly.com<br />
                  Subject line: SAFETY CONCERN — [Brief description]</p>

                  <p><strong>Response Commitment:</strong> All child safety reports are treated as highest priority and reviewed within 24 hours of receipt.</p>
                </div>
              }
            />

            <Section
              number="5"
              title="CSAM Handling Policy"
              content={
                <div className="space-y-4">
                  <p><strong>Detection:</strong></p>
                  <ul className="list-disc pl-6">
                    <li>Automated hash-matching technology to detect known CSAM before upload</li>
                    <li>AI-assisted content screening for flagged media</li>
                    <li>User reporting pipeline reviewed by trained moderators</li>
                  </ul>

                  <p><strong>Action upon detection:</strong></p>
                  <ul className="list-disc pl-6">
                    <li>Immediate removal of the content from the platform</li>
                    <li>Permanent suspension of the offending account</li>
                    <li>Preservation of evidence as required by law</li>
                    <li>Mandatory reporting to the National Center for Missing & Explited Children (NCMEC) where applicable</li>
                    <li>Full cooperation with Indian law enforcement under the POCSO Act, 2012 and the IT Act, 2000</li>
                  </ul>
                </div>
              }
            />

            <Section
              number="6"
              title="Compliance with Applicable Laws"
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li>Protection of Children from Sexual Offences (POCSO) Act, 2012 — India</li>
                  <li>Information Technology Act, 2000 and IT (Amendment) Act, 2008 — India</li>
                  <li>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</li>
                  <li>Google Play Developer Programme Policies — Child Safety Standards</li>
                  <li>All applicable local, national, and international laws governing child safety online</li>
                </ul>
              }
            />

            <Section
              number="7"
              title="Safety Point of Contact"
              content={
                <div className="space-y-2">
                  <p>Organization: Furrendly Pvt. Ltd.</p>
                  <p>App Package: com.breedit.app</p>
                  <p>Safety Email: team@furrendly.com</p>
                  <p>Policy URL: www.furrendly.com/child-safety</p>
                  <p>Law Enforcement Inquiries: team@furrendly.com (Subject: LAW ENFORCEMENT)</p>
                </div>
              }
            />

            <Section
              number="8"
              title="Policy Updates"
              content={
                <p>
                  This policy will be reviewed and updated at least annually, or whenever material changes are made to Furrendly's platform features or applicable laws. The effective date at the top of this document reflects the most recent version. Users and regulators may access the latest published version at www.furrendly.com/child-safety.
                </p>
              }
            />

          </div>

          {/* FOOTER */}
          <div className="mt-16 pt-12 border-t border-gray-300 text-center">
            <p className="text-sm sm:text-base text-gray-500">
              Signed by: Furrendly Pvt. Ltd. — Authorized Representative
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Date: May 1, 2026 | App Package: com.breedit.app
            </p>
            <p className="font-semibold text-pink-700 mt-2">
              — End of Document —
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

function Section({ number, title, content }: any) {
  return (
    <section>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-black">
        {number}. {title}
      </h2>
      <div className="space-y-4 text-base sm:text-lg leading-8 text-black font-['Arial']">
        {content}
      </div>
    </section>
  );
}