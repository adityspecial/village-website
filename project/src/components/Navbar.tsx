import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Info, Book, Heart, Users, DollarSign } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const navItems = [
    {
      name: 'About Us',
      path: '/about',
      icon: Info,
      submenu: [
        { name: 'Our Story', path: '/about/story' },
        { name: 'Vision & Mission', path: '/about/vision' },
        { name: 'Team', path: '/about/team' },
        { name: 'Model Village', path: '/about/model-village' },
        { name: 'Financial Reports', path: '/about/reports' }
      ]
    },
    {
      name: 'Our Work',
      path: '/work',
      icon: Book,
      submenu: [
        { name: 'Education', path: '/work/education' },
        { name: 'Agriculture', path: '/work/agriculture' },
        { name: 'Environment', path: '/work/environment' },
        { name: 'Health', path: '/work/health' },
        { name: 'Livelihood', path: '/work/livelihood' },
        { name: 'Gram Siri', path: '/work/gram-siri' },
        { name: 'KIF Chapters', path: '/work/chapters' },
        { name: 'Adopted Villages', path: '/work/villages' }
      ]
    },
    {
      name: 'Impact',
      path: '/impact',
      icon: Heart,
      submenu: [
        { name: 'Newsletter', path: '/impact/newsletter' },
        { name: 'Success Stories', path: '/impact/stories' },
        { name: 'Reports', path: '/impact/reports' },
        { name: 'Gallery', path: '/impact/gallery' },
        { name: 'Share Experience', path: '/impact/share' }
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      icon: Book,
      submenu: [
        { name: 'Publications', path: '/resources/publications' },
        { name: 'Videos', path: '/resources/videos' }
      ]
    },
    {
      name: 'Get Involved',
      path: '/get-involved',
      icon: Users,
      submenu: [
        { name: 'Volunteering', path: '/get-involved/volunteer' },
        { name: 'CSR Partnerships', path: '/get-involved/csr' },
        { name: 'NGO Partnership', path: '/get-involved/ngo' },
        { name: 'Internships', path: '/get-involved/internships' },
        { name: 'Events', path: '/get-involved/events' }
      ]
    },
    {
      name: 'Donate',
      path: '/donate',
      icon: DollarSign
    }
  ];

  const toggleSubmenu = (itemName: string) => {
    setActiveSubmenu(activeSubmenu === itemName ? null : itemName);
  };

  return (
    <nav className="bg-amber-50 shadow-lg z-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Home className="h-8 w-8 text-amber-700" />
            <span className="text-xl font-semibold text-amber-900">KIF</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <div className="flex items-center space-x-1">
                  <Link
                    to={item.path}
                    className="text-amber-900 hover:text-amber-600 flex items-center"
                  >
                    <item.icon className="h-4 w-4 mr-1" />
                    <span>{item.name}</span>
                  </Link>
                  {item.submenu && (
                    <button 
                      className="text-amber-900 focus:outline-none"
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Desktop Dropdown */}
                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute left-0 top-full mt-0 w-56 bg-white rounded-md shadow-lg py-2 z-50 border border-amber-100">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50"
                        onClick={() => setActiveSubmenu(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-900 hover:text-amber-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <div key={item.name} className="mb-1">
                <div className="flex justify-between items-center">
                  <Link
                    to={item.path}
                    className="flex items-center space-x-2 text-left text-amber-900 px-4 py-2 hover:bg-amber-100 w-full"
                    onClick={() => !item.submenu && setIsOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                  {item.submenu && (
                    <button
                      className="px-4 py-2 text-amber-900 focus:outline-none"
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={activeSubmenu === item.name ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.submenu && activeSubmenu === item.name && (
                  <div className="pl-8 space-y-1 mt-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;