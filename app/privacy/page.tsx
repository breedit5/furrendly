'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <section className="min-h-screen bg-white text-gray-800 py-12 sm:py-16 lg:py-20 px-4 font-['Arial']">
      <div className="max-w-5xl mx-auto">
        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900"
        >
          Privacy Policy
        </motion.h1>

        {/* CONTENT CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white shadow-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200"
        >
          {/* DATE BADGE */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 px-6 py-3 rounded-2xl text-gray-700 font-medium">
              <span className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
              <span className="text-gray-800 text-sm sm:text-base font-medium">
                Furrendly Privacy Policy
              </span>
              <span className="text-xs sm:text-sm font-semibold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-xl ml-2">
                Effective Date: April 11, 2026
              </span>
            </div>
          </div>

          

          {/* SECTIONS */}
          <div className="space-y-12">
            <Section
              number="1"
              title="Introduction"
              content={
                <p>
                  Furrendly ("we", "our", or "us") operates a community-driven platform connecting pet owners with
                  pet-related services. This Privacy Policy explains how we collect, use, share, and protect your
                  personal data, and the rights you have over that data. By using the Furrendly app or website,
                  you agree to the terms of this Policy.
                </p>
              }
            />

            <Section
              number="2"
              title="Information We Collect"
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number.</li>
                  <li><strong>Pet Profile Data:</strong> Pet name, breed, age, and preferences.</li>
                  <li><strong>Business Information:</strong> Business name, services offered, and verification details (for service providers).</li>
                  <li><strong>Device & Usage Data:</strong> Device type, IP address, operating system, and in-app behaviour.</li>
                  <li><strong>Location Data:</strong> Approximate or precise location, used to show you nearby services.</li>
                </ul>
              }
            />

            <Section
              number="3"
              title="How We Use Your Information"
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li>Creating and managing your account.</li>
                  <li>Matching you with relevant pet services in your area.</li>
                  <li>Processing bookings and facilitating communication with service providers.</li>
                  <li>Improving app features and user experience.</li>
                  <li>Sending notifications, support responses, and service updates.</li>
                  <li>Detecting and preventing fraud and ensuring platform safety.</li>
                </ul>
              }
            />

            <Section
              number="4"
              title="Consent"
              content={
                <p>
                  We obtain your consent at the time of account creation. By registering, you consent to the
                  collection and use of your data as described in this Policy. You may withdraw consent at any
                  time by contacting us at team@furrendly.com. Withdrawal of consent does not affect the
                  lawfulness of any processing carried out before the withdrawal.
                </p>
              }
            />

            <Section
              number="5"
              title="Data Sharing"
              content={
                <>
                  <p>We may share your data with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cloud hosting providers — for secure storage and infrastructure.</li>
                    <li>Analytics platforms — to understand app usage and improve features.</li>
                    <li>Payment processors — to facilitate secure transactions.</li>
                    <li>Legal authorities — only when required by law or court order.</li>
                  </ul>
                  <p>We do not sell your personal data to any third party, including advertisers.</p>
                </>
              }
            />

            <Section
              number="6"
              title="Cross-Border Data Transfers"
              content={
                <p>
                  Your data may be processed on servers located outside India by our third-party service
                  providers (such as cloud hosting or analytics services). We ensure that such transfers comply
                  with applicable data protection laws, including the Digital Personal Data Protection Act, 2023.
                </p>
              }
            />

            <Section
              number="7"
              title="Data Security"
              content={
                <>
                  <p>We protect your data using the following measures:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>TLS (Transport Layer Security) encryption for all data in transit.</li>
                    <li>AES-256 encryption for data stored at rest.</li>
                    <li>Role-based access controls limiting who can access user data.</li>
                    <li>Periodic security reviews and vulnerability assessments.</li>
                  </ul>
                  <p>
                    While we implement industry-standard security practices, no system is completely secure.
                    We cannot guarantee the absolute security of your data.
                  </p>
                </>
              }
            />

            <Section
              number="8"
              title="Data Breach Notification"
              content={
                <>
                  <p>
                    Under the DPDP Rules, 2025, any personal data breach must be reported — there is no
                    minimum harm threshold. In the event of a breach, we will:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Notify affected Data Principals promptly with clear details of the breach.</li>
                    <li>Report the breach to the Data Protection Board of India as required.</li>
                    <li>Take immediate steps to contain and remediate the breach.</li>
                  </ul>
                  <p>
                    Failure to report a breach may result in penalties of up to INR 200 crores under the DPDP Act.
                  </p>
                </>
              }
            />

            <Section
              number="9"
              title="Data Retention"
              content={
                <p>
                  We retain your personal data only for as long as necessary to provide our services and meet
                  legal and compliance obligations. Once you delete your account, your personal data is deleted
                  within 7-10 working days. Certain records (such as transaction logs) may be retained for up
                  to 90 days for fraud prevention and legal compliance, unless a longer period is required by law.
                </p>
              }
            />

            <Section
              number="10"
              title="Children's Privacy"
              content={
                <p>
                  Under the DPDP Rules, 2025 (Rule 10), a 'child' is defined as any person under the age of 18.
                  Furrendly is not intended for use by anyone under 18. Before processing the personal data of a
                  child, we are required to obtain verifiable parental or guardian consent. We do not knowingly
                  collect personal data from anyone under 18. If we become aware that such data has been
                  collected without proper consent, we will delete it promptly.
                </p>
              }
            />

            <Section
              number="11"
              title="Your Rights"
              content={
                <>
                  <p>
                    Under the Digital Personal Data Protection Act, 2023 and applicable law, you have the
                    following rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal retention obligations).</li>
                    <li><strong>Withdrawal of Consent:</strong> Withdraw consent to processing at any time.</li>
                    <li><strong>Grievance Redressal:</strong> Lodge a complaint with our Grievance Officer.</li>
                  </ul>
                  <p>To exercise any of these rights, contact us at team@furrendly.com.</p>
                </>
              }
            />

            <Section
              number="12"
              title="Compliance with India's DPDP Act, 2023 & DPDP Rules, 2025"
              content={
                <>
                  <p>
                    Furrendly acts as a Data Fiduciary under the Digital Personal Data Protection Act, 2023
                    (DPDP Act) and the Digital Personal Data Protection Rules, 2025, notified by MeitY on
                    14 November 2025. These rules are being implemented in a phased manner:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Phase 1 (effective 13 November 2025): The Data Protection Board of India (DPBI) has been established.</li>
                    <li>Phase 2 (12 months — November 2026): Consent Manager registration framework becomes operational.</li>
                    <li>Phase 3 (18 months — May 2027): Full compliance obligations apply — notice requirements, security protocols, breach notifications, and Data Principal rights enforcement.</li>
                  </ul>
                  <p>
                    We are proactively aligning our practices with these requirements ahead of the Phase 3
                    deadline. Our consent notices are written in plain language and specify the exact purpose
                    for which your data is collected, in accordance with Rule requirements. If you have concerns
                    about how we handle your data, you may raise a complaint with our Grievance Officer
                    (response within 90 days) or with the Data Protection Board of India.
                  </p>
                </>
              }
            />

            <Section
              number="13"
              title="Changes to This Policy"
              content={
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of significant changes
                  by updating the effective date and, where appropriate, through in-app notification. Continued
                  use of Furrendly after changes constitutes acceptance of the updated Policy.
                </p>
              }
            />

            <Section
              number="14"
              title="Grievance Officer & Contact"
              content={
                <div className="space-y-2">
                  <p><strong>Grievance Officer:</strong> To be designated — team@furrendly.com</p>
                  <p><strong>Email:</strong> team@furrendly.com</p>
                  <p><strong>Response time:</strong> Within 30 days of receipt</p>
                  <p><strong>Address:</strong> B-2, F/FLOOR, 60 FUTA ROAD Pul
Prahladpur, New Delhi 110044.</p>
                </div>
              }
            />
          </div>

          {/* FOOTER */}
          <div className="mt-16 pt-12 border-t border-gray-800/50 text-center">
            <p className="text-sm sm:text-base text-gray-400">
              © 2026 Furrendly Pvt. Ltd. All rights reserved.
            </p>
            <p className="font-semibold text-pink-800 mt-1">
              Making pet parenting joyful, one paw at a time 🐾
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* REUSABLE SECTION COMPONENT */
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