import { useState } from "react";

function RegistrationForm({ selectedJob }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ❗ Job not selected
    if (!selectedJob) {
      setError("No job selected");
      return;
    }

    // ❗ Any field empty
    if (!name || !email || !education) {
      setError("Fill all fields");
      return;
    }

    // ✅ Success
    setError("");

    alert(
      "Application Submitted!\n" +
      "Job: " + selectedJob.title + "\n" +
      "Company: " + selectedJob.company_name + "\n" +
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Education: " + education
    );

    // clear form
    setName("");
    setEmail("");
    setEducation("");
  };

  return (
    <div>
      <h2>Apply Job</h2>

      {/* JOB INFO */}
      {selectedJob ? (
        <div style={{ background: "#eee", padding: "10px", marginBottom: "10px" }}>
          <h3>Applying for:</h3>
          <p>{selectedJob.title}</p>
          <p>{selectedJob.company_name}</p>
        </div>
      ) : (
        <p style={{ color: "red" }}>No job selected</p>
      )}

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
        <br /><br />

        {/* ERROR MESSAGE */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit Application</button>

      </form>
    </div>
  );
}

export default RegistrationForm;