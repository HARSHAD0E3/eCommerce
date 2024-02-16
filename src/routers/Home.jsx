import Banner from "../components/Banner";
import ProductSlider from "../components/ProductSlider";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <ProductSlider></ProductSlider>
      <section>
        <img src="images/banner1.png" alt="" />
      </section>
      <Categories></Categories>
    </>
  );
};

export default Home;
