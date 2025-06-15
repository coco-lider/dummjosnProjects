import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Newsletter */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
            <div className="space-y-4 max-w-md mx-auto">
              <div className="flex items-center bg-white rounded-full px-4 py-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 outline-none text-black text-sm"
                />
              </div>
              <button className="w-full bg-white text-black hover:bg-gray-100 rounded-full py-3 font-medium">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <div className="font-bold text-xl mb-4">SHOP.CO</div>
              <p className="text-gray-600 text-sm mb-4">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gray-300 rounded-full"
                  ></div>
                ))}
              </div>
            </div>

            {["COMPANY", "HELP", "FAQ", "RESOURCES"].map((title, i) => (
              <div key={title}>
                <h3 className="font-medium mb-4">{title}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {["About", "Features", "Works", "Career"].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-gray-900">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-8 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
