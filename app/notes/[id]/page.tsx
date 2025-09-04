import css from "./NoteDetails.module.css";
import { fetchNoteById } from "@/lib/api/noteService";
type Props = {
  params: Promise<{ id: string }>;
};
export default async function NoteDetails({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteById(id);
  console.log(note);
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{note.createdAt}</p>
      </div>
    </div>
  );
}
