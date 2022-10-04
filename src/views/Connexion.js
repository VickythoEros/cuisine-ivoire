import { NavLink } from "react-router-dom";
import HeaderApp from "../components/HeaderApp";



export default function Connexion(){


    return (
        <>
            <HeaderApp />
            
            {/* <div class="pageheader-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="pageheader-content text-center">
                                <h2>Login Page</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Login</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            
            <div class="login-section padding-tb section-bg">
                <div class="container">
                    <div class="account-wrapper">
                        <h3 class="title">Connexion</h3>
                        <form class="account-form">
                            <div class="form-group">
                                <input type="text" placeholder="User Name" name="username"/>
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Password" name="password"/>
                            </div>
                            <div class="form-group">
                                <div class="d-flex justify-content-between flex-wrap pt-sm-2">
                                    {/* <div class="checkgroup">
                                        <input type="checkbox" name="remember" id="remember"/>
                                        <label for="remember">Remember Me</label>
                                    </div> */}
                                    <a href="forgetpass.html">Mot de passe oublié ?</a>
                                </div>
                            </div>
                            <div class="form-group text-center">
                                <button class="d-block lab-btn"><span>Connexion</span></button>
                            </div>
                        </form>
                        <div class="account-bottom">
                            <span class="d-block cate pt-10">Pas de compte ?  <NavLink to="/inscription" >S'inscrire</NavLink></span>
                            <span class="or"><span>ou</span></span>
                            {/* <h5 class="subtitle">Login With Social Media</h5> */}
                            <ul class="lab-ul social-icons justify-content-center">
                                <li>
                                    <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="pinterest"><i class="icofont-pinterest"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}