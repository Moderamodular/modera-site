import React from "react";
import { motion } from "framer-motion";
import { Check, PhoneCall, Mail, MapPin, ArrowRight, ShieldCheck, Sparkles, Hammer, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Tailwind color tokens for Modera brand
// Primary deep green: #0E3B2E, Accent gold: #C5A46D, Off-white: #F7F5F2
// Secondary greens for gradients: #134E3A, #1A5C4A

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6"/>,
    title: "10-Year Hardware Warranty",
    description: "Premium fittings and soft-close systems engineered to last.",
  },
  {
    icon: <Sparkles className="h-6 w-6"/>,
    title: "European-Inspired Aesthetics",
    description: "Sleek lines, rich materials, and timeless palettes.",
  },
  {
    icon: <Hammer className="h-6 w-6"/>,
    title: "Made-to-Measure",
    description: "Every millimetre planned for your lifestyle and workflow.",
  },
  {
    icon: <Leaf className="h-6 w-6"/>,
    title: "Sustainable Materials",
    description: "Low-VOC finishes and responsibly sourced boards.",
  },
];

const services = [
  {
    title: "Modular Kitchens",
    copy: "L-, U-, and island layouts with ergonomic zones, tall units, and integrated appliances.",
  },
  {
    title: "Wardrobes & Storage",
    copy: "Walk-ins and sliding systems with bespoke organisers, mirrors and lighting.",
  },
  {
    title: "Living & TV Units",
    copy: "Floating consoles, paneling, and display walls that blend tech with design.",
  },
  {
    title: "Vanities & Utility",
    copy: "Moisture-safe modules, laundry organisation and concealed plumbing solutions.",
  },
];

const process = [
  {
    step: "01",
    title: "Design Consultation",
    copy: "Tell us how you cook, store, and live. We map your routines to layouts.",
  },
  {
    step: "02",
    title: "3D Visualisation",
    copy: "See finishes, lighting and hardware in photorealistic renders before we build.",
  },
  {
    step: "03",
    title: "Precision Build",
    copy: "Factory-finished modules with QC checkpoints at every stage.",
  },
  {
    step: "04",
    title: "Installation & Handover",
    copy: "Fast, clean installs and a thorough demo—followed by aftercare support.",
  },
];

