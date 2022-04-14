import "./Note.css";
import Notes from "./Notes";

export default function Note(props) {
  console.log("props", props.notes[0]);
  const { note } = props;
  console.log(note);
  return (
    <div className="Note">
      <Notes
        id={props.notes[0].id}
        title={props.notes[0].title}
        text={props.notes[0].title}
      />
      <Notes
        id={props.notes[1].id}
        title={props.notes[1].title}
        text={props.notes[1].title}
      />
      <Notes
        id={props.notes[2].id}
        title={props.notes[2].title}
        text={props.notes[2].title}
      />
    </div>
  );
}
