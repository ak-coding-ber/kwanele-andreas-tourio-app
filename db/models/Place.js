import mongoose from "mongoose";

const { Schema } = mongoose;
const placeSchema = new Schema({
  name: { type: String, require: true },
  location: { type: String, require: true },
  image: { type: String, require: true },
  mapURL: { type: String, require: true },
  description: { type: String, require: true },
  comments: { type: Array, require: true },
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);
export default Place;
