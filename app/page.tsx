"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>SRI SMS Pharma - Welcome</title>
        <meta
          name="description"
          content="Ophthalmic pharma wholesaler in South India"
        />
      </Head>

      <div className="relative min-h-screen bg-white max-w-[1360px] mx-auto font-sans">
        <div className="flex justify-start absolute left-0 top-0 z-10">
          <Image
            src="/images/left.png"
            alt="Logo Icon"
            width={64}
            height={64}
            className="h-16 w-auto"
          />
        </div>
        <div className="hidden sm:block absolute right-0 top-0 z-10">
          <Image
            src="/images/asset1.svg"
            alt="Decorative Background"
            width={600}
            height={500}
            className="w-[570px] h-auto"
          />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex relative z-0 items-center px-10 py-6 bg-white">
          <h1 className="text-xl font-bold text-[#252B42]">SRI SMS Pharma</h1>
          <div className="space-x-8 pl-20">
            <Link href="/" className="text-[#23A6F0] font-semibold">Home</Link>
            <Link href="/product" className="text-gray-600 hover:text-[#23A6F0] font-semibold">Product</Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#23A6F0] font-semibold">Contact</Link>
          </div>
        </nav>

        <nav className="md:hidden relative z-20 bg-white px-6 py-4 flex items-center justify-between">
          <div className="flex justify-start absolute left-0 top-0 z-10">
            <Image
              src="/images/left.png"
              alt="Logo Icon"
              width={64}
              height={64}
              className="h-16 w-auto"
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
          <div className="md:hidden fixed inset-0 z-40 bg-white px-6 py-6 flex flex-col gap-6">
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-10">
              <div className="w-6 h-6 relative">
                <span className="absolute w-6 h-0.5 bg-black rotate-45 origin-center" />
                <span className="absolute w-6 h-0.5 bg-black -rotate-45 origin-center" />
              </div>
            </button>

            {/* Menu Items */}
            <div className="mt-10 flex flex-col gap-4">
              <Link href="/" className="text-[#23A6F0] font-semibold">Home</Link>
              <Link href="/product" className="text-gray-600 hover:text-[#23A6F0] font-semibold">Product</Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#23A6F0] font-semibold">Contact</Link>
            </div>
          </div>
        )}



        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center px-10 rounded-bl-[80px] rounded-tr-[80px] min-h-[520px]">
          <div className="md:col-span-7 flex justify-start sm:pl-20 h-full">
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4">Welcome</p>
              <p className="text-[#252B42] font-bold text-5xl leading-tight">SRI SMS</p>
              <p className="text-[#252B42] font-bold text-5xl leading-tight mb-6">Pharma</p>
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                We, SRI SMS PHARMA – pharma wholesaler being in the industry for the past 5 years.
                We deal with ophthalmic range of products distribution all over Tamil Nadu.
                Happy to share you that, now we have become an Authorized super stockiest for Eye reach meds company which is coming under the banner of “THE EYE FOUDATION – COIMBATORE “
                Now in southern region of India we look forward district wise distributor, to reach out Eye foundation medicine to Everywhere for their patient’s repeat purchase .
              </p>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center items-center h-full">
            <div className="rounded-[40px] overflow-hidden shadow-lg z-20 relative max-h-[520px]">
              <Image
                src="/images/eye-drop.png"
                alt="Eye Drop"
                width={420}
                height={520}
                className="object-contain hidden sm:block"
              />
              <Image
                src="/images/mb-eye.png"
                alt="Eye Drop"
                width={420}
                height={520}
                className="object-contain block sm:hidden mt-10"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center px-10 pt-26 rounded-bl-[80px] rounded-tr-[80px] min-h-[520px]">

          <div className="order-2 md:order-1 md:col-span-6 flex justify-center items-center h-full my-5 md:my-0">
            <Image
              src="/images/thumb.png"
              alt="Thumb"
              width={420}
              height={520}
              className="h-auto w-[500px]"
            />
          </div>


          <div className="order-1 md:order-2 md:col-span-6 flex justify-start sm:pl-20 h-full">
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              <div className="w-24 h-2 bg-[#E74040] mb-10"></div>
              <p className="text-[#252B42] font-bold text-5xl leading-tight mb-6">
                We welcome wholesalers
              </p>
              <p className="text-black font-medium text-base leading-relaxed">
                We welcome wholesalers district-wise to distribute to retail
                medical shops all over South India.
              </p>
            </div>
          </div>
        </div>


        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center p-10 bg-[#F1F1F1]">
          <div className="md:col-span-6 flex justify-start sm:pl-20 h-full">
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4">Our Products</p>
              <p className="text-[#252B42] font-bold text-4xl leading-tight">
                Specialized Care,
              </p>
              <p className="text-[#252B42] font-bold text-4xl leading-tight mb-6">
                Drop by Drop
              </p>
              <p className="text-black font-medium text-base leading-relaxed mb-10">
                Our eye drops are produced in our own certified facilities,
                ensuring strict adherence to safety, quality, and efficacy
                standards.
              </p>
              <Link
                href="/product"
                className="bg-[#23A6F0] text-white font-semibold py-3 my-4 md:my-0 rounded-md px-5 w-full md:w-48 hover:bg-[#1a8ed8] transition-all duration-300 inline-block text-center"
              >
                View Products
              </Link>

            </div>
          </div>

          <div className="md:col-span-6 flex justify-center items-center h-full">
            <Image
              src="/images/product.png"
              alt="Product"
              width={420}
              height={520}
              className="h-auto w-[500px]"
            />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center p-10">
          <div className="md:col-span-6 flex justify-start sm:pl-20 h-full">
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4">Contact us</p>
              <p className="text-[#252B42] font-bold text-4xl leading-tight mb-4">
                Get in touch,
              </p>
              <p className="text-black font-medium text-base leading-relaxed">
                We’re here to assist you with product inquiries and bulk orders.
                Reach out to us—we’d love to hear from you!
              </p>
            </div>
          </div>

          <div className="md:col-span-6 flex justify-center items-center h-full">
            <Link
              href="/contact"
              className="bg-[#23A6F0] text-white font-semibold py-3 my-4 md:my-0 rounded-md px-5 w-full md:w-48 hover:bg-[#1a8ed8] transition-all duration-300 inline-block text-center"
            >
              Contact
            </Link>

          </div>
        </div>

        <footer className="bg-[#23A6F0] text-white py-6 text-center">
          <h2 className="text-lg font-semibold mb-2">MedicalFunc</h2>
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
