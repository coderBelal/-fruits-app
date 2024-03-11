import WorldMap from "../assets/world-map.png";
const WhereToBuy = () => {
  return (
    <>
      <div className="container my-36">
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center"
        >
          {/* text */}
          <div className=" space-y-8">
            <h1 className="text-4xl font-bold text-dark font-serif">
              Where to buy our products?
            </h1>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex items-center gap-4"
            >
              <input
                type="text"
                placeholder="Country"
                className="input-style w-full lg:w-[120px]"
              />
              <input
                type="text"
                placeholder="ZIP CODE"
                className="input-style w-full"
              />
            </div>
            <button
              data-aos="fade-up"
              data-aos-delay="900"
              className="secondary-btn"
            >
              Submit
            </button>
          </div>
          {/* map */}
          <div data-aos="fade" data-aos-delay="600" className="col-span-2">
            <img
              src={WorldMap}
              alt=""
              className="w-full sm:w-[500px] mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereToBuy;
