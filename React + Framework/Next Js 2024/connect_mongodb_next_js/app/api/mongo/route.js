import { NextResponse } from "next/server";

import { MongoClient } from "mongodb";



export async function GET(request,response) {
  // Replace the uri string with your connection string.
  const uri =
    `mongodb+srv://mongodb:hhSkR0HjNOnHhJhJ@cluster0.cupwun4.mongodb.net/`;

  const client = new MongoClient(uri);

  try {
    const database = client.db("abhijitdb");
    const product = database.collection("products");
    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const productdetails = await product.find(query).toArray();
    // console.log(productdetails);

    return NextResponse.json({ result: productdetails });

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


