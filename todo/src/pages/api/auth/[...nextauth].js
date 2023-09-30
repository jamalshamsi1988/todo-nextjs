import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers";

import connectDB from "../../../../utils/connectDB";
import User from "../../../../model/User";
import { hashPassword, verifyPassword } from "../../../../utils/auth";

const authOptions = {
    session : {strategy : "jwt"},
    providers :[
        CredentialsProvider({
            async authorize(credentials , req){
                const {email , password} = credentials;

                try {
                    await connectDB();
    
                } catch (error) {
                    console.log(error)
                    throw new Error("Error To Connect DB ")   
                }

                if(!email || !password) throw new Error("Invalid Data");

                const user = await User.findOne({email : email});
                if(!user) throw new Error("User dosen't exist!");

                const isValid = await verifyPassword(password , user.password);
                if(!isValid) throw new Error("Username or Password is incorrect")

                return {email}
            }
        })
    ]
}


export default NextAuth(authOptions);

