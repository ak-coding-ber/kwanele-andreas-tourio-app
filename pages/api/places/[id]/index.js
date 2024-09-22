import Place from "../../../../db/models/Place";
import dbConnect from "../../../../db/connect";
import Comment from "../../../../db/models/Comment";

export default async function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    return;
  }
  console.log("id", id);

  try {
    await dbConnect();
    try {
      if (request.method === "GET") {
        const places = await Place.findById(id).populate("comments");
        return response.status(200).json(places);
      } else if (request.method === "PATCH") {
        await Place.findByIdAndUpdate(id, {
          name: request.body.name,
          location: request.body.location,
          image: request.body.image,
          mapURL: request.body.mapURL,
          description: request.body.description,
        });
        response.status(200).json({ success: "Place successfully edited" });
      } else if (request.method === "DELETE") {
        const place = await Place.findByIdAndDelete(id);
        // Making sure comments associated to the place are also deleted in comments collection
        await Comment.deleteMany({
          _id: { $in: place.comments },
        });
        response.status(260).json("Place and comments deleted");
        return response.status(200).json(place);
      } else if (request.method === "POST") {
        try {
          const newComment = await Comment.create(request.body);
          await Place.findByIdAndUpdate(
            id,
            { $push: { comments: newComment._id } },
            { new: true }
          );
          response
            .status(200)
            .json({ success: "comment successfully created" });
        } catch (e) {
          console.log(e);
        }
      }
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    console.log(e);
  }
}
