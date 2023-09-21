import './products.css';

import products from '../../utils/productsList.json';


export const Products = () => {
    return (
        <section className="section" id="books">
            <div className="container">
                <h2 className="is-title green-text has-text-weight-bold has-text-centered is-size-1"> Nossas Publicações </h2>
                <br />
            </div>
            <div className="container" id='product'>
                <div className="masonry">
                    {products.map((element: {_idPro: number; books:boolean; book_name:string; book_name2:string; products_image:boolean; link1:string;link2:string; name_products:string; idFoto:string}) => {
                        return(
                            <div className="item">
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="media" id={element.idFoto}>
                                                {element.products_image ? ( 
                                                <div className="media-left"> 
                                                    <figure className="image is-128x128">
                                                        <img src={"https://s3-sa-east-1.amazonaws.com/espacoresiliencia.com/profissionais/" + element._idPro + ".jpg"}  alt={element.name_products}></img>
                                                    </figure>
                                                </div>
                                                ):<></> } 
                                                <div className="media-content">
                                                    <p className="title is-size-5-desktop is-size-4-tablet is-size-6-mobile">{element.name_products}</p>
                                                    <p>{element.books ? (
                                                        <a target='._blank' href={element.link1}  >{element.book_name}</a>
                                                    ):<></>}</p>
                                                    &nbsp; <br />
                                                    <p>{element.books ? (
                                                        <a target='._blank' href={element.link2}  >{element.book_name2}</a>
                                                    ):<></>}</p>
                                                </div>
                                            </div>
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