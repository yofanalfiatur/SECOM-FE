import AbWorldCard from "@/components/Fragments/AbWorld/AbWorldCard";
import AbWorldSustain from "@/components/Fragments/AbWorld/AbWorldSustain";
import AbWorldBanner from "@/components/Fragments/AbWorld/AbWorldBanner";
import AbWorldMap from "@/components/Fragments/AbWorld/AbWorldMap";
import AbWorldRnD from "@/components/Fragments/AbWorld/AbWorldRnD";
import AbWorldStory from "@/components/Fragments/AbWorld/AbWorldStory";
import React from "react";

const AboutWorld = () => {
  return (
    <>
      <AbWorldBanner translationKey="AbWorldBanner" />
      <AbWorldStory translationKey="AbWorldStory" />
      <AbWorldMap translationKey="AbWorldMap" />
      <AbWorldRnD translationKey="AbWorldRnD" />
      <AbWorldSustain translationKey="AbWorldSustain" />
      <AbWorldCard translationKey="AbWorldCard" />
    </>
  );
};

export default AboutWorld;
