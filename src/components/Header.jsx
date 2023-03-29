import { Link, NavLink } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <div className="header">
      <div className='nav'>
        <div className="left">
          <NavLink className='link' to="/">Home</NavLink>
          <NavLink className='link' to="/faq">F.A.Q</NavLink>
        </div>
        <div className="right">
          <NavLink className='link' to="/account">Account</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
