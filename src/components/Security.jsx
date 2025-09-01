import React, { useState } from 'react';
import { FaWindows, FaAndroid, FaApple, FaMobileAlt, FaSearch } from "react-icons/fa";

export const Security = () => {
  const [activeTab, setActiveTab] = useState('windows');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const tools = {
    windows: [
      {
        name: "Logitech Unifying Software",
        license: "Free",
        summary: "Connect and manage Logitech wireless devices easily",
        link: "https://download.cnet.com/logitech-unifying-software/3000-2094_4-10969904.html",
        imgSrc: "https://images.dwncdn.net/images/t_app-icon-s/p/2f13eb7c-49cf-4d36-a890-21d04eaa688c/933920718/2094_4-10969904-logo"
      },
      {
        name: "WinRAR (64-bit)",
        license: "Trial version",
        summary: "Take full control over RAR and ZIP archives, along with unpacking a dozen other archive formats.",
        link: "https://download.cnet.com/winrar-64-bit/3000-2250_4-10965579.html",
        imgSrc: "https://images.dwncdn.net/images/t_app-icon-s/p/c3152528-96bf-11e6-b8e7-00163ed833e7/4094112473/2250_4-10965579-logo"
      }
    ],
    android: [
      {
        name: "APKPure",
        license: "Free",
        summary: "Straightforward option for app access",
        link: "https://download.cnet.com/apkpure/3000-2094_4-77459320.html",
        imgSrc: "https://images.dwncdn.net/images/t_app-icon-s/p/2252f9cf-2802-47bf-ae38-57479faf4220/2304589184/2094_4-77459320-logo"
      }
    ],
    mac: [
      {
        name: "Android File Transfer",
        license: "Free",
        summary: "Transfer files between your Mac and Android device.",
        link: "https://download.cnet.com/android-file-transfer/3000-mac-android-file-transfer.html",
        imgSrc: "https://images.dwncdn.net/images/t_app-icon-s/p/303e4f1a-9b27-11e6-8695-00163ec9f5fa/3155008088/android-file-transfer-logo"
      }
    ],
    iphone: [
      {
        name: "Shadowrocket",
        license: "Paid",
        summary: "Advanced network traffic routing",
        link: "https://download.cnet.com/shadowrocket/3000-2094_4-76361012.html",
        imgSrc: "https://images.dwncdn.net/images/t_app-icon-s/p/fd2a148a-d5b6-11e7-8595-0719e4ef53e1/782203548/2094_4-76361012-logo"
      }
    ]
  };

  const icons = {
    windows: <FaWindows className="mr-2" />,
    android: <FaAndroid className="mr-2" />,
    mac: <FaApple className="mr-2" />,
    iphone: <FaMobileAlt className="mr-2" />
  };

  const filteredTools = tools[activeTab].filter(
    (tool) =>
      (filterType === 'All' || tool.license.toLowerCase().includes(filterType.toLowerCase())) &&
      tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="flex flex-col items-center justify-center text-center transition-all duration-300">
      <div className="w-full px-4 max-w-7xl py-8 rounded-lg shadow-lg bg-white dark:bg-gray-900 dark:text-white">
        {/* Centered Heading */}
        <div className="mb-6">
          <h2 className="text-5xl font-semibold text-center">Best Tools Software</h2>
        </div>

        {/* Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {Object.keys(tools).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#00BCD4] text-white shadow'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-[#00BCD4] hover:text-white'
              }`}
            >
              {icons[tab]}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row justify-between w-full mb-6 gap-4 px-2">
          <div className="relative flex-grow">
            <FaSearch className="absolute left-3 top-3 text-gray-400 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00BCD4] bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00BCD4] bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          >
            <option value="All">All</option>
            <option value="Free">Free</option>
            <option value="Trial">Trial</option>
            <option value="Paid">Paid</option>
          </select>
        </div>

        {/* Tool List */}
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredTools.map((tool, index) => (
            <li key={index} className="flex items-center py-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              <a className="flex w-full" href={tool.link} title={tool.name} target="_blank" rel="noopener noreferrer">
                <div className="mr-4">
                  <img src={tool.imgSrc} className="w-12 h-12 rounded" alt={`Icon of ${tool.name}`} />
                </div>
                <div className="flex-grow text-left">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">{tool.name}</h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{tool.license}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{tool.summary}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* See All Button */}
        <div className="mt-6 text-right">
          <a
            href={`https://download.cnet.com/utilities-tools/${activeTab}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00BCD4] text-white py-2 px-6 rounded-full hover:bg-cyan-600 transition-colors"
          >
            See all
          </a>
        </div>
      </div>
    </section>
  );
};