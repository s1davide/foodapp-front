import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import ProductsList from "./pages/ProductsList";
const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/productos/:category" element={<ProductsList />} />
          {/* <Route path="/productos/:product" element={<ProductDetail />} />     */}
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
