import BtnSchedules from "../utils/btn-schedules";
import Image from "next/image";
import logo1 from "../assets/logo-1.PNG";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#como-chegar", label: "Como chegar" },
];

export default function Header() {
  return (
    <div className="flex items-center justify-between py-4">
      <Image src={logo1} alt="Logo" width={100} height={100} />
      <nav className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative font-sans text-lg text-muted cursor-pointer pb-0.5 transition-colors duration-300 hover:text-accent after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <BtnSchedules />
    </div>
  );
}
