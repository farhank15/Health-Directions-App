import React, { useEffect } from "react";
import AOS from "aos";
import Dmale from "@assets/images/Doctor_male.webp";
import Dfemale from "@assets/images/Doctor_female.webp";
import Health from "@assets/images/Health.webp";
import ButtonApp from "@components/atoms/Button";

const About = () => {
  return (
    <div className="px-6 md:px-12">
      <Hero />
      <Feature />
      <OurTeams />
    </div>
  );
};

export default About;

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <section className="h-screen py-16 mx-auto font-poppins">
      <div className="container flex flex-col items-center justify-center h-full mx-auto md:flex-row">
        <div className="w-full mb-12 text-center md:w-1/2 md:mb-0 md:text-left">
          <h3
            data-aos="fade-up"
            className="mb-4 text-3xl font-extrabold md:text-4xl text-primary"
          >
            HEALTH DIRECTIONS
          </h3>
          <p data-aos="fade-left" className="mb-6 text-md md:text-lg">
            Menyediakan Peluang Terbaik untuk Meningkatkan Sumber Daya Manusia
            di Bidang Kesehatan.
          </p>
          <p
            data-aos="fade-right"
            className="mb-6 text-xs md:text-[14px] text-justify text-gray-600 md:pr-5"
          >
            Perubahan paradigma menuju layanan kesehatan digital memungkinkan
            pasien mengakses konsultasi medis tanpa batasan waktu dan lokasi.
            Namun, masih ada kendala seperti kesulitan mengatur jadwal
            konsultasi dan proses konsultasi yang memakan waktu. Pasien juga
            sering kesulitan mendapatkan dan menukarkan resep obat. Aplikasi ini
            hadir untuk memudahkan pengaturan jadwal konsultasi medis online dan
            memberikan resep obat dalam bentuk barcode yang dapat di-scan oleh
            apoteker, baik secara online maupun offline.
          </p>
          <ButtonApp
            data-aos="fade-right"
            className="px-4 py-2 font-bold text-white rounded-full bg-primary hover:bg-secondary"
            name="Bergabunglah dengan Kami"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full space-y-6 md:w-1/2 md:space-y-0 md:space-x-6">
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <img
              data-aos="fade-right"
              src={Dmale}
              alt="Dokter Pria"
              className="mb-3 rounded-lg shadow-lg md:w-1/2 md:ml-2 md:mt-32"
            />
            <img
              data-aos="fade-left"
              src={Dfemale}
              alt="Dokter Wanita"
              className="rounded-lg shadow-lg md:w-1/2 md:mb-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = () => {
  return (
    <div>
      <section className="py-16 font-poppins">
        <div className="container flex flex-col items-center mx-auto md:flex-row">
          <div className="w-full mb-12 md:w-1/3 md:mb-0">
            <img
              src={Health}
              alt="Gambar Fitur"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full text-center md:text-justify md:pl-5">
            <h3 className="mb-2 text-lg font-bold text-primary">Fitur</h3>
            <h2 className="mb-2 text-3xl font-bold md:text-4xl">
              Kami selalu bekerja untuk memberikan Anda fitur terbaik dalam
              segala aspek.
            </h2>
            <p className="mb-4 text-base text-gray-600">
              Di HEALTH DIRECTIONS, tujuan utama kami adalah membantu pasien
              mengatur jadwal konsultasi medis secara online dengan dokter yang
              tersedia, serta memberikan resep obat dalam bentuk barcode yang
              dapat di-scan oleh apoteker.
            </p>
            <p className="mb-6 text-base text-gray-600">
              Anda akan menemukan segala sesuatu yang Anda butuhkan hanya dengan
              sekali klik, tetapi di sini kami percaya bahwa tanpa pengetahuan
              dan praktik, internet juga mungkin tidak akan membantu Anda dalam
              hidup Anda.
            </p>
            <ButtonApp
              className="px-4 py-2 font-bold text-white rounded-full bg-primary hover:bg-secondary"
              name="Pelajari Lebih Lanjut"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const OurTeams = () => {
  const teamMembers = [
    {
      name: "Theresa Webb",
      title: "Application Support Analyst Lead",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      image: "/path/to/theresa.jpg",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Courtney Henry",
      title: "Director, Undergraduate Analytics and Planning",
      description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
      image: "/path/to/courtney.jpg",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Albert Flores",
      title: "Career Educator",
      description: "Former PM for Linear, Lambda School, and On Deck.",
      image: "/path/to/albert.jpg",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Marvin McKinney",
      title: "Program & Operations Manager",
      description: "Former lead dev for Linear, Coinbase, and Postscript.",
      image: "/path/to/marvin.jpg",
      twitter: "#",
      linkedin: "#",
    },
  ];

  return (
    <div className="flex justify-center">
      <section className="w-full max-w-6xl py-16">
        <div className="container px-4 mx-auto text-center md:px-8">
          <h3 className="mb-2 text-lg font-bold text-green-600">Tutors</h3>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Meet the Heroes
          </h2>
          <p className="mb-12 text-base text-gray-600">
            On Weekend UX, instructors from all over the world instruct millions
            of students. We offer the knowledge and abilities.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="flex flex-col max-w-xs p-6 mx-auto rounded-lg shadow-lg bg-gray-white"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full"
                />
                <h4 className="mb-2 text-xl font-bold">{member.name}</h4>
                <p className="mb-2 text-green-600">{member.title}</p>
                <p className="flex-grow mb-4 text-gray-600">
                  {member.description}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.twitter}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.55-1.38 1.87-2.4-.83.49-1.74.85-2.71 1.04-.79-.84-1.91-1.37-3.15-1.37-2.38 0-4.31 1.92-4.31 4.31 0 .34.04.67.11.99C7.69 8.09 4.07 6.13 1.64 3.16c-.38.65-.6 1.39-.6 2.18 0 1.51.77 2.84 1.94 3.62-.72-.02-1.39-.22-1.98-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.37.1-.76.15-1.16.15-.28 0-.56-.03-.82-.08.56 1.75 2.17 3.02 4.08 3.06-1.5 1.17-3.39 1.86-5.44 1.86-.35 0-.7-.02-1.04-.06 1.94 1.25 4.24 1.99 6.71 1.99 8.05 0 12.45-6.67 12.45-12.45 0-.19 0-.38-.01-.56.85-.61 1.58-1.37 2.17-2.24z" />
                    </svg>
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-blue-700 hover:text-blue-900"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0zM7.08 20.52H3.57V9.09h3.51v11.43zM5.33 7.57h-.02c-1.18 0-1.94-.82-1.94-1.84 0-1.04.77-1.84 1.96-1.84 1.19 0 1.94.79 1.95 1.84 0 1.02-.76 1.84-1.95 1.84zM20.43 20.52h-3.51v-5.91c0-1.42-.51-2.39-1.79-2.39-.97 0-1.55.65-1.81 1.28-.09.23-.11.54-.11.85v6.18h-3.51V9.09h3.51v1.55c.46-.71 1.27-1.72 3.1-1.72 2.26 0 3.96 1.48 3.96 4.66v7.94z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
