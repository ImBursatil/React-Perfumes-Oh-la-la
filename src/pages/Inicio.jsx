import { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import ProductsHome from "../components/Home/ProductsHome";
import Spinner from "../components/services/Spinner";

const Inicio = () => {
  const [isLoadingHome, setIsLoadingHome] = useState(true);
  const [inHome, setInHome] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInHome(true);
      setIsLoadingHome(false);
    }, 2000);
  }, [inHome]);
  return (
    <>
      {isLoadingHome ? (
        <Spinner />
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="w-full mt-14 h-full">
            <img
              className="w-full h-60 mt-6 object-cover md:h-96"
              src="https://i.postimg.cc/MTbGw0wG/Portada.gif"
              alt="img-home"
            />
          </div>

          <div className="mt-6">
            <h2 className="font-bold uppercase whitespace-nowrap text-sm text-center md:text-2xl mt-5 relative top-7 md:top-5 text-my-warning">
              Los Perfumes Más Elegidos:
            </h2>
            <ProductsHome />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Inicio;
