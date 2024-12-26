import { Link } from "react-router-dom";
import { numberFormat } from "~/utils/format";

export default function Topic({ item }){ 
    return (
        <Link 
            to="/"
            className="py-3 px-4 transition-colors hover:bg-white/[0.03]"

        >
            <div className="text-[13px] text-[#71767b] leading-4">{item.title}</div>
            <div className="text-[15px] font-bold leading-5 mt-0.5">
                {item.topic.type === "tag" && "#"}{item.topic.value}
            </div>
            {item?.postCount && (
                <div className="text-[13px] mt-1 text-[#71767b] leading-4">
                    {numberFormat(item.postCount)} posts
                </div>
            )}
        </Link>
    )
}