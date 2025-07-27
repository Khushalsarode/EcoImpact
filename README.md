# 🌿 EcoPluse – Smart City Sustainability Platform

EcoPluse is a dynamic web-based platform designed to empower citizens, communities, and city planners to work together toward a greener, more sustainable future. From logging daily eco-habits to visualizing city-wide environmental data and participating in green activities, EcoPluse turns individual actions into collective impact.  

---

## 🚀 Elevator Pitch

**EcoPluse**: *Empowering communities and cities to grow greener—one action at a time.*

---

## 🌟 Features

- 🗺️ **City Heatmap Dashboard**: Visualize eco-activity clusters and green spots like parks and bike zones.
- 🙋‍♀️ **Community Contributions**: Submit local environmental issues and green initiatives.
- 🧠 **AI-Powered Gemini Suggestions**: Explore policy ideas and city improvement challenges.
- 🧪 **Carbon Challenges**: Participate in challenges to reduce your carbon footprint.
- 📆 **Log Daily Habits**: Track eco-friendly habits and monitor progress.
- 🛍️ **Marketplace**: Browse sustainable products or services.
- ⚙️ **Settings & Profiles**: Customize your experience and profile.

---

## 💡 Inspiration

Inspired by the need for **community-driven environmental action** in urban areas, EcoPluse bridges the gap between **citizens**, **policymakers**, and **data** to create a transparent and engaging platform that fosters real-world sustainability.

---

## 🛠️ How We Built It

- **Frontend**: React + TailwindCSS + Vite
- **Backend**: Mongodb
- **Authentication**: Auth0
- **AI Integration**: Gemini AI (for city challenges & suggestions)
- **Maps & Visuals**: Leaflet 
---

## 😅 Challenges We Ran Into

- Integrating AI-generated suggestions meaningfully into user flows
- Designing a mobile-first UI that feels both modern and informative
- Managing real-time data updates across city dashboards
- Balancing user engagement with clear environmental goals

---

## 🧑‍💻 Local Development Setup

1. **Clone the repo**  
   ```bash
   git clone https://github.com/khushalsarode/ecoimpact.git
   cd ecoimpact
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup `.env` file**
   Create a `.env` file in the root directory with the following (replace with your keys):

   ```env
   VITE_AUTH0_DOMAIN=your-auth0-domain
   VITE_AUTH0_CLIENT_ID=your-client-id
   VITE_GEMINI_API_KEY=your-firebase-key
   VITE_MONGO_DB_URI= uri
   ```

4. **Start the app**

   ```bash
   npm run dev
   ```

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
Please open an issue or pull request to get involved.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 💚 Built with love during Hack the Portfolio 💻 🌍

```