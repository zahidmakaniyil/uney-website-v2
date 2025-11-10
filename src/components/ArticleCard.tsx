import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types";

const ArticleCard = ({ article }: { article: Article }) => {
    return (
        <article
            key={article.id}
            className="rounded-xl overflow-hidden cursor-pointer block"
        >
            <Link
                href={`/resources/${article.slug}`}
                aria-label={`Read article: ${article.title}`}
            >
                {/* Image */}
                <figure className="w-full h-[201px] rounded-xl overflow-hidden">
                    <Image
                        width={300}
                        height={169}
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </figure>

                {/* Content */}
                <div className="py-[24px] flex flex-col gap-[8px]">
                    <h3 className="text-heading resource-card-title line-clamp-2">
                        {article.title}
                    </h3>
                    <div className="text-neutral flex resource-card-date gap-[8px]">
                        <time dateTime="2025-01-24">{article.readTime}</time>
                        <span>•</span>
                        <time dateTime="2025-01-24">{article.date}</time>
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default ArticleCard;
