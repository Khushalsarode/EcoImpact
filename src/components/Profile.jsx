// Profile.js
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="px-4 py-2 text-center">Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="px-4 py-2 text-sm text-gray-800 dark:text-white">
        <div className="flex items-center gap-3 mb-2">
          <img
            src={user.picture}
            alt={user.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-300">{user.email}</p>
          </div>
        </div>

        <Link
          to="/eco-dashboard"
          className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          📊 Eco Dashboard
        </Link>
        <Link
          to="/carbon-challenge"
          className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          ♻️ Carbon Challenges
        </Link>
        <Link
          to="/logdailyhabits"
          className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          📝 Log Daily Habits
        </Link>
        <Link
          to="/marketplace"
          className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          🛒 Marketplace
        </Link>
        <Link
          to="/setting"
          className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          ⚙️ Settings
        </Link>

      </div>
    )
  );
};

export default Profile;
