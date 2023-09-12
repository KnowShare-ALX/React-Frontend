import Footer from "./Footer";
import Navbar from "./Navbar";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default AppLayout;
