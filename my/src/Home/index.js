
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

</div>
    </div>
  );
}

export default Home;
