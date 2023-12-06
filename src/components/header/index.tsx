import React from "react";
import './home.css';
import logo from '../../assets/logo.png';

export const Header = () => {
  return (
    <header className="hero bg-img" id="header">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="#header">
                <figure className="image is-64x64">
                  <img className="image logo" src={logo} alt="Espaço Resiliência - Atendimento ao indivíduo, casal e família" />
                </figure>
                <span className=" is-inline-block">
                  <h1 className="is-size-5 is-size-4-mobile has-text-weight-semibold has-text-white">Espaço Resiliência</h1>
                  <h3 className="is-size-6 is-hidden-mobile has-text-weight-semibold has-text-white">Atendimento especializado ao indivíduo, casal e família.</h3>
              </span>
              </a>
              <span className="navbar-burger burger has-text-white" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navMenu" className="navbar-menu base-green-background">
              <div className="navbar-end">
                <a href="#team" className="navbar-item is-size-4-mobile is-size-5">Equipe</a>
                {/* <a href="#contact" className="navbar-item is-size-4-mobile is-size-5">Contato</a> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
      
      <div className="hero-body">
        <div className="container has-text-centered-mobile has-text-left">
          <h5 className="has-text-white-ter is-subtitle has-text-weight-semibold is-size-6-mobile is-size-5-tablet is-size-3">
            Idealizado para proporcionar o melhor em atendimento especializado ao indivíduo, casal e família. Oferecemos ambiente aconchegante e climatizado.
          </h5>
          <br />
        </div>
        <div className="container has-text-centered-mobile has-text-left">
          <h4 className="has-text-white-ter is-title has-text-weight-light is-size-5-mobile is-size-3-tablet is-size-2">
            Contamos com profissionais qualificados de Psicologia, Psiquiatria, Psicopedagogia, Neuropsicologia, Neuropsicopedagogia, Fonoaudiologia, Acupuntura e Terapia de Casal e Família.
          </h4>
          <br />
        </div>
        <div className="container has-text-centered-mobile has-text-left">
          <div className="columns">
            <div className="column is-narrow">
              <a className="button is-medium is-primary is-inverted is-outlined" href="#team">
                <span>Conheça nossa equipe</span>
              </a>
            </div>
            <div className="column is-narrow">
              <a className="button is-medium is-primary is-inverted is-outlined" href="#units">
                <span>Visite nosso Espaço!</span>
              </a>
            </div>
            <div className="column is-narrow">
              <a className="button is-medium is-primary is-inverted is-outlined" href="#books">
                <span>Nossas Publicações!</span>
              </a>
            </div>
          </div>
        </div>  
      </div>
  </header>
  )
}
