import React from "react";

const ClientShowcase = () => {
  const clients = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "James Wilson",
      role: "Game Developer",
      profileLink: "https://linkedin.com/in/james-wilson",
    },
    {
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      name: "Aria Lee",
      role: "UI/UX Designer",
      profileLink: "https://linkedin.com/in/aria-lee",
    },
    {
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "David Kim",
      role: "Tech Lead",
      profileLink: "https://linkedin.com/in/david-kim",
    },
    {
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      name: "Sara Gomez",
      role: "Product Manager",
      profileLink: "https://linkedin.com/in/sara-gomez",
    },
    {
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      name: "Henry Singh",
      role: "Marketing Director",
      profileLink: "https://linkedin.com/in/henry-singh",
    },
    {
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Emma Chen",
      role: "Creative Director",
      profileLink: "https://linkedin.com/in/emma-chen",
    },
  ];

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="text-blue-600 text-lg">⚡</span>
            <span className="text-blue-600 font-semibold">Our Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Collaborators</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Partnering with top innovators and teams to shape the future of gaming and technology.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">100+</div>
              <div className="text-gray-600">Projects</div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {client.name}
                </h3>
                
                <p className="text-gray-600 mb-4">{client.role}</p>
                
                <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">View Profile →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientShowcase;
