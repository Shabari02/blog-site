import Image from 'next/image'
import classes from './hero.module.css'

function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
           <Image src="/images/site/l.jpg" alt='my image'
           width={300}
           height={300} />
        </div>
        <h1>Hi, I'm Shabari Nathan</h1>
        <p>I am web developer</p>
    </section>
}

export default Hero;