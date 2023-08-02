import React, { Component } from 'react';
import Menu from'../utilities/Menu';
import scanner from '../../assets/images/scanner.jpg';
import echographie from '../../assets/images/echographie.jpg';
import IRM from '../../assets/images/IRM.jpg';
import consultation from '../../assets/images/consultation.jpg';
import radiographie from '../../assets/images/radiographie.jpg';
import mammographie from '../../assets/images/Mammographie.jpg';
import { Link } from 'react-router-dom';



export default class Home extends Component {
  render() {
    const steppers = ["1", "3", "3", "4"];
    return (
     <>

        <Menu steppers={steppers} />
        <div class="container pt-2">
        <div class="row">
                <div class="col-3 col-md-3"> </div>
                <div class="col-6 col-md-6">
                <h1> Choisissez le type d'examen:</h1>
                </div>
                <div class="col-3 col-md-3"></div>
            </div>
            <div class="row pt-2">
                <div class="col">
                <Link to="/suivant/0">
                   <img src={scanner} alt="Scanner" />
                </Link>
                </div>
                <div class="col">
                <Link to="/suivant/1">
                    <img src={echographie} alt="Echographie" />
                </Link>
                
                </div>
                <div class="col">
                <Link to="/suivant/2">
                   <img src={IRM} alt="IRM" />
                 </Link>
                </div>
            </div>
            <div class="row pt-2">
                <div class="col">
                <Link to="/suivant/3">
                    <img src={consultation} alt="consultation" />
                </Link>
               
                </div>
                <div class="col">
                <Link to="/suivant/4">
                       <img src={radiographie} alt="radiographie" />
                </Link>
               
                </div>
                <div class="col">
                <Link to="/suivant/5">
                    <img src={mammographie} alt="mammographie" />
                  </Link>
               
                </div>
            </div>

            <div class="row pt-1">
                <div class="col">
              
                </div>
                <div class="col">
                &nbsp;&nbsp;&nbsp;<Link to="/contenu" className='btn btn-success'>J'ai Plusieurs Examens</Link>
                &nbsp;&nbsp;&nbsp;<Link to="/suivant/15">Je ne trouve pas mon examen</Link>
                </div>
                <div class="col">
              
                </div>
            </div>
           

            
        </div>
     </>
    )
  }
}
