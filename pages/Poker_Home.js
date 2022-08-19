import styles from '../styles/Home.module.css'
import Footer from './Footer'
import Navbar from './Navbar'
function Poker_Home() {
    return ( 
        <>
    
        <div className={styles.md}>
          <Navbar/>
         
<div className={styles.box2}>
          <div className={styles.box2_a} >

              <div className={styles.box2_b}>
                   <h1>Get the Fundamentals of Poker at Your Fingertips</h1>
                  <p className={styles.box2_p}>New to poker? Download our interactive multimedia learning app and join the platform for beginners! Poker School is power-packed with features that are essential to understanding the game and helping a newcomer develop their skills.</p>
                  <button className={styles.box2_btn}>get the app</button>

              </div>

              <div className={styles.box2_c}>
                  <img loading="lazy" src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/main-banner-1.png' alt='' style={{ width: "100%" }} />
              </div>
          </div>
          <div className={styles.box2_bkg}></div>
</div>



          <div className={styles.box3}>
              <div className={styles.box3_1}>
                  <h2 className={styles.box3_h2}>Gear up to learn your way!</h2>
              </div>

              <div className={styles.box3_2}>
                  <div className={styles.card1}>
                      <div className={styles.card1_inner}>
                          <div style={{ marginBottom: "30px" }}>
                              <img loading='lazy' src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/Video-chapters.png' alt='' style={{ maxWidth: "100%" }} />
                          </div>                           <h4>
                              <span>Video chapters</span>
                          </h4>
                          <p>The foundation for learning any game is getting your basics right. Created by experts, our lessons are simple and easy to understand so that you can learn the a-b-c’s of poker.</p>
                      </div>
                  </div>
                  <div className={styles.card1}>
                      <div className={styles.card1_inner}>
                          <div style={{ marginBottom: "30px" }}>
                              <img loading='lazy' src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/Quizzes.png' alt='' style={{ maxWidth: "100%" }} />
                          </div>
                          <h4>
                              <span>Quizzes</span>
                          </h4>
                          <p>Knowledge checks are crucial to your learning journey. Set your understanding of the game right with quizzes that get you poker ready!</p>
                      </div>
                  </div>
                  <div className={styles.card1_last}>
                      <div className={styles.card1_inner}>
                          <div style={{ marginBottom: "30px" }}>
                              <img loading='lazy' src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/live-streaming.png' alt='' style={{ maxWidth: "100%" }} />
                          </div>
                          <h4>
                              <span>Live-streaming + Video Feed</span>
                          </h4>
                          <p>Experience is everything. Learn from poker experts around the country as they go live sharing their wisdom on the game. Watch out for pro-tips, hand analysis and exciting learning content every day in our Video Feed!</p>
                      </div>
                  </div>
              </div>

          </div>



          {/* box4 */}
          <div className={styles.box4}>
              <div className={styles.box4_a}>
                  <div className={styles.box4_a1}>
                      <div className={styles.box4_a1_a}>
                          <h2>New to Poker?<br />Lucky You!</h2>
                          <p>We are so envious you are just getting started with Poker! The Poker School by PokerBaazi is all about teaching you the basics with fun video chapters and quizzes!</p>
                          <h4>What’s more?</h4>
                      </div>
                  </div>
                  <div className={styles.box4_b}>
                      <div className={styles.box4_b1}>
                          <div className={styles.box4_img}>
                              <img src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/Learn-to-beat-the-Best.png' alt='' style={{ maxWidth: '100%', width: "80px", height: '80px' }} />
                          </div>
                          <div className={styles.box_b_text}>
                              <h4>Learn from the Best</h4>
                              <p>Seven years of being industry pioneers</p>
                          </div>
                      </div>
                      <div className={styles.box4_b1}>
                          <div className={styles.box4_img}>
                              <img src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/Learn-to-play-on-the-Best.png' alt='' style={{ maxWidth: '100%', width: "80px", height: '80px' }} />
                          </div>
                          <div className={styles.box_b_text}>
                              <h4>Learn to play on the Best</h4>
                              <p>World-class poker experience that remains unparalleled</p>
                          </div>
                      </div>
                      <div className={styles.box4_b1}>
                          <div className={styles.box4_img}>
                              <img src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/Learn-from-the-Best.png' alt='' style={{ maxWidth: '100%', width: "80px", height: '80px' }} />
                          </div>
                          <div className={styles.box_b_text}>
                              <h4>Learn to beat the Best</h4>
                              <p>Train to master the game and stand a chance in the real-world</p>
                          </div>
                      </div>
                      <div className={styles.box4_b1_last_child}>
                          <div className={styles.box4_img}>
                              <img src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/main-banner.png' alt='' style={{ maxWidth: '100%', width: "80px", height: '80px' }} />
                          </div>
                          <div className={styles.box_b_text}>
                              <h4>Be a part of the Best Poker Community</h4>
                              <p>Welcome to a family of poker lovers!</p>
                          </div>
                      </div>

                  </div>
              </div>
          </div>

          {/* box 5 */}
          <div className={styles.box5_a}></div>
          <div className={styles.box5}>
                {/* <div className={styles.box5_a}></div> */}
              <div className={styles.box5_b}>
                  <h2>What do our learners have to say?</h2>
              </div>
                 <div className={styles.box5_c}></div>

              <div className={styles.box5_d}>
                  <div className={styles.box5_d_text}>
                      <h2>Namita Gupta</h2>
                      <p style={{ color: "#666" }}>“Poker always confused me, but the Poker School app simplified things a lot and made the game accessible to me. I started playing Free Entry Tournaments just a day after downloading the app, and now I’m a small stake player on PokerBaazi, in love with the game and winning often!”</p>
                  </div>
              </div>

              <div className={styles.box5_e}>
                  <div className={styles.box5_e1}>
                      <h2>Rajeev Kumar</h2>
                      <p>“I always thought poker was all about chance and that really scared me. Poker School changed Poker for me. Their tutorial videos are simple and easy to understand. I started with free tournaments and after a few wins, moved up to cash games. Poker is not chance, it’s logic also.”</p>
                  </div>

                  <div className={styles.box5_e2}>
                      <h2>Naman Jha</h2>
                      <p>“Being a beginner learning a new skill like poker is not easy. I downloaded the Poker School app and realized how easy and fun it can be. The chapter videos helped me learn the basics and in a language of my choice. The quizzes gave me more confidence and I’m excited to learn more and master this game!”</p>
                  </div>
              </div>

              <div className={styles.box5_f}></div>
          </div>

        <div className={styles.box6}></div>

        {/* footer */}
        <Footer/>

        </div>
  
  {/* small dev */}
<div className={styles.ld}>
        
         <Navbar/>
        
         <div className={styles.box2}>
          <div className={styles.box2_a} >

              <div className={styles.box2_b}>
                   <h1>Get the Fundamentals of Poker at Your Fingertips</h1>
                  <p className={styles.box2_p}>New to poker? Download our interactive multimedia learning app and join the platform for beginners! Poker School is power-packed with features that are essential to understanding the game and helping a newcomer develop their skills.</p>
                  <button className={styles.box2_btn}>get the app</button>

              </div>

              <div className={styles.box2_c}>
                  <img loading="lazy" src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/main-banner-1.png' alt='' style={{ width: "100%" }} />
              </div>
          </div>
          <div className={styles.box2_bkg}></div>
</div>
          
         {/* box3 */}
         <div className={styles.box3}>
              <div className={styles.box3_1}>
                  <h2 className={styles.box3_h2}>Gear up to learn your way!</h2>
              </div>

              <div className={styles.box3_2}>
                  <div className={styles.card1}>
                      <div className={styles.card1_inner}>
                          <div style={{ marginBottom: "30px" }}>
                              <img loading='lazy' src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/Video-chapters.png' alt='' style={{ maxWidth: "100%" }} />
                          </div>                           <h4>
                              <span>Video chapters</span>
                          </h4>
                          <p>The foundation for learning any game is getting your basics right. Created by experts, our lessons are simple and easy to understand so that you can learn the a-b-c’s of poker.</p>
                      </div>
                  </div>
                  <div className={styles.card1}>
                      <div className={styles.card1_inner}>
                          <div style={{ marginBottom: "30px" }}>
                              <img loading='lazy' src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/Quizzes.png' alt='' style={{ maxWidth: "100%" }} />
                          </div>
                          <h4>
                              <span>Quizzes</span>
                          </h4>
                          <p>Knowledge checks are crucial to your learning journey. Set your understanding of the game right with quizzes that get you poker ready!</p>
                      </div>
                  </div>
                  <div className={styles.card1_last}>
                      <div className={styles.card1_inner}>
                          <div style={{ marginBottom: "30px" }}>
                              <img loading='lazy' src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/live-streaming.png' alt='' style={{ maxWidth: "100%" }} />
                          </div>
                          <h4>
                              <span>Live-streaming + Video Feed</span>
                          </h4>
                          <p>Experience is everything. Learn from poker experts around the country as they go live sharing their wisdom on the game. Watch out for pro-tips, hand analysis and exciting learning content every day in our Video Feed!</p>
                      </div>
                  </div>
              </div>

          </div>

      
                  {/* box4 */}
                  <div className={styles.box4}>
              <div className={styles.box4_a}>
                  <div className={styles.box4_a1}>
                      <div className={styles.box4_a1_a}>
                          <h2>New to Poker?<br />Lucky You!</h2>
                          <p>We are so envious you are just getting started with Poker! The Poker School by PokerBaazi is all about teaching you the basics with fun video chapters and quizzes!</p>
                          <h4>What’s more?</h4>
                      </div>
                  </div>
                  <div className={styles.box4_b}>
                      <div className={styles.box4_b1}>
                          <div className={styles.box4_img}>
                              <img src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/Learn-to-beat-the-Best.png' alt='' style={{ maxWidth: '100%', width: "80px", height: '80px' }} />
                          </div>
                          <div className={styles.box_b_text}>
                              <h4>Learn from the Best</h4>
                              <p>Seven years of being industry pioneers</p>
                          </div>
                      </div>
                      <div className={styles.box4_b1}>
                          <div className={styles.box4_img}>
                              <img src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/Learn-to-play-on-the-Best.png' alt='' style={{ maxWidth: '100%', width: "80px", height: '80px' }} />
                          </div>
                          <div className={styles.box_b_text}>
                              <h4>Learn to play on the Best</h4>
                              <p>World-class poker experience that remains unparalleled</p>
                          </div>
                      </div>
                      <div className={styles.box4_b1}>
                          <div className={styles.box4_img}>
                              <img src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/Learn-from-the-Best.png' alt='' style={{ maxWidth: '100%', width: "80px", height: '80px' }} />
                          </div>
                          <div className={styles.box_b_text}>
                              <h4>Learn to beat the Best</h4>
                              <p>Train to master the game and stand a chance in the real-world</p>
                          </div>
                      </div>
                      <div className={styles.box4_b1_last_child}>
                          <div className={styles.box4_img}>
                              <img src='https://www.pokerschool.co.in/wp-content/uploads/2021/10/main-banner.png' alt='' style={{ maxWidth: '100%', width: "80px", height: '80px' }} />
                          </div>
                          <div className={styles.box_b_text}>
                              <h4>Be a part of the Best Poker Community</h4>
                              <p>Welcome to a family of poker lovers!</p>
                          </div>
                      </div>

                  </div>
              </div>
          </div>

          {/* box 5 */}
          <div className={styles.box5_a}></div>
          <div className={styles.box5}>
                {/* <div className={styles.box5_a}></div> */}
              <div className={styles.box5_b}>
                  <h2>What do our learners have to say?</h2>
              </div>
                 <div className={styles.box5_c}></div>

              <div className={styles.box5_d}>
                  <div className={styles.box5_d_text}>
                      <h2>Namita Gupta</h2>
                      <p style={{ color: "#666" }}>“Poker always confused me, but the Poker School app simplified things a lot and made the game accessible to me. I started playing Free Entry Tournaments just a day after downloading the app, and now I’m a small stake player on PokerBaazi, in love with the game and winning often!”</p>
                  </div>
              </div>

              <div className={styles.box5_e}>
                  <div className={styles.box5_e1}>
                      <h2>Rajeev Kumar</h2>
                      <p style={{ color: "#666" }}>“I always thought poker was all about chance and that really scared me. Poker School changed Poker for me. Their tutorial videos are simple and easy to understand. I started with free tournaments and after a few wins, moved up to cash games. Poker is not chance, it’s logic also.”</p>
                  </div>

                  <div className={styles.box5_e2}>
                      <h2>Naman Jha</h2>
                      <p style={{ color: "#666" }}>“Being a beginner learning a new skill like poker is not easy. I downloaded the Poker School app and realized how easy and fun it can be. The chapter videos helped me learn the basics and in a language of my choice. The quizzes gave me more confidence and I’m excited to learn more and master this game!”</p>
                  </div>
              </div>

              <div className={styles.box5_f}></div>
          </div>

       <div className={styles.box6}></div>

        {/* footer */}
        <Footer/>
</div>
      </>
     );
}

export default Poker_Home;