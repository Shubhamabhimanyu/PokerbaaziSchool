import styles from '../styles/Home.module.css'
import Link from 'next/link';
function Footer() {
    return ( 
        <>
        <div className={styles.box7_bkg}> 

<div className={styles.box7}>
Copyright © 2021 - 2022 PokerBaazi School. All rights reserved.
    <div className={styles.box7_link}>
    
    <Link href="/Termsandcondition"><a>Terms &amp; Conditions</a></Link>
    </div>
</div>
</div>
        </>
     );
}

export default Footer;