const gallery = [
  { src: "https://images.unsplash.com/photo-1600585154340-1e8a32905f5c?q=80&w=1600&auto=format&fit=crop", alt: "Warm walnut island kitchen" },
  { src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop", alt: "Matte green kitchen with brass" },
  { src: "https://images.unsplash.com/photo-1616596872192-9ef9b0c2b6ee?q=80&w=1600&auto=format&fit=crop", alt: "Wardrobe with glass shutters" },
  { src: "https://images.unsplash.com/photo-1598300184086-5c6f95f69f13?q=80&w=1600&auto=format&fit=crop", alt: "Vanity with fluted fronts" },
  { src: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop", alt: "TV wall and storage" },
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop", alt: "Minimal handle-less kitchen" },
];

export default function ModeraLanding(){
  return (
    <div className="min-h-screen bg-[#0E3B2E] text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0E3B2E]/70 bg-[#0E3B2E]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#1A5C4A] to-[#134E3A] flex items-center justify-center ring-1 ring-[#C5A46D]/40">
              <span className="text-lg font-semibold tracking-wider" aria-label="Modera logo">M</span>
            </div>
            <div className="leading-tight">
              <p className="font-serif text-xl">Modera Modular</p>
              <p className="text-xs text-white/70 tracking-widest">DESIGN · DEFINE · DWELL</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-[#C5A46D] transition">Services</a>
            <a href="#work" className="hover:text-[#C5A46D] transition">Work</a>
            <a href="#process" className="hover:text-[#C5A46D] transition">Process</a>
            <a href="#why" className="hover:text-[#C5A46D] transition">Why Modera</a>
            <a href="#contact" className="hover:text-[#C5A46D] transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild className="bg-[#C5A46D] text-[#0E3B2E] hover:bg-[#b9955e] font-semibold">
              <a href="#contact" className="flex items-center gap-2">Book a consult <ArrowRight className="h-4 w-4"/></a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#C5A46D]/10 blur-3xl"/>
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#1A5C4A]/20 blur-3xl"/>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.1]">
              Kitchens & furniture that <span className="text-[#C5A46D]">elevate</span> everyday living.
            </h1>
            <p className="mt-6 text-white/80 max-w-xl">
              From precision-built modular kitchens to seamless wardrobes and living systems—crafted in Mumbai for modern Indian homes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="bg-[#C5A46D] text-[#0E3B2E] hover:bg-[#b9955e]">Get a quote</Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="#work">See our work</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2"><Check className="h-5 w-5 text-[#C5A46D]"/>Soft-close as standard</div>
              <div className="flex items-center gap-2"><Check className="h-5 w-5 text-[#C5A46D]"/>Moisture-safe boards</div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.98}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop" alt="Modular kitchen" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E3B2E]/80 via-transparent"/>
              <div className="absolute bottom-4 left-4 right-4">
                <Card className="bg-white/10 backdrop-blur border-white/20">
                  <CardContent className="p-4 text-sm">
                    <p className="font-medium">Signature Verde Collection</p>
                    <p className="text-white/80">Matte fronts · Brass accents · Quartz top</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#0D3629]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="font-serif text-3xl md:text-4xl">What we build</h2>
          <p className="mt-3 text-white/80 max-w-2xl">Function-first designs with a refined, European-inspired look—tailored to Mumbai homes.</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Card key={i} className="bg-white/5 border-white/10 hover:border-[#C5A46D]/50 transition">
                <CardHeader>
                  <CardTitle className="text-[#C5A46D] tracking-wide">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-white/80">{s.copy}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MODERA / FEATURES */}
      <section id="why">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">Built to last. Styled to love.</h2>
              <p className="mt-3 text-white/80 max-w-xl">We blend precision engineering with premium materials—so your spaces look stunning and work flawlessly for years.</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 text-[#C5A46D]">{f.icon}</div>
                    <div>
                      <p className="font-medium">{f.title}</p>
                      <p className="text-white/80 text-sm">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1600&auto=format&fit=crop" alt="Wardrobe and living unit" className="h-full w-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0E3B2E]/70 via-transparent"/>
            </div>
          </div>
        </div>
      </section>

      {/* WORK / GALLERY */}
      <section id="work" className="bg-[#0D3629]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">Selected work</h2>
              <p className="mt-3 text-white/80">A peek into our recent kitchens, wardrobes and living rooms.</p>
            </div>
            <Button variant="outline" className="hidden md:inline-flex border-white/30 text-white hover:bg-white/10">View full portfolio</Button>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((g, i) => (
              <motion.div key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="group relative rounded-2xl overflow-hidden ring-1 ring-white/10">
                <img src={g.src} alt={g.alt} className="h-64 w-full object-cover group-hover:scale-[1.02] transition"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition"/>
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition">
                  <Card className="bg-white/10 backdrop-blur border-white/20">
                    <CardContent className="p-3">
                      <p className="text-sm">{g.alt}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="font-serif text-3xl md:text-4xl">From idea to installation</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Card key={i} className="bg-white/5 border-white/10">
                <CardHeader>
                  <p className="text-[#C5A46D] text-sm tracking-widest">{p.step}</p>
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-white/80">{p.copy}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-gradient-to-r from-[#134E3A] to-[#1A5C4A]">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-white/80">Mumbai · Maharashtra</p>
            <h3 className="font-serif text-2xl md:text-3xl">Planning a new kitchen or wardrobe?</h3>
          </div>
          <div className="flex gap-3">
            <Button className="bg-[#C5A46D] text-[#0E3B2E] hover:bg-[#b9955e]">Schedule a call</Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <a href="#contact">Send floor plan</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl md:text-4xl">Let’s design your space</h2>
            <p className="mt-3 text-white/80">Share a few details and we’ll get back within one business day.</p>

            <div className="mt-8 space-y-3 text-white/90">
              <div className="flex items-center gap-2"><PhoneCall className="h-5 w-5 text-[#C5A46D]"/><span>+91 91729 99911</span></div>
              <div className="flex items-center gap-2"><Mail className="h-5 w-5 text-[#C5A46D]"/><span>moderamodular@gmail.com</span></div>
              <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-[#C5A46D]"/><span>Mumbai, India</span></div>
            </div>
          </div>
          <Card className="md:col-span-3 bg-white text-[#0E3B2E]">
            <CardHeader>
              <CardTitle>Project enquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your full name"/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <Input placeholder="Mobile number"/>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="you@example.com"/>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Project details</label>
                  <Textarea placeholder="Apartment/villa, site location, scope (kitchen/wardrobe/etc.), timeline, budget" rows={5}/>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Button className="bg-[#0E3B2E] text-white hover:bg-[#134E3A] w-full">Submit enquiry</Button>
                </div>
                <p className="md:col-span-2 text-xs text-[#0E3B2E]/70">By submitting, you agree to be contacted via phone or email. We never share your data.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <p className="font-serif text-xl">Modera Modular</p>
            <p className="text-sm text-white/70">Design. Define. Dwell.</p>
            <p className="mt-3 text-white/70 max-w-sm">Sleek, modern, premium modular solutions with a European-inspired aesthetic—crafted for Indian homes.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-white/80 font-medium">Explore</p>
              <ul className="mt-3 space-y-2">
                <li><a href="#services" className="hover:text-[#C5A46D]">Services</a></li>
                <li><a href="#work" className="hover:text-[#C5A46D]">Portfolio</a></li>
                <li><a href="#process" className="hover:text-[#C5A46D]">Process</a></li>
                <li><a href="#contact" className="hover:text-[#C5A46D]">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white/80 font-medium">Policies</p>
              <ul className="mt-3 space-y-2">
                <li><a href="#" className="hover:text-[#C5A46D]">Warranty</a></li>
                <li><a href="#" className="hover:text-[#C5A46D]">Care & maintenance</a></li>
                <li><a href="#" className="hover:text-[#C5A46D]">Terms & privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="text-sm">
            <p className="text-white/80 font-medium">Contact</p>
            <ul className="mt-3 space-y-2 text-white/80">
              <li className="flex items-center gap-2"><PhoneCall className="h-4 w-4 text-[#C5A46D]"/>+91 91729 99911</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#C5A46D]"/>moderamodular@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#C5A46D]"/>Mumbai, India</li>
            </ul>
            <p className="mt-4 text-white/60">© {new Date().getFullYear()} Modera Modular. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
