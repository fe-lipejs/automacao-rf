import React, { useState } from "react";
import "./servico.css";

export default function CategoryDropdown() {
  const [openCategory, setOpenCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Cabelo",
      services: [
        { id: 1, name: "Buzz Cut", price: "R$ 30,00", img: "https://i.imgur.com/4Z3fT1m.jpg" },
        { id: 2, name: "Disfarçado", price: "R$ 23,00", img: "https://i.imgur.com/VmFZZrJ.jpg" },
      ],
    },
    {
      id: 2,
      name: "Barba",
      services: [
        { id: 3, name: "Barba Completa", price: "R$ 25,00", img: "https://i.imgur.com/VmFZZrJ.jpg" },
      ],
    },
  ];

  return (
    <>
      {categories.map((cat) => (
        <div className="category-container sm:w-130 md:w-130" key={cat.id}>
          <div className="category-header">
            <div className="category-title">
              <span className="category-name">{cat.name}</span>
              <button className="icon-btn"><i className="fa fa-pen"></i></button>
              <button className="icon-btn"><i className="fa fa-trash"></i></button>
            </div>
            <button
              className="add-btn"
              onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
            >
              <i className={`icon-btn fa ${openCategory === cat.id ? "fa-minus" : "fa-plus"}`}></i>
            </button>
          </div>

          <div className={`dropdown-content ${openCategory === cat.id ? "open" : ""}`}>
            {cat.services.map((service) => (
              <div className="service-item" key={service.id}>
                <img src={service.img} alt={service.name} />
                <div className="service-info">
                  <strong>{service.name}</strong>
                  <span>{service.price}</span>
                </div>
                <div className="service-actions">
                  <button><i className="fa fa-pen"></i></button>
                  <button><i className="fa fa-trash"></i></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
