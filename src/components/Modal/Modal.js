import "./Modal.css";

// used arrow function

const Modal = () => {
  return (
    <Modal>
      <div className="modal open modal">
        <div className="modal-content">
          <div className="form-container">
            <form className="form" id="modal-form">
              <input
                className="note-title"
                id="modal-title"
                type="text"
                placeholder="Title"
              />
              <input
                className="note-text"
                id="modal-text"
                type="text"
                placeholder="Take a note..."
              />
              <div className="form-action">
                <div className="icons">
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
                    <span className="material-icons-outlined small-icon ">
                      image
                    </span>
                    <span className="tooltip-text">Add image</span>
                  </div>
                  <div className="tooltip">
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
                  <div className="tooltip">
                    <span className="material-icons-outlined small-icon ">
                      undo
                    </span>
                    <span className="tooltip-text">Undo</span>
                  </div>
                  <div className="tooltip">
                    <span className="material-icons-outlined small-icon">
                      redo
                    </span>
                    <span className="tooltip-text">Redo</span>
                  </div>
                </div>
                <button className="close-btn" id="modal-btn">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Modal;
