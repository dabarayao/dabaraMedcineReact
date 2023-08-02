import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icone_footer from '../../assets/images/icone_footer.jpg';
export default class Footer extends Component {
  render() {
    return (
      <>
                <div class="col-1 col-md-1"></div>
                <div class="col-1 col-md-1"><Link to="/" className='btn btn-dark'>Retour</Link> </div>
                <div class="col-6 col-md-6"></div>
                <div class="col-4 col-md-4" style={{  display: "flex", alignItems: "center" }}>
                    <Link to="/suivant" style={{ fontSize: "17px", color: 'blue' }}>Je trouve pas mon examen</Link>
                    &nbsp;&nbsp;
                    <Link to="/suivant"><img src={icone_footer} alt="icone_footer" width="85" /></Link>
                </div>
      </>
    )
  }
}
 