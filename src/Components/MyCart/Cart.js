import React, { useEffect, useReducer } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

import "./Cart.css";
import { Data } from "./Data";

import { reducer } from "./Reducer";

const defaultState = {
  items: Data,
  totalPrice: 0,
  totalItems: 0,
};

const Cart = () => {
  const increase = (id) => {
    dispatch({
      type: "INCREASE",
      payload: id,
    });
  };

  const decrease = (id) => {
    dispatch({
      type: "DECREASE",
      payload: id,
    });
  };
  //   const [amount, setAmount] = useState(4);
  const [state, dispatch] = useReducer(reducer, defaultState);
  // let y = 0;
  // state.items.map((each) => {
  //   return (y += each.quantity);
  // });

  // let money = 0;
  // state.items.map((each) => {
  //   return (money += each.price * each.quantity);
  // });

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.items]);

  //   console.log(y);
  //   setAmount(y);
  return (
    <div className="cart-full">
      <nav className="cart-nav">
        <div className="nav-center">
          <h3>Mohit's Cart</h3>
          <div className="nav-container">
            <FaShoppingCart
              style={{
                color: "white",
                backgroundColor: "transparent",
                fontSize: "3rem",
              }}
            />
            <div className="amount-container">
              <p className="total-amount">{state.totalItems}</p>
            </div>
          </div>
        </div>
      </nav>

      <section className="cart-section">
        <header>
          <h2>your items</h2>
        </header>
        {state.items.length === 0 ? (
          <h4 className="cart-empty">Your Cart is Empty VRO!</h4>
        ) : (
          <>
            <div>
              {state.items.map((each) => {
                return (
                  <article key={each.id} className="cart-item">
                    {/* <img src="" alt="" /> */}
                    <img src={each.image} alt=""></img>
                    <div className="article-details">
                      <h4 style={{ opacity: "1" }}>{each.name}</h4>
                      <h4>₹{each.price}</h4>
                      <button
                        onClick={() =>
                          dispatch({ type: "REMOVE_ITEM", payload: each.id })
                        }
                      >
                        remove
                      </button>
                    </div>
                    <div className="article-right">
                      <button onClick={() => increase(each.id)}>
                        <BiUpArrow />
                      </button>
                      <h4 style={{ textAlign: "center", opacity: ".7" }}>
                        {each.quantity}
                      </h4>
                      <button onClick={() => decrease(each.id)}>
                        <BiDownArrow />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
            <hr />
            <footer className="cart-footer">
              <h4>Total</h4>
              <h4>₹{state.totalPrice.toFixed(2)}</h4>
            </footer>
            <button
              onClick={() => {
                dispatch({ type: "CLEAR_ALL" });
              }}
              className="cart-finalbtn"
            >
              Clear Cart
            </button>
          </>
        )}
      </section>
    </div>
  );
};

export default Cart;
