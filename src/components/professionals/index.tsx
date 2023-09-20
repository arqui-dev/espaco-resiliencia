import './masonry.css';

import professionals from '../../utils/professionalList.json';

export const ProfessionalList = () => {
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
                    {professionals.map((element: { name: string; specialty: string; register: string; _id: number; picture: boolean; description: string; books:boolean; book_name:string}) => {
                        return(
                            <div className="item">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="media">
                                            {element.picture ? ( 
                                            <div className="media-left">
                                                <figure className="image is-128x128">
                                                    <img src={"https://s3-sa-east-1.amazonaws.com/espacoresiliencia.com/profissionais/" + element._id + ".jpg"} alt={element.name}></img>
                                                </figure>
                                            </div>
                                            ):<></> } 
                                            <div className="media-content">
                                                <p className="title is-size-5-desktop is-size-4-tablet is-size-6-mobile">{element.name}</p>
                                                <p className="subtitle is-size-6-desktop is-size-6-tablet is-size-7-mobile">{element.specialty}</p>
                                                <p>{element.register}</p>
                                                <p>{element.books ? (
                                                    <a href="https://www.amazon.com/Lucimeire-Prestes-Oliveira-Tom%C3%A9-ebook/dp/B0B5Y6M627/">{element.book_name}</a>
                                                ):<></>}</p>
                                            </div>
                                        </div>
                                        <div className="content is-size-6 has-text-justified has-text-weight-light">{element.description}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>           
    )
}
