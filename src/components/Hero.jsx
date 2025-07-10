import imgLeft from './../../public/images/cocktail-left-leaf.png';
import imgright from './../../public/images/cocktail-right-leaf.png';


const Hero = () => {
    return (
        <>

            <section id='hero' className='noisy'>
                <h1 className='title'>MOJITO</h1>
                <img src={imgLeft} alt="Cocktail Left Leaf" className='left-leaf' />
                <img src={imgright} alt="Cocktail Right Leaf" className='right-leaf' />
                <div className='body'>
                    <div className='content'>
                        <div className=' space-y-5 hidden md:block'>
                            <p>Cool. Crisp. Refreshing.</p>
                            <p className='subtitle'>Sip the spirit <br /> of summer</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero