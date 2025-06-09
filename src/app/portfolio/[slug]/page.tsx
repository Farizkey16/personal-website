import { slugify } from "@/utils/slugify";
import { apiCall } from "@/utils/apiHelper";
import Link from "next/link";

type Params = Promise<{
    params: {
        slug: string,
    }
}>;

async function getPortfolio(slug: string) {
    const response = await apiCall.get("/api/data/portfolio-data")
    const portfolio = response.data;
    const item = portfolio.find((p: any) => slugify(p.title) === slug);
    if (!item) throw new Error('Portfolio not found');
    return item;
}

export default async function PortfolioItemPage({params}: {params: Params} ) {
    const { params: { slug } } = await params;
    const portfolioItem = await getPortfolio(slug);

    return (
        <section className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{portfolioItem.title}</h1>
      <img src={portfolioItem.img} width={400} height={300} alt={portfolioItem.title} className="mb-6 rounded-lg" />
      <div className="text-gray-700 mb-6">{portfolioItem.description}</div>
      <div className="italic text-gray-600 mb-4">Technologies: {portfolioItem.technologies}</div>
      <a href="/portfolio" className="text-blue-500 underline">Back to Portfolio</a>
    </section>
    )
}