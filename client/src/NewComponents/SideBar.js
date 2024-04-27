import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div
      style={{ width: '15vw', height: '100vh', backgroundColor: '#f0f0f0' }}
    >
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfolio</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
