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
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-900">
          Safety Guidelines for Users
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
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 
               px-6 py-3 rounded-2xl text-gray-700 font-medium">
              <span className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse" />
              <span className="text-gray-800 text-sm sm:text-base font-medium">
                Furrendly Community Safety
              </span>
              <span className="text-xs sm:text-sm font-semibold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-xl ml-2">
                Last Updated: April 1, 2026
              </span>
            </div>
          </div>


          {/* ====== ALL TERMS SECTIONS ====== */}
          <div className="space-y-12">
<p>To maintain a safe and trustworthy environment for all pet parents on Furrendly,
users are advised to follow these safety guidelines when interacting with others
on the platform</p>
            {/* 1. INTRODUCTION */}
            <Section
              number="1"
              title="Verify Information"
              content={
                <>
                  <p>
                  Always verify the information provided by other users before making any
commitments related to pet adoption, donation, or meet-ups. Do not rely solely on
the information shared on the platform
                  </p>
                 
                </>
              }
            />

            {/* 2. NATURE OF PLATFORM */}
            <Section
              number="2"
              title="Meet in Safe Public Locations"
              content={
                <>
                  <p>If you decide to meet another user in person, arrange the meeting in a public and
safe location. Avoid meeting in isolated or unfamiliar places.
                  </p>
                </>
              }
            />

            {/* 3. ELIGIBILITY */}
            <Section
              number="3"
              title="Avoid Advance Payments"
              content={
                <>
                  <p>Furrendly does not process payments between users. Avoid sending money in
advance to anyone you meet on the platform unless you have independently
verified the transaction and the other party</p>
                </>
              }
            />

            {/* 4. USER ACCOUNTS */}
            <Section
              number="4"
              title="Confirm Pet Health and Documentation"
              content={
                <>
                  <p>Before adopting or accepting a pet, request relevant documentation such as
vaccination records, health history, and other necessary information to ensure the
well-being of the animal</p>
                </>
              }
            />

            {/* 5. LISTINGS */}
            <Section
              number="5"
              title="Watch for Suspicious Activity"
              content={
                <>
                  <p>Be cautious if a user:</p>
                  <ul className="list-disc pl-8 mt-4 space-y-2">
                    <li>Requests urgent payments</li>
                    <li>Refuses to share basic information</li>
                    <li>Shares inconsistent or misleading details</li>
                    <li>Attempts to move communication to external platforms immediately</li>
                  </ul>
                </>
              }
            />

            {/* 6. USER CONDUCT */}
            <Section
              number="6"
              title="Respect Animal Welfare"
              content={
                <>
                  <p>Ensure that all pets are treated ethically and responsibly. Users must not engage
in activities that promote animal cruelty, illegal breeding practices, or exploitation
of animals.</p>
                </>
              }
            />

            {/* 7. COMMUNICATION */}
            <Section
              number="7"
              title="Protect Your Personal Information"
              content={
                <>
                  <p>
                    Do not share sensitive personal information such as home address, financial
details, or identity documents with other users unless necessary and only after
verifying the person.</p>
                </>
              }
            />

            {/* 8. INTERMEDIARY STATUS */}
            <Section
              number="8"
              title="Use the Report and Block Features"
              content={
                <>
                  <p>
                    If you encounter suspicious, abusive, or inappropriate behavior, use the Report or 
Block feature within the app so the Furrendly team can review the issue.</p>
                </>
              }
            />

            {/* 9. LIABILITY */}
            <Section
              number="9"
              title="Exercise Personal Judgment"
              content={
                <>
                  <p>All interactions on Furrendly are voluntary and occur at the discretion of users.
Please exercise personal judgment and caution when engaging with other users.</p>
                 
                </>
              }
            />

            {/* 10. IP */}
            <Section
              number="10"
              title="Follow Local Laws"
              content={
                <>
                  <p>
                    Users are responsible for complying with applicable animal welfare and breeding
laws in their respective jurisdictions.</p>
                </>
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