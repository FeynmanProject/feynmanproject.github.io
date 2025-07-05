
'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Books() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const books = [
    {
      id: 1,
      title: "The Art of Simple Explanations",
      author: "Dr. Sarah Chen",
      description: "Master the fundamentals of breaking down complex concepts into understandable pieces. This comprehensive guide teaches you how to identify the core elements of any subject and present them clearly.",
      price: "$24.99",
      image: "https://readdy.ai/api/search-image?query=Modern%20book%20cover%20design%20with%20elegant%20typography%20and%20abstract%20geometric%20patterns%20in%20purple%20and%20white%2C%20educational%20theme%2C%20simple%20and%20clean%20design%2C%20professional%20academic%20style%2C%20knowledge%20and%20learning%20symbols&width=400&height=600&seq=book-1&orientation=portrait",
      category: "Education",
      buyLink: "https://forms.google.com/feynman-book-purchase-1"
    },
    {
      id: 2,
      title: "Physics Made Simple",
      author: "Dr. Sarah Chen & Michael Rodriguez",
      description: "Transform your understanding of physics through clear analogies and step-by-step explanations. From quantum mechanics to relativity, complex concepts become accessible.",
      price: "$29.99",
      image: "https://readdy.ai/api/search-image?query=Scientific%20book%20cover%20with%20physics%20formulas%20and%20atomic%20structures%20in%20purple%20gradient%20background%2C%20modern%20educational%20design%2C%20clean%20typography%2C%20science%20and%20learning%20theme%2C%20professional%20academic%20appearance&width=400&height=600&seq=book-2&orientation=portrait",
      category: "Science",
      buyLink: "https://forms.google.com/feynman-book-purchase-2"
    },
    {
      id: 3,
      title: "Teaching to Learn",
      author: "Emily Watson",
      description: "Discover how the act of teaching transforms your own understanding. This book explores the psychological and practical aspects of learning through explanation.",
      price: "$22.99",
      image: "https://readdy.ai/api/search-image?query=Educational%20book%20cover%20with%20classroom%20and%20teaching%20symbols%2C%20purple%20and%20white%20color%20scheme%2C%20modern%20minimalist%20design%2C%20learning%20and%20education%20theme%2C%20professional%20typography%2C%20inspirational%20style&width=400&height=600&seq=book-3&orientation=portrait",
      category: "Psychology",
      buyLink: "https://forms.google.com/feynman-book-purchase-3"
    },
    {
      id: 4,
      title: "Mathematics Without Fear",
      author: "Dr. Sarah Chen",
      description: "Overcome math anxiety and build confidence through clear, logical progressions. Learn to see the beauty and patterns in mathematical concepts.",
      price: "$26.99",
      image: "https://readdy.ai/api/search-image?query=Mathematics%20book%20cover%20with%20geometric%20patterns%20and%20mathematical%20symbols%20in%20purple%20theme%2C%20elegant%20design%2C%20educational%20and%20approachable%20style%2C%20clean%20modern%20typography%2C%20academic%20professional%20appearance&width=400&height=600&seq=book-4&orientation=portrait",
      category: "Mathematics",
      buyLink: "https://forms.google.com/feynman-book-purchase-4"
    },
    {
      id: 5,
      title: "The Science of Learning",
      author: "Michael Rodriguez & Emily Watson",
      description: "Explore the cognitive science behind effective learning. Understand how your brain processes information and how to optimize your learning strategies.",
      price: "$28.99",
      image: "https://readdy.ai/api/search-image?query=Neuroscience%20and%20brain%20themed%20book%20cover%20with%20neural%20networks%20and%20cognitive%20symbols%20in%20purple%20gradient%2C%20scientific%20educational%20design%2C%20modern%20professional%20style%2C%20learning%20and%20brain%20science%20theme&width=400&height=600&seq=book-5&orientation=portrait",
      category: "Neuroscience",
      buyLink: "https://forms.google.com/feynman-book-purchase-5"
    },
    {
      id: 6,
      title: "Communication Mastery",
      author: "Dr. Sarah Chen & Team",
      description: "Learn the art of clear communication in any field. Whether presenting ideas, writing reports, or teaching others, master the skills of effective explanation.",
      price: "$25.99",
      image: "https://readdy.ai/api/search-image?query=Communication%20and%20speaking%20themed%20book%20cover%20with%20speech%20bubbles%20and%20connection%20symbols%20in%20purple%20design%2C%20professional%20business%20style%2C%20modern%20clean%20typography%2C%20communication%20skills%20theme&width=400&height=600&seq=book-6&orientation=portrait",
      category: "Communication",
      buyLink: "https://forms.google.com/feynman-book-purchase-6"
    },
    {
      id: 7,
      title: "Critical Thinking Fundamentals",
      author: "David Park",
      description: "Develop essential critical thinking skills to analyze information, solve problems, and make better decisions in academic and professional contexts.",
      price: "$23.99",
      image: "https://readdy.ai/api/search-image?query=Critical%20thinking%20book%20cover%20with%20brain%20and%20lightbulb%20symbols%2C%20purple%20and%20white%20design%2C%20analytical%20and%20logical%20theme%2C%20modern%20educational%20style%2C%20professional%20typography%2C%20thinking%20and%20reasoning%20concepts&width=400&height=600&seq=book-7&orientation=portrait",
      category: "Education",
      buyLink: "https://forms.google.com/feynman-book-purchase-7"
    },
    {
      id: 8,
      title: "Chemistry Simplified",
      author: "Dr. Sarah Chen & Michael Rodriguez",
      description: "Demystify chemistry through visual explanations and practical examples. From basic atoms to complex reactions, understand the building blocks of matter.",
      price: "$27.99",
      image: "https://readdy.ai/api/search-image?query=Chemistry%20book%20cover%20with%20molecular%20structures%20and%20periodic%20table%20elements%20in%20purple%20theme%2C%20scientific%20educational%20design%2C%20clean%20modern%20typography%2C%20chemistry%20and%20laboratory%20style%2C%20professional%20academic%20appearance&width=400&height=600&seq=book-8&orientation=portrait",
      category: "Science",
      buyLink: "https://forms.google.com/feynman-book-purchase-8"
    },
    {
      id: 9,
      title: "Memory and Learning",
      author: "Emily Watson & David Park",
      description: "Unlock the secrets of effective memory techniques and learning strategies based on cognitive science research and practical application.",
      price: "$24.99",
      image: "https://readdy.ai/api/search-image?query=Memory%20and%20brain%20function%20book%20cover%20with%20neural%20pathways%20and%20memory%20symbols%20in%20purple%20gradient%2C%20neuroscience%20theme%2C%20modern%20educational%20design%2C%20professional%20typography%2C%20learning%20and%20memory%20concepts&width=400&height=600&seq=book-9&orientation=portrait",
      category: "Neuroscience",
      buyLink: "https://forms.google.com/feynman-book-purchase-9"
    }
  ];
  
  const uniqueCategories = ["All", ...Array.from(new Set(books.map(book => book.category)))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  
    interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    price: string;
    image: string;
    category: string;
    buyLink?: string;
  }
  
  const filteredBooks = selectedCategory === "All" 
    ? books 
    : books.filter(book => book.category === selectedCategory);
  
  const BookCard = ({ book }: { book: Book }) => (
    <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="aspect-[3/4] overflow-hidden relative">
        <Image
          src={book.image}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-[#8E44AD] font-semibold mb-2">{book.category}</div>
        <h3 className="text-xl font-bold mb-2">{book.title}</h3>
        <p className="text-gray-400 text-sm mb-3">by {book.author}</p>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{book.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[#8E44AD]">{book.price}</span>
          <a
            href={book.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#8E44AD] hover:bg-[#7D3C98] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );

  
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
      <section className="relative py-20 bg-gradient-to-br from-[#0D0D0D] via-[#1A0D1A] to-[#0D0D0D]">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Library%20of%20floating%20books%20in%20space%20with%20purple%20magical%20lighting%2C%20knowledge%20and%20wisdom%20atmosphere%2C%20educational%20fantasy%20style%2C%20books%20opening%20and%20releasing%20glowing%20particles%2C%20dark%20background%20with%20purple%20accents&width=1920&height=800&seq=books-hero&orientation=landscape')] bg-cover bg-center opacity-15"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-[#8E44AD] bg-clip-text text-transparent">
            Our Book Collection
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            Carefully crafted books that embody the Feynman philosophy of clear, simple explanations
          </p>
          <div className="bg-[#8E44AD]/10 border border-[#8E44AD]/30 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-gray-300">
              Each book is designed to help you master complex subjects through the power of simple explanations and teaching-to-learn techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {uniqueCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#8E44AD] text-white'
                    : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#8E44AD]/20 hover:text-[#8E44AD]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Books?</h2>
            <p className="text-xl text-gray-400">What makes our publications special</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Clear Explanations</h3>
              <p className="text-gray-400 leading-relaxed">
                Every concept is broken down into digestible pieces using analogies, examples, and step-by-step reasoning that anyone can follow.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Practical Application</h3>
              <p className="text-gray-400 leading-relaxed">
                Each book includes exercises and real-world applications to help you practice the Feynman Technique and solidify your understanding.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8E44AD] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-award-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Authors</h3>
              <p className="text-gray-400 leading-relaxed">
                Written by experienced educators and researchers who have mastered the art of making complex subjects accessible to all learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D0D0D] to-[#1A0D1A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Readers Say</h2>
            <p className="text-xl text-gray-400">Testimonials from our community</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2A2A2A] p-6 rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#8E44AD] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jessica Davis</h4>
                  <p className="text-gray-400 text-sm">Engineering Student</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Physics Made Simple completely changed how I understand complex concepts. The analogies and explanations are brilliant!&quot;
              </p>
              <div className="flex text-[#8E44AD] mt-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
            
            <div className="bg-[#2A2A2A] p-6 rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#8E44AD] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MR</span>
                </div>
                <div>
                  <h4 className="font-semibold">Marcus Roberts</h4>
                  <p className="text-gray-400 text-sm">High School Teacher</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Teaching to Learn transformed my classroom. My students are more engaged and understand concepts much deeper now.&quot;
              </p>
              <div className="flex text-[#8E44AD] mt-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
            
            <div className="bg-[#2A2A2A] p-6 rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#8E44AD] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AL</span>
                </div>
                <div>
                  <h4 className="font-semibold">Anna Liu</h4>
                  <p className="text-gray-400 text-sm">Graduate Student</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                &quot;Mathematics Without Fear helped me overcome my math anxiety. I actually understand and enjoy math now!&quot;
              </p>
              <div className="flex text-[#8E44AD] mt-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8E44AD] to-[#A569BD]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Learning Journey</h2>
          <p className="text-xl mb-8 opacity-90">
            Transform how you understand and explain complex concepts with our carefully crafted books.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://forms.google.com/feynman-book-purchase" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#8E44AD] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Purchase Books
            </a>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-[#8E44AD] px-8 py-4 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap">
              Learn More
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
            <p className="text-gray-400">© 2024 Feynman Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
