import "./FeedbackPage.css";

function FeedbackPage() {
  return (
    <div className="feedback-container">
      <h1>Feedback Form</h1>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <select>
          <option>Student</option>
          <option>Faculty</option>
        </select>
        <select>
          <option>TechFest</option>
          <option>Cultural Week</option>
          <option>Sports Meet</option>
        </select>
        <textarea placeholder="Comments"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackPage;
