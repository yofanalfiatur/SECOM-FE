"use client";
import CareerBanner from "@/components/Fragments/Career/CareerBanner";
import CareerCard from "@/components/Fragments/Career/CareerCard";
import CareerVacancies from "@/components/Fragments/Career/CareerVacancies";
import React from "react";

const CarrerPage = () => {
  return (
    <>
      <CareerBanner translationKey="CareerBanner" />
      <CareerCard translationKey="CareerCard" />
      <CareerVacancies translationKey="CareerVacancies" vacancies="Vacancies" />
    </>
  );
};

export default CarrerPage;
