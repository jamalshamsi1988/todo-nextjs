import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {signIn} from "next-auth/react";



const SignInPage = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const router = useRouter()

    const signInHandler=async ()=>{
        const res = await signIn("credentials" , {
            email ,
            password,
            redirect : false
        });
        if(!res.error) router.push("/");
    }

  return (
    <div className='signin-form'>
    <h3>Login Form</h3>
    <input type='text' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
    <input type='password' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
    <button onClick={signInHandler}>Login</button>  
    <div>
        <p>Create an account?</p>
        <Link href="/signup">Sign up</Link>
    </div>

</div>
  )
}

export default SignInPage
