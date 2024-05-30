import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./starter/pizzas/focaccia.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "./starter/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "./starter/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "./starter/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "./starter/pizzas/salamino.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./starter/pizzas/prosciutto.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  //   const styles = {
  //     fontSize: "32px",
  //     color: "Green",
  //     textDecoration: "underline",
  //     backgroundColor: "Lightblue",
  //     height: "60px",
  //   };

  return (
    <header className="header">
      <h1>Pizza Bliss | Felicità Pizza</h1>
    </header>
  );
};

const Menu = () => {
  // const periperi = [];
  const myPizza = pizzaData;
  const pizzaNum = myPizza.length;

  return (
    <main className="menu">
      <h2>Pizza Offered today</h2>

      {pizzaNum > 0 ? (
        <>
          <p>
            Enjoy our hand-tossed pizzas made with fresh ingredients. Explore
            our menu for dining in, takeout, or delivery. Thank you for choosing
            us!
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>The shop will be opened soon, Thank you Pizza Gang</p>
      )}

      {/* <Pizza
        name="Pizza Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="starter/pizzas/focaccia.jpg"
        price={400}
      />
      <Pizza
        name="Pizza Cheesseti"
        ingredients="Bread with canadian sorted milk"
        photoName="starter/pizzas/salamino.jpg"
        price={410}
      /> */}
    </main>
  );
};

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.photoName} />

      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Zimekwisha" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

const Footer = () => {
  const hours = new Date().getHours();
  const opened = 8;
  const closed = 4;
  const shopOpen = hours >= opened && hours <= closed;
  console.log(shopOpen);

  // if (hours >= opened && hours <= closed)
  //   alert("Place an order It will be dispatced when we are open");
  // else alert("We are happy you are here");

  return (
    <footer className="footer">
      {shopOpen ? (
        <Order closed={closed} opened={opened} />
      ) : (
        <p>
          We are closed from {closed}:00am, Ending the day by {opened}:00am
          Place your order now
        </p>
      )}
    </footer>
  );
};

function Order({ closed, opened }) {
  return (
    <div className="order">
      <p>
        We are open Now until {opened}:00am, Closing by {closed}:00am
      </p>
      <button className="btn">Order Now</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
