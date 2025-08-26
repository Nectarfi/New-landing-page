import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 bg-black text-white py-12">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/images/nectar-logo.png" alt="NectarFi Logo" className="h-8" />
              <span className="text-xl font-bold">NectarFi</span>
            </div>
            <p className="text-sm text-gray-400">
              8 The Green, Ste A,
              <br />
              Dover, Delaware
              <br />
              USA
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Virtual card</li>
              <li>Earn interests</li>
              <li>Business account</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Terms of Use</li>
              <li>AML/CFT policy</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Talk to us</h3>
            <p className="text-sm text-gray-400">support@nectarfi.com</p>
            <div className="flex space-x-4">
              <FaInstagram className="h-6 w-6" />
              <FaXTwitter className="h-6 w-6" />
              <FaTiktok className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-gray-700">
          <p>All rights reserved. 2025, Nectarfi</p>
        </div>
      </div>
    </footer>
  );
}
