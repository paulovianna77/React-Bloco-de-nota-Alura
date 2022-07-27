import React from "react";
import { Component } from "react";
import "./estilo.css";
import CardNota from "../CardNota";

class ListaDeNotas extends Component {

  constructor(props){
    super(props)
  }
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
