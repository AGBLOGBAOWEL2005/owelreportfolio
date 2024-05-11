import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apppremier from './premier.jsx'

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Projet 1",
      description: "En html après ma formation, j'ai essayé de créer une page web en utilisant html et css puis un peu de javascript. Ainsi mon premier projet réalisé en html a été la création d'un site web portant sur les voyages . Après la créaction dudit site  , j'ai réussi à l'héberger . Ainsi le lien vers ce dernier est le suivant : ",
      imageUrl: "src/Creer-site-gratuit.webp"
    },
    {
        id:2,
        title: "Projet 2",
        description: "J'aussi essayé de tester mon expétise en électricité. Ainsi, en électricité j'ai eu à faire  une première expérience sur les feux tricolores. C'est ansi que j'ai réussi à programmer pour la première fois en arduino . Bien après cela, j'ai aussi tenter de monter les  filtres passe bas et passe haut  . Après ce montage , j'ai enfin vérifier la varaition du courant dans le filtre et de la tension d'entrée à l'aide d'un oscilloscope ",
        imageUrl: "src/filtre.jpg"
      }
    ];
    // Ajoutez d'autres projets ici
  return (
    <div>
      <Apppremier/>
    <div className="portfolio">
      <h1 className='port1'>Découvrez mes projets</h1>
      <h1 className='port2'>Découvrez mes projets</h1>
      <h1 className='port3'>Découvrez mes projets</h1>
      <h1 className='port4'>Découvrez mes projets</h1>
      <h1 className='port5'>Découvrez mes projets</h1>
      <h1 className='port6'>Découvrez mes projets</h1>
      <h1 className='port7'>Découvrez mes projets</h1>
      <div className="projects">
        {projects.map((project,index) => (
          <div className={`project ${index==0?"image1":index==1?"image2":index==2?"image3":""}`} key={project.id}>
             <h3>{project.title}</h3>
            <img src={project.imageUrl} alt={project.title} />
            <p>{project.description}</p>
            <a href="https://owel-oumou-site-web.github.io">https://owel-oumou-site-web.github.io</a>
          </div>
        ))}
      </div>
      <li className='contacter' onclick="toggleDiv()"> contactez-moi
            <ul className='contenu '>
                <li className='email'>Mon e-mail: <span className='mail'>mawnan14@gmail.com</span></li>
                <li className='Tel'>Tel: <span className='mail'>+221787148172/+22968578643 </span></li>
            </ul>
            </li>
    </div>
    </div>
  );
}

export default Portfolio;


