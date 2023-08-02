


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Next(props) {
  // Declare a new state variable, which we'll call "count"
  const titleList = [
    "Scanner",
    "Echographie",
    "IRM",
    "consultation",
    "radiographie",
    "mammographie"
  ];

  const {id} = useParams();


  return (
    <>
    <div class="container pt-5">
        <div class="card">
              <div class="card-header" style={{color: "white", backgroundColor: "#083c80"}}>
              <h2>{id != 15 ? id != 10 ? titleList[id] : "Plusieurs examens" : "Rendez-vous à la clinique"} </h2>
              </div>
              <div class="card-body">
                <h5 class="card-title">{id != 15 ? id != 10 ? "commencons l'examen ..." : "commencons les examens ..." : "Nous vous attendons sur place"} </h5>
                <Link to="/" class="btn btn-dark">Retour</Link>
              </div>
        </div>
    </div>
    </>
  );
}

export default Next;

