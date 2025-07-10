import { navLinks } from '../../constants/index.js';
import logo from './../../public/images/logo.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
                scrub: true,
            },
        }); 

        navTween.fromTo("nav", { backgroundColor: "transparent" }, { backgroundColor: "#00000050", backgroundFilter: "blur(10px)", duration: 1, ease: "power1.inOut" });
    });
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