
import {NavLink, useNavigate} from "react-router-dom";
export default function HeaderApp(){
    const navigate = useNavigate()

    return (
        <>
           <header className="header-section header-shadow">
           
                <div className="header-bottom ">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="logo">
                                <a href="index.html"><img src="assets/images/logo/01.png" alt="logo"/></a>
                            </div>
                            <div className="menu-area">
                                <div className="menu">
                                    <ul className="lab-ul">
                                        <li>
                                            <NavLink className="header-li-a"  to="/">Accueil</NavLink>
                                          
                                        </li>
                                        
                                        <li>
                                            <NavLink className="header-li-a"   to="/cours">Cours</NavLink>
                                          
                                        </li>
                                      
                                        <li>
                                            <NavLink className="header-li-a "  to="/recettes" >Recettes</NavLink>
                                           
                                        </li>
                                    </ul>
                                </div>
                                
                                <button onClick={()=>navigate('/connexion',{replace:true})} className="login"><i className="icofont-user"></i> <span>Connexion</span> </button>
                                <button onClick={()=>navigate('/inscription',{replace:true})} className="signup"><i className="icofont-users"></i> <span>Inscription</span> </button>

                                <div className="header-bar d-lg-none">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="ellepsis-bar d-lg-none">
                                    <i className="icofont-info-square"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}