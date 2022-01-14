import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductsList from "./pages/ProductsList";
const Router = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<MainLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/productos/:category" element={<ProductsList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
