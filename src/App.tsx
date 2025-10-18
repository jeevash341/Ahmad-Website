import { useState, useEffect } from 'react';
import { Moon, Sun, Phone, Mail, MessageCircle, Clock, Shield, ThumbsUp, DollarSign, Users, Play, TrendingUp, Wrench, Star } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const services = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "YouTube Watch Time",
      description: "Get high-quality watch time to meet YouTube Partner Program requirements quickly and safely.",
      color: "from-red-500 to-pink-500",
      whatsappMessage: "Hi, I want to order YouTube Watch Time service"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Monetization Help",
      description: "Expert guidance to monetize your YouTube channel and maximize your earnings potential.",
      color: "from-green-500 to-emerald-500",
      whatsappMessage: "Hi, I want to order Monetization Help service"
    },
    {
      icon: <Play className="w-12 h-12" />,
      title: "Sakura Master",
      description: "Advanced tools and strategies to boost your content visibility and engagement rates.",
      color: "from-blue-500 to-cyan-500",
      whatsappMessage: "Hi, I want to order Sakura Master service"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Technical Support",
      description: "24/7 technical assistance for all your channel and social media related queries.",
      color: "from-teal-500 to-green-500",
      whatsappMessage: "Hi, I want to order Technical Support service"
    }
  ];

  const whyChooseUs = [
    { icon: <Clock className="w-8 h-8" />, title: "Fast Service", description: "Quick delivery guaranteed" },
    { icon: <MessageCircle className="w-8 h-8" />, title: "24/7 Support", description: "Always here to help" },
    { icon: <ThumbsUp className="w-8 h-8" />, title: "100% Satisfaction", description: "Quality results assured" },
    { icon: <DollarSign className="w-8 h-8" />, title: "Affordable Pricing", description: "Best rates in market" },
    { icon: <Users className="w-8 h-8" />, title: "Professional Team", description: "Expert specialists" }
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "YouTuber",
      content: "Ahmad's services helped me get monetized in just 2 weeks! Absolutely incredible results and professional service.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
    },
    {
      name: "Mohammed Ali",
      role: "Content Creator",
      content: "Best social media growth service I've ever used. My Instagram and YouTube both grew exponentially!",
      rating: 4,
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
    },
    {
      name: "Fatima Khan",
      role: "Business Owner",
      content: "The technical support is amazing! They solved all my issues quickly. Highly recommend to everyone!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Dark/Light Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-900 text-white'
        }`}
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923267420761"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-bounce"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Hero Section */}
      <section className={`relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-600 to-cyan-500'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className={`container mx-auto px-6 py-24 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <img
                src="/IMG-20251018-WA0171.jpg"
                alt="Car"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ahmad Web Master & Social Media All Service Provider
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Grow your YouTube and social media faster with expert services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/923267420761?text=Hi, I want to order a service"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Order Now
              </a>
              <a
                href="https://wa.me/923267420761"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-current text-gray-50 dark:text-gray-900">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Professional solutions for all your digital growth needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-xl hover:shadow-2xl`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Your success is our priority
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-900' : 'bg-gray-50'
                }`}
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              We're here to help you grow your digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className={`flex items-center gap-4 p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <a href="tel:03267420761" className="text-blue-500 hover:underline">03267420761</a>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <div className="p-3 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">WhatsApp</p>
                  <a href="https://wa.me/923267420761" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
                    Chat with us
                  </a>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <div className="p-3 rounded-full bg-gradient-to-br from-red-500 to-pink-500 text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Email Support</p>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Available 24/7</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full p-4 rounded-lg border-2 transition-colors ${
                  darkMode
                    ? 'bg-gray-900 border-gray-700 focus:border-blue-500'
                    : 'bg-white border-gray-200 focus:border-blue-500'
                } outline-none`}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full p-4 rounded-lg border-2 transition-colors ${
                  darkMode
                    ? 'bg-gray-900 border-gray-700 focus:border-blue-500'
                    : 'bg-white border-gray-200 focus:border-blue-500'
                } outline-none`}
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className={`w-full p-4 rounded-lg border-2 transition-colors ${
                  darkMode
                    ? 'bg-gray-900 border-gray-700 focus:border-blue-500'
                    : 'bg-white border-gray-200 focus:border-blue-500'
                } outline-none`}
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className={`w-full p-4 rounded-lg border-2 transition-colors ${
                  darkMode
                    ? 'bg-gray-900 border-gray-700 focus:border-blue-500'
                    : 'bg-white border-gray-200 focus:border-blue-500'
                } outline-none`}
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold mb-2">Ahmad Web Master & Social Media All Service Provider</p>
          <p className="text-gray-400">Your trusted partner for digital growth</p>
          <p className="text-gray-500 mt-4 text-sm">© 2025 All rights reserved</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
