

export default function FooterApp(){

    return(
      
    <div className="news-footer-wrap">
        <div className="fs-shape">
            <img src="assets/images/shape-img/03.png" alt="fst" className="fst-1"/>
            <img src="assets/images/shape-img/04.png" alt="fst" className="fst-2"/>
        </div>
        <div className="news-letter">
            <div className="container">
                <div className="section-wrapper">
                    <div className="news-title">
                        <h3>Want Us To Email You About Special Offers And Updates?</h3>
                    </div>
                    <div className="news-form">
                        <form >
                            <div className="nf-list">
                                <input type="email" name="email" placeholder="Enter Your Email"/>
                                <input type="submit" name="submit" value="Subscribe Now"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div className="footer-bottom style-2">
                <div className="container">
                    <div className="section-wrapper">
                        <p>&copy; 2022 <a href="index.html">Audrey-Cuisine</a> Crée par <a href="/" target="_blank">Audrey</a> </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
 
        )
}