
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Social() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 500) {
      return;
    }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSegTcgGzf4do94BHF648HmYeyJ0P90WiR8uxfNnjXbobHUkIg/formResponse";

  const formDataEncoded = new URLSearchParams({
    "entry.1334276760": formData.name,
    "entry.372625114": formData.email,
    "entry.1325249687": formData.subject,
    "entry.1205002476": formData.message,
  });

  try {
    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formDataEncoded.toString(),
    });

      setSubmitStatus("Terima kasih atas pesan anda. Pesan anda telah kami terima!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const socialLinks = [
    {
      name: 'Instagram',
      icon: 'ri-instagram-fill',
      url: 'https://www.instagram.com/feynmanprojects/',
      followers: '25.2K',
      description: 'Tips belajar harian, penjelasan visual, dan konten di balik layar',
      color: 'from-pink-500 to-purple-600'
    },
    {
      name: 'TikTok',
      icon: 'ri-tiktok-fill',
      url: 'https://tiktok.com/@feynmanproject',
      followers: '18.7K',
      description: 'Trik belajar cepat, penjabaran konsep, dan hiburan edukatif',
      color: 'from-gray-800 to-gray-900'
    },
    {
      name: 'YouTube',
      icon: 'ri-youtube-fill',
      url: 'https://www.youtube.com/@FeynmanProjects',
      followers: '42.1K',
      description: 'Tutorial mendalam, kuliah online, dan konten kursus yang komprehensif',
      color: 'from-red-500 to-red-600'
    }
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
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
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
      <section className="relative py-20 bg-gradient-to-br from-[#0D0D0D] via-[#1A0D1A] to-[#0D0D0D]">
        <div className="absolute inset-0 bg-[url('https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/ebd63a4154de474830d689114285f5aa.jfif')] bg-cover bg-center opacity-15"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#8E44AD] bg-clip-text text-transparent">
            Connect With Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            Bergabunglah dengan komunitas kami di berbagai platform sosial dan dapatkan pembaruan konten edukatif terbaru
          </p>
          <div className="bg-[#8E44AD]/10 border border-[#8E44AD]/30 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300">
              Ikuti kami untuk tips belajar harian, penjelasan konsep, dan konten eksklusif yang dirancang untuk menyederhanakan topik-topik yang kompleks.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Platforms */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Follow Our Journey</h2>
            <p className="text-xl text-gray-400">Temukan Kami di Platform Sosial Favorit Anda</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {socialLinks.map((platform) => (
              <div key={platform.name} className="bg-[#2A2A2A] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className={`h-32 bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                  <i className={`${platform.icon} text-6xl text-white`}></i>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{platform.name}</h3>
                    <span className="text-[#8E44AD] font-bold text-lg">{platform.followers}</span>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{platform.description}</p>
                  <a 
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#8E44AD] hover:bg-[#7D3C98] text-white text-center py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    Ikuti Kami
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Content Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] to-[#1A0D1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pemberitahuan Terbaru</h2>
            <p className="text-xl text-gray-400">Informasi dan pembaruan terkini dari kami</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-xl">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://readdy.ai/api/search-image?query=Educational%20infographic%20about%20the%20Feynman%20Technique%20with%20step-by-step%20process%2C%20modern%20design%20with%20purple%20accents%2C%20clean%20typography%2C%20learning%20methodology%20visualization%2C%20professional%20educational%20content&width=400&height=400&seq=post-1&orientation=squarish"
                  alt="Feynman Technique Steps"
                  fill
                  className="w-full h-full object-cover object-top"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <i className="ri-instagram-line text-[#8E44AD] mr-2"></i>
                  <span className="text-sm text-gray-400">Instagram • 2 days ago</span>
                </div>
                <h3 className="font-semibold mb-2">The 4 Steps of Feynman Technique</h3>
                <p className="text-gray-400 text-sm">Master any concept with this simple yet powerful learning method...</p>
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-xl">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://readdy.ai/api/search-image?query=Physics%20concept%20explanation%20with%20simple%20analogies%20and%20visual%20diagrams%2C%20educational%20illustration%20style%2C%20purple%20and%20white%20color%20scheme%2C%20scientific%20learning%20made%20simple%2C%20clear%20explanatory%20graphics&width=400&height=400&seq=post-2&orientation=squarish"
                  alt="Physics Made Simple"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <i className="ri-youtube-line text-[#8E44AD] mr-2"></i>
                  <span className="text-sm text-gray-400">Youtube • 5 days ago</span>
                </div>
                <h3 className="font-semibold mb-2">Quantum Physics in 5 Minutes</h3>
                <p className="text-gray-400 text-sm">Breaking down quantum mechanics using everyday analogies...</p>
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-xl">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/de89c6e5ad3f5ed561ecf092a6909bfb.png"
                  alt="Study Tips"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-400">Seabank</span>
                </div>
                <h3 className="font-semibold mb-2">Dukung Feynman Project Lewat Donasi Anda</h3>
                <p className="text-gray-400 text-sm">Bantu Kami Berkembang Lewat Donasi...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-400">Punya pertanyaan atau saran? Kami dengan senang hati ingin mendengarnya!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8E44AD] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">feynmanpro@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8E44AD] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Waktu Respon</h4>
                    <p className="text-gray-400">Kami biasanya merespons dalam waktu 24 jam</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8E44AD] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-question-line text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dukungan</h4>
                    <p className="text-gray-400">Pertanyaan seputar buku, kursus, dan lainnya</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-600 rounded-lg focus:border-[#8E44AD] focus:outline-none transition-colors duration-300 text-sm"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-600 rounded-lg focus:border-[#8E44AD] focus:outline-none transition-colors duration-300 text-sm"
                    placeholder="tulis.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-600 rounded-lg focus:border-[#8E44AD] focus:outline-none transition-colors duration-300 text-sm"
                    placeholder="Tentang apa ini?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message ({formData.message.length}/500)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-600 rounded-lg focus:border-[#8E44AD] focus:outline-none transition-colors duration-300 resize-none text-sm"
                    placeholder="Ceritakan apa yang ingin Anda sampaikan..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#8E44AD] hover:bg-[#7D3C98] disabled:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? 'Sending...' : 'Kirimkan Pesan'}
                </button>
                
                {submitStatus && (
                  <div className={`p-4 rounded-lg ${submitStatus.includes('error') ? 'bg-red-500/10 border border-red-500/30 text-red-400' : 'bg-green-500/10 border border-green-500/30 text-green-400'}`}>
                    {submitStatus}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-gradient-to-r from-[#8E44AD] to-[#A569BD]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bergabung dalam Perjalanan Belajar Kami</h2>
            <p className="text-xl opacity-90">Menumbuhkan Pemahaman, Bukan Sekadar Nilai.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4+</div>
              <p className="text-lg opacity-90">Buku Interaktif</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6+</div>
              <p className="text-lg opacity-90">Kontributor Aktif</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <p className="text-lg opacity-90">Halaman Materi Disusun</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <p className="text-lg opacity-90">Konten Digital Dibagikan</p>
            </div>
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
                {socialLinks.map((platform) => (
                  <a 
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer"
                  >
                    <i className={`${platform.icon} text-white`}></i>
                  </a>
                ))}
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
