function Navbar({ setTab }) {
  return (
    <div className="navbar">

      <button onClick={() => setTab("home")}>Home</button>
      <button onClick={() => setTab("search")}>Search Jobs</button>
      <button onClick={() => setTab("apply")}>Apply</button>
      <button onClick={() => setTab("feedback")}>Feedback</button>

    </div>
  );
}

export default Navbar;