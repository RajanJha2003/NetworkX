import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import profile from '../assets/profile.webp';
import { FiCamera, FiPlus, FiMapPin, FiEdit, FiBriefcase, FiUsers, FiX } from 'react-icons/fi';
import { userDataContext } from '../context/UserContext';

const Home = () => {
  const { userData, setUserData } = useContext(userDataContext);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [formData, setFormData] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    headline: userData.headline || "",
    location: userData.location || "",
    about: userData.about || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(prev => ({
      ...prev,
      ...formData
    }));
    setShowEditProfile(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 pt-20 px-4 pb-10">
      <Navbar />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Profile Card */}
        <div className="w-full lg:w-1/4 flex flex-col">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Cover Image */}
            <div className="relative h-32 bg-gradient-to-r from-blue-400 to-indigo-500">
              <div className="absolute right-4 top-4 bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors">
                <FiCamera className="text-gray-700 w-4 h-4" />
              </div>
            </div>
            
            {/* Profile Section */}
            <div className="px-6 pt-10 pb-6 relative">
              {/* Profile Image */}
              <div className="absolute -top-10 left-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                    <img src={profile} alt="Profile" className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors shadow-md">
                    <FiPlus className="text-white w-3 h-3" />
                  </div>
                </div>
              </div>
              
              {/* User Info */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-800">{`${userData.firstName} ${userData.lastName}`}</h2>
                
                <p className="text-blue-600 font-medium mt-1">
                  {userData.headline || "Add a headline"}
                </p>
                
                <div className="flex items-center text-gray-600 mt-2">
                  <FiMapPin className="mr-1 w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">{userData.location || "Add location"}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button 
                    className="w-full py-2 bg-blue-50 text-blue-600 rounded-md font-medium text-sm hover:bg-blue-100 transition-colors flex items-center justify-center"
                    onClick={() => setShowEditProfile(true)}
                  >
                    <FiEdit className="mr-2" /> Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Connection Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mt-6 p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Connections</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <FiUsers className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">215</p>
                  <p className="text-xs text-gray-500">Connections</p>
                </div>
              </div>
              <button className="text-blue-600 text-sm font-medium">View all</button>
            </div>
          </div>
        </div>
        
        {/* Middle Content Area */}
        <div className="w-full lg:w-2/4 flex flex-col gap-6">
          {/* Create Post Card */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={profile} alt="Profile" className="h-full w-full object-cover" />
              </div>
              <button className="bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600 rounded-full py-2.5 px-4 text-sm flex-grow text-left">
                Start a post...
              </button>
            </div>
            
            <div className="flex justify-between mt-4">
              <button className="flex items-center text-gray-600 hover:bg-gray-100 rounded-lg px-3 py-1.5 transition-colors">
                <span className="w-5 h-5 text-blue-500 mr-2">📷</span>
                <span className="text-sm">Photo</span>
              </button>
              <button className="flex items-center text-gray-600 hover:bg-gray-100 rounded-lg px-3 py-1.5 transition-colors">
                <span className="w-5 h-5 text-green-500 mr-2">🎬</span>
                <span className="text-sm">Video</span>
              </button>
              <button className="flex items-center text-gray-600 hover:bg-gray-100 rounded-lg px-3 py-1.5 transition-colors">
                <span className="w-5 h-5 text-amber-500 mr-2">📅</span>
                <span className="text-sm">Event</span>
              </button>
              <button className="flex items-center text-gray-600 hover:bg-gray-100 rounded-lg px-3 py-1.5 transition-colors">
                <span className="w-5 h-5 text-rose-500 mr-2">📝</span>
                <span className="text-sm">Article</span>
              </button>
            </div>
          </div>
          
          {/* Feed Post Example */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src={profile} alt="Profile" className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{`${userData.firstName} ${userData.lastName}`}</h4>
                  <p className="text-xs text-gray-500">Posted 2 hours ago</p>
                </div>
              </div>
              
              <p className="mt-3 text-gray-700">Just finished working on an exciting new project! Looking forward to sharing more details soon.</p>
            </div>
            
            <div className="bg-gray-50 p-4 border-t border-gray-100">
              <div className="flex justify-between">
                <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="mr-1">👍</span>
                  <span className="text-sm">Like</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="mr-1">💬</span>
                  <span className="text-sm">Comment</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="mr-1">🔄</span>
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <FiBriefcase className="text-blue-600 w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">You viewed <span className="font-medium">Software Engineer</span> job at <span className="font-medium">Tech Company</span></p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <FiUsers className="text-green-600 w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-800"><span className="font-medium">Alex Johnson</span> viewed your profile</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <FiEdit className="text-purple-600 w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">You updated your profile information</p>
                  <p className="text-xs text-gray-500">1 week ago</p>
                </div>
              </div>
            </div>
            
            <button className="w-full text-center text-blue-600 font-medium text-sm mt-4 hover:underline">
              See all activity
            </button>
          </div>
        </div>
      </div>
      
      {/* Edit Profile Modal */}
      {showEditProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h3 className="font-semibold text-lg text-gray-800">Edit Profile</h3>
              <button 
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setShowEditProfile(false)}
              >
                <FiX className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="headline" className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
                <input
                  type="text"
                  id="headline"
                  name="headline"
                  value={formData.headline}
                  onChange={handleChange}
                  placeholder="E.g., Software Engineer at Tech Company"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="E.g., San Francisco, CA"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">About</label>
                <textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about yourself..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowEditProfile(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;