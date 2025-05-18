'use client';
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-[#2F3A46] text-white px-6 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        
        {/* Social & Brand */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <Image src="/logo-white.svg" alt="Company Logo" width={140} height={40} />
          <p className="text-gray-300">Follow us! We’re friendly:</p>
          <div className="flex space-x-4 text-2xl">
            {[FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaLinkedinIn].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  className="hover:text-primary transition-all duration-200"
                  href="#"
                  aria-label="Social icon"
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>
        </motion.div>

        {/* Discover */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Discover</h4>
          <ul className="space-y-3 text-gray-300">
            {[
              "Become a Tasker",
              "Services By City",
              "Services Nearby",
              "All Services",
              "Elite Taskers",
              "Help",
            ].map((item, i) => (
              <motion.li whileHover={{ x: 5 }} key={i}>
                <a href="#" className="hover:underline">{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-gray-300">
            {[
              "About Us",
              "Careers",
              "Partner with Taskrabbit",
              "Press",
              "Taskrabbit for Good",
              "Blog",
              "Terms & Privacy",
              "California Consumer Notice",
            ].map((item, i) => (
              <motion.li whileHover={{ x: 5 }} key={i}>
                <a href="#" className="hover:underline">{item}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* App Download Section */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4">Get the App</h4>
          <p className="text-gray-300 mb-4">
            Manage tasks anywhere with our mobile app.
          </p>
          <div className="space-y-3">
            <a href="#">
              <Image
                src="/download-ios.6f846953.svg"
                alt="Download on the App Store"
                width={160}
                height={48}
              />
            </a>
            <a href="#">
              <Image
                src="/google-play.e0aec133.svg"
                alt="Get it on Google Play"
                width={160}
                height={48}
              />
            </a>
          </div>
          {/* Floating Infographic Animation */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mt-6"
          >
            <Image
              src="/featureimage.jpeg"
              alt="App Features"
              width={240}
              height={140}
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Base */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Taskrabbit. All rights reserved.
      </div>
    </footer>
  );
}
