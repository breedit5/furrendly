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
          TERMS & CONDITIONS
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
                Furrendly Mobile & Web Application
              </span>
              <span className="text-xs sm:text-sm font-semibold text-pink-400 bg-pink-500/10 px-3 py-1 rounded-xl ml-2">
                Last Updated: April 1, 2026
              </span>
            </div>
          </div>

          {/* ====== ALL TERMS SECTIONS ====== */}
          <div className="space-y-12">

            {/* 1. INTRODUCTION */}
            <Section
              number="1"
              title="Introduction"
              content={
                <>
                  <p>
                    Welcome to <span className="font-semibold text-pink-400 bg-pink-500/10 px-2 py-1 rounded-lg">Furrendly</span>, a mobile application operated by 
                    Furrendly Pvt. Ltd., a company incorporated under the laws of 
                    India with its registered office in Delhi.
                  </p>
                  <p>
                    Furrendly is a technology platform designed to connect pet parents 
                    and facilitate community interaction through features such as pet 
                    matchmaking, pet discovery, and pet adoption or donation listings.
                  </p>
                  <p>
                    By accessing or using the Furrendly mobile application, website, 
                    or related services (collectively referred to as the <strong>“Platform”</strong>), 
                    you agree to be bound by these Terms and Conditions (<strong>“Terms”</strong>).
                  </p>
                  <p className="font-medium text-pink-800">
                    If you do not agree with these Terms, please do not use the Platform.
                  </p>
                </>
              }
            />

            {/* 2. NATURE OF PLATFORM */}
            <Section
              number="2"
              title="Nature of the Platform"
              content={
                <>
                  <p>Furrendly is a technology intermediary platform that enables users to:</p>
                  <ul className="list-disc pl-8 space-y-2 mt-4">
                    <li>Create pet profiles</li>
                    <li>Discover and connect with other pet parents</li>
                    <li>List pets for adoption or donation/Re-home</li>
                    <li>Communicate through in-app messaging</li>
                  </ul>
                  <p className="mt-6 font-medium text-orange-800">
                    Furrendly does **not** own, breed, buy, sell, or physically handle any animals. 
                    All interactions occur directly between users.
                  </p>
                </>
              }
            />

            {/* 3. ELIGIBILITY */}
            <Section
              number="3"
              title="Eligibility"
              content={
                <>
                  <p>By using the Platform, you confirm that:</p>
                  <ul className="list-disc pl-8 mt-4 space-y-2">
                    <li>You are legally capable of entering into a binding agreement</li>
                    <li>You provide accurate and complete registration information</li>
                    <li>You will use the Platform only for lawful purposes</li>
                  </ul>
                  <p className="mt-4 font-medium text-emerald-800">
                    You are responsible for maintaining the confidentiality of your account credentials.
                  </p>
                </>
              }
            />

            {/* 4. USER ACCOUNTS */}
            <Section
              number="4"
              title="User Accounts"
              content={
                <>
                  <p>To access certain features, users may need to create an account. You agree to:</p>
                  <ul className="list-disc pl-8 mt-4 space-y-2">
                    <li>Provide accurate information</li>
                    <li>Keep login credentials secure</li>
                    <li>Accept responsibility for activities under your account</li>
                  </ul>
                  <p className="mt-4 text-orange-800 font-medium">
                    Furrendly may suspend or terminate accounts that violate these Terms.
                  </p>
                </>
              }
            />

            {/* 5. LISTINGS */}
            <Section
              number="5"
              title="Pet Listings and Content"
              content={
                <>
                  <p>Users may create pet profiles or listings. By posting, you confirm that:</p>
                  <ul className="list-disc pl-8 mt-4 space-y-2">
                    <li>You have the legal right to post the content</li>
                    <li>The information is accurate and not misleading</li>
                    <li>You comply with all animal welfare laws</li>
                    <li>The pet is treated ethically and humanely</li>
                  </ul>
                  <p className="mt-4 text-red-800 font-medium">
                    Furrendly may remove listings violating laws or Terms.
                  </p>
                </>
              }
            />

            {/* 6. USER CONDUCT */}
            <Section
              number="6"
              title="User Conduct"
              content={
                <>
                  <p>Users agree not to:</p>
                  <ul className="list-disc pl-8 mt-4 space-y-2">
                    <li>Post false or misleading information</li>
                    <li>Engage in illegal breeding or animal cruelty</li>
                    <li>Harass, threaten, or abuse others</li>
                    <li>Upload harmful or illegal content</li>
                    <li>Use the Platform for scams or fraud</li>
                  </ul>
                  <p className="mt-4 text-red-300 font-medium">
                    Violations may result in suspension or permanent removal.
                  </p>
                </>
              }
            />

            {/* 7. COMMUNICATION */}
            <Section
              number="7"
              title="Communication Between Users"
              content={
                <>
                  <p>
                    The Platform may allow communication between users. Furrendly is **not responsible** 
                    for user messages.
                  </p>
                  <p className="mt-4 text-gray-800">
                    Users should independently verify information before making arrangements.
                  </p>
                </>
              }
            />

            {/* 8. INTERMEDIARY STATUS */}
            <Section
              number="8"
              title="Intermediary Status"
              content={
                <>
                  <p>
                    Furrendly operates as an intermediary under the IT Act 2000 and IT Rules 2021. 
                    We do not initiate transactions or modify user information.
                  </p>
                  <p className="mt-4 text-yellow-800 font-medium">
                    Illegal content may be removed upon lawful notice.
                  </p>
                </>
              }
            />

            {/* 9. LIABILITY */}
            <Section
              number="9"
              title="Limitation of Liability"
              content={
                <>
                  <p>Furrendly is not responsible for:</p>
                  <ul className="list-disc pl-8 mt-4 space-y-2">
                    <li>Disputes between users</li>
                    <li>Pet health, accuracy, or authenticity</li>
                    <li>Losses arising from user interactions</li>
                    <li>Agreements outside the Platform</li>
                  </ul>
                </>
              }
            />

            {/* 10. IP */}
            <Section
              number="10"
              title="Intellectual Property"
              content={
                <>
                  <p>
                    All rights related to the Platform—including logos, design, software, and content—
                    remain the property of Furrendly Pvt. Ltd.
                  </p>
                  <p className="mt-4 text-gray-800">
                    Users may not reproduce or commercially exploit the Platform without permission.
                  </p>
                </>
              }
            />

            {/* 11. PRIVACY */}
            <Section
              number="11"
              title="Privacy"
              content={
                <>
                  <p>
                    Your use of the Platform is governed by our Privacy Policy, compliant with the 
                    Digital Personal Data Protection Act, 2023.
                  </p>
                </>
              }
            />

            {/* 12. SUSPENSION */}
            <Section
              number="12"
              title="Suspension and Termination"
              content={
                <>
                  <p>Furrendly may suspend or terminate accounts that:</p>
                  <ul className="list-disc pl-8 mt-4 space-y-2">
                    <li>Violate these Terms</li>
                    <li>Engage in unlawful activities</li>
                    <li>Post harmful or fraudulent content</li>
                    <li>Abuse the Platform</li>
                  </ul>
                </>
              }
            />

            {/* 13. MODIFICATIONS */}
            <Section
              number="13"
              title="Modifications to Terms"
              content={
                <>
                  <p>
                    Furrendly may modify these Terms. Users will be notified of major updates.
                    Continued use means acceptance.
                  </p>
                </>
              }
            />

            {/* 14. GOVERNING LAW */}
            <Section
              number="14"
              title="Governing Law & Jurisdiction"
              content={
                <>
                  <p>
                    These Terms are governed by the laws of India.  
                    Disputes fall under the courts of Delhi.
                  </p>
                </>
              }
            />

            {/* 15. GRIEVANCE */}
            <Section
              number="15"
              title="Grievance Redressal"
              content={
                <>
                  <p className="font-semibold">Contact:</p>
                  <p>Furrendly Pvt. Ltd.</p>
                  <p>Email: <a href="mailto:team@furrendly.com" className="text-pink-700 underline">team@furrendly.com</a></p>
                  <p>Response Time: Within 15 days</p>
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