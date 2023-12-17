import { Schema, model, models } from "mongoose";

const profileSchema = new Schema(
  {
   name:{
    type : String,
    required :true,
   },
   lastName :{
    type : String,
    required :true,
   },
   password :{
    type : String,
    required :true,
   },
   
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", profileSchema);
export default Profile;