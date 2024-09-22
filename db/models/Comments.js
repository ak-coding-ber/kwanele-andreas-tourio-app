import mongoose from "mongoose";
const { Schema } = mongoose;
const commentsSchema = new Schema({
  name: { type: String, require: true },
  comment: { type: String, require: true },
});

const Comments =
  mongoose.models.Comments || mongoose.model("Comments", commentsSchema);
export default Comments;
