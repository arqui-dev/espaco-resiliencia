import React, { useEffect, useState } from 'react';
import client from '../../sanityClient';
import imageUrlBuilder from '@sanity/image-url';
import './masonry.css';

type Professional = {
  _id: string;
  name: string;
  specialty: string;
  register: string;
  photo: { asset: { _ref: string } } | null;
  description: string;
  linkToProducts?: string;
  _idFoto?: string;
  stamp?: number;
  stamp_picture?: boolean;
};

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source).url();
}

export const ProfessionalList: React.FC = () => {
  const [professionals, setProfessionals] = useState<Professional[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "professionalList"]{_id, name, specialty, register, photo, description, linkToProducts, _idFoto, stamp, stamp_picture}`)
      .then((data) => setProfessionals(data))
      .catch(console.error);
  }, []);

  return (
    <section className="section" id="team">
      <div className="container">
        <h2 className="is-title green-text has-text-weight-bold has-text-centered is-size-1"> Profissionais </h2>
        <h4 className="is-subtitle green-text has-text-weight-semibold has-text-centered is-size-5-mobile is-size-4">
          Somos profissionais da área da Psicologia, Psiquiatria, Neuropsicologia, Psicopedagogia, Neuropsicopedagogia, acupuntura, Terapia de Casal e Família, Fonoaudióloga e Psicanálise.
        </h4>
        <br />
      </div>
      <div className="container">
        <div className="masonry">
          {professionals.map((professional) => (
            <div className="item">
            {/* <div key={professional._id} className="item"> */}
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    {professional.photo && professional.photo.asset && (
                      <div className="media-left">
                        <figure className="image is-128x128">
                          <img
                            src={urlFor(professional.photo.asset._ref)}
                            alt={professional.name}
                          />
                        </figure>
                      </div>
                    )}
                    <div className="media-content">
                      <p className="title is-size-5-desktop is-size-4-tablet is-size-6-mobile">{professional.name}</p>
                      <p className="subtitle is-size-6-desktop is-size-6-tablet is-size-7-mobile">
                        {professional.specialty}
                        <br />
                        {professional.register}
                        <br />
                        {professional.linkToProducts && (
                          <a href={`#${professional._idFoto}`}>{professional.linkToProducts}</a>
                        )}
                        {professional.stamp_picture && (
                          <figure>
                            <img
                              src={`https://s3-sa-east-1.amazonaws.com/espacoresiliencia.com/profissionais/${professional.stamp}.png`}
                              alt=""
                            />
                          </figure>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="content is-size-6 has-text-justified has-text-weight-light">
                    {professional.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
