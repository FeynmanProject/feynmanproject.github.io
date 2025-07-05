
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';


export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-[#8E44AD] font-sans">
                Feynman Project
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 ml-auto">
              <Link href="/about" className="text-[#8E44AD] cursor-pointer">About</Link>
              <Link href="/books" className="hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">Books</Link>
              <Link href="/social" className="hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">Social Media</Link>
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
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <Link href="/about" className="py-2 text-[#8E44AD] cursor-pointer">About</Link>
                <Link href="/books" className="py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">Books</Link>
                <Link href="/social" className="py-2 hover:text-[#8E44AD] transition-colors duration-300 cursor-pointer">Social Media</Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#0D0D0D] via-[#1A0D1A] to-[#0D0D0D]">
        <div className="absolute inset-0 bg-[url('https://static.readdy.ai/image/420ea21a139446d9f8dbe141258338d9/0e76adb1498b97d4ea78b8aedb432c00.jfif')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#8E44AD] bg-clip-text text-transparent">
            About Feynman Project
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Revolutionizing education through the power of simple explanations and the art of teaching to learn.
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
                We believe that true understanding comes from the ability to explain complex concepts in simple terms. 
                Our mission is to make quality education accessible to everyone by promoting the Feynman Technique - 
                a proven method that transforms how people learn and retain knowledge.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through carefully curated content, engaging videos, and a supportive community, we empower learners 
                to become teachers, fostering deeper understanding and lifelong learning habits.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://readdy.ai/api/search-image?query=Inspiring%20educational%20scene%20with%20a%20diverse%20group%20of%20students%20and%20teacher%20engaged%20in%20collaborative%20learning%2C%20modern%20classroom%20setting%2C%20warm%20purple%20lighting%2C%20books%20and%20digital%20devices%2C%20knowledge%20sharing%20atmosphere%2C%20contemporary%20educational%20environment&width=600&height=600&seq=mission-image&orientation=squarish"
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
                  src="https://readdy.ai/api/search-image?query=Futuristic%20vision%20of%20global%20education%20with%20interconnected%20learning%20networks%2C%20digital%20knowledge%20transfer%2C%20holographic%20displays%20of%20information%2C%20purple%20and%20blue%20color%20scheme%2C%20modern%20technology%20in%20education%2C%20worldwide%20learning%20community%20concept&width=600&height=600&seq=vision-image&orientation=squarish"
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
                We envision a world where learning is not limited by traditional barriers - where anyone, anywhere, 
                can access quality education and develop a deep understanding of any subject through the power of teaching.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                By building a global community of learners who teach and teachers who learn, we aim to create 
                an ecosystem where knowledge flows freely and understanding deepens through explanation.
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
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-xl">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mb-6">
                <i className="ri-lightbulb-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Simplicity is Clarity</h3>
              <p className="text-gray-400 leading-relaxed">
                Complex ideas become accessible when broken down into simple, understandable components. 
                We champion clear communication over jargon and complexity.
              </p>
            </div>
            
            <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-xl">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mb-6">
                <i className="ri-group-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Teaching is Learning</h3>
              <p className="text-gray-400 leading-relaxed">
                The act of teaching reveals gaps in understanding and solidifies knowledge. 
                Every teacher is a student, and every student has something to teach.
              </p>
            </div>
            
            <div className="bg-[#2A2A2A] p-8 rounded-2xl shadow-xl">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mb-6">
                <i className="ri-global-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Accessible Education</h3>
              <p className="text-gray-400 leading-relaxed">
                Quality education should not be a privilege. We strive to make learning materials 
                and techniques available to everyone, regardless of background or circumstances.
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
            <p className="text-xl text-gray-400">Passionate educators and learners driving our mission forward</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20confident%20educator%20and%20researcher%2C%20warm%20smile%2C%20modern%20business%20attire%2C%20purple%20background%2C%20inspirational%20and%20approachable%20appearance%2C%20high%20quality%20headshot%2C%20educational%20leadership%20style&width=400&height=400&seq=founder-1&orientation=squarish"
                  alt="Dr. Sarah Chen - Founder"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-top rounded-full"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Dr. Sarah Chen</h3>
              <p className="text-[#8E44AD] mb-4">Founder & Educational Director</p>
              <p className="text-gray-400 leading-relaxed">
                Former physics professor with 15 years of experience in making complex scientific concepts accessible to students worldwide.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl relative">
                <Image 
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20creative%20content%20director%2C%20friendly%20expression%2C%20modern%20casual%20professional%20attire%2C%20purple%20background%2C%20innovative%20and%20approachable%20style%2C%20high%20quality%20headshot%2C%20creative%20professional%20appearance&width=400&height=400&seq=founder-2&orientation=squarish"
                  alt="Michael Rodriguez - Content Director"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Michael Rodriguez</h3>
              <p className="text-[#8E44AD] mb-4">Content Director</p>
              <p className="text-gray-400 leading-relaxed">
                Award-winning educational content creator specializing in transforming traditional learning materials into engaging, accessible formats.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl relative">
                <Image
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20technology%20expert%20and%20developer%2C%20confident%20smile%2C%20modern%20tech%20professional%20attire%2C%20purple%20background%2C%20innovative%20and%20tech-savvy%20appearance%2C%20high%20quality%20headshot%2C%20technical%20leadership%20style&width=400&height=400&seq=founder-3&orientation=squarish"
                  alt="Emily Watson - Technology Lead"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Emily Watson</h3>
              <p className="text-[#8E44AD] mb-4">Technology Lead</p>
              <p className="text-gray-400 leading-relaxed">
                Full-stack developer and UX designer passionate about creating intuitive platforms that enhance the learning experience.
              </p>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl relative">
                <Image 
                  src="https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20a%20community%20manager%20and%20social%20media%20expert%2C%20warm%20engaging%20smile%2C%20modern%20professional%20attire%2C%20purple%20background%2C%20friendly%20and%20approachable%20appearance%2C%20high%20quality%20headshot%2C%20community%20leadership%20style&width=400&height=400&seq=founder-4&orientation=squarish"
                  alt="David Park - Community Manager"
                  fill
                  unoptimized
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">David Park</h3>
              <p className="text-[#8E44AD] mb-4">Community Manager</p>
              <p className="text-gray-400 leading-relaxed">
                Experienced community builder who connects learners worldwide and fosters collaborative learning environments across all our platforms.
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
            <p className="text-xl text-gray-400">How we started and where we&rsquo;re heading</p>
          </div>
          
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2020</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">The Spark</h3>
                <p className="text-gray-400 leading-relaxed">
                  Dr. Sarah Chen noticed her students struggling with complex physics concepts. Inspired by Richard Feynman&rsquo;s teaching philosophy, 
                  she began experimenting with simplified explanations and peer teaching methods.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2021</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">First Success</h3>
                <p className="text-gray-400 leading-relaxed">
                  The pilot program showed remarkable results - students who taught others scored 40% higher on comprehension tests. 
                  This validated the power of the Feynman Technique in modern education.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2022</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Going Digital</h3>
                <p className="text-gray-400 leading-relaxed">
                  With the help of Michael and Emily, we launched our first digital platform, making the Feynman Technique 
                  accessible to learners worldwide through online courses and interactive content.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2023</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community Growth</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our community grew to over 50,000 active learners across 80 countries. We published our first book series 
                  and launched social media channels to reach even more people.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">2024</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expanding Horizons</h3>
                <p className="text-gray-400 leading-relaxed">
                  Today, we continue to innovate with new interactive features, partnerships with educational institutions, 
                  and expanded content covering diverse subjects from science to humanities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8E44AD] to-[#A569BD]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of a community that&rsquo;s transforming education through the power of simple explanations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/books" className="bg-white text-[#8E44AD] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
              Explore Our Books
            </Link>
            <Link href="/social" className="border-2 border-white text-white hover:bg-white hover:text-[#8E44AD] px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">
              Connect With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D0D0D] py-12 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#8E44AD] font-sans">
                Feynman Project
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering learners worldwide through the proven Feynman Technique of understanding by teaching.
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
                <a href="#" className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer">
                  <i className="ri-instagram-line text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer">
                  <i className="ri-tiktok-line text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-[#8E44AD] rounded-full flex items-center justify-center hover:bg-[#7D3C98] transition-colors duration-300 cursor-pointer">
                  <i className="ri-youtube-line text-white"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Feynman Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
