"use client"

import CarouselComp from './components/CarouselComp';
import Products from './components/Products';
import MainLayout from './layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <CarouselComp />
      <Products />
    </MainLayout>
  );
}
