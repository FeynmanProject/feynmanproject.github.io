'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Social() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const [isPaused, setIsPaused] = useState(false);
  const [manualPause, setManualPause] = useState(false);

  const pathname = usePathname();

  // ====== BG URLS (samakan gaya dengan Books/Home) ======
  const BG_URLS = {
    hero: 'https://i.imgur.com/BLGWdwV.jpeg',
    platforms: 'https://i.imgur.com/roN93QN.jpeg',
    news: 'https://i.imgur.com/L4kyTrq.jpeg',
    contact: 'https://i.imgur.com/o31xDRj.jpeg',
    stats: 'https://i.imgur.com/oZiejJO.jpeg',
    footer: 'https://i.imgur.com/roN93QN.jpeg',
  } as const;

  const SECTION_ORDER: Array<keyof typeof BG_URLS> = ['hero', 'platforms', 'news', 'contact', 'stats'];

  // ====== AUTO-INJECT PER-SECTION BACKGROUND (identik Books/Home) ======
  useEffect(() => {
    const overlayFor = (name: keyof typeof BG_URLS): string => {
      switch (name) {
        case 'hero':
          return [
            'radial-gradient(900px 520px at 50% 35%, rgba(142,68,173,0.35), transparent 70%)',
            'radial-gradient(700px 380px at 90% 80%, rgba(165,105,189,0.18), transparent 65%)',
            'linear-gradient(180deg, rgba(4,4,6,0.88), rgba(4,4,6,0.88))',
          ].join(', ');
        case 'platforms':
          return [
            'radial-gradient(1200px 520px at 12% 20%, rgba(199,155,226,0.16), transparent 65%)',
            'radial-gradient(1100px 520px at 88% 80%, rgba(165,105,189,0.14), transparent 65%)',
            'linear-gradient(180deg, rgba(10,10,12,0.86), rgba(10,10,12,0.86))',
          ].join(', ');
        case 'news':
          return [
            'radial-gradient(800px 500px at 15% 15%, rgba(142,68,173,0.28), transparent 60%)',
            'radial-gradient(900px 520px at 85% 85%, rgba(120,86,255,0.16), transparent 60%)',
            'linear-gradient(180deg, rgba(9,8,12,0.88), rgba(9,8,12,0.88))',
          ].join(', ');
        case 'contact':
          return [
            'radial-gradient(900px 520px at 10% 20%, rgba(142,68,173,0.20), transparent 60%)',
            'radial-gradient(1000px 540px at 90% 80%, rgba(165,105,189,0.18), transparent 60%)',
            'radial-gradient(1100px 560px at 50% 60%, rgba(120,86,255,0.12), transparent 60%)',
            'linear-gradient(180deg, rgba(7,7,10,0.88), rgba(7,7,10,0.88))',
          ].join(', ');
        case 'stats':
          return [
            'radial-gradient(800px 500px at 50% 40%, rgba(199,155,226,0.14), transparent 70%)',
            'linear-gradient(135deg, rgba(14,12,18,0.92), rgba(13,13,13,0.92))',
          ].join(', ');
        default:
          return 'linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.85))';
      }
    };

    const sections = Array.from(document.querySelectorAll('section'));
    SECTION_ORDER.forEach((name, idx) => {
      const url = BG_URLS[name];
      const el = sections[idx];
      if (!url || !el) return;
      if (el.querySelector('[data-fp-bg]')) return;

      el.style.position = 'relative';
      el.classList.add('overflow-hidden');

      const bg = document.createElement('div');
      bg.setAttribute('data-fp-bg', '');
      bg.className = 'fp-bg';
      bg.style.backgroundImage = `${overlayFor(name)}, url(${url})`;

      const grain = document.createElement('div');
      grain.setAttribute('data-fp-bg-grain', '');
      grain.className = 'fp-bg-grain';

      el.prepend(bg);
      el.prepend(grain);
    });

    const footer = document.querySelector('footer');
    if (footer && BG_URLS.footer && !footer.querySelector('[data-fp-bg]')) {
      footer.style.position = 'relative';
      footer.classList.add('overflow-hidden');

      const bg = document.createElement('div');
      bg.setAttribute('data-fp-bg', '');
      bg.className = 'fp-bg';
      bg.style.backgroundImage = `linear-gradient(180deg, rgba(9,8,10,0.90), rgba(9,8,10,0.90)), url(${BG_URLS.footer})`;

      const grain = document.createElement('div');
      grain.setAttribute('data-fp-bg-grain', '');
      grain.className = 'fp-bg-grain';

      footer.prepend(bg);
      footer.prepend(grain);
    }
  }, []);

  // ====== Content data ======
  const cards = [
    {
      icon: 'ri-emotion-sad-line',
      category: 'Inspiration',
      title: 'RIP Richard Feynman (1918–1988)',
      desc: 'Sosok yang mengajarkan kita bahwa belajar dimulai dari rasa ingin tahu. Terima kasih, Feynman.',
      image: 'https://i.imgur.com/mq7F1gN.png',
    },
    {
      icon: 'ri-global-line',
      category: 'Our Website',
      title: 'Kenali Isi Website Kami',
      desc: 'Jelajahi koleksi buku, kelas, dan video pembelajaran yang disusun.',
      image:
        'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/65cc37aa0536b8aee2ac8c3d37391a28.png',
    },
    {
      icon: 'ri-bank-line',
      category: 'Seabank',
      title: 'Dukung Feynman Project Lewat Donasi',
      desc: 'Bantu kami terus berkarya lewat edukasi terbuka dan konten yang bermanfaat',
      image:
        'https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/806800b6a8aac78bea560c27f6167a67.png',
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: 'ri-instagram-fill',
      url: 'https://www.instagram.com/feynmanprojects/',
      followers: '',
      description: 'Tips belajar harian, penjelasan visual, dan konten di balik layar',
      color: 'from-pink-500 to-purple-600',
    },
    {
      name: 'TikTok',
      icon: 'ri-tiktok-fill',
      url: 'https://tiktok.com/@feynmanproject',
      followers: '',
      description: 'Trik belajar cepat, penjabaran konsep, dan hiburan edukatif',
      color: 'from-gray-800 to-gray-900',
    },
    {
      name: 'YouTube',
      icon: 'ri-youtube-fill',
      url: 'https://www.youtube.com/@FeynmanProjects',
      followers: '',
      description: 'Tutorial mendalam, kuliah online, dan konten kursus yang komprehensif',
      color: 'from-red-500 to-red-600',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > 500) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLSegTcgGzf4do94BHF648HmYeyJ0P90WiR8uxfNnjXbobHUkIg/formResponse';

    const formDataEncoded = new URLSearchParams({
      'entry.1334276760': formData.name,
      'entry.372625114': formData.email,
      'entry.1325249687': formData.subject,
      'entry.1205002476': formData.message,
    });

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataEncoded.toString(),
      });

      setSubmitStatus('Terima kasih atas pesan anda. Pesan anda telah kami terima!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('There was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-purple-500/20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Logo Feynman" width={36} height={36} quality={100} priority className="object-contain" unoptimized />
              <div className="ml-2 flex items-center">
                <span className="text-xl font-bold text-[#8E44AD] font-sans leading-none tracking-wide">Feynman Project</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#kelas" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname === '/' ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'}`}>
              <i className="ri-graduation-cap-line text-lg"></i>
              <span>Our Classes</span>
            </Link>
            <Link href="/about" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname.startsWith('/about') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'}`}>
              <i className="ri-information-line text-lg"></i>
              <span>About</span>
            </Link>
            <Link href="/books" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname.startsWith('/books') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'}`}>
              <i className="ri-book-2-line text-lg"></i>
              <span>Books</span>
            </Link>
            <Link href="/social#contact" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname.startsWith('/social') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'}`}>
              <i className="ri-contacts-line text-lg"></i>
              <span>Contact Us</span>
            </Link>
            <Link href="/social" className={`flex items-center space-x-1 transition-colors duration-300 cursor-pointer ${pathname.startsWith('/social') ? 'text-[#8E44AD]' : 'hover:text-[#8E44AD]'}`}>
              <i className="ri-share-line text-lg"></i>
              <span>Social Media</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
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

      {/* Hero (compact, biar konsisten) */}
      <section className="py-20 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-[#8E44AD] bg-clip-text text-transparent">
            Connect With Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300/95 leading-relaxed">
            Bergabunglah dengan komunitas kami di berbagai platform sosial dan dapatkan pembaruan konten edukatif terbaru
          </p>
          <div className="mt-8 bg-[#8E44AD]/10 border border-[#8E44AD]/30 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300">
              Ikuti kami untuk tips belajar harian, penjelasan konsep, dan konten eksklusif yang dirancang untuk menyederhanakan topik-topik yang kompleks.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Platforms */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Follow Our Journey</h2>
            <p className="text-xl text-gray-400">Temukan Kami di Platform Sosial Favorit Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialLinks.map((platform) => (
              <div key={platform.name} className="bg-black ring-1 ring-white/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className={`h-32 bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                  <i className={`${platform.icon} text-6xl text-white`}></i>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{platform.name}</h3>
                    <span className="text-[#8E44AD] font-bold text-lg">{platform.followers}</span>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">{platform.description}</p>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer" 
                    className="group block w-full rounded-full py-3 font-semibold text-center
                               bg-[#1F1F1F] hover:bg-[#262626]
                               ring-1 ring-white/10 hover:ring-white/20
                               transition-all duration-300 transform hover:scale-105 cursor-pointer"
                   > 
                    <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]
                                     group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.9)]">
                      Ikuti Kami
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pemberitahuan Terbaru — auto-scroll track */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Pemberitahuan Terbaru</h2>
            <p className="text-xl text-gray-400">Informasi dan pembaruan terkini dari kami</p>
          </div>

          <div className="overflow-hidden">
            <div
              className={`testimonial-track ${isPaused ? 'paused' : ''}`}
              onMouseEnter={() => { if (!manualPause) setIsPaused(true); }}
              onMouseLeave={() => { if (!manualPause) setIsPaused(false); }}
            >
              {[...cards, ...cards, ...cards].map((item, i) => (
                <div
                  key={i}
                  className="min-w-[300px] max-w-sm bg-black ring-1 ring-white/5 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 cursor-pointer"
                  onClick={() => { const np = !manualPause; setManualPause(np); setIsPaused(np); }}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover object-top" unoptimized />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <i className={`${item.icon} text-[#8E44AD] mr-2`}></i>
                      <span className="text-sm text-gray-400">{item.category}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Hubungi Kami</h2>
            <p className="text-xl text-gray-400">
              Punya pertanyaan atau saran? Kami senang mendengarnya! Kamu juga bisa gunakan chat di pojok kanan bawah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
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
                  <p className="text-gray-400">Biasanya dalam 24 jam</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8E44AD] rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-question-line text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Dukungan</h4>
                  <p className="text-gray-400">Pertanyaan seputar buku, kursus, dll.</p>
                </div>
              </div>
            </div>

            <div>
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black ring-1 ring-white/10 rounded-lg focus:ring-2 focus:ring-[#8E44AD] outline-none text-sm"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black ring-1 ring-white/10 rounded-lg focus:ring-2 focus:ring-[#8E44AD] outline-none text-sm"
                    placeholder="tulis.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">Subject</label>
                  <input
                    id="subject" name="subject" type="text" required value={formData.subject} onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black ring-1 ring-white/10 rounded-lg focus:ring-2 focus:ring-[#8E44AD] outline-none text-sm"
                    placeholder="Tentang apa ini?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message ({formData.message.length}/500)
                  </label>
                  <textarea
                    id="message" name="message" rows={6} maxLength={500} required value={formData.message} onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black ring-1 ring-white/10 rounded-lg focus:ring-2 focus:ring-[#8E44AD] outline-none resize-none text-sm"
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
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Bergabung dalam Perjalanan Belajar Kami</h2>
            <p className="text-xl text-gray-300/95">Menumbuhkan Pemahaman, Bukan Sekadar Nilai.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-black/50 ring-1 ring-white/10 rounded-2xl p-8">
              <div className="text-4xl md:text-5xl font-bold mb-2">4+</div>
              <p className="text-lg opacity-90">Buku Interaktif</p>
            </div>
            <div className="bg-black/50 ring-1 ring-white/10 rounded-2xl p-8">
              <div className="text-4xl md:text-5xl font-bold mb-2">6+</div>
              <p className="text-lg opacity-90">Kontributor Aktif</p>
            </div>
            <div className="bg-black/50 ring-1 ring-white/10 rounded-2xl p-8">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <p className="text-lg opacity-90">Halaman Materi Disusun</p>
            </div>
            <div className="bg-black/50 ring-1 ring-white/10 rounded-2xl p-8">
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <p className="text-lg opacity-90">Konten Digital Dibagikan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#8E44AD] mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
                Feynman Project
              </div>
              <p className="text-gray-400 leading-relaxed">Belajar menjadi bermakna saat kita mampu mengajarkannya kepada orang lain.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-gray-400 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
                  About Us
                </Link>
                <Link href="/books" className="block text-gray-400 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
                  Our Books
                </Link>
                <Link href="/social" className="block text-gray-400 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">
                  Social Media
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((platform) => (
                  <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer">
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

      {/* Global layers + testimonial marquee */}
      <style jsx global>{`
        /* tiap section/footer punya konteks tumpukan sendiri */
        section, footer { position: relative; isolation: isolate; }

        /* layer gambar & grain */
        .fp-bg {
          position: absolute; inset: 0; z-index: 0;
          background-position: center; background-size: cover; background-repeat: no-repeat;
          filter: saturate(1.05) contrast(1.02); will-change: transform; pointer-events: none;
        }
        .fp-bg-grain {
          position: absolute; inset: 0; z-index: 1; opacity: 0.07; mix-blend-mode: overlay; pointer-events: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.4'/></svg>");
          background-size: 200px 200px;
        }
        /* konten di atas layer */
        section > *:not([data-fp-bg]):not([data-fp-bg-grain]),
        footer  > *:not([data-fp-bg]):not([data-fp-bg-grain]) {
          position: relative; z-index: 2;
        }

        /* auto-scroll cards */
        .testimonial-track {
          display: flex; gap: 1.5rem; width: max-content;
          animation: marquee 24s linear infinite;
          will-change: transform;
        }
        .testimonial-track.paused { animation-play-state: paused; }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); } /* karena diulang 3x */
        }
      `}</style>
    </div>
  );
}
