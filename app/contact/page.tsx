'use client';
import Link from 'next/link';
import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Image from "next/image";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="max-w-screen overflow-x-hidden flex flex-col font-sans">
        <nav className="hidden md:flex relative z-0 items-center px-10 py-6 bg-white">
          <div className="flex justify-start absolute left-0 top-0 z-10">
            <Image
              src="/images/left.png"
              alt="Logo Icon"
              width={64}
              height={64}
              className="h-20 w-10"
            />
          </div>
          <h1 className="text-xl font-bold text-[#252B42]">SRI SMS Pharma</h1>
          <div className="space-x-8 pl-20">
            <Link href="/" className="text-gray-600 hover:text-[#23A6F0] font-semibold">Home</Link>
            <Link href="/product" className="text-gray-600 hover:text-[#23A6F0] font-semibold">Product</Link>
            <Link href="/contact" className="text-[#23A6F0] font-semibold">Contact</Link>
          </div>
        </nav>

        <nav className="md:hidden relative z-20 bg-white px-6 py-4 flex items-center justify-between">
          <div className="flex justify-start absolute left-0 top-0 z-10">
            <Image
              src="/images/left.png"
              alt="Logo Icon"
              width={64}
              height={64}
              className="h-20 w-10"
            />
          </div>
          <h1 className="text-xl font-bold text-[#252B42] pl-5">SRI SMS Pharma</h1>

          {/* Hamburger Button */}
          <button onClick={() => setIsOpen(true)} className="focus:outline-none">
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-black" />
              <div className="w-6 h-0.5 bg-black" />
              <div className="w-6 h-0.5 bg-black" />
            </div>
          </button>
        </nav>

        {/* Overlay Menu */}
        {isOpen && (
          <>
            <div className="md:hidden fixed h-60 ml-7 inset-0 z-40 bg-white px-6 py-6 flex flex-col gap-6">
              {/* Close Button */}
              <button onClick={() => setIsOpen(false)} className="absolute top-8 right-10">
                <div className="w-6 h-6 relative">
                  <span className="absolute w-6 h-0.5 bg-black rotate-45 origin-center" />
                  <span className="absolute w-6 h-0.5 bg-black -rotate-45 origin-center" />
                </div>
              </button>

              {/* Menu Items */}
              <div className="mt-10 flex flex-col gap-4">
                <Link href="/" className="text-gray-600 hover:text-[#23A6F0] font-semibold">Home</Link>
                <Link href="/product" className="text-gray-600  hover:text-[#23A6F0] font-semibold">Product</Link>
                <Link href="/contact" className="text-[#23A6F0] font-semibold">Contact</Link>
              </div>
            </div>
            <div className="md:hidden bg-black opacity-30 h-[100vh] w-[100vh] z-39 fixed top-0">
            </div>
          </>
        )}

        {/* Main */}
        <main
          className="flex-1 py-12 bg-no-repeat sm:bg-cover sm:bg-[url('/images/cabinet.jpg')] bg-white"
        >
          {/* Desktop View */}
          <div className="hidden sm:block w-full h-full p-6 mt-24 sm:ml-24">
            <section className="bg-white bg-opacity-90 p-8 rounded-4xl max-w-md w-full shadow-lg">
              {/* Centered Heading and Description */}
              <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-gray-800 font-sans">
                  Get in <span className="text-[#23A6F0]">Touch</span>
                </h2>
                <p className="text-gray-700 mt-2 font-sans">
                  We&#39;re here to assist you with product inquiries, bulk orders — reach out to us, we&#39;d love to hear from you!
                </p>
              </div>

              {/* Left-aligned Contact Details */}
              <div className="space-y-2">
                <div className="flex items-center text-gray-800 font-bold font-sans">
                  <FaPhoneAlt className="mr-2 text-[#23A6F0]" />
                  +91 8300602363
                </div>
                <div className="flex items-center text-gray-700 font-sans">
                  <FaEnvelope className="mr-2 text-[#23A6F0]" />
                  srismspharma2020@gmail.com
                </div>
                <div className="flex  text-gray-700 font-sans">
                  <FaMapMarkerAlt className="mr-2 mt-[2px] text-[#23A6F0]" />
                  16-A, Ananda Nagar,<br/>
                   P.N.Pudur(P.O),<br/>
                   Coimbatore-641041<br/>
                </div>
              </div>
            </section>
          </div>

          {/* Mobile View */}
          <div className="block sm:hidden p-4 w-full text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-sans">
              Get in <span className="text-[#23A6F0]">Touch</span>
            </h2>
            <p className="text-gray-700 mb-2 font-sans">
              We&#39;re here to assist you with product inquiries, bulk orders — reach out to us, we&#39;d love to hear from you!
            </p>
            <div className="flex items-center text-gray-800 font-bold mb-1 font-sans">
              <FaPhoneAlt className="mr-2 text-[#23A6F0]" />
              8300602363
            </div>
            <div className="flex items-center text-gray-700 mb-1 font-sans">
              <FaEnvelope className="mr-2 text-[#23A6F0]" />
              srismspharma2020@gmail.com
            </div>
            <div className="flex items-center text-gray-700 font-sans">
              <FaMapMarkerAlt className="mr-2 text-[#23A6F0]" />
              16-A, Ananda Nagar, P.N.Pudur(P.O),Coimbatore-641041
            </div>

            <div>
              <Image
                src="/images/mb-contact.png"
                alt="Eye Drop"
                width={420}
                height={520}
                className="object-contain block sm:hidden mt-10"
              />
            </div>

          </div>

        </main>

        {/* Footer */}
        <footer className="bg-blue-500 text-white py-6 text-center font-sans">
          <h2 className="text-lg font-semibold mb-2 ">MedicalFunc</h2>
          <nav className="space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/product" className="hover:underline">Products</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
