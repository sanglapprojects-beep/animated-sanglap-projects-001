import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Linkedin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15 * i } })
};

export default function SanglapProjects() {
  return (
    <div className="font-sans text-slate-800">
      <Head>
        <title>SANGLAP PROJECTS – First & Last Mile Logistics, Kolkata</title>
        <meta name="description" content="Sanglap Projects – Reliable first-mile & last-mile logistics partner in Kolkata. DTDC & Trackon service coverage. Careers and vendor partnerships." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Sanglap Projects" width={36} height={36} priority />
            <span className="font-extrabold tracking-wide text-blue-700">SANGLAP PROJECTS</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#coverage" className="hover:text-blue-700">Coverage</a>
            <a href="#clients" className="hover:text-blue-700">Clients</a>
            <a href="#why" className="hover:text-blue-700">Why Us</a>
            <a href="#careers" className="hover:text-blue-700">Careers</a>
            <a href="#partner" className="hover:text-blue-700">Partner</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>
          <a href="#contact" className="hidden md:inline-flex px-3 py-2 rounded-xl bg-blue-700 text-white font-bold shadow">Work With Us</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-50 to-white py-24 text-center">
        <motion.h1 initial="hidden" whileInView="visible" variants={fadeUp} className="text-4xl md:text-6xl font-extrabold text-blue-700">
          Delivering Results, Exceeding Expectations
        </motion.h1>
        <motion.p initial="hidden" whileInView="visible" variants={fadeUp} className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          First & Last Mile Logistics Partner in Kolkata. Trusted by DTDC and Trackon.
        </motion.p>
      </section>

      {/* PARTNER WITH US */}
      <section id="partner" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold text-blue-700">Partner With Us</h2>
            <p className="mt-3 text-slate-700">We welcome partnerships with SCV owners, vendors, and logistic collaborators. Join us to expand reliable services across Kolkata.</p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p>&copy; {new Date().getFullYear()} Sanglap Projects. All Rights Reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="https://www.facebook.com/sanglapprojects"><Facebook /></a>
            <a href="https://www.linkedin.com/company/sanglapprojects"><Linkedin /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
