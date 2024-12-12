import Footer from "./Footer";

const Container = ({ children }) => {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full lg:w-full">
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Container;
