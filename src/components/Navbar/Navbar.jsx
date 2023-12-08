import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='inner'>
            <h1>LOGO</h1>
            <nav className='quick-links'>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Shops</a>
            </nav>
            <nav className='socials'>
                <a href="/">Ig</a>
                <a href="/">Tt</a>
                <a href="/">Li</a>
            </nav>
        </div>
    </div>
  )
}

export default Navbar