import Link from "next/link"
import {VscListSelection} from "react-icons/vsc"
import {BiMessageAltAdd} from "react-icons/bi"
import {RxDashboard} from "react-icons/rx"

const Layout = ({children}) => {
  return (
    <div className="container">
        <header>
            <p>Jamal Todo App</p>
        </header>
        <div className="container--main">
            <aside>
                <p>Welcome</p>
                <ul>
                    <li>
                        <VscListSelection />
                        <Link href="/">Todos</Link>
                    </li>
                    <li>
                        <BiMessageAltAdd />
                        <Link href="/add-todo">Add Todo</Link>
                    </li>
                    <li>
                        <RxDashboard />
                        <Link href="/profile">Profile</Link>
                    </li>
                </ul>
            </aside>
            <section>{children}</section>
        </div>
      
    </div>
  )
}

export default Layout
