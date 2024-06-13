import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-secondary text-neutral py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h1 className="text-info text-3xl font-bold mb-2">
                Health Directions
              </h1>
              <p className="text-neutral">
                Top learning experiences that create more talent in the world.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10">
              <div className="mb-8 md:mb-0">
                <h5 className="text-info text-lg font-semibold mb-3">
                  Product
                </h5>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-info">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-info">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-info">
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-info">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-info">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-8 md:mb-0">
                <h5 className="text-info text-lg font-semibold mb-3">
                  Company
                </h5>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-info">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-info">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-info">
                      Press
                    </a>
                    <span className="bg-white text-info text-xs ml-2 px-2 py-1 rounded-full">
                      New
                    </span>
                  </li>
                  <li>
                    <a href="#" className="hover:text-info">
                      News
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-8 md:mb-0">
                <h5 className="text-info text-lg font-semibold mb-3">Social</h5>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-info">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-info">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-info">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-info">
                      Dribbble
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-8 md:mb-0">
                <h5 className="text-info text-lg font-semibold mb-3">Legal</h5>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-info">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-info">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-info">
                      Cookies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-info">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; 2024 Health Directions . All rights reserved.
            </p>
            <div className="flex space-x-6 mt-6 md:mt-0">
              <a href="#" className="text-white hover:text-info">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M24 4.5a9.41 9.41 0 01-2.75.78 4.74 4.74 0 002.08-2.62 9.41 9.41 0 01-2.99 1.14 4.73 4.73 0 00-8.05 4.31A13.42 13.42 0 011.65 3.16 4.73 4.73 0 003.08 9.75a4.71 4.71 0 01-2.14-.59v.06a4.73 4.73 0 003.79 4.64 4.73 4.73 0 01-2.13.08 4.73 4.73 0 004.41 3.28A9.46 9.46 0 010 19.54a13.32 13.32 0 007.19 2.11c8.63 0 13.35-7.15 13.35-13.36 0-.2 0-.39-.01-.59A9.5 9.5 0 0024 4.5z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-info">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0zM7.08 20.52H3.57V9.09h3.51v11.43zM5.33 7.57h-.02c-1.18 0-1.94-.82-1.94-1.84 0-1.04.77-1.84 1.96-1.84 1.19 0 1.94.79 1.95 1.84 0 1.02-.76 1.84-1.95 1.84zM20.43 20.52h-3.51v-5.91c0-1.42-.51-2.39-1.79-2.39-.97 0-1.55.65-1.81 1.28-.09.23-.11.54-.11.85v6.18h-3.51V9.09h3.51v1.55c.46-.71 1.27-1.72 3.1-1.72 2.26 0 3.96 1.48 3.96 4.66v7.94z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-info">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M12 0C5.38 0 0 5.38 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58 0-.28-.02-1.02-.02-2-.7.14-1.38.28-1.76-.28-.16-.28-.84-1.02-.02-1.04.78-.02 1.34.72 1.54 1.02.88 1.54 2.28 1.1 2.84.84.08-.64.34-1.1.62-1.36-2.42-.28-4.96-1.22-4.96-5.44 0-1.2.42-2.2 1.1-2.96-.1-.26-.48-1.34.1-2.8 0 0 .92-.28 3 .1.88-.24 1.82-.36 2.76-.36.94 0 1.88.12 2.76.36 2.08-.38 3-.1 3-.1.58 1.46.2 2.54.1 2.8.7.76 1.1 1.76 1.1 2.96 0 4.24-2.54 5.16-4.96 5.44.36.3.66.88.66 1.78 0 1.28-.02 2.32-.02 2.64 0 .32.22.7.82.58 4.76-1.58 8.2-6.08 8.2-11.38C24 5.38 18.62 0 12 0z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-info">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M19.75 3H4.25A1.25 1.25 0 003 4.25v15.5C3 20.99 4.01 22 5.25 22h14.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM8.75 19h-3.5v-8.5h3.5V19zm-1.75-9.5c-1.03 0-1.75-.72-1.75-1.75S6.97 6 8 6s1.75.72 1.75 1.75S9.03 9.5 8 9.5zm11 9.5h-3.5v-4.75c0-1.4-.67-2.25-1.95-2.25-.54 0-.94.18-1.33.54-.35.34-.54.9-.54 1.42V19h-3.5v-8.5h3.5v1.75c.64-.99 1.67-1.75 3.02-1.75 1.36 0 3.3.99 3.3 3.92V19z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
