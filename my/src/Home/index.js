
import './styles.css';
import Avatar from '../assets/Avatar.png'

function Home() {
  return (
    <div className="App">
<div id="container">

<div id='profile'>
  <img src={Avatar} alt='Avatar'/>
  <p>@fransantos_black</p>
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
  {/* //target='blank' para abrir uma nova aba */}
</ul>

</div>
    </div>
  );
}

export default Home;
