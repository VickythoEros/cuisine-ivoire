


export default function CardCategories(props){

    return(
        <div className="col">
            <div className="category-item text-center">
                <div className="category-inner">
                    <div className="category-thumb">
                        <img src={props.lienImage} alt="category"/>
                    </div>
                    <div className="category-content">
                        <a href="course.html"><h6>Computer Science</h6></a>
                        <span>24 Course</span>
                    </div>
                </div>
            </div>
         </div>
        )
}