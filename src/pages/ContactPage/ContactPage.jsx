import "./ContactPage.css";

function ContactPage() {
  const contacts = [
    { name: "Dr. Ahmed Ali", role: "Faculty Coordinator", phone: "123-456-789", email: "ahmed@example.com" },
    { name: "Sara Omar", role: "Student Coordinator", phone: "987-654-321", email: "sara@example.com" },
  ];

  return (
    <div className="contact-container">
      <h1>Contact Information</h1>
      <div className="contacts-grid">
        {contacts.map((c, i) => (
          <div key={i} className="contact-card">
            <h3>{c.name}</h3>
            <p>{c.role}</p>
            <p>📞 {c.phone}</p>
            <p>✉️ {c.email}</p>
          </div>
        ))}
      </div>

      <div className="map-container">
        <iframe
          title="College Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
