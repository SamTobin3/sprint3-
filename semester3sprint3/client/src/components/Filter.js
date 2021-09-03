import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPizzas } from "../actions/pizzaActions";

export default function Filter() {
  const dispatch = useDispatch();
  const [searchkey, setSearchkey] = useState("");
  const [category, setCategory] = useState("all");

  return (
    <div className="container">
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <div className="col-md-3 ">
          <input
            value={searchkey}
            onChange={e => {
              setSearchkey(e.target.value);
            }}
            type="text"
            className="form-control w-100"
            placeholder="search pizzas"
          />
        </div>
        <div className="col-md-3 mt-2 ">
          <select
            className="form-control w-100"
            id=""
            value={category}
            onChange={e => {
              setCategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Nonveg</option>
          </select>
        </div>
        <div className="col-md-3 mt-2">
          <button
            className="btn form-control w-100"
            onClick={() => dispatch(filterPizzas(searchkey, category))}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
