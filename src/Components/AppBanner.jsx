import bannarImg from "../assets/website/banner.jpg";
import playStoreImg from "../assets/website/play_store.png";
import appStore from "../assets/website/app_store.png";
const bannerStyle = {
  backgroundImage: `url(${bannarImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};
const AppBanner = () => {
  return (
    <>
      <div className="container my-14">
        <div
          data-aos="fade"
          style={bannerStyle}
          className="sm:min-h-[400px] xm:flex sm-justify-end sm:items-center rounded-xl"
        >
          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="space-y-6  max-w-xl mx-auto banner"
            >
              <h1 className="text-2xl  text-center sm:text-4xl font-semibold">
                Download The App
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-center sm:px-20"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ipsam eaque reprehenderit quidem voluptas! Ducimus
                debitis vitae iusto voluptatibus facilis!
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="flex justify-center"
              >
                <a href="">
                  <img
                    src={playStoreImg}
                    alt=""
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="">
                  <img
                    src={appStore}
                    alt=""
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBanner;
