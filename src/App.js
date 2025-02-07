import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 text-gray-900">
      {/* Hero Section */}
      <header className="relative w-full h-[400px] flex items-center justify-center text-white">
        <img
          src="https://jupiter.money/blog/wp-content/uploads/2024/07/Cost-of-Living-in-Pune.jpg"
          alt="City View"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <h1 className="relative text-4xl md:text-6xl font-bold ">Welcome to Pune</h1>
      </header>

      {/* City Description */}
      <section className="text-center p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-600">Discover the Wonders</h2>
        <p className="mt-4 text-lg text-gray-700">
        Pune is a vibrant city in India known for its rich history, educational institutions, and thriving tech industry. It offers a mix of historical landmarks, delicious cuisine, and scenic beauty.Pune, being a pivotal city in the IT park of southern India, is often mistaken as a modern establishment. Indeed, the town has grown a lot, both economically and commercially. With advancements in different sectors and the emerging IT park, people from around the country have settled here to start a new life. But Pune is not coined as the Queen of Deccan just because of its economic or industrial status. Instead, the city is considered the hub of cultural and historical riches of Maharashtra that cannot be found anywhere else. Founded back in the 17th century, it has stood witness to several turning points and events.
        </p>
      </section>

      {/* Highlights Section */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {highlights.map((highlight, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={highlight.image}
              alt={highlight.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{highlight.title}</h3>
              <p className="text-gray-600 mt-2">{highlight.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-blue-500 text-white mt-10">
        <p>&copy; 2025 visitpune. All rights reserved.</p>
      </footer>
    </div>
  );
};

const highlights = [
  {
    title: "Rich in History",
    description: "Pune is home to Shaniwar Wada, Aga Khan Palace, and Sinhagad Fort, showcasing its rich Maratha history.",
    image: "https://staybloom.com/content/1697619716828-Desktop.jpg",
  },
  {
    title: "Delicious Food",
    description: "Pune's famous Misal Pav, Vada Pav, and authentic Maharashtrian Thali at local eateries.",
    image: "https://i0.wp.com/curryandvanilla.com/wp-content/uploads/2019/01/misal-pav-11b-1.jpg?fit=687%2C595&ssl=1",
  },
  {
    title: "Scenic Views",
    description: "Visit the serene hills of Lonavala, Mulshi Dam, and Vetal Tekdi for breathtaking landscapes.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/a6/3e/4a/view-from-the-top.jpg?w=1200&h=-1&s=1",
  },
  {
    title: "Education Hub",
    description: "Highlight Pune’s top educational institutions like Fergusson College, Symbiosis University, and COEP.",
    image: "https://i0.wp.com/gholaprohit.com/wp-content/uploads/2024/08/P-73-e1723353448358.jpg?fit=602%2C346&ssl=1",
  },
  {
    title: "Nightlife & Shopping",
    description: "Cover popular places like FC Road, MG Road, and Koregaon Park for shopping, pubs, and cafes.",
    image: "https://tripxl.com/blog/wp-content/uploads/2025/02/Pune-Nightlife-cp-840x425.jpg",
  },
  {
    title: "Weather & Best Visit Time",
    description: "Give travelers an idea of the best months to visit Pune.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnsPnZrWD7FluTRneVG2QtzdzO4rLmyt78rQ&s",
  },
];

export default App;
