import "./EventsPage.css";

function EventsPage() {
  const events = [
    { id: 1, name: "TechFest", date: "20 Sep 2025", category: "Technical" },
    { id: 2, name: "Cultural Night", date: "5 Oct 2025", category: "Cultural" },
    { id: 3, name: "Sports Meet", date: "15 Nov 2025", category: "Sports" },
  ];

  return (
    <div className="events-container">
      <h1>Events Catalog</h1>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <span className="tag">{event.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
