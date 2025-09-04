"use client";
import css from "./NoteDetails.module.css";
import { fetchNoteById } from "@/lib/api";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const { data: note } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note?.title}</h2>
        </div>
        <p className={css.content}>{note?.content}</p>
        <p className={css.date}>{note?.createdAt}</p>
      </div>
    </div>
  );
}
