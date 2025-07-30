import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";
import imgLeft from './../../public/images/hero-left-leaf.png';
import imgright from './../../public/images/hero-right-leaf.png';

const Hero = () => {

    gsap.registerPlugin(SplitText);

    useGSAP(() => {

        document.fonts.ready.then(() => {
            const heroSplit = new SplitText(".title", {
                type: "chars, words",
                onSplit: (self) => {
                    gsap.from(self.chars, {
                        duration: 1.8,
                        yPercent: 100,
                        ease: "expo.out",
                        stagger: 0.05,
                    });
                }
            });

            const paragraphSplit = new SplitText(".subtitle", {
                type: "lines",
                onSplit: (self) => {
                    gsap.from(self.lines, {
                        opacity: 0,
                        duration: 1.8,
                        yPercent: 100,
                        ease: "expo.out",
                        stagger: 0.05,
                        delay: 1,
                    });
                }
            });

            heroSplit.chars.forEach((char) => char.classList.add("text-gradient"))
        });
    }, []);
    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>MOJITO</h1>
                <img src={imgLeft} alt="Hero Left Leaf" className='left-leaf' />
                <img src={imgright} alt="Hero Right Leaf" className='right-leaf' />
                <div className='body'>
                    <div className='content'>
                        <div className=' space-y-5 hidden md:block'>
                            <p>Cool. Crisp. Refreshing.</p>
                            <p className='subtitle'>Sip the spirit <br /> of summer</p>
                        </div>
                        <div className='view-cocktails'>
                            <p className='subtitle'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero