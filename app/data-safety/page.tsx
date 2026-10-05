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
          Data Safety & Privacy Disclosure
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
                Furrendly Data Safety Disclosure
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
              title="Overview"
              content={
                <p>
                  Furrendly is a platform connecting pet owners with service providers. The app collects certain user data to
                  provide core functionalities including service discovery, bookings, and user matching. This document is
                  prepared in compliance with Google Play Data Safety requirements.
                </p>
              }
            />

            <Section
              number="2"
              title="Data Collected"
              content={
                <>
                  <p>The following types of data are collected and transmitted off the user's device:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Personal info:</strong> Name, email, phone number — Yes</li>
                    <li><strong>Pet profile data:</strong> Breed, age, preferences — Yes</li>
                    <li><strong>Business data:</strong> Service provider details — For providers only</li>
                    <li><strong>Location data:</strong> Approximate or precise location — Yes (for nearby services)</li>
                    <li><strong>Device data:</strong> IP address, device type, OS, app usage logs — Yes</li>
                  </ul>
                </>
              }
            />

            <Section
              number="3"
              title="Data Sharing"
              content={
                <>
                  <p>We may share data with the following categories of third parties:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Cloud hosting providers — for infrastructure and secure storage.</li>
                    <li>Analytics platforms — to understand and improve app usage.</li>
                    <li>Payment processors — to handle transactions securely.</li>
                    <li>Legal authorities — only when required by law or legal process.</li>
                    <li className="font-medium text-green-700">Furrendly does NOT sell user data to any third party.</li>
                  </ul>
                </>
              }
            />

            <Section
              number="4"
              title="Data Usage"
              content={
                <>
                  <p>Collected data is used solely for:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Account creation, login, and profile management.</li>
                    <li>Connecting users with relevant pet service providers.</li>
                    <li>Processing bookings and sending related notifications.</li>
                    <li>Improving app features and user experience.</li>
                    <li>Customer support and issue resolution.</li>
                    <li>Fraud detection and platform safety.</li>
                  </ul>
                </>
              }
            />

            <Section
              number="5"
              title="Data Security"
              content={
                <>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>TLS encryption for all data in transit.</li>
                    <li>AES-256 encryption for data at rest.</li>
                    <li>Access controls limiting staff access to user data.</li>
                    <li>Periodic security reviews.</li>
                  </ul>
                  <p>
                    While we implement strong security practices, no system can guarantee complete security.
                  </p>
                </>
              }
            />

            <Section
              number="6"
              title="Cross-Border Transfers"
              content={
                <p>
                  Your data may be processed by third-party service providers on servers outside India (such as cloud
                  hosting or analytics services). All such transfers comply with applicable data protection laws,
                  including India's Digital Personal Data Protection Act, 2023.
                </p>
              }
            />

            <Section
              number="7"
              title="Data Retention"
              content={
                <p>
                  User data is retained only as long as necessary to deliver our services and meet legal obligations.
                  After account deletion, personal data is removed within 7-10 working days. Certain records may be
                  retained for up to 90 days for legal compliance.
                </p>
              }
            />

            <Section
              number="8"
              title="User Controls"
              content={
                <>
                  <p>Users can, at any time:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Access their personal data.</li>
                    <li>Request corrections to inaccurate data.</li>
                    <li>Request full deletion of their account and data.</li>
                    <li>Withdraw consent to data processing.</li>
                  </ul>
                  <p>To exercise these rights, contact: team@furrendly.com</p>
                </>
              }
            />

            <Section
              number="9"
              title="Children's Data"
              content={
                <p>
                  Under the DPDP Rules, 2025 (Rule 10), a child is defined as any person under 18. Furrendly is not
                  intended for use by anyone under 18. We do not knowingly collect personal data from children.
                  Before processing any child's data, verifiable parental or guardian consent is required. If we
                  discover such data has been collected without proper consent, it will be deleted immediately.
                </p>
              }
            />

            <Section
              number="10"
              title="SDKs & Third-Party Services"
              content={
                <p>
                  The app may use third-party SDKs for analytics, payments, and infrastructure. These SDKs may collect
                  data as described in their own privacy policies. We only use SDKs from reputable providers and require
                  them to process data in accordance with applicable law.
                </p>
              }
            />

            <Section
              number="11"
              title="DPDP Act, 2023 & DPDP Rules, 2025 Compliance"
              content={
                <>
                  <p>
                    Furrendly complies with India's Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025
                    (notified 14 November 2025). As a Data Fiduciary we:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Obtain clear, plain-language consent specifying exact data collected and purpose.</li>
                    <li>Implement security safeguards including encryption, access controls, and logging.</li>
                    <li>Report any personal data breach to affected users and the Data Protection Board of India — with no minimum harm threshold.</li>
                    <li>Honour Data Principal rights including access, correction, deletion, and grievance redressal within 90 days.</li>
                    <li>Define children as anyone under 18 and require verifiable parental consent for their data.</li>
                  </ul>
                  <p>
                    Full Phase 3 compliance obligations apply from May 2027. We are proactively implementing these
                    requirements ahead of that deadline.
                  </p>
                </>
              }
            />

            <Section
              number="12"
              title="Contact Information"
              content={
                <div className="space-y-2">
                  <p><strong>Grievance Officer:</strong> To be designated — team@furrendly.com</p>
                  <p><strong>Email:</strong> team@furrendly.com</p>
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