import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Product from "./Product";
import { Contact } from "./Contact";
import { CheckoutSuccess } from "./CheckoutSuccess";
import { CartPage } from "./CartPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="grow flex flex-row justify-center p-2 gap-2 bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/cart-page" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
