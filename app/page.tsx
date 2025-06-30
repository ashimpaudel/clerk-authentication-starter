import { ProductHero } from "./_template/components/landing-hero";
import { FeaturedProducts } from "./_template/components/featured-products";
import { About } from "./_template/components/about";
import { Footer } from "./_template/components/footer";

export default function Home() {
  return (
    <>
      <ProductHero />
      <FeaturedProducts />
      <About />
      <Footer />
    </>
  );
}