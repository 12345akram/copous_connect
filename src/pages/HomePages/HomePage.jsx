import "./HomePage.css";

function HomePage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "TechFest 2025",
        date: "July 20, 2025",
      description:
        "Annual technology festival with coding marathons and robotics.",
    },
    {
      id: 2,
      title: "Cultural Week",
       date: "August 5, 2025",
      description:
        "Week-long celebration with dance, music, and art competitions.",
    },
    {
      id: 3,
         title: "Sports Meet",
       date: "September 10, 2025",
      description:
        "Inter-college sports events including football, cricket, and athletics.",
    },
  ];

  return (
    <div>
      {/* Banner */}
      <div className="banner">
        <h1>Welcome to CampusConnect 🎉</h1>
      </div>

      {/* Upcoming Events */}
      <section className="container">
        <h2 style={{ marginBottom: "20px" }}>Upcoming Events</h2>
        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p style={{ fontWeight: "bold", color: "#555" }}>{event.date}</p>
              <p>{event.description}</p>
              <button>Learn More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
