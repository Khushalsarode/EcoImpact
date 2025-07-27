import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer className="relative bg-green-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 pt-20 pb-8 mt-20 overflow-hidden">

            {/* 🌊 Wave Background */}
            <div className="absolute top-0 left-0 w-full -mt-20 rotate-180">
                <svg viewBox="0 0 1200 120" className="w-full h-20 fill-green-100 dark:fill-gray-900">
                    <path d="M0,0V46.29c47.84,22,103.78,29.26,158,18.91
              C230.21,52.37,284.47,31.53,339,24.53
              c54.58-7,108.68,1.86,162,14.29
              c51.69,11.86,103.07,25.45,155,24.57
              c50.39-.85,99.24-15.27,149-22.54
              c41.43-6.09,83.13-6.82,124,1.38
              c34.17,6.78,67.65,20.42,101,35.11V0Z"
                        fill="currentColor"
                    />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 z-10 relative">

                {/* About */}
                <div>
                    <h4 className="text-2xl font-semibold mb-3">EcoImpact</h4>
                    <p className="text-sm leading-relaxed">
                        Track your carbon habits, earn AI badges, and help your city stay green. 🌿
                    </p>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-2xl font-semibold mb-3">Subscribe</h4>
                    <p className="text-sm mb-3">Get updates on new features, challenges & badges.</p>
                    <form className="flex flex-col sm:flex-row gap-2">
                        <label htmlFor="newsletter" className="sr-only">Email Address</label>
                        <input
                            id="newsletter"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 rounded-md border dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="text-2xl font-semibold mb-3">Connect</h4>
                    <p className="text-sm mb-3">ecoimpact@app.dev</p>
                    <div className="flex gap-4 justify-start items-center">
                        <a href="#" className="hover:text-green-600 transition text-2xl">
                            <i className="bx bxl-github"></i>
                        </a>
                        <a href="#" className="hover:text-green-600 transition text-2xl">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                        <a href="#" className="hover:text-green-600 transition text-2xl">
                            <i className="bx bxl-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* Donation Referral Section */}
            <div className="mt-12 text-center z-10 relative">
                <a
                    href="/donate"
                    className="text-green-700 dark:text-green-400 hover:underline font-medium text-sm"
                >
                    💚 Support us – Make a Donation
                </a>
            </div>


            {/* Footer Bottom */}
            <div className="text-center text-sm mt-12 text-gray-600 dark:text-gray-400 z-10 relative">
                © {new Date().getFullYear()} EcoImpact. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;
