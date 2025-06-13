// src/app/pages/product/[slug]/page.jsx
import ProductPage from "@/components/sections/ProductPage";
import paintingData from "@/data/paintings.json"; // adjust the path if needed

export default async function SingleProductPage({ params }) {
  const { slug } = await params;

  const allPaintings = [...paintingData.oilPaintings];
  const painting = allPaintings.find((p) => p.slug === slug);

  if (!painting) {
    return (
      <p className="text-center mt-20 text-red-500">Painting not found.</p>
    );
  }

  return <ProductPage data={painting} />;
}
