import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartIsShwon, setCartIsShown] = useState(false);

  const showCartHandler = () => setCartIsShown(true);

  const hideCartHanddler = () => setCartIsShown(false);

  return (
    <>
      {cartIsShwon && <Cart onCloseCart={hideCartHanddler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
