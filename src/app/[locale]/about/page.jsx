import AboutBanner from "@/components/Fragments/About/AbBanner";
import AboutCertificate from "@/components/Fragments/About/AbCertif";
import AboutLocation from "@/components/Fragments/About/AbLocation";
import AboutStory from "@/components/Fragments/About/AbStory";
import AboutTeam from "@/components/Fragments/About/AbTeam";
import AboutTrusted from "@/components/Fragments/About/AbTrusted";
import AboutWhy from "@/components/Fragments/About/AbWhy";
import AboutWork from "@/components/Fragments/About/AbWork";

// Page About Us
const About = () => {
  return (
    <>
      <AboutBanner translationKey="AboutBanner" />
      <AboutStory translationKey="AboutStory" />
      <AboutWhy translationKey="AboutWhy" />
      <AboutWork translationKey="AboutWork" />
      <AboutCertificate translationKey="AboutCertificate" />
      <AboutTeam translationKey="AboutTeam" />
      <AboutLocation translationKey="AboutLocation" />
      <AboutTrusted translationKey="AboutTrusted" />
    </>
  );
};

export default About;
