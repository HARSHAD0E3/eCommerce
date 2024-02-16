const Banner = () => {
  return (
    <section>
      <div className="banner  flex  justify-start">
        <div>
          <img
            src="/images/banner2.png"
            className="object-cover banner-img text-x"
            alt=""
          />
        </div>
        <div className="banner-txt absolute top-1/4  flex-col ml-20">
          <div className="fancy-text text-9xl tracking-tighter flex-col">
            <div className="look  flex justify-start">
              <p className=" font-serif banner-l">L</p>
              <p className=" font-serif relative banner-o">O</p>
              <p className=" font-serif relative banner-a">O</p>
              <p className=" font-serif relative banner-l">K</p>
            </div>
            <div className=" flex justify-start">
              <p className=" font-serif  banner-a">A</p>
              <p className="font-serif relative  banner-t">T&nbsp;&nbsp;</p>

              <p className=" font-serif relative banner-l">Y</p>
              <p className=" font-serif banner-t">O</p>
              <p className=" font-serif relative banner-o">U</p>
            </div>
          </div>
          <div className="normal-txt text-3xl">
            <p className=" tracking-widest bg-black p-2  text-white">
              IN 70+ NEW STYLES
            </p>
            <p className="another-txt tracking-widest p-2  text-black">
              SALE UP TO 50%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
