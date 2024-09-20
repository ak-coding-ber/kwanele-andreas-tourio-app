import Place from "../../../db/models/Place";
import dbConnect from "../../../db/connect";

export default async function handler(request, response) {
  try {
    await dbConnect();
    try {
      if (request.method === "GET") {
        const places = await Place.find();
        return response.status(200).json(places);
        // } else if (request.method === "POST") {
        //   await Place.create(request.body);
        //   response.status(200).json({ success: "Place successfully created" });
      }
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    console.log(e);
  }
}
