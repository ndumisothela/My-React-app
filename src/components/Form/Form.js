import "./Form.css";

//used an arrow function here
const Form = () => {
  const formClickhandler = (event) => {
    console.log("form clicked on", event);
  };
  return (
    <>
      <div class="form-container" onClick={formClickhandler}>
        <form>
          <input class="note-text" type="text" placeholder="Take a note..." />
          <div class="form-action">
            <div class="tooltip">
              <span class="material-icons-outlined">check_box</span>
              <span class="tooltip-text">New list</span>
            </div>
            <div class="tooltip">
              <span class="material-icons-outlined">brush</span>
              <span class="tooltip-text">New note with drawing</span>
            </div>
            <div class="tooltip">
              <span class="material-icons-outlined">image</span>
              <span class="tooltip-text">New note with image</span>
            </div>
          </div>
        </form>
      </div>
      <div class="form-container active-form">
        <form>
          <div class="title-pin">
            <input class="note-title" type="text" placeholder="Title" />
            <span class="material-icons-outlined">push_pin</span>
          </div>
          <input class="note-text" type="text" placeholder="Text" />
          <div class="form-action">
            <div class="icons">
              <div class="tooltip">
                <span class="material-icons-outlined small-icon">
                  add_alert
                </span>
                <span class="tooltip-text">Remind me</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined small-icon">
                  person_add
                </span>
                <span class="tooltip-text">Collaborator</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined small-icon ">palette</span>
                <span class="tooltip-text">Background options</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined small-icon ">image</span>
                <span class="tooltip-text">Add image</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined small-icon ">archive</span>
                <span class="tooltip-text">Archive</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined small-icon">
                  more_vert
                </span>
                <span class="tooltip-text">More</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined small-icon ">undo</span>
                <span class="tooltip-text">Undo</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined small-icon">redo</span>
                <span class="tooltip-text">Redo</span>
              </div>
            </div>
            <button class="close-btn">Close</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
