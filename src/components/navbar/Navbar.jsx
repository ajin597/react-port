import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span
             initial={{opacity: 0, scale: 0.5}}
             animate={{opacity: 1, scale: 1}}
             transition={{duration: 0.5}}
            >Jebin c</motion.span>
            <div className="social">
                <a href="https://www.linkedin.com/in/jebincr7/"><img src="/linkedin.png" alt="" /></a>
                <a href="https://github.com/ajin597"><img src="https://res.cloudinary.com/dajlabmrb/image/upload/v1713021018/github-mark-white_wbb8t5.svg" alt="" /></a>
                <a href="https://www.instagram.com/ajin_cr7__/"><img src="/instagram.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar