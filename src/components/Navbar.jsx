import { navLinks } from '../../constants/index.js';
import logo from './../../public/images/logo.png';

const Navbar = () => {
  return (
    <nav>
        <div>
            <a href="#home" className='flex items-center gap-2'>
            <img src={logo} alt="Logo" className="w-8 h-8" />
                <p>Velvet Pour</p>
            </a>
            <ul>
                {navLinks.map(link => (
                    <li key={link.id}>
                        <a href={link.url} className='flex items-center gap-2'>
                            <p>{link.title}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar