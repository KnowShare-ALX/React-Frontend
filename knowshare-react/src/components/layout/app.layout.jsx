import Footer from "./Footer";
import Navbar from "./Navbar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
