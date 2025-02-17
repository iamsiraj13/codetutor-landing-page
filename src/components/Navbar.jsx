import React, { useState } from "react";
import { Link } from "react-router";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
  const menuItems = {
    platform: {
      title: "Platform",
      sections: [
        {
          title: "BUILD",
          items: [
            { name: "Design", desc: "Build high-performing sites" },
            { name: "Edit mode", desc: "Empower your content team" },
            { name: "Interactions", desc: "Craft immersive experiences" },
            {
              name: "Page building",
              desc: "Launch simple landing pages quickly",
              isNew: true,
            },
          ],
        },
        {
          title: "MANAGE",
          items: [
            { name: "CMS", desc: "Manage content at scale" },
            {
              name: "Hosting",
              desc: "Host and scale your site without the hassle",
            },
            {
              name: "Localization",
              desc: "Customize your site for a worldwide audience",
            },
            { name: "Security", desc: "Ensure your site stays safe" },
          ],
        },
        {
          title: "OPTIMIZE",
          items: [
            {
              name: "Analyze",
              desc: "Understand how your site performs",
              isNew: true,
            },
            {
              name: "Optimize",
              desc: "Maximize conversions with testing",
              isNew: true,
            },
            { name: "SEO", desc: "Grow your reach with fine-tuned controls" },
          ],
        },
      ],
    },
    solutions: {
      title: "Solutions",
      items: [
        { name: "For Enterprise", desc: "Scale your business" },
        { name: "For Startups", desc: "Move faster with CodeTutor" },
        { name: "For Agencies", desc: "Win more clients" },
        { name: "For Marketing", desc: "Drive more growth" },
      ],
    },
    resources: {
      title: "Resources",
      items: [
        { name: "Showcase", desc: "Get inspired by the community" },
        { name: "Blog", desc: "Read latest news and articles" },
        { name: "Documentation", desc: "Learn from our resources" },
        { name: "Community", desc: "Join the conversation" },
      ],
    },
  };

  return (
    <nav className="bg-black text-white fixed left-0 top-0 right-0 border-b border-white/10">
      <div className="container mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* logo  */}
          <div>
            <Link to="/" className="text-blue-500 font-bold text-xl">
              CodeTutor
            </Link>
          </div>
          {/* desktop menu  */}
          <div className="hidden lg:flex items-center space-x-4">
            {Object.keys(menuItems).map((key, index) => (
              <div key={index} className="relative">
                <button
                  className={`flex cursor-pointer text-sm font-medium space-x-1 items-center ${
                    activeDropdown === key ? "text-blue-600" : ""
                  }`}
                  onClick={() => toggleDropdown(key)}
                >
                  {menuItems[key].title}

                  <IoIosArrowDown
                    className={`ml-2 w-4 h-4 transition-transform ${
                      activeDropdown === key ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {/* dropdown menu  */}
                {activeDropdown === key && (
                  <div className="absolute top-full mt-2 left-0 w-screen max-w-md bg-white text-black rounded-md shadow-lg py-2">
                    {key === "platform" ? (
                      <div className="grid md:grid-cols-2 grid-cols-2 gap-8 p-4">
                        {menuItems[key]?.sections.map((section, idx) => (
                          <div key={idx}>
                            <h3 className="text-xs font-semibold text-gray-500 tracking-wider mb-2">
                              {section.title}
                            </h3>
                            <div className="">
                              {section?.items.map((item, index) => (
                                <Link
                                  to="#"
                                  key={index}
                                  className="group flex items-start p-2 rounded-lg hover:bg-gray-50"
                                >
                                  <div className="px-4">
                                    <p className="text-sm font-medium text-gray-900 flex items-center">
                                      {item.name}{" "}
                                      {item?.isNew && (
                                        <span className="ml-2 inline-flex items-center px-2 bg-blue-100 text-blue-800 text-xs font-medium   py-0.5 rounded">
                                          NEW
                                        </span>
                                      )}
                                    </p>
                                    <p className="text-sm font-medium text-gray-500">
                                      {item.desc}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {menuItems[key]?.items.map((item, index) => (
                          <Link
                            to="#"
                            key={index}
                            className="group flex items-start p-2 rounded-lg hover:bg-gray-50"
                          >
                            <div className="px-4">
                              <p className="text-sm font-medium text-gray-900">
                                {item.name}
                              </p>
                              <p className="text-sm font-medium text-gray-500">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <Link to="/" className="hover:text-gray-300">
              Enterprice
            </Link>
            <Link to="/" className="hover:text-gray-300">
              Pricing
            </Link>
          </div>
          {/* auth button  */}
          <div>auth button</div>
          {/* mobile menu  */}
          <div>mobile menu bar</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
