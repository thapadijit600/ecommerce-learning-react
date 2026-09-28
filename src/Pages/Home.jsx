import Hero from "../Components/Home/Hero";
import Features from "../Components/Home/Features";
import Categories from "../Components/Home/Categories";
import DealBanner from "../Components/Home/DealBanner";
import FeaturedProducts from "../Components/Home/FeaturedProducts";
import Newsletter from "../Components/Home/Newsletter";
import HomeCTA from "../Components/Home/HomeCTA";

const Home = () => {
  return (
    <div>
        <Hero />

      <Features />

      <Categories />

      <DealBanner />

      <FeaturedProducts />

      <Newsletter />

      <HomeCTA />
    </div>
      
  );
};

export default Home;