import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header className="mb-10">
      <Link >
        <img className="w-40 " src="netflix-logo.png" alt="netflix-logo" />
      </Link>
    </header>
  )
}

export default Header
