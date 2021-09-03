import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import { getAllPizzasReducer } from "../reducers/pizzaReducers";
import Pizza from "../components/Pizza";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter from "../components/Filter";

function Homescreen() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector(state => state.getAllPizzasReducer);

  const { loading, pizzas, error } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <Filter />
      <hr />
      <div className="row justify-content-center">
        <h2>
        DO you like pinapple on your pizza? or are you the old model of humanity??
        </h2>
        <span class="border-bottom border-danger"></span>
      </div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className="row justify-content-center">
          {pizzas.map(pizza => {
            return (
              <div className="col-md-3 m-3">
                <Pizza pizza={pizza} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Homescreen;
