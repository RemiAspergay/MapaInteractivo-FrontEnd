import React from "react";
import "./faunaCard.css";

function FaunaCard({data}) {

  return (
    <>
    {data.map((fauna, index) => (
    <div className="fauna-card" key={index}>
      <div
        className="imagen-fauna"
        style={{ backgroundImage: `url(${fauna.imagenFauna})` }}
      ></div>
      <div className="ncomun">
        <span>{fauna.ncomun}</span>
      </div>
      <div className="ncientifico">
        <span>Nombre científico</span>
      </div>
      <div className="nombre-cientifico">
        <span>{fauna.nombreCientifico}</span>
      </div>
      <div className="estado">
        <span>{fauna.estado}</span>
      </div>
      <div className="medida">
        <span>{fauna.medida}</span>
      </div>
      <div className="masa">
        <span>{fauna.masa}</span>
      </div>
      <div className="descripcion">
        <span>{fauna.descripcion}</span>
      </div>
      <div className="huella">
        <span>Huella</span>
      </div>
      <div
        className="imagen-huella"
        style={{ backgroundImage: `url(${fauna.imagenHuella})` }}
      ></div>
    </div>
    ))}
    </>
  );
}

export default FaunaCard;
