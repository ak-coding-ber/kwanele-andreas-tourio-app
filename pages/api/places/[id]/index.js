import Place from "../../../../db/models/Place";
import dbConnect from "../../../../db/connect";

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
        const places = await Place.findById(id);
        console.log("places", places);
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
      }
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    console.log(e);
  }

  // const place = db_places.find((place) => place._id.$oid === id);
  // const comment = place?.comments;
  // const allCommentIds = comment?.map((comment) => comment.$oid) || [];
  // const comments = db_comments.filter((comment) =>
  //   allCommentIds.includes(comment._id.$oid)
  // );

  // if (!place) {
  //   return response.status(404).json({ status: "Not found" });
  // }

  // response.status(200).json({ place: place, comments: comments });
}
