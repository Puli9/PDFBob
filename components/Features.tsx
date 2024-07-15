import { Merge, Scissors, CircleMinus, RotateCcw, Stamp, AlignJustify, Lock, Shield } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'Merge PDFs',
    description: 'Combine multiple PDF files into one.',
    icon: <Merge size={24} color="#FF80AB" style={{ marginRight: '10px' }} />,
    link: '/merge-pdfs',
  },
  {
    id: 2,
    title: 'Split PDFs',
    description: 'Divide a single PDF into multiple files.',
    icon: <Scissors size={24} color="#FF80AB" style={{ marginRight: '10px' }} />,
    link: '/split-pdfs',
  },
  {
    id: 3,
    title: 'Compress PDFs',
    description: 'Reduce the size of your PDF files.',
    icon: <CircleMinus size={24} color="#FF80AB" style={{ marginRight: '10px' }} />,
    link: '/compress-pdfs',
  },
  { id: 4, 
    title: 'Watermark', 
    description: 'Stamp an image or text over your PDF in seconds.', 
    icon: <Stamp size={24} color="#FF80AB" style={{ marginRight: '10px' }} />, 
    link: '/watermark' 
  },
  { id: 5, 
    title: 'Rotate PDF', 
    description: 'Rotate your PDFs the way you need them.', 
    icon: <RotateCcw size={24} color="#FF80AB" style={{ marginRight: '10px' }} />, 
    link: '/rotate-pdf' 
  },
  { id: 6, 
    title: 'Unlock PDF', 
    description: 'Remove PDF password security.', 
    icon: <Lock size={24} color="#FF80AB" style={{ marginRight: '10px' }} />, 
    link: '/unlock-pdf' 
  },
  { id: 7, 
    title: 'Protect PDF', 
    description: 'Protect PDF files with a password.', 
    icon: <Shield size={24} color="#FF80AB" style={{ marginRight: '10px' }} />, 
    link: '/protect-pdf' 
  },
  { id: 8, 
    title: 'Organize PDF', 
    description: 'Sort pages of your PDF file however you like.', 
    icon: <AlignJustify size={24} color="#FF80AB" style={{ marginRight: '10px' }} />, 
    link: '/organize-pdf' 
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="flex flex-wrap justify-center space-x-4">
        {features.map((feature) => (
          <div key={feature.id} className="w-full md:w-1/3 p-4">
            <a href={feature.link} className="block">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-center">{feature.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
