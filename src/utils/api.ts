import { createClient } from "@supabase/supabase-js";
import { AvatarFullConfig } from "react-nice-avatar";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
);

export type GuestBookRow = {
  id: number;
  writer: string;
  message: string;
  avatar_config: AvatarFullConfig | null;
  created_at: Date;
}

export async function getGuestBook() {
  const { data } = await supabase.from("guest_book_view")
    .select<"*", GuestBookRow>()
    .order('created_at', { ascending: false });
  return data || [];
}

type WriteGuestBook = {
  writer: string;
  password: string;
  message: string;
  avatar_config: AvatarFullConfig | null;
};

export async function writeGuestBook(data: WriteGuestBook) {
  await supabase.from("guest_book").insert([data]).select();
}

type DeleteGuestBook = {
  id: number;
  password: string;
};

export async function deleteGuestBook(data: DeleteGuestBook) {
  const { error } = await supabase.functions.invoke('hello-world', {
    body: data,
  });
  if (error) {
    throw new Error(error);
  }
}
