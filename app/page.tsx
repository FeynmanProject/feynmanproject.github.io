// Home page dengan JSX rapi dan tanpa kesalahan struktur
'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const testimonialSliderRef = useRef<HTMLDivElement | null>(null);
  
  const addFadeAnimation = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.classList.remove('animate-fade-slide'); // reset animasi dulu
      void ref.current.offsetWidth; // force reflow
      ref.current.classList.add('animate-fade-slide');
    }
  };
  
const scrollLeft = (ref: React.RefObject<HTMLDivElement | null>) => {
  if (ref.current) {
    ref.current.scrollBy({ left: -800, behavior: 'smooth' });
    addFadeAnimation(ref); // tambahkan animasi
  }
};

const scrollRight = (ref: React.RefObject<HTMLDivElement | null>) => {
  if (ref.current) {
    ref.current.scrollBy({ left: 800, behavior: 'smooth' });
    addFadeAnimation(ref); // tambahkan animasi
  }
};


  const testimonials = [
    {
      name: "Filbert Martin",
      role: "Teknik Informatika, Institut Teknologi Sepuluh Nopember (ITS)",
      quote: "Suka banget sama pendekatan Feynman Project yang ngajak ngerti konsep lebih dalam. Videonya bantu nyusun ulang materi dengan cara yang runtut dan masuk akal.",
    },
    {
      name: "Rahma Wati",
      role: "Pendidikan Matematika, Universitas Lambung Mangkurat (ULM)",
      quote: "Belajar konsep sebelum ngajar itu penting. Video dari Feynman Project bantu banget, terutama penjelasan limit dan turunan yang sering bikin bingung.",
    },
    {
      name: "Naia Saira",
      role: "Teknik Industri, Universitas Tarumanagara (UNTAR)",
      quote: "Belajar kalkulus dan aljabar di teknik industri kadang bikin bingung, apalagi kalau konsep dasarnya belum kuat, Feynman Project bantu banget lewat penjelasan yang runtut dan mudah dipahami.",
    },
    {
      name: "Muhammad Andi Garlan",
      role: "Teknik Sipil, Universitas Brawijaya (UB)",
      quote: "Sebagai mahasiswa teknik yang sempat kesulitan memahami kalkulus, keberadaan buku diktat dan video dari Feynman Project sangat membantu. Materi dijelaskan dari konsep dasarnya, bukan sekadar rumus.",
    },
    {
      name: "Syach Iqbal",
      role: "Digital Business Innovation, Universitas Bina Nusantara (BINUS)",
      quote: "Aku bukan anak murni matematika, tapi kadang butuh paham teori dasar buat ngoding. Video di Feynman Project cukup bantu, apalagi yang soal logika proposisional dan himpunan.",
    },
  ];


  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-purple-500/20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-[#8E44AD] font-sans">
                Feynman Project
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="flex items-center space-x-1 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-information-line text-lg"></i>
              <span>About</span>
            </Link>
            <Link href="/books" className="flex items-center space-x-1 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-book-2-line text-lg"></i>
              <span>Books</span>
            </Link>
            <Link href="/social" className="flex items-center space-x-1 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-share-line text-lg"></i>
              <span>Social Media</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2">
            <Link href="/about" className="flex items-center space-x-2 py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-information-line"></i>
              <span>About</span>
            </Link>
            <Link href="/books" className="flex items-center space-x-2 py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-book-2-line"></i>
              <span>Books</span>
            </Link>
            <Link href="/social" className="flex items-center space-x-2 py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-share-line"></i>
              <span>Social Media</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D0D0D] via-[#1A0D1A] to-[#0D0D0D]">
        <div className="absolute inset-0 bg-[url('https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/964d4280b0c5bacfb5ac985f4006f57d.jfif')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#8E44AD] bg-clip-text text-transparent">
            Feynman Project
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light">
            Paham Matematika? Jelasin Sendiri, Bro!
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Kuasai konsep matematika lewat pemahaman yang mendalam. Kami bantu kamu belajar secara runtut — karena mengerti itu lebih penting daripada sekadar mengerjakan soal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/books" className="bg-[#8E44AD] hover:bg-[#7D3C98] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
              Jelajahi Buku Diktat Kami
            </Link>
            <Link href="/about" className="border-2 border-[#8E44AD] text-[#8E44AD] hover:bg-[#8E44AD] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Video Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch Our Introduction</h2>
            <p className="text-xl text-gray-400">Ini cara kami menyampaikan materi: menekankan alur berpikir dan membangun pemahaman langkah demi langkah.</p>
          </div>
          
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Feynman Project Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] to-[#1A0D1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Mengapa Feynman Project?</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Nama platform ini terinspirasi dari Richard Feynman — seorang fisikawan peraih Nobel yang dikenal bukan hanya karena kejeniusannya, tetapi karena kemampuannya menjelaskan hal sulit dengan cara yang sederhana dan penuh rasa ingin tahu.

Kami mengadopsi prinsip belajar yang dikenal sebagai Teknik Feynman, yaitu metode belajar yang menekankan pemahaman mendalam melalui penjelasan yang sederhana. Berikut adalah langkah-langkah dalam teknik tersebut:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#8E44AD] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Pilih Konsep</h3>
                    <p className="text-gray-400">Tentukan topik atau materi yang ingin kamu pahami lebih dalam.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#8E44AD] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Ajarkan dengan Bahasa Sendiri</h3>
                    <p className="text-gray-400">Coba jelaskan topik tersebut seolah kamu mengajarkannya kepada anak kecil — sederhana, jujur, dan langsung.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#8E44AD] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Temukan Titik Lemah</h3>
                    <p className="text-gray-400">Amati bagian mana yang sulit dijelaskan. Di situlah celah pemahamanmu.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#8E44AD] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Sederhanakan & Gunakan Analogi</h3>
                    <p className="text-gray-400">Perbaiki penjelasanmu dengan kalimat yang lebih jelas, contoh konkret, atau analogi yang membantu.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/ed683c15d9bdb59669509c782ab9d728.jfif"
                  alt="Feynman Technique Illustration"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-top rounded-2xl"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih Platform Kami?</h2>
            <p className="text-xl text-gray-400">Ubah cara Anda belajar dengan pendekatan yang telah terbukti efektif.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mb-6">
                <i className="ri-book-open-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Buku Diktat Pilihan</h3>
              <p className="text-gray-400">Jelajahi buku-buku pilihan kami — tersedia untuk dibaca dan dibeli, lengkap dengan materi dan pembahasan soal.</p>
            </div>
            
            <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mb-6">
                <i className="ri-video-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Video Tutorials</h3>
              <p className="text-gray-400">Jelajahi video pembelajaran matematika yang disusun secara sistematis untuk membantu pemahaman konsep dari dasar hingga lanjutan.</p>
            </div>
            
            <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mb-6">
                <i className="ri-community-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Komunitas Belajar</h3>
              <p className="text-gray-400">Terhubung dengan sesama pelajar dan pengajar yang memiliki semangat yang sama: mengajar, memahami, dan terus bertumbuh bersama.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] to-[#1A0D1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kata Mereka</h2>
            <p className="text-xl text-gray-400">Ulasan dari komunitas pembaca dan pemirsa video kami.</p>
          </div>
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#8E44AD] hover:bg-[#7D3C98] text-white rounded-full p-3 shadow-lg"
              onClick={() => scrollLeft(testimonialSliderRef)}
            >
              <i className="ri-arrow-left-line text-xl"></i>
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#8E44AD] hover:bg-[#7D3C98] text-white rounded-full p-3 shadow-lg"
              onClick={() => scrollRight(testimonialSliderRef)}
            >
              <i className="ri-arrow-right-line text-xl"></i>
            </button>
            <div
              ref={testimonialSliderRef}
              className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-8"
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="min-w-[300px] max-w-sm flex-shrink-0 bg-[#2A2A2A] p-6 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center mb-4">
                    <div>
                      <h4 className="font-semibold">{t.name}</h4>
                      <p className="text-gray-400 text-sm">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">&ldquo;{t.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8E44AD] to-[#A569BD]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Bergabung Bersama Kami?</h2>
          <p className="text-xl mb-8 opacity-90">
            Belajar dengan cara yang membuatmu benar-benar memahami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/books" className="bg-white text-[#8E44AD] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
              Mulai Belajar
            </Link>
            <Link href="/social" className="border-2 border-white text-white hover:bg-white hover:text-[#8E44AD] px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">
              Ikuti Kami
            </Link>
          </div>
        </div>
      </section>


      
      {/* Footer */}
      <footer className="bg-[#0D0D0D] py-12 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#8E44AD] mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
                Feynman Project
              </div>
              <p className="text-gray-400 leading-relaxed">
                Belajar menjadi bermakna saat kita mampu mengajarkannya kepada orang lain.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">About Us</Link>
                <Link href="/books" className="block text-gray-400 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">Our Books</Link>
                <Link href="/social" className="block text-gray-400 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">Social Media</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/feynmanprojects/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-instagram-line text-white"></i>
                </a>
                <a 
                  href="https://www.tiktok.com/@feynmanproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-tiktok-line text-white"></i>
                </a>
                <a
                  href="https://www.youtube.com/@FeynmanProjects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer"
                >
                  <i className="ri-youtube-line text-white"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Feynman Project. Content is licensed under Creative Commons BY-NC-SA 4.0.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
