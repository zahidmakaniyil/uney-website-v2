import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types";

const ScrollableArticleCard = ({
    article,
    isLastItem,
}: {
    article: Article;
    isLastItem: boolean;
}) => {
    return (
        <article
            className={` overflow-hidden w-[300px] flex-shrink-0 ${isLastItem ? "mr-4" : ""
                }`}
        >
            <Link key={article.id} href={`/resources/${article.slug}`}>
                {/* Image */}
                <figure className="w-full h-[169px] rounded-xl overflow-hidden">
                    <Image
                        width={300}
                        height={169}
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                </figure>

                {/* Content */}
                <div className="py-[24px]  flex flex-col gap-[8px]">
                    <h3 className="text-heading resource-card-title line-clamp-2">
                        {article.title}
                    </h3>
                    <div className="text-neutral flex  resource-card-date gap-[8px]">
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default ScrollableArticleCard;
