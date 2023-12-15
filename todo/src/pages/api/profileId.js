import { getSession } from "next-auth/react";
import connectDB from "../../../utils/connectDB";
import User from "../../../model/User";

 async function handler(req, res) {
  if (req.method === "PATCH"){
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Error in connected DB" });
  }
  const body = await req.json();
  const { name, lastName } = body;

  const session = await getSession({ req });
  if (!session) {
    return res
      .status(401)
      .json({ status: "failed", message: "You are not logged in !" });
  }


  const user = await User.findOne({ _id:profileId });
  if (!user._id.equals(user.userId)) {
    return res
      .status(404)
      .json({ status: "failed", message: "User doesn't existed!" });
  }

  user.name = name;
  user.lastName = lastName;
  user.save();
  console.log(user);
  return res
    .status(200)
    .json({ status: "success", message: "Profile is update" });
}
}

export default handler