import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

// write POST API method to send the data
export async function POST(request, response) {
  const data = await request.formData();
  const file = data.get("file"); // to get the file from formData()

  if (!file) {
    return NextResponse.json({ message: "no image found", success: false });
  }

  // convert image in buffer..
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);

  // declear path where we want to upload this image
  const path = `./public/${file.name}`;

  await writeFile(path, buffer);

  return NextResponse.json({message:"file uploaded.." , success: true})
}
