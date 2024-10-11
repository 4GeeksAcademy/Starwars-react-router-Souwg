import React, { useContext } from "react"
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Characters = () =>{
    
    const {store} = useContext(Context);

    return (
        <div className="container">
            <div className="title text-danger mt-4 mb-0"><h2>Characters</h2></div>
            <div className="row">
            <div className="d-flex overflow-auto mt-2" style={{ gap: '2rem', padding: '1rem', whiteSpace: 'nowrap', borderRadius: '25px' }}>
                {store.characters.map((character, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card">
                        <img src={character.imageUrl} className="card-img-top" alt="..." style={{ height: '350px', width: '366px', objectFit: 'cover', objectPosition: 'center top', }} />
                        <div className="card-body pb-0">
                            <h5 className="card-title">{character.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush border-0 ">
                            <li className="list-group-item border-0 pb-0">Gender: {character.gender}</li>
                            <li className="list-group-item border-0 pb-0">Hair Color: {character.hair_color}</li>
                            <li className="list-group-item border-0 pb-0 mb-4">Eye-Color: {character.eye_color}</li>
                        </ul>
                        <div className="card-body d-flex justify-content-between" style={{ }}>
                        <Link to="/detailsCharacters">
                            <div className="btn text-primary" style={{ border: '2px solid #0d6efd' }}>Learn more!</div>
                        </Link>
                        <div className="btn text-primary" style={{ border: '2px solid FDF44D'}}><i className="fa-solid fa-heart"></i></div>
                         </div>
                    </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const Planets = () =>{

    const {store} = useContext(Context);

    return (
        <div className="container">
            <div className="title text-danger mt-4 mb-0"><h2>Planets</h2></div>
            <div className="row">
            <div className="d-flex overflow-auto mt-2" style={{ gap: '2rem', padding: '1rem', whiteSpace: 'nowrap' }}>
                {store.planets.map((planet, index) => (
                        <div key={index} className="col-md-4">
                            <div className="card">
                        <img src={planet.planetUrl} className="card-img-top" alt="..."/>
                        <div className="card-body pb-0">
                            <h5 className="card-title">{planet.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush border-0 ">
                            <li className="list-group-item border-0 pb-0">Population: {planet.population}</li>
                            <li className="list-group-item border-0 pb-0">Terrain: {planet.terrain}</li>
                        </ul>
                        <div className="card-body d-flex justify-content-between" style={{ }}>
                            <div className="btn text-primary" style={{ border: '2px solid #0d6efd' }}>Learn more!</div>
                            <div className="btn text-primary" style={{ border: '2px solid FDF44D'}}><i className="fa-solid fa-heart"></i></div>
                         </div>
                    </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}