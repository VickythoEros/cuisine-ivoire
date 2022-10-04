import BannerApp from "../components/BannerApp";
import CardCategories from "../components/cardCategories/CardCategories";
import CardCours from "../components/cardCours/CardCours";
// import FooterApp from "../components/FooterApp";
import HeaderApp from "../components/HeaderApp";



export default function Accueil(){


    return(
        <>
        <HeaderApp />
        <BannerApp />
        <div className="category-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">Popular Category</span>
                    <h2 className="title">Popular Category For Learn</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-2 justify-content-center row-cols-xl-6 row-cols-md-3 row-cols-sm-2 row-cols-1">
                    
                    <CardCategories lienImage='https://us.123rf.com/450wm/myviewpoint/myviewpoint1908/myviewpoint190800220/128974506-gros-plan-de-rago%C3%BBt-de-boeuf-%C3%A0-la-sauce-tomate-avec-%C3%A9pices-et-herbes-servi-sur-une-assiette-avec-du-.jpg?ver=6' />
                    <CardCategories lienImage='https://us.123rf.com/450wm/myviewpoint/myviewpoint1908/myviewpoint190800220/128974506-gros-plan-de-rago%C3%BBt-de-boeuf-%C3%A0-la-sauce-tomate-avec-%C3%A9pices-et-herbes-servi-sur-une-assiette-avec-du-.jpg?ver=6' />
                    <CardCategories lienImage='https://us.123rf.com/450wm/myviewpoint/myviewpoint1908/myviewpoint190800220/128974506-gros-plan-de-rago%C3%BBt-de-boeuf-%C3%A0-la-sauce-tomate-avec-%C3%A9pices-et-herbes-servi-sur-une-assiette-avec-du-.jpg?ver=6' />
                    <CardCategories lienImage='https://us.123rf.com/450wm/myviewpoint/myviewpoint1908/myviewpoint190800220/128974506-gros-plan-de-rago%C3%BBt-de-boeuf-%C3%A0-la-sauce-tomate-avec-%C3%A9pices-et-herbes-servi-sur-une-assiette-avec-du-.jpg?ver=6' />
                

                    </div>
                    <div className="text-center mt-5">
                        <a href="course.html" className="lab-btn"><span>Browse All Categories</span></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="course-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">Featured Courses</span>
                    <h2 className="title">Pick A Course To Get Started</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
                     <CardCours lienImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLTmKnkZhopW49YRomsZQokx7zYQb4C3Uh59Fygfj5g&s"  />
                     <CardCours lienImg="https://villamaasai.fr/wp-content/uploads/2019/07/Poisson_Sauce_claire.jpeg"  />
                     <CardCours lienImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLTmKnkZhopW49YRomsZQokx7zYQb4C3Uh59Fygfj5g&s"  />
                     <CardCours lienImg="https://villamaasai.fr/wp-content/uploads/2019/07/Poisson_Sauce_claire.jpeg"  />
                     <CardCours lienImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLTmKnkZhopW49YRomsZQokx7zYQb4C3Uh59Fygfj5g&s"  />
                     <CardCours lienImg="https://villamaasai.fr/wp-content/uploads/2019/07/Poisson_Sauce_claire.jpeg"  />
                 
                    </div>
                </div>

            </div>
        </div>
        {/* <FooterApp /> */}
        </>
        )
}