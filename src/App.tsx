import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider, useParams, Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import { Blog, Home, PlantCare, Shop } from "./router/router";

import { Section1 } from "@/pages/Shop/Section1";
import { Section2 } from "@/pages/Shop/Section2";
import { Section3 } from "@/pages/Shop/Section3";

import { Cart } from "@/pages/Shop/Cart";
import { CustomToaster } from "@/components/shared/CustomToaster";
import { Checkout } from "./pages/Shop/Checkout";

import { SideBar } from "./components/shared/SideBar"; 
import { Account } from "./components/shared/Account"; 
import { Address } from "./components/shared/Address";

import NotFound from "@/components/shared/NotFound"; 
import { Loading } from "@/components/shared/Loading";
import { ErrorBoundary } from "@/components/shared/ErrorBoundery";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex flex-col gap-16">
      <Section1 />
      <Section2 />
      <Section3 currentProductId={Number(id)} />
    </div>
  );
};

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout />
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "shop",
          element: (
            <Suspense fallback={<Loading />}>
              <Shop />
            </Suspense>
          ),
        },
        {
          path: "shop/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <ProductPage />
            </Suspense>
          ),
        },
        {
          path: "PlantCare",
          element: (
            <Suspense fallback={<Loading />}>
              <PlantCare />
            </Suspense>
          ),
        },
        {
          path: "Blog",
          element: (
            <Suspense fallback={<Loading />}>
              <Blog />
            </Suspense>
          ),
        },
        {
          path: "cart",
          element: (
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "checkout",
          element: (
            <Suspense fallback={<Loading />}>
              <Checkout />
            </Suspense>
          ),
        },
        {
          path: "account",
          element: (
            <Suspense fallback={<Loading />}>
              <SideBar /> 
            </Suspense>
          ),
          children: [
            {
              index: true,
              element: <Navigate to="details" replace />, 
            },
            {
              path: "details",
              element: <Account />, 
            },
            {
              path: "address",
              element: <Address />, 
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: (
        <NotFound />
      ),
    },
  ]);

  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
      <CustomToaster />
    </ErrorBoundary>
  );
}