
export default function BannerApp(){

    return(
       <>
       <section className="banner-section style-1">
            <div className="container">
                <div className="section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-10">
                            <div className="banner-content">
                                <h6 className="subtitle text-uppercase fw-medium">Formation Culinaire</h6>
                                <h2 className="title"><span className="d-lg-block">Manger Ivoirien</span> C'est manger <span className="d-lg-block">Colorés</span></h2>
                                {/* <p className="desc">Free online courses from the world’s Leading experts. join 18+ million Learners today.</p> */}
                                <form action="/">
                                    <div className="banner-icon">
                                        <i className="icofont-search"></i>
                                    </div>
                                    <input type="text" placeholder="Rechercher un cours"/>
                                    <button type="submit">Recherche</button>
                                </form>
                                {/* <div className="banner-catagory d-flex flex-wrap">
                                    <p>Most Popular : </p>
                                    <ul className="lab-ul d-flex flex-wrap">
                                        <li><a href="#">Figma</a></li>
                                        <li><a href="#">Adobe XD</a></li>
                                        <li><a href="#">illustration</a></li>
                                        <li><a href="#">Photoshop</a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-6">
                            <div className="banner-thumb">
                                {/* <img src="" alt="img"/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-shapes"></div>
            {/* <div className="cbs-content-list d-none">
                <ul className="lab-ul">
                    <li className="ccl-shape shape-1"><a href="#">16M Students Happy</a></li>
                    <li className="ccl-shape shape-2"><a href="#">130K+ Total Courses</a></li>
                    <li className="ccl-shape shape-3"><a href="#">89% Successful Students</a></li>
                    <li className="ccl-shape shape-4"><a href="#">23M+ Learners</a></li>
                    <li className="ccl-shape shape-5"><a href="#">36+ Languages</a></li>
                </ul>
            </div> */}
        </section>
       </>
    )
}