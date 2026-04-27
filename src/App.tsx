/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Calendar, 
  Car, 
  Users, 
  Award,
  ChevronRight,
  Instagram,
  Facebook,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Our Fleet', href: '#fleet' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  {
    title: 'Weddings',
    description: 'Arrive in elegance on your special day. Our white Chrysler and Hummer limos are the perfect wedding companions.',
    icon: <Users className="w-6 h-6" />,
    image: '../assets/weddings.jpg'
  },
  {
    title: 'School Balls',
    description: 'The ultimate party on wheels for your school ball. Premium sound systems and lighting to start the night right.',
    icon: <Star className="w-6 h-6" />,
    image: '../assets/school_balls.jpg'
  },
  {
    title: 'Airport Transfers',
    description: 'Stress-free, luxurious transport to and from Perth Airport. Punctual and professional service every time.',
    icon: <Calendar className="w-6 h-6" />,
    image: '../assets/airport_transfers.jpg'
  },
  {
    title: 'Corporate Events',
    description: 'Impress clients and transport your team in executive comfort. Discrete and reliable service for business.',
    icon: <Award className="w-6 h-6" />,
    image: '../assets/corporate.jpg'
  }
];

const fleet = [
  {
    name: 'Holden Caprice',
    capacity: '14-16 Passengers',
    features: ['Entertainment System', 'Mini Bar', 'Mood Lighting', 'Privacy Divider'],
    image: '../assets/holden_caprice.jpg'
  },
  {
    name: 'Holden Statesman',
    capacity: '10-12 Passengers',
    features: ['Classic Pearl Finish', 'Leather Interior', 'State-of-the-Art Sound'],
    image: '../assets/holden_statesman.webp'
  }
];

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', date: '', message: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you shortly.');
  };

  return (
    <div className="min-h-screen font-sans bg-[#050505] text-white selection:bg-amber-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-500 rounded-sm flex items-center justify-center font-bold text-black text-lg md:text-xl">L</div>
            <div className="leading-none">
              <span className="block text-sm md:text-lg font-bold tracking-tighter uppercase">L.T.D Limousines</span>
              <span className="text-[8px] md:text-[9px] text-amber-500 tracking-[0.2em] uppercase font-bold">Perth Chauffeur Service</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[10px] font-bold tracking-widest uppercase text-white/50 hover:text-amber-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#contact"
              className="hidden sm:block px-4 md:px-6 py-2 border border-amber-500/50 text-amber-500 text-[10px] font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all"
            >
              Get a Quote
            </a>
            <button 
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black border-b border-white/10 px-6 py-8 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xs font-bold tracking-[0.3em] uppercase text-white hover:text-amber-500 transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-25 md:py-25">
        <div className="absolute inset-0">
          <img 
            src="../assets/hero.jpg" 
            className="w-full h-full object-cover brightness-[0.2] grayscale"
            alt="Luxury Limousine Perth"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col items-center lg:items-start gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold"
            >
              Perth's Premium Transport
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[1] max-w-4xl"
            >
              Exclusive <span className="text-amber-500">Limousines</span> <br /> 
              <span className="font-light italic serif tracking-tight">Perth Hire.</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base md:text-xl max-w-2xl font-light leading-relaxed"
          >
            Experience the pinnacle of luxury with L.T.D Limousines. We specialize in <span className="text-white">limousine rent Perth</span> for weddings, corporate events, and airport transfers. Trusted, modern, and reliable service.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-8 items-center w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a href="#services" className="px-10 py-5 bg-amber-500 text-black font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 group transition-all">
                Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+618" className="px-10 py-5 border border-white/20 text-white font-bold uppercase text-[10px] tracking-widest hover:bg-white/5 transition-all text-center">
                Call: 0412 511 638
              </a>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-2xl font-black text-white leading-none">15+</span>
                <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mt-1">Years</span>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-2xl font-black text-white leading-none">5.0</span>
                <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mt-1">Google</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-[#080808] py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-gray-500 uppercase tracking-[0.2em] text-[10px] font-bold">
            <div className="flex flex-col items-center gap-4 group">
              <Car className="w-10 h-10 text-white/10 group-hover:text-amber-500/50 transition-colors" />
              <span>Modern Fleet</span>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <Users className="w-10 h-10 text-white/10 group-hover:text-amber-500/50 transition-colors" />
              <span>Pro Chauffeurs</span>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <Calendar className="w-10 h-10 text-white/10 group-hover:text-amber-500/50 transition-colors" />
              <span>Easy Booking</span>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <Award className="w-10 h-10 text-white/10 group-hover:text-amber-500/50 transition-colors" />
              <span>5-Star Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#050505] py-32 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.span 
              whileInView={{ opacity: 1, y: 0 }} 
              initial={{ opacity: 0, y: 20 }}
              className="text-xs uppercase tracking-[0.4em] font-bold text-amber-500 mb-4 block"
            >
              Premium Experience
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1]">
              Elite <span className="serif italic font-light tracking-tight">Services.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden h-[500px] border border-white/10"
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-[0.4] grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                
                <div className="relative h-full flex flex-col justify-end p-12">
                  <div className="mb-6 bg-amber-500/10 w-fit p-4 rounded-sm border border-amber-500/20 text-amber-500">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black tracking-tight mb-3 uppercase group-hover:text-amber-500 transition-colors">{service.title}</h3>
                  <p className="text-gray-400 mb-8 max-w-sm font-light text-base leading-relaxed">
                    {service.description}
                  </p>
                  <a href="#contact" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:gap-4 transition-all text-amber-500">
                    Enquire Now <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="bg-[#080808] py-32 text-white border-bottom border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-amber-500 mb-4 block">The Collection</span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1]">
                Luxury <span className="serif italic font-light tracking-tight">Fleet.</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-md text-sm leading-relaxed border-l-2 border-amber-500/30 pl-6">
              Our vehicles are meticulously maintained and featured with the latest amenities to ensure your comfort and prestige.
            </p>
          </div>

          <div className="space-y-32">
            {fleet.map((car, index) => (
              <motion.div 
                key={car.name}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-3/5 overflow-hidden relative group">
                  <img src={car.image} alt={car.name} className="w-full aspect-video object-cover border border-white/10 grayscale-0 group-hover:scale-105 transition-transform duration-1000" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-amber-500/30 transition-all" />
                </div>
                <div className="w-full lg:w-2/5 space-y-8">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-500">Premium Choice</span>
                    <h3 className="text-5xl font-black tracking-tighter">{car.name}</h3>
                  </div>
                  <div className="flex items-center gap-3 text-white font-medium text-sm">
                    <Users className="w-5 h-5 text-amber-500" /> 
                    <span className="tracking-widest uppercase">Capacity: {car.capacity}</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pb-4">
                    {car.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                        <div className="w-1 h-1 bg-amber-500 rounded-full" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-5 border border-amber-500/30 uppercase text-xs font-bold tracking-widest text-amber-500 hover:bg-amber-500 hover:text-black transition-all">
                    Inquire About This Model
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Gallery Section */}
      <section id="gallery" className="bg-[#050505] py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-2 font-bold">Customer Moments</h2>
              <p className="text-4xl md:text-6xl font-black tracking-tight">TRUSTED BY <span className="serif italic font-light tracking-tight text-amber-500">Perth.</span></p>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-amber-500 flex items-center gap-2">
              <span>#LTDLIMOUSINES</span>
              <div className="w-12 h-px bg-amber-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                className="aspect-square bg-zinc-900 overflow-hidden border border-white/5 relative group"
              >
                <img 
                  src={`../assets/cust${i}.jpg`} 
                  alt={`LTD Limousines Perth Customer Moment ${i}`}
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 cursor-pointer transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-inset border-amber-500/0 group-hover:border-4 group-hover:border-amber-500/10 transition-all pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#080808] py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-[0.4em] font-bold text-amber-500 mb-4 block">Get In Touch</span>
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1] text-white">
                  Book Your <br /><span className="serif italic font-light tracking-tight text-amber-500 underline decoration-amber-500/20">Limo Hire.</span>
                </h2>
              </div>
              
              <div className="space-y-10">
                <div className="flex gap-8 items-start group">
                  <div className="bg-white/5 p-5 rounded-full border border-white/10 group-hover:border-amber-500/50 group-hover:bg-amber-500/5 transition-all">
                    <Phone className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-black mb-1">Direct Line</p>
                    <a href="tel:+618" className="text-2xl font-bold hover:text-amber-500 transition-colors">0412 511 638</a>
                  </div>
                </div>
                
                <div className="flex gap-8 items-start group">
                  <div className="bg-white/5 p-5 rounded-full border border-white/10 group-hover:border-amber-500/50 group-hover:bg-amber-500/5 transition-all">
                    <Mail className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-black mb-1">Email Inquiry</p>
                    <a href="mailto:info@ltdlimos.com.au" className="text-2xl font-bold hover:text-amber-500 transition-colors">info@ltdlimos.com.au</a>
                  </div>
                </div>

                <div className="flex gap-8 items-start group">
                  <div className="bg-white/5 p-5 rounded-full border border-white/10 group-hover:border-amber-500/50 group-hover:bg-amber-500/5 transition-all">
                    <MapPin className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-black mb-1">Service Areas</p>
                    <p className="text-2xl font-bold text-white/90">Perth & Surrounds</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <a href="https://web.facebook.com/LTDLimousines/" className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-amber-500/50 transition-all text-white/40 hover:text-amber-500 bg-white/5"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-12 h-12 flex items-center justify-center border border-white/10 hover:border-amber-500/50 transition-all text-white/40 hover:text-amber-500 bg-white/5"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>

            <div className="bg-[#0c0c0c] p-12 border border-white/10 relative group">
              <div className="absolute inset-0 border border-amber-500/0 group-hover:border-amber-500/10 transition-all pointer-events-none" />
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border-b border-white/10 py-4 px-0 focus:outline-none focus:border-amber-500 transition-all text-sm placeholder:text-white/20"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="email@example.com"
                      className="w-full bg-white/5 border-b border-white/10 py-4 px-0 focus:outline-none focus:border-amber-500 transition-all text-sm placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black">Event Date</label>
                    <input 
                      type="date" 
                      required
                      className="w-full bg-white/5 border-b border-white/10 py-4 px-0 focus:outline-none focus:border-amber-500 transition-all text-sm placeholder:text-white/20"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black">Requirements</label>
                  <textarea 
                    rows={4}
                    placeholder="E.g. Wedding limo for 12 people in Perth..."
                    className="w-full bg-white/5 border-b border-white/10 py-4 px-0 focus:outline-none focus:border-amber-500 transition-all text-sm resize-none placeholder:text-white/20"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-amber-500 text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/10"
                >
                  Send Inquiry Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <footer className="bg-black pt-32 pb-16 text-gray-600 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-amber-500 rounded-sm flex items-center justify-center font-bold text-black text-lg">L</div>
                <span className="text-xl font-black tracking-tighter uppercase">L.T.D Limousines</span>
              </div>
              <p className="text-[11px] font-medium leading-relaxed uppercase tracking-wider text-gray-500">
                Perth's premier luxury transportation provider. Specialising in 5-star limousine rentals for weddings, corporate events and airport transfers.
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="text-white text-xs font-black uppercase tracking-widest">The Fleet</h4>
              <ul className="text-[10px] uppercase tracking-widest font-bold space-y-4">
                <li><a href="#fleet" className="hover:text-amber-500 transition-colors">Hummer Limo Perth</a></li>
                <li><a href="#fleet" className="hover:text-amber-500 transition-colors">Chrysler Limo Perth</a></li>
                <li><a href="#fleet" className="hover:text-amber-500 transition-colors">Stretch Limos</a></li>
                <li><a href="#fleet" className="hover:text-amber-500 transition-colors">Wedding Cars Perth</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-white text-xs font-black uppercase tracking-widest">Premium Services</h4>
              <ul className="text-[10px] uppercase tracking-widest font-bold space-y-4">
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Perth Wedding Limos</a></li>
                <li><a href="#services" className="hover:text-amber-500 transition-colors">School Balls Transport</a></li>
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Airport Transfers</a></li>
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Night Out Limos</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-white text-xs font-black uppercase tracking-widest">Connect</h4>
              <ul className="text-[10px] uppercase tracking-widest font-bold space-y-4">
                <li className="flex items-center gap-2 text-amber-500"><Phone className="w-3 h-3" /> 0412 511 638</li>
                <li className="flex items-center gap-2"><Mail className="w-3 h-3 text-amber-500" /> info@ltdlimos.com.au</li>
                <li className="flex items-center gap-2"><MapPin className="w-3 h-3 text-amber-500" /> Perth, WA</li>
              </ul>
            </div>
          </div>

          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] font-black">
            <p>© {new Date().getFullYear()} L.T.D Limousines Perth. All rights reserved.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors underline decoration-white/10 underline-offset-4">Privacy</a>
              <a href="#" className="hover:text-white transition-colors underline decoration-white/10 underline-offset-4">Terms</a>
            </div>
            <div className="flex gap-4">
              <span>Limousines Perth</span>
              <span>Limo Rent Perth</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
