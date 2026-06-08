import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";
import RegistrationForm from "./components/RegistrationForm";
import FeedbackForm from "./components/FeedbackForm";
import "./App.css";
function App() {
  const [tab, setTab] = useState("home");
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const jobs = [
    { title: "Frontend Developer", type: "Web", company: "Google", desc: "Build UI using React" },
    { title: "Backend Developer", type: "Web", company: "Amazon", desc: "Server-side APIs development" },
    { title: "Full Stack Developer", type: "Web", company: "Microsoft", desc: "Frontend and Backend work" },
    { title: "AI Engineer", type: "AI", company: "OpenAI", desc: "Build AI models and systems" },
    { title: "Machine Learning Engineer", type: "AI", company: "DeepMind", desc: "Train ML algorithms" },
    { title: "UI Designer", type: "Design", company: "Adobe", desc: "Create UI layouts" },
    { title: "UX Designer", type: "Design", company: "Figma", desc: "Improve user experience" },
    { title: "Graphic Designer", type: "Design", company: "Canva", desc: "Design visuals and branding" },
    { title: "Content Writer", type: "Content", company: "Medium", desc: "Write articles and blogs" },
    { title: "Digital Painter", type: "Art", company: "Behance", desc: "Create digital artwork" },
    { title: "Traditional Painter", type: "Art", company: "ArtStation", desc: "Hand painting artworks" },
    { title: "Figma Designer", type: "Tools", company: "Figma", desc: "UI design using Figma" },
    { title: "Customer Support", type: "Support", company: "Zendesk", desc: "Help customers solve issues" }
  ];
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="app">
      <Navbar setTab={setTab} />
      {}
      {tab === "home" && (
        <div className="dashboard">
          <h1>Job Fair Portal</h1>
       
          <div className="card">
            <h3>Job Listings</h3>
            <p>Find and apply for jobs in different fields easily.</p>
          </div>

          <div className="card">
            <h3>Sarch Job</h3>
            <p>Search jobs by title like developer, designer etc.</p>
          </div>

          <div className="card">
            <h3>Application System</h3>
            <p>Select a job and apply using a registration form.</p>
          </div>

          <div className="card">
            <h3>Feedback</h3>
            <p>Submit feedback and view your response.</p>
          </div>
        </div>
      )}
      {}
      {tab === "search" && (
        <div>
          <SearchBar setSearch={setSearch} />

          <JobList
            jobs={filteredJobs}
            setSelectedJob={setSelectedJob}
            setTab={setTab}
          />
        </div>
      )}
      {}
      {tab === "apply" && (
        <RegistrationForm selectedJob={selectedJob} />
      )}
      {}
      {tab === "feedback" && (
        <FeedbackForm />
      )}

    </div>
  );
}
export default App;