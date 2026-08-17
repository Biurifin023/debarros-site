import { FaArrowRight } from "react-icons/fa";

type BtnSeeMoreProps = {
    href?: string | null
}

export default function BtnSeeMore({ href }: BtnSeeMoreProps) {
    return (
        <a 
        href={href ?? "https://instagram.com/debarros_tattoo"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver mais"
        className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-md hover:bg-accent-hover transition-colors cursor-pointer w-fit">
            Ver mais
            <FaArrowRight className="w-4 h-4 -rotate-45" />
        </a>
    )
}