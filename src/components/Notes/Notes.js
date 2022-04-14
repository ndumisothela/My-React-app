export default function Note() {
  return (
    <>
      <div className="notes">
        <div className="note" id="note.id">
          // onmouseover="" // onmouseout=""
          <span className="material-icons check-circle">check_circle</span>
          <div className="title-pin">
            <div className="title">Title</div>
            <span className="material-icons-outlined push_pin">push_pin</span>
          </div>
          <div className="text">Text</div>
          <div className="note-footer">
            <div className="tooltip">
              <span className="material-icons-outlined small-icon">
                add_alert
              </span>
              <span className="tooltip-text">Remind me</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined small-icon">
                person_add
              </span>
              <span className="tooltip-text">Collaborator</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined small-icon ">
                palette
              </span>
              <span className="tooltip-text">Background options</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined small-icon ">image</span>
              <span className="tooltip-text">Add image</span>
            </div>
            <div className="tooltip archive">
              <span className="material-icons-outlined small-icon ">
                archive
              </span>
              <span className="tooltip-text">Archive</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined small-icon">
                more_vert
              </span>
              <span className="tooltip-text">More</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
