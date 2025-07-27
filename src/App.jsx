import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Features from "./pages/Features";
import Settings from "./pages/Settings"; 
import Blog from "./pages/Blog";
import LogDailyHabits from "./pages/LogDailyHabits";
import EcoBot from "./components/EcoBot";
import EcoBotToggle from "./components/EcoBotToggle";
import ScrollToTopButton from './components/ScrollToTopButton';
import LearningHub from "./pages/LearningHub";
import CarbonChallengeCalendar from './components/CarbonChallengeCalendar';
import EcoDashboard from "./components/EcoDashboard";
import CarbonOffsetMarketplace from "./components/CarbonOffsetMarketplace";
import DonationForm from "./components/DonationForm";
import Leaderboard from "./components/LeaderBoard";
import CommunityContribution from "./components/CommunityContribution"
import CityChallenges from "./components/CityChallenges";
import CityHeatmapDashboard from "./components/CityHeatmapDashboard";
import CityDashboard from "./components/CityDashboard";
function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-center mt-10 text-lg">Loading...</div>;
  }

  return (
    <Router>
      <div className="font-sans bg-white dark:bg-black min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/blogs" element={<Blog />} />

            {/* Only accessible if user is authenticated */}
            {isAuthenticated && (
              <>
                <Route path="/profile" element={<Profile />} />
                <Route path="/setting" element={<Settings />} />
                <Route path="/logdailyhabits" element={<LogDailyHabits />} />
                <Route path="/ecobot" element={<EcoBot />} />
                <Route path="/learninghub" element={<LearningHub />} />
                <Route path="/carbon-challenge" element={<CarbonChallengeCalendar />} />
                <Route path="/eco-dashboard" element={<EcoDashboard />} />
                <Route path="/marketplace" element={<CarbonOffsetMarketplace />} />
                <Route path="/donate" element={<DonationForm />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/CommunityContribution" element={<CommunityContribution />} />
                <Route path="/CityChallenges" element={<CityChallenges />} />
                <Route path="/CityHeatmapDashboard" element={<CityHeatmapDashboard />} />
                <Route path="/CityDashboard" element={<CityDashboard />} />


              </>
            )}
          </Routes>
        </main>
             <EcoBotToggle />
             <ScrollToTopButton/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
