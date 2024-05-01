// its mendatory keep this api file name route.js

// Create my Own API...
import { NextResponse } from "next/server";

export function GET(request, response) {
  return NextResponse.json({
    name: "Abhijit",
    age: 24,
    address: "Chandrakona",
  },{status:200});
}
