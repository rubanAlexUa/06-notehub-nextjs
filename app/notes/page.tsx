import { fetchNotes } from "@/lib/api";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";

export default async function Notes() {
  const query = "";
  const page = 1;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["note", query, page],
    queryFn: () => fetchNotes({ query, page }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}
