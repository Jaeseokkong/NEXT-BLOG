import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");

  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("slug", slug)
    .order("create_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { slug, name, text } = body;

  const { error } = await supabase
    .from("comments")
    .insert([{ slug, name, text }]);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}