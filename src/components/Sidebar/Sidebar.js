import "./Sidebar.css";

function sidebar() {
  return (
    <div className="side-bar">
      <div className="sidebar-item">
        <span className="material-icons-outlined active">lightbulb</span>
        <span className="sidebar-text">Notes</span>
      </div>
      <div className="sidebar-item">
        <span className="material-icons-outlined">notifications</span>
        <span className="sidebar-text">Reminders</span>
      </div>
      <div className="sidebar-item">
        <span className="material-icons-outlined">edit</span>
        <span className="sidebar-text">Edit labels</span>
      </div>
      <div className="sidebar-item">
        <span className="material-icons-outlined">archive</span>
        <span className="sidebar-text">Archive</span>
      </div>
      <div className="sidebar-item">
        <span className="material-icons-outlined">delete</span>
        <span className="sidebar-text">Trash</span>
      </div>
    </div>
  );
}

export default sidebar;
