import { useEffect } from "react";
import Category from "../components/layout/Molecules/Category";
import Hero from "../components/layout/Molecules/Hero";
import Popular from "../components/layout/Molecules/Popular";
import Testimonial from "../components/layout/Molecules/Testimonial";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => {
    const { userData } = state.auth;
    return { userData };
  }, shallowEqual);
  useEffect(() => {
    if (userData) {
      navigate("/dashboard");
    }
  }, [userData]);

  return (
    <>
      <Hero />
      <Category />
      <Popular />
      <Testimonial />
    </>
  );
};

export default Home;
