import CardCours from "../components/cardCours/CardCours";
import HeaderApp from "../components/HeaderApp";


export default function Cours(){

    return(
        <>
        <HeaderApp />
        <div class="pageheader-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="pageheader-content text-center">
                            <h2>Page de cours</h2>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a href="/">Accueil</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Cours</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="group-select-section">
            <div class="container">
                <div class="section-wrapper">
                    <div class="row align-items-center g-4">
                        <div class="col-md-1">
                            <div class="group-select-left">
                                <i class="icofont-abacus-alt"></i>
                                <span>Filters</span>
                            </div>
                        </div>
                        <div class="col-md-11">
                            <div class="group-select-right">
                                <div class="row g-2 row-cols-lg-4 row-cols-sm-2 row-cols-1">
                                    <div class="col">
                                        <div class="select-item">
                                            <select>
                                                <option value="">All Categories</option>
                                                <option value="uncategorized">Uncategorized</option>
                                                <option value="academy">Academy</option>
                                                <option value="agency">Agency</option>
                                                <option value="app">App</option>
                                                <option value="bar">Bar</option>
                                            </select>
                                            <div class="select-icon">
                                                <i class="icofont-rounded-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="select-item">
                                            <select>
                                                <option value="">All Language</option>
                                                <option value="java">JAVA</option>
                                                <option value="php">PHP</option>
                                                <option value="html">HTML</option>
                                                <option value="python">PYTHON</option>
                                                <option value="javascript">JAVASCRIPT</option>
                                            </select>
                                            <div class="select-icon">
                                                <i class="icofont-rounded-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="select-item">
                                            <select>
                                                <option value="">All Prices</option>
                                                <option value="29">29</option>
                                                <option value="39">39</option>
                                                <option value="69">69</option>
                                                <option value="99">99</option>
                                                <option value="199">199</option>
                                            </select>
                                            <div class="select-icon">
                                                <i class="icofont-rounded-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="select-item">
                                            <select>
                                                <option value="">All Skills</option>
                                                <option value="html">HTML</option>
                                                <option value="css">CSS</option>
                                                <option value="php">PHP</option>
                                                <option value="java">JAVA</option>
                                                <option value="javascript">JAVASCRIPT</option>
                                                <option value="wordpress">WORDPRESS</option>
                                                <option value="react">REACT</option>
                                                <option value="vue">VUE</option>
                                                <option value="angular">ANGULAR</option>
                                            </select>
                                            <div class="select-icon">
                                                <i class="icofont-rounded-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="course-section padding-tb section-bg">
        <div class="container">
            <div class="section-wrapper">
                <div class="course-showing-part">
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <div class="course-showing-part-left">
                            <p>Voir les cours de 1-6 sur 10 cours</p>
                        </div>
                        <div class="course-showing-part-right d-flex flex-wrap align-items-center">
                            <span>Trier les cours par :</span>
                            <div class="select-item">
                                <select>
                                    <option value="">Ethnie</option>
                                    <option value="html">Titre</option>
                                </select>
                                <div class="select-icon">
                                    <i class="icofont-rounded-down"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
                    <CardCours lienImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLTmKnkZhopW49YRomsZQokx7zYQb4C3Uh59Fygfj5g&s"  />
                     <CardCours lienImg="https://villamaasai.fr/wp-content/uploads/2019/07/Poisson_Sauce_claire.jpeg"  />
                     <CardCours lienImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLTmKnkZhopW49YRomsZQokx7zYQb4C3Uh59Fygfj5g&s"  />
                     <CardCours lienImg="https://villamaasai.fr/wp-content/uploads/2019/07/Poisson_Sauce_claire.jpeg"  />
                     <CardCours lienImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLTmKnkZhopW49YRomsZQokx7zYQb4C3Uh59Fygfj5g&s"  />
                     <CardCours lienImg="https://villamaasai.fr/wp-content/uploads/2019/07/Poisson_Sauce_claire.jpeg"  />
                 
                </div>

                <ul class="default-pagination lab-ul">
                    <li>
                        <a href="#"><i class="icofont-rounded-left"></i></a>
                    </li>
                    <li>
                        <a href="#">01</a>
                    </li>
                    <li>
                        <a href="#" class="active">02</a>
                    </li>
                    <li>
                        <a href="#">03</a>
                    </li>
                    <li>
                        <a href="#"><i class="icofont-rounded-right"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        </>
    )
}