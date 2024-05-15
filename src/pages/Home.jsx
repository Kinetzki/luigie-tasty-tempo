import React, { useEffect, useLayoutEffect, useState } from "react";
import burger4 from "../assets/burgers/burger4.jpg";
import Loader from "../components/Loader";
import SnackHighlights from "../components/SnackHighlights";
import desserts from "../assets/desserts";
import ItemList from "../components/ItemList";
import pasta from "../assets/pasta";
import FuncButton from "../components/FuncButton";
import HorizontalLine from "../components/HorizontalLine";
import Preloader from "../components/Preloader";
import drinks from "../assets/drinks";
import { useNavigate } from "react-router-dom";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  //Preloader
  useEffect(() => {
    const preloadPage = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    };
    preloadPage()
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error preloading page:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className="relative flex items-center justify-center w-full h-screen-60px">
            <img
              src={burger4}
              alt=""
              className="object-cover w-full h-full"
              loading="lazy"
            />
            <div className="absolute top-[15%] left-[7%] w-[400px]">
              <h1 className="font-madimi text-[35px] inline">
                Explore our menu of delicious
              </h1>
              <h1 className="font-madimi text-[35px] inline text-[#feaa00]">
                {" "}
                Snacks
              </h1>
              <h1 className="font-madimi text-[35px] inline">
                {" "}
                and thirst-quenching{" "}
              </h1>
              <h1 className="font-madimi text-[35px] inline-block text-[#feaa00]">
                {" "}
                Drinks
              </h1>
              <br />
              <FuncButton text={"Visit Us"} func={() => {navigate("/contact")}} />
            </div>
          </div>
          <h1 className="font-madimi text-[30px]">
            We Serve a variety of cravings!
          </h1>
          <Loader
            items={["Desserts", "Drinks", "Pasta", "Burgers", "Fries"]}
            icons={[
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#feaa00"
                viewBox="0 0 448 512"
              >
                <path d="M367.1 160c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16H80c-26.5 0-48 21.5-48 48s21.5 48 48 48h53.5 181H368c26.5 0 48-21.5 48-48s-21.5-48-48-48h-.9zM96 288L200.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L352 288H96z" />
              </svg>,
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#feaa00"
                viewBox="0 0 512 512"
              >
                <path d="M32 0C19.1 0 7.4 7.8 2.4 19.8s-2.2 25.7 6.9 34.9L224 269.3V448H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H288V269.3L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0H32zM173.3 128l-64-64H402.7l-64 64H173.3z" />
              </svg>,
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#feaa00"
                viewBox="0 0 448 512"
              >
                <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
              </svg>,
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#feaa00"
                viewBox="0 0 512 512"
              >
                <path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z" />
              </svg>,
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#feaa00"
                viewBox="0 0 640 512"
              >
                <path d="M320 352c-88.4 0-160-71.6-160-160c0-76.7 62.5-144.7 107.2-179.4c5-3.9 10.9-5.8 16.8-5.8c7.9-.1 16 3.1 22 9.2l46 46 11.3-11.3c11.7-11.7 30.6-12.7 42.3-1C464.5 108 480 160.2 480 192c0 88.4-71.6 160-160 160zm64-111.8c0-36.5-37-73-54.8-88.4c-5.4-4.7-13.1-4.7-18.5 0C293 167.1 256 203.6 256 240.2c0 35.3 28.7 64 64 64s64-28.7 64-64zM32 288c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32s-14.3 32-32 32v64H544V320c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32v96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32V288zM320 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM192 480a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
              </svg>,
            ]}
          />
          <HorizontalLine />
          <h1 className="font-madimi text-[35px] mt-10 mb-10">
            Satisfy your cravings with our delicious desserts and refreshing
            drinks.
          </h1>
          <SnackHighlights items={desserts.slice(0, 3)} />
          <FuncButton text={"More Desserts"} func={() => {
            navigate("/menu")
          }} />
          <br /><br />

          <SnackHighlights items={drinks.slice(0, 3)} />
          <FuncButton text={"More Drinks"} func={() => {navigate("/menu")}} />
          <ItemList items={pasta.slice(0, 3)} />
          <FuncButton text={"More Pasta"} func={() => {navigate("/menu")}} />
        </>
      )}
    </div>
  );
}

export default Home;
