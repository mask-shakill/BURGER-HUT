import DbConnection from "@/database/database";
import Burger from "@/models/burger";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await DbConnection();
    const data = await Burger.find();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Get failed" });
  }
}

export async function POST(request) {
  try {
    const { url, title, content, price, description } = await request.json();
    await DbConnection();
    await Burger.create({ url, title, content, price, description });
    return NextResponse.json({ message: "Data insert  successfully done" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Insert failed" });
  }
}
