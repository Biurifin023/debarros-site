import { FaArrowRight } from "react-icons/fa";

export default function BtnSeeMore() {
    return (
        <button className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-hover transition-colors cursor-pointer w-fit">
            Ver mais
            <FaArrowRight className="w-4 h-4 -rotate-45" />
        </button>
    )
}