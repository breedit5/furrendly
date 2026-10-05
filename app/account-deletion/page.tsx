'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AccountDeletionPage() {
  return (
    <section className="min-h-screen bg-white text-gray-800 py-12 sm:py-16 lg:py-20 px-4 font-['Arial']">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900"
        >
          Account Deletion Policy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white shadow-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200"
        >
          {/* HEADER BADGE */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 px-6 py-3 rounded-2xl">
              <span className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
              <span className="text-sm sm:text-base font-medium text-gray-800">
                Furrendly Account Deletion Policy
              </span>
              <span className="text-xs sm:text-sm font-semibold text-pink-500 bg-pink-100 px-3 py-1 rounded-xl ml-2">
                Effective Date: April 11, 2026
              </span>
            </div>
          </div>

          

          <div className="space-y-12">
            <Section
              number="1"
              title="How to Request Account Deletion"
              content={
                <>
                  <p>
                    You can request deletion of your account and associated personal data through any of the following methods:
                  </p>

                  <p><strong>Method 1 — In-App (Recommended)</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Open the Furrendly app.</li>
                    <li>Navigate to your Profile icon or Dashboard.</li>
                    <li>Go to Settings → Account → Delete Account.</li>
                    <li>Confirm your identity and submit the deletion request.</li>
                  </ul>

                  <p><strong>Method 2 — Via Help & Support</strong></p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Open the Furrendly app and go to Profile → Help and Support.</li>
                    <li>Tap 'Contact Us' and select issue type: Account Issue.</li>
                    <li>In the description box, write your deletion request and the reason, then submit.</li>
                  </ul>

                  <p><strong>Method 3 — Email</strong></p>
                  <p>
                    Send an email to team@furrendly.com with the subject line:
                    Account Deletion Request. Include your registered email address and a brief reason for deletion.
                  </p>
                </>
              }
            />

            <Section
              number="2"
              title="Identity Verification"
              content={
                <p>
                  To protect your privacy and prevent unauthorised deletion requests, we may verify your identity before
                  processing your request. This may involve confirming your registered email address or other account details.
                </p>
              }
            />

            <Section
              number="3"
              title="What Data Is Deleted"
              content={
                <>
                  <p>Upon successful verification and processing, the following data will be permanently deleted:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>User profile information (name, email address, phone number).</li>
                    <li>Pet profiles and all associated pet data.</li>
                    <li>Booking history and user-generated content linked to your account.</li>
                    <li>Preferences, settings, and app activity data.</li>
                  </ul>
                </>
              }
            />

            <Section
              number="4"
              title="What Data May Be Retained"
              content={
                <>
                  <p>
                    Certain information may be retained for legal, compliance, and security purposes even after account deletion:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Transaction records — if you made or received payments through the platform.</li>
                    <li>Fraud prevention logs — records required to investigate disputes or prevent abuse.</li>
                    <li>Legal obligation records — any data we are required to retain by applicable law.</li>
                  </ul>
                </>
              }
            />

            <Section
              number="5"
              title="Data Retention Period"
              content={
                <p>
                  Retained data is stored only as long as necessary for the stated purpose, typically up to 90 days from the
                  date of account deletion, unless a longer period is required by applicable law.
                </p>
              }
            />

            <Section
              number="6"
              title="Processing Time"
              content={
                <p>
                  Account deletion requests are processed within 7–10 working days after identity verification.
                  You will receive a confirmation email once your account and data have been successfully deleted.
                </p>
              }
            />

            <Section
              number="7"
              title="Effect of Deletion"
              content={
                <ul className="list-disc pl-6 space-y-2">
                  <li>You will lose access to all your Furrendly account features immediately upon deletion.</li>
                  <li>Any active bookings should be cancelled before submitting a deletion request.</li>
                  <li>Deleted accounts cannot be recovered. You may create a new account at any time.</li>
                </ul>
              }
            />

            <Section
              number="8"
              title="Your Rights Under DPDP Act, 2023 & Rules, 2025"
              content={
                <p>
                  The right to request deletion of your personal data is guaranteed under India's Digital Personal Data
                  Protection Act, 2023 and the DPDP Rules, 2025 (notified 14 November 2025). Under these rules,
                  every Data Fiduciary must provide a grievance redressal mechanism and respond to Data Principal
                  requests within 90 days. If your deletion request is not addressed within 7-10 working days,
                  please escalate to our Grievance Officer. If still unresolved, you may raise a complaint with the
                  Data Protection Board of India once the Board is fully operational.
                </p>
              }
            />

            <Section
              number="9"
              title="Contact & Grievance Officer"
              content={
                <div className="space-y-2">
                  <p><strong>Grievance Officer:</strong> To be designated — team@furrendly.com</p>
                  <p><strong>Email:</strong> team@furrendly.com</p>
                  <p><strong>Subject line:</strong> Account Deletion Request</p>
                  <p><strong>Response time:</strong> Within 7–10 working days</p>
                  <p><strong>Address:</strong> B-2, F/FLOOR, 60 FUTA ROAD Pul
Prahladpur, New Delhi 110044.</p>
                </div>
              }
            />
          </div>

          {/* FOOTER */}
          <div className="mt-16 pt-12 border-t border-gray-300 text-center">
            <p className="text-sm sm:text-base text-gray-500">
              © 2026 Furrendly Pvt. Ltd. All rights reserved.
            </p>
            <p className="font-semibold text-pink-700 mt-1">
              Making pet parenting joyful, one paw at a time 🐾
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
      <div className="space-y-4 text-base sm:text-lg leading-8 text-black">
        {content}
      </div>
    </section>
  );
}