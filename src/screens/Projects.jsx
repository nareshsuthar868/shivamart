import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import AllProjects from "../components/Sections/AllProjects";
import Footer from "../components/Sections/Footer"

export default function ProjctGallery() {
  return (
    <>
      <TopNavbar />
      <Header />
      <AllProjects />
      <Footer />
    </>
  );
}

