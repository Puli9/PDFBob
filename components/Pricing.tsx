import React from 'react';

interface Plan {
  title: string;
  features: string[];
  price: string;
}

const plans: Plan[] = [
  {
    title: "Basic",
    features: ["Merge PDFs", "Split PDFs", "Compress PDFs"],
    price: "$0/month",
  },
  {
    title: "Pro",
    features: ["All Free Plan features", "Edit PDFs", "Sign PDFs"],
    price: "$9.99/month",
  },
  {
    title: "Enterprise",
    features: ["All Pro Plan features", "Multiple user accounts", "Priority support"],
    price: "$29.99/month",
  },
];

const Pricing: React.FC = () => (
  <section className="py-20 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-12 text-black">Pricing Plans</h2>
    <div className="flex justify-center space-x-4">
      {plans.map((plan, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-1/3 text-center">
          <h3 className="text-2xl font-bold mb-4 text-black">{plan.title}</h3>
          <ul className="text-gray-600 mb-6">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="mb-2">{feature}</li>
            ))}
          </ul>
          <p className="text-2xl font-bold mb-4 text-customPink1">{plan.price}</p>
          <button className="bg-customPink1 text-white font-bold py-2 px-4 rounded hover:bg-pink-300 transition-colors duration-300">
            Choose Plan
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;
