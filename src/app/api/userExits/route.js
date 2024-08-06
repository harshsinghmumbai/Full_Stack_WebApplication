import { ConnectMongoDB } from "@/lib/mongodb";
import Auth from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    await ConnectMongoDB();
    const user = await Auth.findOne({ email }).select("_id");
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json(
      { message: "UserExist part file error", error },
      { status: 500 }
    );
  }
}
