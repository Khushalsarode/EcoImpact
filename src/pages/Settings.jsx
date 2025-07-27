import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AutoLocation from "../components/AutoLocation";

const Settings = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [streakAlerts, setStreakAlerts] = useState(false);

  if (isLoading) {
    return <div className="text-center py-10">Loading settings...</div>;
  }

  const authProvider = user?.sub?.split("|")[0] || "unknown";

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      alert("Account deletion requested. (Connect to Auth0 Management API)");
      logout({ returnTo: window.location.origin });
    }
  };

  const handleDeleteData = () => {
    if (window.confirm("Delete all your stored data?")) {
      alert("User data deleted. (Connect to database deletion logic)");
    }
  };

  const handleClearCache = () => {
    localStorage.clear();
    sessionStorage.clear();
    alert("Cache cleared!");
    window.location.reload();
  };

  return (
    isAuthenticated && (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          Account Settings
        </h1>

        <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 space-y-10 transition-all duration-300">

          {/* User Profile Info */}
          <section>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">👤 Profile Info</h2>
            <div className="flex items-center space-x-6">
              <img
                src={user.picture}
                alt={user.name}
                className="w-20 h-20 rounded-full border-2 border-gray-300 dark:border-gray-600 shadow-sm"
              />
              <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <p><strong>🙍 {user.name}</strong></p>
                <p>📧 {user.email}</p>
                <p className="text-xs">🆔 <span className="font-medium">Username:</span> <span className="font-mono">{user.email.split("@")[0]}</span></p>
                <p className="text-xs">🔐 <span className="font-medium">Provider:</span> <span className="font-mono">{authProvider}</span></p>
                <p className="text-xs">🔖 <span className="font-medium">User ID:</span> <span className="font-mono break-all">{user.sub}</span></p>
                {user?.locale && (
                  <p className="text-xs">🌍 <span className="font-medium">Locale:</span> <span className="font-mono">{user.locale}</span></p>
                )}
                {user?.email_verified !== undefined && (
                  <p className="text-xs">✅ <span className="font-medium">Email Verified:</span> <span className="font-mono">{user.email_verified ? "Yes" : "No"}</span></p>
                )}
                {user?.updated_at && (
                  <p className="text-xs">⏱️ <span className="font-medium">Last Updated:</span> <span className="font-mono">{new Date(user.updated_at).toLocaleString()}</span></p>
                )}
              </div>
            </div>
          </section>

          {/* Auto-Location Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">📍 Location Detection</h2>
            <AutoLocation  />
          </section>

          {/* Preferences */}
          <section>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Preferences & Notifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Toggle label="Dark Mode" state={darkMode} setState={setDarkMode} />
              <Toggle label="In-App Notifications" state={notifications} setState={setNotifications} />
              <Toggle label="Email Notifications" state={emailNotifications} setState={setEmailNotifications} />
              <Toggle label="Email Alerts" state={emailAlerts} setState={setEmailAlerts} />
              <Toggle label="Streak Alerts" state={streakAlerts} setState={setStreakAlerts} />
            </div>
          </section>

          {/* Danger Zone */}
          <section className="pt-4 border-t border-gray-300 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h2>
            <div className="space-y-4">
              <button
                onClick={handleDeleteAccount}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg"
              >
                Delete Account
              </button>
              <button
                onClick={handleDeleteData}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg"
              >
                Delete All Stored Data
              </button>
              <button
                onClick={handleClearCache}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
              >
                Clear Cache
              </button>
            </div>
          </section>

          {/* Save Button */}
          <div className="text-center pt-4">
            <button
              onClick={() => alert("Settings saved! (Functionality pending)")}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-xl shadow transition duration-200"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    )
  );
};

const Toggle = ({ label, state, setState }) => (
  <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700">
    <span className="text-gray-800 dark:text-gray-100">{label}</span>
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={state}
        onChange={() => setState(!state)}
      />
      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:bg-blue-500 relative transition-all">
        <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${state ? "translate-x-5" : ""}`}></div>
      </div>
    </label>
  </div>
);

export default Settings;
