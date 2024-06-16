import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Apa itu Health Direction?",
      answer: "Health Directions adalah situs web untuk melakukan konsultasi kesehatan berbasis online dengan dokter yang bersertifikasi dan telah bergabung dengan kami."
    },
    {
      question: "Apa yang harus saya lakukan untuk mulai berkonsultasi?",
      answer: "Anda dapat login terdahulu, jika belum pernah membuat akun silahkan membuat akun terlebih dahulu."
    },
    {
        question: "Bagaimana cara saya memulai konsultasi dengan dokter?",
        answer: "Anda dapat membuka menu 'Konsultasi Medis' yang telah kami sediakan pada bagian fitur"
       },
    {
      question: "Berapa biaya konsultasi dengan dokter?",
      answer: "Anda dapat berkonsultasi dengan dokter kami secara gratis, anda hanya akan dikenakan biaya jika meminta resep dari dokter."
    },
    {
      question: "Bagaimana cara saya mendapatkan resep obat?",
      answer: "Anda dapat melihat resep obar setelah melakukan konsultasi dengan dokter kami"

    },
    {
        question: "Bagaimana cara saya bergabung sebagai dokter?",
        answer: "Anda dapat bergabung dengan kami melalui 'Contact' untuk kami verifikasi terlebih dahulu"
    }
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center mt-10 p-4 font-poppins">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full text-left py-2 px-4 bg-blue-100 hover:bg-blue-200 rounded-md focus:outline-none focus:bg-blue-200 transition duration-300 flex justify-between items-center ${activeIndex === index ? 'bg-blue-200' : 'bg-white'} border border-blue-200`}
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-xl text-black">{faq.question}</h2>
              <span className="text-blue-600">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 py-2 px-4 bg-white rounded-md border border-blue-200">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
