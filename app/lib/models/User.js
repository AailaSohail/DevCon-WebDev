// import mongoose from "mongoose";

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String },
//   role: { type: String, enum: ["contestant", "judge", "organizer"], default: "contestant" },
// });

// const User = mongoose.models.User || mongoose.model("User", UserSchema);
// export default User;




import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
//   name: String,
  email: { type: String, unique: true },
  password: String,
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);
