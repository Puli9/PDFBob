import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-black py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-black">Privacy Policy</a>
          <a href="#" className="text-black">Terms of Service</a>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.facebook.com/" className="text-black">
            <Facebook size={24} />
          </a>
          <a href="https://www.linkedin.com/" className="text-black">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/" className="text-black">
            <Instagram size={24} />
          </a>
        </div>
        <div>
          <p className="text-black">Contact us: info@pdfbob.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
