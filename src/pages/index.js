import React, { useState } from "react";
import Landing from "@components/Landing/Landing";
import Layout from "@components/Layout/Layout";
import PropTypes from "prop-types";
import FeaturedProductGrid from "@components/FeaturedProductGrid/FeaturedProductGrid";
import Stores from "@components/Stores/Stores";
import OurServices from "@components/OurServices/OurServices";

export default function Home() {
  return (
    <div className="w-full bg-transparent overflow-hidden select-none  z-2">
      <Layout
        pageMeta={{
          title: "Shop with Jawnchuks - find cool gadgets for sale",
          description: "give any description here",
        }}
      >
        <Landing />
        <FeaturedProductGrid />
        <Stores />
        <OurServices />
      </Layout>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.elementType.isRequired,
  pageMeta: PropTypes.object,
};
