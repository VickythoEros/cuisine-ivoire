import { NavLink, useNavigate } from "react-router-dom"


export default function CardCours(props){
    const navigate = useNavigate()

    return(
        <div className="col" onClick={()=>navigate('/cours/1',{replace:true})}>
            <div className="course-item">
                <div className="course-inner">
                    <div className="course-thumb">
                        <img src={props.lienImg} alt="course"/>
                    </div>
                    <div className="course-content">
                        <div className="course-category">
                            <div className="course-cate">
                                <a href="/">Adobe XD</a>
                            </div>
                            <div className="course-reiew">
                                <span className="ratting">
                                    <i className="icofont-ui-rating"></i>
                                    <i className="icofont-ui-rating"></i>
                                    <i className="icofont-ui-rating"></i>
                                    <i className="icofont-ui-rating"></i>
                                    <i className="icofont-ui-rating"></i>
                                </span>
                                <span className="ratting-count">
                                    03 reviews
                                </span>
                            </div>
                        </div>
                        <NavLink to="/cours/1" ><h5>Fundamentals of Adobe XD Theory Learn New</h5></NavLink>
                        <div className="course-details">
                            <div className="couse-count"><i className="icofont-video-alt"></i> 18x Lesson</div>
                            {/* <div className="couse-topic"><i className="icofont-signal"></i> Online Class</div> */}
                        </div>
                        {/* <div className="course-footer">
                            <div className="course-author">
                                <img src="assets/images/course/author/01.jpg" alt="course author"/>
                                <a href="team-single.html" className="ca-name">William Smith</a>
                            </div>
                            <div className="course-btn">
                                <a href="course-single.html" className="lab-btn-text">Read More <i className="icofont-external-link"></i></a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        )
}