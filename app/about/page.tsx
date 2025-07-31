
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';



export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();


  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-purple-500/20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.png" // pastikan nama sesuai dan ada di /public
                alt="Logo Feynman"
                width={36}
                height={36}
                className="object-contain"
              />
              <div className="text-2xl font-bold text-[#8E44AD] font-sans">
                Feynman Project
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#kelas"
              className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${
                pathname === '/' ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'
              }`}
            >
              <i className="ri-graduation-cap-line text-lg"></i>
              <span>Our Classes</span>
            </Link>
            <Link
              href="/about"
              className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${
                pathname.startsWith('/about') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'
              }`}
            >
              <i className="ri-information-line text-lg"></i>
              <span>About</span>
            </Link>

            <Link
              href="/books"
              className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${
                pathname.startsWith('/books') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'
              }`}
            >
              <i className="ri-book-2-line text-lg"></i>
              <span>Books</span>
            </Link>

            <Link
              href="/social#contact"
              className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${
                pathname.startsWith('/social') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'
              }`}
            >
              <i className="ri-contacts-line text-lg"></i>
              <span>Contact Us</span>
            </Link>

            <Link
              href="/social"
              className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${
                pathname.startsWith('/social') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'
              }`}
            >
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
            <Link href="/#kelas" className="flex items-center space-x-2 py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-graduation-cap-line"></i>
              <span>Our Classes</span>
            </Link>
            <Link href="/about" className="flex items-center space-x-2 py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-information-line"></i>
              <span>About</span>
            </Link>
            <Link href="/books" className="flex items-center space-x-2 py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-book-2-line"></i>
              <span>Books</span>
            </Link>
            <Link href="/social#contact" className="flex items-center space-x-2 py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-contacts-line"></i>
              <span>Contact Us</span>
            </Link>
            <Link href="/social" className="flex items-center space-x-2 py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
              <i className="ri-share-line"></i>
              <span>Social Media</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0D0D0D] via-[#1A0D1A] to-[#0D0D0D]">
        <div className="absolute inset-0 bg-[url('https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/8f31d4605792ad8674bba0f683425d4f.jfif')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#8E44AD] bg-clip-text text-transparent">
            About Feynman Project
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Belajar Matematika Jadi Seru: Jelasin Sendiri, Paham Sampai Inti.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Kami percaya bahwa pemahaman yang sejati tidak hanya diukur dari seberapa banyak yang bisa dihafal, tetapi dari seberapa baik seseorang dapat menjelaskan kembali sebuah konsep dengan cara yang sederhana. Misi kami adalah membangun ruang belajar yang mendorong setiap individu untuk benar-benar memahami apa yang mereka pelajari—bukan sekadar mengejar nilai, tetapi mengejar makna.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Melalui pendekatan belajar yang aktif dan reflektif, kami menciptakan komunitas yang mendorong setiap pembelajar untuk menjadi pengajar. Dengan konten yang terarah, media yang mudah diakses, dan semangat kolaborasi, kami membentuk lingkungan belajar yang tidak hanya mendalam, tetapi juga menyenangkan dan penuh dukungan.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/36d3026030e784dc6480169fed366441.png"
                  alt="Our Mission"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] to-[#1A0D1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/9fdc9f77a1962ccbe565261e8ff2ab4f.png"
                  alt="Our Vision"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Menumbuhkan pemahaman matematika yang kokoh dan berkelanjutan melalui metode aktif—dengan ‘teaching-as-learning’, peserta bukan hanya paham, tapi bisa mengajar.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Menjadi rujukan pembelajaran matematika modern yang memadukan intuisi, logika, dan keberanian berpikir—setiap pelajar menjadi ‘mathematician’ yang percaya diri menjelaskan konsep rumit.
              </p>
              <div className="bg-[#8E44AD]/10 border-l-4 border-[#8E44AD] p-6 rounded-r-lg">
                <p className="text-[#8E44AD] font-semibold italic">
                  &ldquo;If you can&rsquo;t explain it simply, you don&rsquo;t understand it well enough.&rdquo; &ndash; Richard Feynman
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Philosophy</h2>
            <p className="text-xl text-gray-400">Prinsip-prinsip yang membimbing setiap hal yang kami lakukan</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mb-6">
                <i className="ri-book-open-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Simplicity is Clarity</h3>
              <p className="text-gray-400 leading-relaxed">
                Gagasan yang kompleks menjadi lebih mudah dipahami ketika diuraikan menjadi bagian-bagian yang sederhana dan jelas. Kami menjunjung komunikasi yang lugas, bukan jargon atau kerumitan.
              </p>
            </div>
            
            <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mb-6">
                <i className="ri-book-open-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Teaching is Learning</h3>
              <p className="text-gray-400 leading-relaxed">
                Tindakan mengajar membuka celah dalam pemahaman dan memperkuat pengetahuan. Setiap pengajar adalah seorang pelajar, dan setiap pelajar punya sesuatu untuk diajarkan.
              </p>
            </div>
            
            <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mb-6">
                <i className="ri-book-open-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Accessible Education</h3>
              <p className="text-gray-400 leading-relaxed">
                Kami percaya bahwa akses terhadap pendidikan bermutu harus diperluas. Karena itu, kami menghadirkan materi dan teknik belajar yang terjangkau dan dapat diakses oleh siapa pun, tanpa memandang latar belakang atau kondisi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] to-[#1A0D1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">Feynman Project lahir dari kolaborasi para pembelajar dan berfokus pada penyajian ilmu secara runtut dan sederhana untuk mendukung proses belajar yang lebih bermakna.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Image
                  src="https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/0909b88981a42a1416b47377a17d9718.png"
                  alt="Dr. Sarah Chen - Founder"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-top rounded-full"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Muhammad Faris Naufaldi</h3>
              <p className="text-[#8E44AD] mb-4">Founder of Feynman Project</p>
              <p className="text-gray-400 leading-relaxed">
                Mengelola wajah digital Feynman Project dari desain hingga media. Aktif menginisiasi kolaborasi untuk pengembangan buku dan platform belajar.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Image 
                  src="https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/89caa20f90a1aa501a81121965edf303.png"
                  alt="Michael Rodriguez - Content Director"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Natalius Desta Riyanto</h3>
              <p className="text-[#8E44AD] mb-4">Co-Founder of Feynman Project</p>
              <p className="text-gray-400 leading-relaxed">
                Menyusun materi pengajaran untuk video dan buku diktat, fokus pada penyampaian konsep secara sistematis dan jelas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Image
                  src="https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/35f2486849850195865b2e960e70faa7.png"
                  alt="Emily Watson - Technology Lead"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Richard G. H. Sinurat</h3>
              <p className="text-[#8E44AD] mb-4">Co-Founder of Feynman Project</p>
              <p className="text-gray-400 leading-relaxed">
               Tertarik pada logika, membantu merancang konten dan operasional agar matematika terasa masuk akal dan mudah dipahami.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Image 
                  src="https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/d2aae01ff2024d3fe3f211134c42626d.png"
                  alt="David Park - Community Manager"
                  fill
                  unoptimized
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Adregal Tora</h3>
              <p className="text-[#8E44AD] mb-4">Co-Founder of Feynman Project</p>
              <p className="text-gray-400 leading-relaxed">
                Berperan dalam pembuatan animasi edukatif dan penyusunan materi ajar yang mendukung pemahaman logis dan runtut.
              </p>
            </div>
          </div>
        </div>
      </section>              

      {/* History Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400">Perjalanan Karya Feynman Project</p>
          </div>
          
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Dimulai dari Kegelisahan</h3>
                <p className="text-gray-400 leading-relaxed">
                 Berawal dari satu pertanyaan sederhana:
                 Bagaimana jika materi kuliah dijelaskan secara lebih runtut dan masuk akal—agar mahasiswa bisa memahami, bukan sekadar mengulang?
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Lahirnya Karya Pertama</h3>
                <p className="text-gray-400 leading-relaxed">
                  Untuk menjawab pertanyaan itu, dibuatlah video-video pengajaran yang berusaha menyederhanakan konsep rumit. Tak lama kemudian, muncul pula diktat dan catatan belajar yang disusun bersama beberapa kontributor—berdasarkan semangat: belajar dimulai dari memahami cara berpikir.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Membuka Akses dan Menyediakan Pilihan</h3>
                <p className="text-gray-400 leading-relaxed">
                  Video pembelajaran disediakan secara gratis dan terbuka bagi siapa saja. Sementara itu, beberapa buku diktat kami terbitkan sebagai bentuk materi belajar yang lebih terstruktur—tersedia untuk dibeli bagi yang membutuhkan pendamping belajar yang komprehensif.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tumbuh Bersama Kontributor</h3>
                <p className="text-gray-400 leading-relaxed">
                  Materi terus berkembang berkat kolaborasi dari individu-individu yang peduli terhadap pendidikan. Setiap masukan, revisi, dan penambahan topik adalah bentuk kerja bersama yang terbuka.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Harapan yang Kami Bawa</h3>
                <p className="text-gray-400 leading-relaxed">
                  Kami berharap apa yang telah dibuat—meski sederhana—dapat membantu mahasiswa memahami konsep lebih baik, menemukan cara belajar yang pas, dan merasa ditemani dalam prosesnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8E44AD] to-[#A569BD]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Gabung dan Rasakan Cara Belajar yang Berbeda</h2>
          <p className="text-xl mb-8 opacity-90">
            Temukan pemahaman mendalam melalui pendekatan yang sederhana dan logis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/books" className="bg-white text-[#8E44AD] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
              Jelajahi Buku Kami
            </Link>
            <Link href="/social" className="border-2 border-white text-white hover:bg-white hover:text-[#8E44AD] px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">
              Terhubung dengan Kami
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
