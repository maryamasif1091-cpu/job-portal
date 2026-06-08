import { useState } from "react";
function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim() === "") return;
    setSubmittedFeedback(feedback);
    setFeedback(""); //clear input
  };
  return (
    <div>
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your feedback..."
          rows="6"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <br /><br />
        <button type="submit">Submit Feedback</button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <h3>Feedback:</h3>
        {submittedFeedback ? (
          <div style={{ background: "#eee", padding: "10px" }}>
            {submittedFeedback}
          </div>
        ) : (
          <p>No feedback yet</p>
        )}
      </div>
    </div>
  );
}
export default FeedbackForm;