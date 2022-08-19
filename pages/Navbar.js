import styles from '../styles/Home.module.css'
function Navbar() {
    return ( 
        <>
        <div className={styles.logo_container}>
                <a href="https://www.pokerschool.co.in/">
                    <img src="https://web.pokerbaazicdn.com/poker-school/poker-school-logo.svg" width="150" height="60" alt="PokerbaaziSchool" id="logo" data-height-percentage="54" data-actual-width="300" data-actual-height="65" />
                </a>
            </div>
        </>
     );
}

export default Navbar;