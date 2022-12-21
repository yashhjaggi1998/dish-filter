import React from "react";
import "./App.css";

export function Dishes({DishData}) {
    const dishList = DishData.map( (data, key) =>

        <div className="col-md-4 col-sm-6 card my-3 py-3 border-0" key={data.id}>
            <div className="card-img-top text-center">
                <img src={data.img} alt={data.title} className="photo w-75" />
            </div>
            <div className="card-body">
              <div className="card-title fw-bold fs-4">
                {data.title}: {data.price}
              </div>
              <div className="card-text">
                {data.category}
                </div>
            </div>
        </div>
    );
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {dishList}
            </div>
        </div>);
}


