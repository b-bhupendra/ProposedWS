import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Phone, Calendar, Shield, Activity, Star, X } from 'lucide-react';
import { Button } from '@/src/components/ui/button';

export default function Landing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(false);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Dental Villa</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Testimonials</a>
              <a href="#about" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">About Us</a>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost" className="px-2 sm:px-4 text-sm">Staff Login</Button>
              </Link>
              <Button className="rounded-full px-4 sm:px-6 text-sm" onClick={() => setIsModalOpen(true)}>
                <span className="hidden sm:inline">Book Appointment</span>
                <span className="sm:hidden">Book</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                Accepting New Patients
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Dental Villa <br/>
                <span className="text-emerald-600">& Implant Centre</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Led by Dr. Anju Rana (BDS, MDS, MISP, MIDA). Experience world-class dental care in a relaxing environment. Our expert team uses the latest technology to ensure your smile is healthy and bright.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full text-base h-14 px-8" onClick={() => setIsModalOpen(true)}>
                  Book Your Visit <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8">
                  <Phone className="mr-2 w-5 h-5" /> 7428510393
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-medium">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/seed/face${i}/100/100`} alt="Patient" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div>
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-slate-900 font-semibold">4.9/5</span> from over 2,000 reviews
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto"
            >
              <div className="absolute inset-0 bg-emerald-100 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
              <img 
                src="https://picsum.photos/seed/dentist/800/1000" 
                alt="Dentist working" 
                className="rounded-[3rem] object-cover w-full max-w-md mx-auto shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Next Available</p>
                    <p className="text-slate-900 font-bold">Tomorrow, 10:00 AM</p>
                  </div>
                </div>
                <Button className="w-full" variant="secondary" onClick={() => setIsModalOpen(true)}>Reserve Time</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Dental Care</h2>
            <p className="text-slate-600">From routine cleanings to complex procedures, we offer a full range of services to keep your smile healthy.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Preventive Care', desc: 'Regular checkups and cleanings to maintain optimal oral health.', icon: Shield },
              { title: 'Cosmetic Dentistry', desc: 'Teeth whitening, veneers, and smile makeovers for a confident look.', icon: Star },
              { title: 'Restorative Care', desc: 'Fillings, crowns, and implants to restore function and aesthetics.', icon: Activity },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-6">{feature.desc}</p>
                <a href="#" className="text-emerald-600 font-medium flex items-center hover:text-emerald-700">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Dr. Anju Rana</h2>
              <div className="space-y-4 text-slate-600 text-lg">
                <p>
                  <strong>BDS, MDS, MISP, MIDA</strong>
                </p>
                <p>
                  Ex - Dental Surgeon ECHS Services
                </p>
                <p>
                  Ex - Senior Resident Maulana Azad Institute of Dental Sciences, New Delhi
                </p>
                <p>
                  Successfully Organized The Conference "perio adhayan 2014"
                </p>
              </div>
              <div className="mt-8 space-y-2 text-slate-600">
                <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-emerald-600" /> 011-49029101 ; 7428510393</p>
                <p className="flex items-center gap-2"><span className="w-5 h-5 flex items-center justify-center text-emerald-600 font-bold">@</span> dentalvillaimplantcentre@gmail.com</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/seed/smiling-people/600/600" 
                alt="Happy patients smiling" 
                className="rounded-2xl aspect-square object-cover shadow-md"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://picsum.photos/seed/happy-patient/600/600" 
                alt="Patient with a bright smile" 
                className="rounded-2xl aspect-square object-cover shadow-md"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://picsum.photos/seed/group-smiling/1200/600" 
                alt="Group of people smiling" 
                className="rounded-2xl aspect-[2/1] col-span-2 object-cover shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-emerald-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a brighter smile?</h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of happy patients who trust us with their dental care. Book your first appointment today and get a complimentary consultation.
          </p>
          <Button size="lg" className="bg-white text-emerald-900 hover:bg-slate-100 rounded-full h-14 px-10 text-lg font-semibold" onClick={() => setIsModalOpen(true)}>
            Schedule Appointment
          </Button>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-900">Book Appointment</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleBookingSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input required type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Contact Number</label>
                  <input required type="tel" className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address (Optional)</label>
                  <input type="email" className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="john@example.com" />
                </div>
                <div className="pt-2">
                  <Button type="submit" className="w-full">Confirm Booking</Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
