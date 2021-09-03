import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Userslist from "./Userslist";
import Pizzaslist from "./Pizzaslist";
import Addpizza from "./Addpizza";
import Orderslist from "./Orderslist";
import Editpizza from "./Editpizza";

export default function Adminscreen() {
  const usestate = useSelector(state => state.loginUserReducer);
  const { currentUser } = usestate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  });
  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to={"/admin/userslist"} style={{ color: "white" }}>
                Users List
              </Link>
              <Link to={"/admin/pizzaslist"} style={{ color: "white" }}>
                Pizzas List
              </Link>
              <Link to={"/admin/addpizza"} style={{ color: "white" }}>
                Add Pizza
              </Link>
              <Link to={"/admin/orderslist"} style={{ color: "white" }}>
                Orders Lists
              </Link>
            </li>
          </ul>

          <Switch>
            <Route path="/admin" component={Userslist} exact />
            <Route path="/admin/userslist" component={Userslist} exact />
            <Route path="/admin/orderslist" component={Orderslist} exact />
            <Route path="/admin/pizzaslist" component={Pizzaslist} exact />
            <Route path="/admin/addpizza" component={Addpizza} exact />
            <Route
              path="/admin/editpizza/:pizzaid"
              component={Editpizza}
              exact
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}
