import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, UseSelector } from "react-redux";
import { getPizzaById } from "../actions/pizzaActions";


import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";


export default function Editpizza({ match }) {
  const [name, setName] = useState("");
  const [smallprice, setSmallPrice] = useState();
  const [mediumprice, setMediumPrice] = useState();
  const [largeprice, setLargePrice] = useState();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer);

  const { pizza, error, loading } = getpizzabyidstate;

  const editpizzastate = useSelector(state => state.editPizzaReducer);
  const { editloading, editerror, editsuccess } = editpizzastate;

  useEffect(() => {
    if (pizza) {
      if (pizza._id === match.params.pizzaid) {
        setName(pizza.name);
        setDescription(pizza.description);
        setCategory(pizza.category);
        setSmallPrice(pizza.prices[0]["small"]);
        setMediumPrice(pizza.prices[0]["medium"]);
        setLargePrice(pizza.prices[0]["large"]);
        setImage(pizza.image);
      } else {
        dispatch(getPizzaById(match.params.pizzaid));
      }
    } else {
      dispatch(getPizzaById(match.params.pizzaid));
    }
  }, [dispatch, pizza]);

  function formHandler(e) {
    e.preventDefault();

    const editedpizza = {
      _id: match.params.pizzaid,
      name,
      image,
      description,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice,
      },
    };
    dispatch(Editpizza(editedpizza));
  }

  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Edit Pizza</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && <Success success="Pizza details edited" />}
        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="small variant price"
            value={smallprice}
            onChange={e => {
              setSmallPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium variant price"
            value={mediumprice}
            onChange={e => {
              setMediumPrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large variant price"
            value={largeprice}
            onChange={e => {
              setLargePrice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={e => {
              setCategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />

          <input
            className="form-control"
            type="text"
            placeholder="image"
            value={image}
            onChange={e => {
              setImage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Edit Pizza
          </button>
        </form>
      </div>
    </div>
  );
}
