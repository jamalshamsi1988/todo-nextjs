import User from "../../../../model/User";
import { hashPassword } from "../../../../utils/auth";
import connectDB from "../../../../utils/connectDB";


async function handler(req , res){
    if(req.method !== "POST") return;

    try{
        await connectDB();
        console.log("Connected to DB");

    }catch(error){
        console.log(error);
        return res.status(500).json({status :"failed" , message :"Error connecting to DB"});
    }

    const {email , password} = req.body;

    if(!email || !password){
        return res.status(422).json({status:"failed" , message : "Inavlid Data"});
    }

    const existingUser = await User.findOne({email : email});
    if(existingUser){
        return res.status(422).json({status :"failed" , message : "User Existed Already!"});
    }
    const hashedPassword = await hashPassword(password);

    const newUser = await User.crete({email : email , password : hashedPassword});
            console.log(newUser);
        res.status(201).json({status : "success" , message: "Created User"})  ;  

}

export default handler;