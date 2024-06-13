import React from "react";
import Doctor from "../../assets/images/Doctor_home.webp";
import Background from "../../assets/images/Bg_Doctor.webp";
import ButtonApp from "../../components/atoms/Button/index";
import ChatWithDoctorIcon from "../../assets/images/medical-team.png"; // Placeholder for the actual path
import HealthStoreIcon from "../../assets/images/medical-team.png"; // Placeholder for the actual path
import VisitHospitalsIcon from "../../assets/images/medical-team.png"; // Placeholder for the actual path
import DoctorSpecial from "../../assets/images/Heromain.png"; // Placeholder for the actual path
import BackgroundSpecial from "../../assets/images/HeroBg.png"; // Placeholder for the actual path
import CovidIcon from "../../assets/images/medical-team.png"; // Placeholder for the actual path
import HerbalIcon from "../../assets/images/medical-team.png"; // Placeholder for the actual path
import LabIcon from "../../assets/images/medical-team.png"; // Placeholder for the actual path
import MenstruationIcon from "../../assets/images/medical-team.png"; // Placeholder for the actual path
import DoctorQualified from "../../assets/images/Heromain2.webp"; // Placeholder for the actual path
import BackgroundQualified from "../../assets/images/bg.png"; // Placeholder for the actual path

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <SpecialServices />
      <QualifiedDoctors />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-16 md:mt-0 font-poppins">
      <main className="container flex flex-col items-center justify-center px-4 py-4 mx-auto md:flex-row md:px-8">
        <div className="max-w-lg mb-5 text-center md:text-left md:w-1/2">
          <h1 className="text-3xl font-extrabold text-primary md:text-5xl">
            Health Directions
          </h1>
          <h2 className="mt-2 text-lg font-semibold text-gray-900 md:text-3xl">
            Aplikasi Konsultasi untuk Peningkatan SDM di Bidang Kesehatan
          </h2>
          <p className="mt-2 text-xs text-gray-700 md:text-xl md:mt-4">
            Dalam beberapa tahun terakhir, perhatian besar terhadap perubahan
            paradigma dalam layanan kesehatan menuju layanan digital semakin
            meningkat. Kami menyediakan fasilitas untuk mengatur jadwal
            konsultasi medis secara online dengan dokter yang tersedia, serta
            memberikan resep obat dalam bentuk barcode.
          </p>
          <ButtonApp
            className="px-6 py-2 mt-4 text-white rounded-lg bg-primary hover:bg-secondary md:mt-6"
            name="Coba Konsultasi Gratis"
          />

          <div className="flex justify-around mt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">200+</h3>
              <p className="text-gray-700">Dokter Aktif</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">15K+</h3>
              <p className="text-gray-700">Pengguna Aktif</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-700">Apotek Aktif</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center w-full mt-6 md:mt-0 md:w-1/2 md:justify-end">
          <img
            src={Doctor}
            alt="Doctor"
            className="absolute bottom-0 w-3/4 md:w-[400px] md:mr-40 -mb-8 z-10"
          />
          <img
            src={Background}
            alt="Background"
            className="w-full md:w-[35rem]"
          />
        </div>
      </main>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 ">
      <h2 className="mb-8 text-3xl font-bold text-center text-primary">
        Our <span className="text-secondary">Main Services</span> Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md md:w-1/3">
          <div className="flex flex-col items-center">
            <img
              src={ChatWithDoctorIcon}
              alt="Chat with doctor"
              className="w-16 h-16 mb-4"
            />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Chat with doctor
            </h3>
            <p className="text-center text-gray-700">
              You can connect directly, quickly and easily, and there is no need
              to doubt the quality of the consultation and treatment offered.
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm p-6 text-white rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-teal-500 md:w-1/3">
          <div className="flex flex-col items-center">
            <img
              src={HealthStoreIcon}
              alt="Health Store"
              className="w-16 h-16 mb-4"
            />
            <h3 className="mb-2 text-xl font-semibold">Health Store</h3>
            <p className="text-center">
              Talk about the health complaints you are experiencing and don't
              hesitate to ask about the proper treatment.
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm p-6 border-2 border-green-300 rounded-lg shadow-md md:w-1/3">
          <div className="flex flex-col items-center">
            <img
              src={VisitHospitalsIcon}
              alt="Visit Hospitals"
              className="w-16 h-16 mb-4"
            />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Visit Hospitals
            </h3>
            <p className="text-center text-gray-700">
              Get priority services in hospitals with HaloDoc. Which allows you
              to go to the hospital more practically and save time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpecialServices = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-12">
      <div className="container flex flex-col items-center justify-center px-4 py-4 mx-auto md:flex-row md:px-8">
        <div className="relative w-full md:w-1/2">
          <img
            src={BackgroundSpecial}
            alt="Background Special"
            className="absolute object-cover w-full h-full"
          />
          <img
            src={DoctorSpecial}
            alt="Doctor Special"
            className="relative mx-auto mb-8 md:mb-0"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold text-primary">
            Our <span className="text-secondary">Special Services</span>
          </h2>
          <p className="mb-8 text-gray-700">
            In times like today, your health is very important, especially since
            the number of COVID-19 cases is increasing day by day, so we are
            ready to help you with your health consultation.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ServiceCard
              icon={CovidIcon}
              title="Covid-19 Test"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit."
            />
            <ServiceCard
              icon={HerbalIcon}
              title="Herbal Supplement"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit."
            />
            <ServiceCard
              icon={LabIcon}
              title="Laboratorium Test"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit."
            />
            <ServiceCard
              icon={MenstruationIcon}
              title="Menstruation Calendar"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex items-start p-4 rounded-lg shadow-md">
      <img src={icon} alt={title} className="w-12 h-12 mr-4" />
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const QualifiedDoctors = () => {
  return (
    <div className="flex items-center justify-center min-h-screen py-12 ">
      <div className="container flex flex-col items-center justify-center px-4 py-4 mx-auto md:flex-row md:px-8">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h2 className="mb-4 text-3xl font-bold text-primary">
            Our <span className="text-secondary">Qualified Doctors</span>
          </h2>
          <p className="mb-8 text-gray-700">
            Handled directly by general doctors and professional and experienced
            specialists doctors.
          </p>
          <div className="relative p-6 bg-blue-200 shadow-md rounded-xl">
            <img
              src={BackgroundQualified}
              alt="Background Qualified"
              className="absolute inset-0 object-cover w-full h-full rounded-lg opacity-50 "
            />
            <div className="absolute inset-0 bg-cyan-700 opacity-70 "></div>
            <div className="relative">
              <h3 className="text-xl font-bold text-white">Orthopedy</h3>
              <h4 className="text-2xl font-bold text-white">
                Dr. James Wellington
              </h4>
              <p className="text-white">Read More</p>
            </div>
          </div>
          <button className="px-6 py-2 mt-6 text-white rounded-lg bg-primary hover:bg-secondary">
            View All Doctors
          </button>
        </div>
        <div className="relative flex items-center justify-center w-full md:w-1/2">
          <div className="relative w-3/4 md:w-full">
            <img
              src={DoctorQualified}
              alt="Doctor Qualified"
              className="object-cover w-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="p-2 rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="p-2 bg-white rounded-full shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 flex justify-center w-full py-4 space-x-2">
            <span className="w-2.5 h-2.5 bg-primary rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
