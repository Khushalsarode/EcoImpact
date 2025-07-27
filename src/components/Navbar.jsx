import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { Fragment } from 'react';
import Profile from './Profile';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  // Shown to all users
  const publicNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blogs', path: '/blogs' },
  ];

  // Shown only to logged-in users
  const privateNavLinks = [
    //{ name: 'Setting', path: '/setting' },
    { name: 'EcoBot', path: '/ecobot' },
    { name: 'LearningHub', path: '/learninghub' },
    { name: 'Leaderboard', path: '/leaderboard' }

  ];

  const citySubmenus = [
    { name: 'CommunityContribution', path: '/CommunityContribution' },
    { name: 'CityChallenges', path: '/CityChallenges' },
    { name: 'CityHeatmapDashboard', path: '/CityHeatmapDashboard' },
    { name: 'CityDashboard', path: '/CityDashboard' },

  ];


  return (
    <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-green-600 dark:text-green-400">
            EcoImpact 🌱
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {[...publicNavLinks, ...(isAuthenticated ? privateNavLinks : [])].map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition ${isActive ? 'font-semibold text-green-600 dark:text-green-400' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

           {/* City dropdown (desktop) */}
          <div className="relative group">
            <button className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition">
              City ▾
            </button>
            
            {/* Dropdown must be part of the group and absolutely positioned */}
            <div className="absolute left-0 hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded mt-2 z-50 min-w-[150px]">
              {citySubmenus.map(city => (
                <NavLink
                  key={city.name}
                  to={city.path}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {city.name}
                </NavLink>
              ))}
            </div>
          </div>

            {/* Auth Buttons */}
            {!isAuthenticated ? (
              <button
                onClick={() => loginWithRedirect()}
                className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
              >
                Log In
              </button>
            ) : (
              <div className="relative">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-8 h-8 rounded-full cursor-pointer"
                  onClick={() => setProfileMenu(!profileMenu)}
                />
                {profileMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded shadow-lg py-2 z-50">
                    <Profile />
                    <hr className="my-2 border-gray-200 dark:border-gray-700" />
                    <button
                      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      🔒 Log Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>




          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            {[...publicNavLinks, ...(isAuthenticated ? privateNavLinks : [])].map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition ${isActive ? 'font-semibold text-green-600 dark:text-green-400' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {/* 🔽 Add your dropdown here */}
            <div className="px-4">
              <details className="group">
                <summary className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition">
                  City ▾
                </summary>
                <div className="ml-4 mt-1 space-y-1">
                  {citySubmenus.map(city => (
                    <NavLink
                      key={city.name}
                      to={city.path}
                      onClick={() => setMenuOpen(false)}
                      className="block text-sm text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                    >
                      {city.name}
                    </NavLink>
                  ))}
                </div>
              </details>
            </div>

            {!isAuthenticated ? (
              <button
                onClick={() => loginWithRedirect()}
                className="block w-full text-left px-4 py-2 text-green-600"
              >
                Log In
              </button>
            ) : (
              <button
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                className="block w-full text-left px-4 py-2 text-red-600"
              >
                Log Out
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
