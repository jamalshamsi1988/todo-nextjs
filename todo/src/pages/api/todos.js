import { getSession } from "next-auth/react";
import connectDB from "../../../utils/connectDB";
import User from "../../../model/User";
import {  sortTodos } from "../../../utils/sortTodos";
import { ObjectId } from 'bson'; 


async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Error connecting to DB" });
  }

  const session = await getSession({ req });
  if (!session) {
    return res
      .status(401)
      .json({ status: "failed", message: "You are not logged in!" });
  }

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return res
      .status(404)
      .json({ status: "failed", message: "User doesn't exist!" });
  }

  if (req.method === "POST") {
    const { title, status, description } = req.body;
    if (!title || !status || !description) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invalid data" });
    }
    user.todos.push({ title, status, description });
    user.save();

    res.status(201).json({ status: "success", message: "Todo Created" });
  } else if (req.method === "GET") {
    const sortedData = sortTodos(user.todos);
    res.status(200).json({ status: "success", data: { todos: sortedData } });
  } else if (req.method === "PATCH") {
    const { id, status } = req.body;

    if (!id || !status) {
      return res
        .status(422)
        .json({ status: "failed", message: "Invalid Data" });
    }
    const result = await User.updateOne(
      { "todos._id": id },
      { $set: { "todos.$.status": status } }
    );
    res.status(200).json({ status: "success" });
  }  else if (req.method === "DELETE") {
    const { id, status } = req.body;
  //  const user = await User.findOne({_id :id});
   user.todos.findOne(todo => todo._id === id);
   
    console.log(id)

    


  }
  }

export default handler;



