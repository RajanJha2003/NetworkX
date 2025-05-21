import { useState, useRef, useEffect, useContext } from 'react';
import { Search, Bell, Users, Home, LogOut, User, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { userDataContext } from '../context/UserContext';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const {userData,setUserData}=useContext(userDataContext);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md py-3 px-4 fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center mr-2">
            <Linkedin className="h-5 w-5 text-white" />
          </div>
          <span className="text-blue-600 font-bold text-xl hidden sm:block">NetworkX</span>
        </Link>

        {/* Search bar */}
        <div className="relative mx-2 md:mx-4 flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-all"
            placeholder="Search"
          />
        </div>

        {/* Right side nav links */}
        <div className="flex items-center gap-1">
          {/* Navigation links - hidden on mobile */}
          <div className="hidden md:flex items-center">
            <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-blue-600 px-2 transition-colors duration-200">
              <Home size={20} />
              <span className="text-xs mt-1 font-medium">Home</span>
            </Link>

            <Link to="/network" className="flex flex-col items-center text-gray-600 hover:text-blue-600 px-2 transition-colors duration-200">
              <Users size={20} />
              <span className="text-xs mt-1 font-medium">My Network</span>
            </Link>
          </div>

          {/* Notifications */}
          <Link to="/notifications" className="flex flex-col items-center text-gray-600 hover:text-blue-600 px-2 transition-colors duration-200 relative ml-1">
            <Bell size={20} />
            <span className="text-xs mt-1 font-medium hidden md:block">Notifications</span>
          </Link>

          {/* Profile dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex flex-col items-center text-gray-600 hover:text-blue-600 px-2 transition-colors duration-200"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white ring-2 ring-white">
                <span className="text-xs font-bold">JD</span>
              </div>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 py-1 border border-gray-200 transition-all">
                <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 rounded-t-md">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white ring-2 ring-white mr-3">
                      <span className="text-base font-bold">JD</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{`${userData.firstName} ${userData.lastName}`}</div>
                      <div className="text-xs text-gray-500">Product Designer at NetworkX</div>
                      <div className="text-xs text-gray-500">{userData.email}</div>
                    </div>
                  </div>
                </div>

                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center transition-colors duration-200">
                  <User size={16} className="mr-2 text-gray-500" />
                  View Profile
                </Link>

                <Link to="/network" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center transition-colors duration-200">
                  <Users size={16} className="mr-2 text-gray-500" />
                  My Network
                </Link>

                {/* Home in dropdown for mobile */}
                <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center transition-colors duration-200 md:hidden">
                  <Home size={16} className="mr-2 text-gray-500" />
                  Home
                </Link>

                <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center border-t border-gray-200 transition-colors duration-200">
                  <LogOut size={16} className="mr-2 text-gray-500" />
                  Sign Out
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
