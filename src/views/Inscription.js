import HeaderApp from "../components/HeaderApp";


export default function Inscription(){


    return(
        <>
            <HeaderApp />
            {/* <div class="pageheader-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="pageheader-content text-center">
                                <h2>Register Now</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">SIGN UP</li>
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
                        <h3 class="title">S'inscrire</h3>
                        <form class="account-form">
                            <div class="form-group">
                                <input type="text" placeholder="User Name" name="username"/>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Email" name="email"/>
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Password" name="password"/>
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Confirm Password" name="password"/>
                            </div>
                            <div class="form-group">
                                <button class="lab-btn"><span> Inscription </span></button>
                            </div>
                        </form>
                        <div class="account-bottom">
                            <span class="d-block cate pt-10">Déjà un compte? <a href="login.html">Se connecter</a></span>
                            <span class="or"><span>ou</span></span>
                            {/* <h5 class="subtitle">Register With Social Media</h5> */}
                            <ul class="lab-ul social-icons justify-content-center">
                                <li>
                                    <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}