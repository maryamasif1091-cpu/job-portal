function JobList({ jobs, setSelectedJob, setTab }) {
  if (!jobs || jobs.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>No jobs found</h2>
        <p>Try searching: developer, designer, marketing, manager</p>
      </div>
    );
  }
  return (
    <div>
      {jobs.map((job, index) => (
        <div key={index} className="job-card">

          <h3>{job.title}</h3>
          <p><b>Company:</b> {job.company}</p>
          <p>{job.desc}</p>
          <button
            onClick={() => {
              setSelectedJob(job);
              setTab("apply");
            }}
          >
            Apply Now
          </button>

        </div>
      ))}
    </div>
  );
}
export default JobList;