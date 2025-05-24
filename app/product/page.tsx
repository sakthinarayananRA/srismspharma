'use client';
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from "next/link";



export default function Product() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>SRI SMS Pharma - Welcome</title>
        <meta name="description" content="Ophthalmic pharma wholesaler in South India" />
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
            className="w-[500px] h-auto"
          />
        </div>

        <nav className="hidden md:flex relative z-0 items-center px-10 py-6 bg-white">
          <h1 className="text-xl font-bold text-[#252B42]">SRI SMS Pharma</h1>
          <div className="space-x-8 pl-20">
            <Link href="/" className="text-gray-600 hover:text-[#23A6F0] font-semibold">Home</Link>
            <Link href="/product" className="text-[#23A6F0] font-semibold">Product</Link>
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

        {/* first */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 items-center sm:px-10 px-5 rounded-bl-[80px] rounded-tr-[80px] min-h-[520px]">
          {/* Wrapper with border and rounded corners on mobile only */}
          <div className="md:col-span-12 md:grid md:grid-cols-12 md:gap-0 gap-6 border border-gray-300 rounded-[40px] p-4 md:border-none md:rounded-none md:p-0 flex flex-col md:flex-row">

            {/* Slider Section */}
            <div className="md:col-span-6 flex items-center justify-center md:justify-center w-full order-1 md:order-2 mb-6 md:mb-0">
              <section className="w-full relative md:bg-white md:rounded-[60px] md:shadow-lg md:p-4 max-w-[65%] sm:h-[380px] md:max-w-[400px]">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  navigation={{
                    nextEl: ".solution-swiper-next",
                    prevEl: ".solution-swiper-prev",
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={20}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    640: { slidesPerView: 1, spaceBetween: 15 },
                    1024: { slidesPerView: 1, spaceBetween: 20 },
                  }}
                >
                  <SwiperSlide>
                    <div className="flex items-center justify-center w-full" >
                      <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                        <Image
                          src="/images/product1.png"
                          alt="Thumbnail"
                          fill
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex items-center justify-center w-full" >
                      <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                        <Image
                          src="/images/product1.png"
                          alt="Thumbnail"
                          fill
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                {/* Navigation Buttons */}
                <button
                  className="hidden sm:block solution-swiper-prev bg-white shadow-md rounded-full p-2 absolute left-2 top-1/2 -translate-y-1/2 z-10"
                  aria-label="Previous Section"
                >
                  <FaChevronLeft className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  className="hidden sm:block solution-swiper-next bg-white shadow-md rounded-full p-2 absolute right-2 top-1/2 -translate-y-1/2 z-10"
                  aria-label="Next Section"
                >
                  <FaChevronRight className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </button>

              </section>
            </div>

            {/* Text Section */}
            <div className="md:col-span-6 flex justify-start sm:pl-20 self-start h-full w-full text-center md:text-left order-2 md:order-1">
              <div className="w-full max-w-md flex flex-col justify-center h-full">
                <p className="text-[#23A6F0] font-bold text-2xl mb-4">Hyalomoisteyedrops</p>
                {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
                <p className="text-black font-medium text-base leading-relaxed font-sans">
                  Hyalomoist eyedrops are primarily used to relieve dry eye symptoms by lubricating and moistening the eyes. They canals oprotect the eyes from irritations caused by factors like
                  contactlenses and dry air,and provide relief after eye injuries like corneal abrasions..
                </p>
              </div>
            </div>

          </div>
        </div>
        {/* second */}
        <div className="relative z-10 hidden md:grid grid-cols-1 md:grid-cols-12 items-center pt-5 rounded-bl-[80px] rounded-tr-[80px] min-h-[520px]">
          <div className="md:col-span-6 flex justify-start items-center h-full relative">
            <Image
              src="/images/asset3.svg"
              alt="Eye Drop"
              width={420}
              height={520}
              className="h-auto w-[500px] z-10 sm:block hidden"
            />
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-4 rounded-[60px] max-w-md 3000w-[65%] sm:h-[380px] text-center shadow-lg z-20 sm:w-[500px]">
              <div className="relative p-5 pt-2 sm:pt-0 sm:p-0">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  navigation={{
                    nextEl: ".solution-swiper-next",
                    prevEl: ".solution-swiper-prev",
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={20}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    640: { slidesPerView: 1, spaceBetween: 15 },
                    1024: { slidesPerView: 1, spaceBetween: 20 },
                  }}
                >
                  <SwiperSlide>
                    <div className="flex items-center justify-center w-full" >
                      <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                        <Image
                          src="/images/product1.png"
                          alt="Thumbnail"
                          fill
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex items-center justify-center w-full" >
                      <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                        <Image
                          src="/images/product1.png"
                          alt="Thumbnail"
                          fill
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="custom-service-pagination flex justify-center mt-4"></div>
              <div className="flex justify-center gap-4">
                <button
                  className="solution-swiper-prev bg-white shadow-md rounded-full p-2 absolute left-2 top-1/2 -translate-y-1/2 z-10"
                  aria-label="Previous Section"
                >
                  <FaChevronLeft className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  className="solution-swiper-next bg-white shadow-md rounded-full p-2 absolute right-2 top-1/2 -translate-y-1/2 z-10"
                  aria-label="Next Section"
                >
                  <FaChevronRight className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </button>

              </div>
            </section>
          </div>


          <div className="md:col-span-6 flex justify-start self-start h-full">
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4">MoisproEyeDrop</p>
              {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                Moispro Eye Drop is a lubricating solution intended for temporary relief from eye irritation, burning, stinging, and grittiness, often caused by dry eyes. Its active ingredients are Polyethylene Glycol 400 and Propylene Glycol, which help moisturize and soothe the eyes.
              </p>
            </div>
          </div>
        </div>
        {/* MOBILE VERSION: Slider + Text inside bordered box */}
        <div className="md:hidden w-full px-4 pt-6">
          <div className="border rounded-[30px] p-4 bg-white">
            {/* Swiper Section */}
            <div className="relative p-5">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 0 },
                  640: { slidesPerView: 1, spaceBetween: 15 },
                  1024: { slidesPerView: 1, spaceBetween: 20 },
                }}
              >
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="custom-service-pagination flex justify-center mt-4" />
            </div>

            {/* Text Section Below Slider */}
            <div className="mt-4 text-center">
              <p className="text-[#23A6F0] font-bold text-2xl mb-2">MoisproEyeDrop</p>
              {/* <p className="text-[#252B42] font-bold text-3xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed mt-2">
                Moispro Eye Drop is a lubricating solution intended for temporary relief from eye irritation, burning, stinging, and grittiness, often caused by dry eyes. Its active ingredients are Polyethylene Glycol 400 and Propylene Glycol, which help moisturize and soothe the eyes.
              </p>
            </div>
          </div>
        </div>
        {/* third */}
        <div className="relative z-10 hidden md:grid grid-cols-1 md:grid-cols-12 items-center pt-5 rounded-bl-[80px] rounded-tr-[80px] min-h-[520px]">
          <div className="md:col-span-6 flex justify-center self-start h-full">
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4 font-sans">Moxflu eye drops</p>
              {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                Moxflu Eye Drop is an antibiotic, used in the treatment of bacterial infections of the eye. It relieves the symptoms of the infection by stopping the further growth of the causative microorganisms.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 flex justify-end items-center h-full relative">


            {/* Image with z-10 */}
            <Image
              src="/images/asset1.svg"
              alt="Eye Drop"
              width={420}
              height={520}
              className="h-auto w-[500px] z-10 sm:block hidden"
            />

            {/* Swiper container */}
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-4 rounded-[60px] max-w-md 3000w-[65%] sm:h-[380px] text-center shadow-lg z-20 sm:w-[500px]">
              <div className="relative p-5 pt-2 sm:pt-0 sm:p-0">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  navigation={{
                    nextEl: ".solution-swiper-next",
                    prevEl: ".solution-swiper-prev",
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={20}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    640: { slidesPerView: 1, spaceBetween: 15 },
                    1024: { slidesPerView: 1, spaceBetween: 20 },
                  }}
                >
                  {/* 2 slides with large images */}
                  {[1, 2].map((i) => (
                    <SwiperSlide key={i}>
                      <div className="flex items-center justify-center w-full" >
                        <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                          <Image
                            src="/images/product1.png"
                            alt={`Thumbnail ${i}`}
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Pagination */}
              <div className="custom-service-pagination flex justify-center mt-4"></div>

              {/* Navigation Buttons */}
              <button
                className="solution-swiper-prev bg-white shadow-md rounded-full p-2 absolute left-2 top-1/2 -translate-y-1/2 z-10"
                aria-label="Previous Section"
              >
                <FaChevronLeft className="text-black w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                className="solution-swiper-next bg-white shadow-md rounded-full p-2 absolute right-2 top-1/2 -translate-y-1/2 z-10"
                aria-label="Next Section"
              >
                <FaChevronRight className="text-black w-5 h-5 sm:w-6 sm:h-6" />
              </button>

            </section>
          </div>

        </div>
        {/* MOBILE VERSION: Slider + Text inside bordered box */}
        <div className="md:hidden w-full px-4 pt-6">
          <div className="border rounded-[30px] p-4 bg-white">
            {/* Swiper Section */}
            <div className="relative p-5">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 0 },
                  640: { slidesPerView: 1, spaceBetween: 15 },
                  1024: { slidesPerView: 1, spaceBetween: 20 },
                }}
              >
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>


            </div>

            {/* Text Section Below Slider */}
            <div className="mt-4 text-center">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4">Moxflu eye drops</p>
              {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                Moxflu Eye Drop is an antibiotic, used in the treatment of bacterial infections of the eye. It relieves the symptoms of the infection by stopping the further growth of the causative microorganisms.
              </p>
            </div>
          </div>
        </div>

        {/* four*/}
        <div className="relative z-10 hidden md:grid grid-cols-1 md:grid-cols-12 items-center pt-5 rounded-bl-[80px] rounded-tr-[80px] min-h-[520px]">
          <div className="md:col-span-6 flex justify-start items-center h-full relative">
            <Image
              src="/images/asset3.svg"
              alt="Eye Drop"
              width={420}
              height={520}
              className="h-auto w-[500px] z-10 sm:block hidden"
            />
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-4 rounded-[60px] max-w-md 3000w-[65%] sm:h-[380px] text-center shadow-lg z-20 sm:w-[500px]">
              <div className="relative p-5 pt-2 sm:pt-0 sm:p-0">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  navigation={{
                    nextEl: ".solution-swiper-next",
                    prevEl: ".solution-swiper-prev",
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={20}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    640: { slidesPerView: 1, spaceBetween: 15 },
                    1024: { slidesPerView: 1, spaceBetween: 20 },
                  }}
                >
                  <SwiperSlide>
                    <div className="flex items-center justify-center w-full" >
                      <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                        <Image
                          src="/images/product1.png"
                          alt="Thumbnail"
                          fill
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex items-center justify-center w-full" >
                      <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                        <Image
                          src="/images/product1.png"
                          alt="Thumbnail"
                          fill
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="custom-service-pagination flex justify-center mt-4"></div>
              <div className="flex justify-center gap-4">
                <button
                  className="solution-swiper-prev bg-white shadow-md rounded-full p-2 absolute left-2 top-1/2 -translate-y-1/2 z-10"
                  aria-label="Previous Section"
                >
                  <FaChevronLeft className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  className="solution-swiper-next bg-white shadow-md rounded-full p-2 absolute right-2 top-1/2 -translate-y-1/2 z-10"
                  aria-label="Next Section"
                >
                  <FaChevronRight className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </button>

              </div>
            </section>
          </div>


          <div className="md:col-span-6 flex justify-start self-start h-full">
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4 font-sans">Moxflu-LP eye drops</p>
              {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                Moxflu-LP Eye Drop is a prescription medicine used to treat eye infection with inflammation. It kills and stops the growth of bacteria and helps in relieving symptoms such as redness, itching, and swelling.
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE VERSION: Slider + Text inside bordered box */}
        <div className="md:hidden w-full px-4 pt-6">
          <div className="border rounded-[30px] p-4 bg-white">
            {/* Swiper Section */}
            <div className="relative p-5">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 0 },
                  640: { slidesPerView: 1, spaceBetween: 15 },
                  1024: { slidesPerView: 1, spaceBetween: 20 },
                }}
              >
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="custom-service-pagination flex justify-center mt-4" />
            </div>

            {/* Text Section Below Slider */}
            <div className="mt-4 text-center">
              <p className="text-[#23A6F0] font-bold text-2xl mb-2 font-sans">Moxflu-LP eye drops</p>
              {/* <p className="text-[#252B42] font-bold text-3xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed mt-2 font-sans">
                Moxflu-LP Eye Drop is a prescription medicine used to treat eye infection with inflammation. It kills and stops the growth of bacteria and helps in relieving symptoms such as redness, itching, and swelling.
              </p>
            </div>
          </div>
        </div>



        {/* five */}
        <div className="relative z-10 hidden md:grid grid-cols-1 md:grid-cols-12 items-center pt-5 rounded-bl-[80px] rounded-tr-[80px] min-h-[520px]">
          <div className="md:col-span-6 flex justify-center self-start h-full">
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4 font-sans">Nepain eye drops</p>
              {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                Nepain Eye Drop Nepafenac eye drops are used to relieve pain and inflammation in the eyes, particularly after cataract surgery. These drops are a non-steroidal anti-inflammatory drug (NSAID) that work by blocking the release of chemical messengers that cause pain and inflammation. They are also used to help prevent swelling in the eye after surgery.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 flex justify-end items-center h-full relative">


            {/* Image with z-10 */}
            <Image
              src="/images/asset1.svg"
              alt="Eye Drop"
              width={420}
              height={520}
              className="h-auto w-[500px] z-10 sm:block hidden"
            />

            {/* Swiper container */}
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-4 rounded-[60px] max-w-md 3000w-[65%] sm:h-[380px] text-center shadow-lg z-20 sm:w-[500px]">
              <div className="relative p-5 pt-2 sm:pt-0 sm:p-0">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  navigation={{
                    nextEl: ".solution-swiper-next",
                    prevEl: ".solution-swiper-prev",
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={20}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    640: { slidesPerView: 1, spaceBetween: 15 },
                    1024: { slidesPerView: 1, spaceBetween: 20 },
                  }}
                >
                  {/* 2 slides with large images */}
                  {[1, 2].map((i) => (
                    <SwiperSlide key={i}>
                      <div className="flex items-center justify-center w-full" >
                        <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                          <Image
                            src="/images/product1.png"
                            alt={`Thumbnail ${i}`}
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Pagination */}
              <div className="custom-service-pagination flex justify-center mt-4"></div>

              {/* Navigation Buttons */}
              <button
                className="solution-swiper-prev bg-white shadow-md rounded-full p-2 absolute left-2 top-1/2 -translate-y-1/2 z-10"
                aria-label="Previous Section"
              >
                <FaChevronLeft className="text-black w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                className="solution-swiper-next bg-white shadow-md rounded-full p-2 absolute right-2 top-1/2 -translate-y-1/2 z-10"
                aria-label="Next Section"
              >
                <FaChevronRight className="text-black w-5 h-5 sm:w-6 sm:h-6" />
              </button>

            </section>
          </div>

        </div>
        {/* MOBILE VERSION: Slider + Text inside bordered box */}
        <div className="md:hidden w-full px-4 pt-6">
          <div className="border rounded-[30px] p-4 bg-white">
            {/* Swiper Section */}
            <div className="relative p-5">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 0 },
                  640: { slidesPerView: 1, spaceBetween: 15 },
                  1024: { slidesPerView: 1, spaceBetween: 20 },
                }}
              >
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="custom-service-pagination flex justify-center mt-4" />
            </div>

            {/* Text Section Below Slider */}
            <div className="mt-4 text-center">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4">Nepain eye drops</p>
              {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                Nepain Eye Drop Nepafenac eye drops are used to relieve pain and inflammation in the eyes, particularly after cataract surgery. These drops are a non-steroidal anti-inflammatory drug (NSAID) that work by blocking the release of chemical messengers that cause pain and inflammation. They are also used to help prevent swelling in the eye after surgery.
              </p>
            </div>
          </div>
        </div>

        {/* six */}
        <div className="relative z-10 hidden md:grid grid-cols-1 md:grid-cols-12 items-center pt-5 rounded-bl-[80px] rounded-tr-[80px] min-h-[520px]">
          <div className="md:col-span-6 flex justify-start items-center h-full relative">
            <Image
              src="/images/asset3.svg"
              alt="Eye Drop"
              width={420}
              height={520}
              className="h-auto w-[500px] z-10 sm:block hidden"
            />
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-4 rounded-[60px] max-w-md 3000w-[65%] sm:h-[380px] text-center shadow-lg z-20 sm:w-[500px]">
              <div className="relative p-5 pt-2 sm:pt-0 sm:p-0">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  navigation={{
                    nextEl: ".solution-swiper-next",
                    prevEl: ".solution-swiper-prev",
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={20}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    640: { slidesPerView: 1, spaceBetween: 15 },
                    1024: { slidesPerView: 1, spaceBetween: 20 },
                  }}
                >
                  <SwiperSlide>
                    <div className="flex items-center justify-center w-full" >
                      <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                        <Image
                          src="/images/product1.png"
                          alt="Thumbnail"
                          fill
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex items-center justify-center w-full" >
                      <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                        <Image
                          src="/images/product1.png"
                          alt="Thumbnail"
                          fill
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="custom-service-pagination flex justify-center mt-4"></div>
              <div className="flex justify-center gap-4">
                <button
                  className="solution-swiper-prev bg-white shadow-md rounded-full p-2 absolute left-2 top-1/2 -translate-y-1/2 z-10"
                  aria-label="Previous Section"
                >
                  <FaChevronLeft className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  className="solution-swiper-next bg-white shadow-md rounded-full p-2 absolute right-2 top-1/2 -translate-y-1/2 z-10"
                  aria-label="Next Section"
                >
                  <FaChevronRight className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </button>

              </div>
            </section>
          </div>


          <div className="md:col-span-6 flex justify-start self-start h-full">
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4 font-sans">Nepain-PFeyedrops</p>
              {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                Nepain-PF Eye Drop BAK Free is a pain relieving medicine used to treat pain and inflammation associated with cataract surgery. It blocks and reduces the release of certain chemicals in
                53%
                +
                Θ
                2
                the eye that cause pain and swelling. This makes the healing process after eye surgery more comfortable and helps the eye heal faster.
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE VERSION: Slider + Text inside bordered box */}
        <div className="md:hidden w-full px-4 pt-6">
          <div className="border rounded-[30px] p-4 bg-white">
            {/* Swiper Section */}
            <div className="relative p-5">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 0 },
                  640: { slidesPerView: 1, spaceBetween: 15 },
                  1024: { slidesPerView: 1, spaceBetween: 20 },
                }}
              >
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="custom-service-pagination flex justify-center mt-4" />
            </div>

            {/* Text Section Below Slider */}
            <div className="mt-4 text-center">
              <p className="text-[#23A6F0] font-bold text-2xl mb-2">Nepain-PFeyedrops</p>
              {/* <p className="text-[#252B42] font-bold text-3xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed mt-2">
                Nepain-PF Eye Drop BAK Free is a pain relieving medicine used to treat pain and inflammation associated with cataract surgery. It blocks and reduces the release of certain chemicals in
                53%
                +
                Θ
                2
                the eye that cause pain and swelling. This makes the healing process after eye surgery more comfortable and helps the eye heal faster.
              </p>
            </div>
          </div>
        </div>



        {/* seven */}

        <div className="relative z-10 hidden md:grid grid-cols-1 md:grid-cols-12 items-center pt-5 rounded-bl-[80px] rounded-tr-[80px] min-h-[520px]">
          <div className="md:col-span-6 flex justify-center self-start h-full">
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4 font-sans">Cellmoist0.5%EYEDROPS</p>
              {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                Cellmoist 0.5% Eye Drop is an eye lubricant or artificial tears used to relieve dry eyes. This can happen because not enough tears are made to keep the eye lubricated. It helps to soothe the irritation and burning seen in dry eyes by maintaining proper lubrication of the eyes.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 flex justify-end items-center h-full relative">


            {/* Image with z-10 */}
            <Image
              src="/images/asset1.svg"
              alt="Eye Drop"
              width={420}
              height={520}
              className="h-auto w-[500px] z-10 sm:block hidden"
            />

            {/* Swiper container */}
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-4 rounded-[60px] max-w-md 3000w-[65%] sm:h-[380px] text-center shadow-lg z-20 sm:w-[500px]">
              <div className="relative p-5 pt-2 sm:pt-0 sm:p-0">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  navigation={{
                    nextEl: ".solution-swiper-next",
                    prevEl: ".solution-swiper-prev",
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={20}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    640: { slidesPerView: 1, spaceBetween: 15 },
                    1024: { slidesPerView: 1, spaceBetween: 20 },
                  }}
                >
                  {/* 2 slides with large images */}
                  {[1, 2].map((i) => (
                    <SwiperSlide key={i}>
                      <div className="flex items-center justify-center w-full" >
                        <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                          <Image
                            src="/images/product1.png"
                            alt={`Thumbnail ${i}`}
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Pagination */}
              <div className="custom-service-pagination flex justify-center mt-4"></div>

              {/* Navigation Buttons */}
              <button
                className="solution-swiper-prev bg-white shadow-md rounded-full p-2 absolute left-2 top-1/2 -translate-y-1/2 z-10"
                aria-label="Previous Section"
              >
                <FaChevronLeft className="text-black w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                className="solution-swiper-next bg-white shadow-md rounded-full p-2 absolute right-2 top-1/2 -translate-y-1/2 z-10"
                aria-label="Next Section"
              >
                <FaChevronRight className="text-black w-5 h-5 sm:w-6 sm:h-6" />
              </button>

            </section>
          </div>

        </div>
        {/* MOBILE VERSION: Slider + Text inside bordered box */}
        <div className="md:hidden w-full px-4 pt-6">
          <div className="border rounded-[30px] p-4 bg-white">
            {/* Swiper Section */}
            <div className="relative p-5">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 0 },
                  640: { slidesPerView: 1, spaceBetween: 15 },
                  1024: { slidesPerView: 1, spaceBetween: 20 },
                }}
              >
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="custom-service-pagination flex justify-center mt-4" />
            </div>

            {/* Text Section Below Slider */}
            <div className="mt-4 text-center">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4">.Cellmoist0.5%EYEDROPS</p>
              {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                Cellmoist 0.5% Eye Drop is an eye lubricant or artificial tears used to relieve dry eyes. This can happen because not enough tears are made to keep the eye lubricated. It helps to soothe the irritation and burning seen in dry eyes by maintaining proper lubrication of the eyes.
              </p>
            </div>
          </div>
        </div>

        {/*eight*/}
        <div className="relative z-10 hidden md:grid grid-cols-1 md:grid-cols-12 items-center pt-5 rounded-bl-[80px] rounded-tr-[80px] min-h-[520px]">
          <div className="md:col-span-6 flex justify-start items-center h-full relative">
            <Image
              src="/images/asset3.svg"
              alt="Eye Drop"
              width={420}
              height={520}
              className="h-auto w-[500px] z-10 sm:block hidden"
            />
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-4 rounded-[60px] max-w-md 3000w-[65%] sm:h-[380px] text-center shadow-lg z-20 sm:w-[500px]">
              <div className="relative p-5 pt-2 sm:pt-0 sm:p-0">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  navigation={{
                    nextEl: ".solution-swiper-next",
                    prevEl: ".solution-swiper-prev",
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={20}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    640: { slidesPerView: 1, spaceBetween: 15 },
                    1024: { slidesPerView: 1, spaceBetween: 20 },
                  }}
                >
                  <SwiperSlide>
                    <div className="flex items-center justify-center w-full" >
                      <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                        <Image
                          src="/images/product1.png"
                          alt="Thumbnail"
                          fill
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex items-center justify-center w-full" style={{ minHeight: "300px" }} >
                      <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                        <Image
                          src="/images/product1.png"
                          alt="Thumbnail"
                          fill
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="custom-service-pagination flex justify-center mt-4"></div>
              <div className="flex justify-center gap-4">
                <button
                  className="solution-swiper-prev bg-white shadow-md rounded-full p-2 absolute left-2 top-1/2 -translate-y-1/2 z-10"
                  aria-label="Previous Section"
                >
                  <FaChevronLeft className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  className="solution-swiper-next bg-white shadow-md rounded-full p-2 absolute right-2 top-1/2 -translate-y-1/2 z-10"
                  aria-label="Next Section"
                >
                  <FaChevronRight className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </button>

              </div>
            </section>
          </div>


          <div className="md:col-span-6 flex justify-start self-start h-full">
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4 font-sans">Cellmoist 1%EYEDROPS</p>
              {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                Cellmoist 1% is used as a lubricant to relive irritation and discomfort due to dryness of the eyes or due to exposure of the eyes to wind or sun. Carboxymethylcellulose is a lubricant. It works similar to natural tears and provides temporary relief from burning and discomfort due to dryness of the eye.
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE VERSION: Slider + Text inside bordered box */}
        <div className="md:hidden w-full px-4 pt-6">
          <div className="border rounded-[30px] p-4 bg-white">
            {/* Swiper Section */}
            <div className="relative p-5">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 0 },
                  640: { slidesPerView: 1, spaceBetween: 15 },
                  1024: { slidesPerView: 1, spaceBetween: 20 },
                }}
              >
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="custom-service-pagination flex justify-center mt-4" />
            </div>

            {/* Text Section Below Slider */}
            <div className="mt-4 text-center">
              <p className="text-[#23A6F0] font-bold text-2xl mb-2">Cellmoist 1%EYEDROPS</p>
              {/* <p className="text-[#252B42] font-bold text-3xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed mt-2">
                Cellmoist 1% is used as a lubricant to relive irritation and discomfort due to dryness of the eyes or due to exposure of the eyes to wind or sun. Carboxymethylcellulose is a lubricant. It works similar to natural tears and provides temporary relief from burning and discomfort due to dryness of the eye.
              </p>
            </div>
          </div>
        </div>



        {/* nine */}

        <div className="relative z-10 hidden md:grid grid-cols-1 md:grid-cols-12 items-center pt-5 rounded-bl-[80px] rounded-tr-[80px] min-h-[520px]">
          <div className="md:col-span-6 flex justify-center self-start h-full">
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4 font-sans">Hyalomoist TG eye drops</p>
              {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                Hyalomoist TG Eye Drop is a lubricant. It is used in the treatment of dry eyes. It moistens the eyes and provides relief from discomfort and temporary burning. It also helps in treating corneal burns by forming a soothing layer that reduces irritation and protects the damaged cornea.
                Trehalube Sodium Hyaluronate Eye Drop is a type of lubricant that helps relieve dry eyes by keeping them hydrated and comfortable. It works by forming a protective, moisture-retaining layer over the eye&#39;s surface, reducing dryness, irritation, and discomfort.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 flex justify-end items-center h-full relative">


            {/* Image with z-10 */}
            <Image
              src="/images/asset1.svg"
              alt="Eye Drop"
              width={420}
              height={520}
              className="h-auto w-[500px] z-10 sm:block hidden"
            />

            {/* Swiper container */}
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-4 rounded-[60px] max-w-md 3000w-[65%] sm:h-[380px] text-center shadow-lg z-20 sm:w-[500px]">
              <div className="relative p-5 pt-2 sm:pt-0 sm:p-0">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  navigation={{
                    nextEl: ".solution-swiper-next",
                    prevEl: ".solution-swiper-prev",
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={20}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    640: { slidesPerView: 1, spaceBetween: 15 },
                    1024: { slidesPerView: 1, spaceBetween: 20 },
                  }}
                >
                  {/* 2 slides with large images */}
                  {[1, 2].map((i) => (
                    <SwiperSlide key={i}>
                      <div className="flex items-center justify-center w-full" >
                        <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                          <Image
                            src="/images/product1.png"
                            alt={`Thumbnail ${i}`}
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Pagination */}
              <div className="custom-service-pagination flex justify-center mt-4"></div>

              {/* Navigation Buttons */}
              <button
                className="solution-swiper-prev bg-white shadow-md rounded-full p-2 absolute left-2 top-1/2 -translate-y-1/2 z-10"
                aria-label="Previous Section"
              >
                <FaChevronLeft className="text-black w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                className="solution-swiper-next bg-white shadow-md rounded-full p-2 absolute right-2 top-1/2 -translate-y-1/2 z-10"
                aria-label="Next Section"
              >
                <FaChevronRight className="text-black w-5 h-5 sm:w-6 sm:h-6" />
              </button>

            </section>
          </div>

        </div>
        {/* MOBILE VERSION: Slider + Text inside bordered box */}
        <div className="md:hidden w-full px-4 pt-6">
          <div className="border rounded-[30px] p-4 bg-white">
            {/* Swiper Section */}
            <div className="relative p-5">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 0 },
                  640: { slidesPerView: 1, spaceBetween: 15 },
                  1024: { slidesPerView: 1, spaceBetween: 20 },
                }}
              >
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="custom-service-pagination flex justify-center mt-4" />
            </div>

            {/* Text Section Below Slider */}
            <div className="mt-4 text-center">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4">Hyalomoist TG eye drops</p>
              {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                Hyalomoist TG Eye Drop is a lubricant. It is used in the treatment of dry eyes. It moistens the eyes and provides relief from discomfort and temporary burning. It also helps in treating corneal burns by forming a soothing layer that reduces irritation and protects the damaged cornea.
                Trehalube Sodium Hyaluronate Eye Drop is a type of lubricant that helps relieve dry eyes by keeping them hydrated and comfortable. It works by forming a protective, moisture-retaining layer over the eye&#39;s surface, reducing dryness, irritation, and discomfort.
              </p>
            </div>
          </div>
        </div>

        {/*ten*/}
        <div className="relative mb-10 z-10 hidden md:grid grid-cols-1 md:grid-cols-12 items-center pt-5 rounded-bl-[80px] rounded-tr-[80px] min-h-[520px]">
          <div className="md:col-span-6 flex justify-start items-center h-full relative">
            <Image
              src="/images/asset3.svg"
              alt="Eye Drop"
              width={420}
              height={520}
              className="h-auto w-[500px] z-10 sm:block hidden"
            />
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-4 rounded-[60px] max-w-md 3000w-[65%] sm:h-[380px] text-center shadow-lg z-20 sm:w-[500px]">
              <div className="relative p-5 pt-2 sm:pt-0 sm:p-0">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  navigation={{
                    nextEl: ".solution-swiper-next",
                    prevEl: ".solution-swiper-prev",
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  spaceBetween={20}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 0 },
                    640: { slidesPerView: 1, spaceBetween: 15 },
                    1024: { slidesPerView: 1, spaceBetween: 20 },
                  }}
                >
                  <SwiperSlide>
                    <div className="flex items-center justify-center w-full" >
                      <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                        <Image
                          src="/images/product1.png"
                          alt="Thumbnail"
                          fill
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex items-center justify-center w-full" >
                      <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                        <Image
                          src="/images/product1.png"
                          alt="Thumbnail"
                          fill
                          style={{ objectFit: 'contain' }}
                          priority
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="custom-service-pagination flex justify-center mt-4"></div>
              <div className="flex justify-center gap-4">
                <button
                  className="solution-swiper-prev bg-white shadow-md rounded-full p-2 absolute left-2 top-1/2 -translate-y-1/2 z-10"
                  aria-label="Previous Section"
                >
                  <FaChevronLeft className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  className="solution-swiper-next bg-white shadow-md rounded-full p-2 absolute right-2 top-1/2 -translate-y-1/2 z-10"
                  aria-label="Next Section"
                >
                  <FaChevronRight className="text-black w-5 h-5 sm:w-6 sm:h-6" />
                </button>

              </div>
            </section>
          </div>


          <div className="md:col-span-6 flex justify-start self-start h-full">
            <div className="w-full max-w-md flex flex-col justify-center h-full">
              <p className="text-[#23A6F0] font-bold text-2xl mb-4 font-sans">Lotenate0.5%EyeDrops</p>
              {/* <p className="text-[#252B42] font-bold text-4xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed font-sans">
                Lotenate 0.5% Eye Drop helps relieve symptoms such as pain, redness, swelling, itching and watering of eyes due to an infection or allergy. This medicine works by decreasing the production of certain chemicals that cause inflammation of the eyes.
              </p>
            </div>
          </div>
        </div>

        {/* MOBILE VERSION: Slider + Text inside bordered box */}
        <div className="md:hidden w-full px-4 pt-6 mb-10">
          <div className="border rounded-[30px] p-4 bg-white">
            {/* Swiper Section */}
            <div className="relative p-5">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 0 },
                  640: { slidesPerView: 1, spaceBetween: 15 },
                  1024: { slidesPerView: 1, spaceBetween: 20 },
                }}
              >
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center w-full" >
                    <div className="relative w-full max-w-[400px]" style={{ paddingTop: '75%' }}>
                      <Image
                        src="/images/product1.png"
                        alt="Thumbnail"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="custom-service-pagination flex justify-center mt-4" />
            </div>

            {/* Text Section Below Slider */}
            <div className="mt-4 text-center">
              <p className="text-[#23A6F0] font-bold text-2xl mb-2">Lotenate0.5%EyeDrops</p>
              {/* <p className="text-[#252B42] font-bold text-3xl leading-tight">LOTENATE</p> */}
              <p className="text-black font-medium text-base leading-relaxed mt-2">
                Lotenate 0.5% Eye Drop helps relieve symptoms such as pain, redness, swelling, itching and watering of eyes due to an infection or allergy. This medicine works by decreasing the production of certain chemicals that cause inflammation of the eyes.
              </p>
            </div>
          </div>
        </div>



        <footer className="bg-blue-500 text-white py-6 text-center">
          <h2 className="text-lg font-semibold mb-2">MedicalFunc</h2>
          <nav className="space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/product" className="hover:underline">Products</Link>
            <Link href="contact" className="hover:underline">Contact</Link>
          </nav>
        </footer>

      </div>
    </>
  );
}
