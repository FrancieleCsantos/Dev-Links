
import './styles.css';
import Avatar from '../assets/Avatar.png'
import Git from '../assets/Git.png'
import Instagram from '../assets/Instagram.png'
import linkedin from '../assets/LinkedIn.png'
import mode from '../assets/mode.png'

function Home() {
  return (
    <div className="App">
<div id="container">

<div id='profile'>
  <img src={Avatar} alt='Avatar'/>
  <p>@fransantos_black</p>
</div>
<div id='switch'>
<button>
 <img src={mode} alt='mode'/>
</button>
<span></span>
</div>
<ul>
  <li>
    <a href='#' >Sobre Mim</a>
  </li>
  <li>
    <a href='#' >Ver meus Projetos</a>
  </li>
  <li>
    <a href='#' >Cursos e voluntariado</a>

  </li>
 
</ul>
<div id='social'>
<a className='gitImg'  href='https://github.com/FrancieleCsantos'><img src={Git} alt='Git'/></a>
<a href='https://www.instagram.com/fransantos_black/'><img src={Instagram} alt='Instagram'/></a>
<a href='https://www.linkedin.com/in/franciele-santos-1105081b3/'><img src={linkedin} alt='linkedin'/></a>
</div>
</div>
    </div>
  );
}

export default Home;
