/* eslint-disable jsx-a11y/anchor-is-valid */
import { lazy,Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import FooterApp from './components/FooterApp';
// import HeaderApp from './components/HeaderApp';
import Layout from './components/Layout';


const Accueil = lazy(()=>import('./views/Accueil'));
const Connexion = lazy(()=>import('./views/Connexion'));
const Cours = lazy(()=>import('./views/Cours'));
const DetailsCours = lazy(()=>import('./views/DetailsCours'));
const Inscription = lazy(()=>import('./views/Inscription'));

const loader= (
  <div className="preloader">
  <div className="preloader-inner">
      <div className="preloader-icon">
          <span></span>
          <span></span>
      </div>
  </div>
</div>
)

function App() {
  return (
    <>
  
    <a href="#" className="scrollToTop"><i className="icofont-rounded-up"></i></a>
   <Suspense fallback={loader}>
    
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* routes public */}
        <Route path="/" element={<Accueil />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/cours/:id_cours" element={<DetailsCours />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />

        {/*  routes protegées */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route> */}

        {/* page Erreur */}
        {/* <Route path="*" element={<Missing />} /> */}
      </Route>
    </Routes>
   </Suspense>
  <FooterApp />
    </>
  );
}

export default App;
