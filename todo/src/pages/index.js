
import { Inter } from 'next/font/google'
import HomePage from '../../components/template/HomePage'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <HomePage />
  )
}
