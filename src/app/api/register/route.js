import { ConnectMongoDB } from "@/lib/mongodb";
import Auth from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, message, email } = await req.json();
    await ConnectMongoDB();
    await Auth.create({ name, message, email });
    return NextResponse.json(
      { message: "Data Send to database" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Not Connect to database from server" },
      { status: 500 }
    );
  }
}
