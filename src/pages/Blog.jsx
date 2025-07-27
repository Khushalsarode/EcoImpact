import { Link } from "react-router-dom";

const blogPosts = [
    {
        id: 1,
        title: "🌱 5 Easy Daily Habits to Cut Carbon Emissions",
        date: "2025-07-20",
        summary: "Discover simple habits like switching off unused lights or biking short distances that can reduce your daily footprint.",
        tag: "Tips",
        image: "https://images.squarespace-cdn.com/content/v1/5788b7b16a4963f2a542d038/1630214019442-UZI3FLMVT4TRQVLIBQ5E/reduce-carbon-footprint.jpg",
    },
    {
        id: 2,
        title: "🔥 Weekly Eco Challenge: Meatless Monday!",
        date: "2025-07-18",
        summary: "Join our Gemini-powered challenge to skip meat for a day and earn exclusive badges while saving the planet.",
        tag: "Challenges",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9AMIg0Ct7dE-QrvRZEEM3dFmec2vUou1h6g&s",
    },
    {
        id: 3,
        title: "🏙️ CityScore Rankings: Top 5 Greenest Cities",
        date: "2025-07-15",
        summary: "See how your city ranks in sustainability and what local communities are doing to reduce emissions.",
        tag: "Updates",
        image: "https://www.green.earth/hs-fs/hubfs/The%20top%2010%20green%20cities%20in%20the%20world.jpg?width=3000&height=2000&name=The%20top%2010%20green%20cities%20in%20the%20world.jpg",
    },
    {
        id: 4,
        title: "⚖️ New Environmental Regulations in 2025",
        date: "2025-07-10",
        summary: "The government has introduced new emission thresholds and water discharge compliance rules. Here's what it means for industries.",
        tag: "Policy",
        image: "https://trilegal.com/wp-content/uploads/2025/04/Green-Energy-KM-Team-01.jpg",
    },
    {
        id: 5,
        title: "💡 Smart Water Monitoring: How AI is Changing Sustainability",
        date: "2025-07-08",
        summary: "AI and IoT are transforming how industries monitor and treat water. Here’s how your plant can benefit.",
        tag: "Tech",
        image: "https://powertechmax.com/wp-content/uploads/2025/03/AI-and-smart-water-magement-1.png",
    },
    {
        id: 6,
        title: "📊 EcoPulse Launch Recap: Features, Goals & Roadmap",
        date: "2025-07-05",
        summary: "We launched EcoPulse with the vision of real-time monitoring, awareness, and gamified environmental action. Here’s our journey so far.",
        tag: "Updates",
        image: "https://www.productplan.com/uploads/product-launch-plan-roadmap-01.png",
    },
];

export default function Blog() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center text-green-600 dark:text-green-400">
                📰 EcoPulse Blog
            </h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <p className="text-xs uppercase text-green-600 font-semibold">
                                {post.tag}
                            </p>
                            <h2 className="text-lg font-bold mt-1 mb-2 text-green-600 dark:text-green-400">{post.title}</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{post.summary}</p>
                            <p className="text-xs text-gray-400 mt-2">{new Date(post.date).toLocaleDateString()}</p>
                            <Link
                                to={`/blog/${post.id}`}
                                className="mt-3 inline-block text-blue-600 dark:text-blue-400 text-sm hover:underline"
                            >
                                Read More →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
