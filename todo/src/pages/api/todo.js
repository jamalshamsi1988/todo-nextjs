const { getSession } = require("next-auth/react");
const { default: connectDB } = require("../../../utils/connectDB");
const { default: User } = require("../../../model/User");


async function handler(req,res){

    try {
        await connectDB();
    } catch (error) {
        console.log(error);
        return res.status(500).json({status :"failed" , message :"Error connecting to DB"});
        
    }

    const session = getSession({req});
    if(!session){
        return res.status(401).json({status :"failed" , message :"You are not logged in!"});
    }

    const user = await User.findOne({email : session.user.email});
    if(!user){
        return res.status(404).json({status :"failed" , message :"User dosen't exist!"})
    }

    if(req.method ===  "POST"){
        const {title , status}=req.body;
        if(!title || !status){
            return res.status(422).json({status :"failed" , message :"Invalid data"});
        }
        user.todos.push({title , status});
        user.save();

        res.status(201).json({status :"success" , message :"User Created"});
    }
}

export default handler;