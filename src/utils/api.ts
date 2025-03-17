import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
);

export type GuestBookRow = {
  id: number;
  writer: string;
  password: string;
  message: string;
  created_at: Date;
}

export async function getGuestBook() {
  const { data } = await supabase.from("guest-book").select<"*", GuestBookRow>();
  return data || [];
}

type WriteGuestBook = {
  writer: string;
  password: string;
  message: string;
};

export async function writeGuestBook(data: WriteGuestBook) {
  await supabase.from("guest-book").insert([data]).select();
}
