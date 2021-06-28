import React from 'react'

function Card(props) {
    return (
       <>
       <div className="col-12 col-sm-6 col-md-4 my-3">
           <div className="card">
               <img src={props.avatar} alt="#" className="card-img-top" />
               <div className="card-body">
                   <h5 className="card-title text-center">{props.name}</h5>
                   <ul className="list-group list-group-flush">
                       <li className="list-group-item">Gender: {props.gender}</li>
                       <li className="list-group-item">Species: {props.species}</li>
                       <li className="list-group-item">Status: {props.status}</li>
                       <li className="list-group-item">Homeworld: {props.homeworld}</li>
                       <li className="list-group-item">Now Located: {props.located}</li>
                   </ul>
               </div>
           </div>
       </div>
       </>
    )
}

export default Card
