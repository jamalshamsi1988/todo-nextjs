
import { Inter } from 'next/font/google'
import HomePage from '../../components/template/HomePage'
import { getSession } from 'next-auth/react';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <HomePage />
  )
}

export async function getServerSideProps({req}){
  const session = await getSession({req});
  if(!session){
    return {
      redirect :{
        destination :"/signin",
        permanent :false
      }
    }
  }
  return {
    props:{}
  }

}