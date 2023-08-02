import { Link } from 'react-router-dom';
import '../styles/style.css';


const Nav = () => {
  return (
    <>

     <div class="row pt-3">
            <div class="col-3 col-md-3">
            
            </div>
            <div class="col-6 col-md-6">
            <nav className="nav">
                <ul className="menu">
                    <li className="item">
                      <Link to="/suivant/10">Tête et Cou</Link>
                    </li>
                    <li className="item">
                        <Link to="/suivant/10">Membres supérieurs</Link>
                    </li>
                    <li className="item">
                        <Link to="/suivant/10">Colonnesvertébrales-rachis</Link>
                    </li>
                    <li className="item">
                        <Link to="/suivant/10">Thorax Abdomen et pelvis</Link>
                    </li>
                    <li className="item">
                        <Link to="/suivant/10">Membres inférieurs</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </div>

      
    </>
  );
};

export default Nav;
