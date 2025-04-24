import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#606E7B] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Social */}
        <div className="space-y-4">
          <p className="text-gray-300">Follow us! We're friendly:</p>
          <div className="flex space-x-4 text-xl text-white">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaTiktok />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Discover */}
        <div>
          <h4 className="text-gray-300 mb-4">Discover</h4>
          <ul className="space-y-2 font-semibold">
            <li>Become a Tasker</li>
            <li>Services By City</li>
            <li>Services Nearby</li>
            <li>All Services</li>
            <li>Elite Taskers</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-gray-300 mb-4">Company</h4>
          <ul className="space-y-2 font-semibold">
            <li>About Us</li>
            <li>Careers</li>
            <li>Partner with Taskrabbit</li>
            <li>Press</li>
            <li>Taskrabbit for Good</li>
            <li>Blog</li>
            <li>Terms & Privacy</li>
            <li>California Consumer Notice</li>
          </ul>
        </div>

        {/* App Store */}
        <div>
          <h4 className="text-gray-300 mb-2">Download our app</h4>
          <p className="text-gray-200 mb-4">
            Tackle your to-do list wherever you are with our mobile app.
          </p>
          <div className="space-y-3">
            <Image
              src="/download-ios.6f846953.svg"
              alt="Download on the App Store"
              width={160}
              height={48}
            />
            <Image
              src="/google-play.e0aec133.svg"
              alt="Get it on Google Play"
              width={160}
              height={48}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
