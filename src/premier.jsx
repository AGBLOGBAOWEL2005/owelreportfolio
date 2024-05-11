
import './App.css'
function Apppremier(){
    return(
        <div className='principal'>
            <h4 className='monprofil'>Mon profil</h4>
            <div className='Decouvertes'>
               <h6 className='decouvre'>Découvrez-moi
               <div className='present'>Je m'appelle Owel Mawunan AGBLOGBA , créacteur de site web et programmeur . Universitaire à l'ESMT Dakar , j'ai suivi plusieurs formations dont HTML, organisation des résaux aériens et sous terrains , la mathématique I, l'électricité... Grâce à ces différentes formations suivies , j'ai réussi à essayer ma compétence surtout dans le domaine d'html et d'électricité </div>
               </h6>
            </div>
            <img src="src/owel.jpg" alt="image" className='images' />
            <h2 className='presentation'> Je m'appelle <span className='nom'>Owel Mawunan AGBLOGBA</span>,Créateur de site web et programmeur </h2>
            <div className='fond'>
            <div className='slider-container slider-1'>
    <div className='slider'>
      <div className='Decouvrez'>
      <div>
      <h4>DECOUVREZ MES PROJETS </h4>
      </div>
      </div>
      <div className='page'>
      <div>
       <img src="src/Creer-site-gratuit.webp" alt="" />
       <h5 className='titre1'>CREACTION DE SITE WEB</h5>
       </div>
      </div>
      <div className='electricite'>
      <div>
       <img src="src/filtre.jpg" alt="" className='electriciteimage'/>
       <h5 className='titre2'>REALISATION D'UN MONTAGE ELECTRIQUE</h5>
      </div>
      </div>
      <div className='Decouvrez2'>
      <div>
      <h4>DECOUVREZ MES PROJETS </h4>
      </div>
      </div>
      </div>
  </div>
  </div>
        </div>
    )
}

export default Apppremier;