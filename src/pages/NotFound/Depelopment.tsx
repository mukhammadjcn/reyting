import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
import Footer from "src/components/home/Footer";
import Header from "src/components/home/Header";
import NoData from "src/components/animation/Lotties";

function Depelopment() {
  return (
    <>
      <Header />
      <div className="development">
        <NoData title="Sayt ishlab chiqish jarayonida" type="dev" />
      </div>
      <Footer />
    </>
  );
}

export default Depelopment;
