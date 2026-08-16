import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Container from "../utils/container";
import logo2 from "../assets/logo-2.PNG";
import { Skeleton } from "../utils/skeleton";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://instagram.com/",
    label: "Instagram",
    icon: FaInstagram,
    external: true,
  },
  {
    href: "https://wa.me/",
    label: "WhatsApp",
    icon: FaWhatsapp,
    external: true,
  },
  {
    href: "mailto:contato@debarrostattoo.com",
    label: "E-mail",
    icon: FaEnvelope,
    external: false,
  },
];

type FooterProps = {
  isLoading?: boolean;
};

export default function Footer({ isLoading = false }: FooterProps) {
  return (
    <footer className="bg-accent py-8">
      <Container>
        <div className="flex items-center justify-center gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col">
              <Image src={logo2} alt="Logo" width={70} height={70} />
              <p className="font-sans text-sm text-white/80">
                Tatuagens sólidas e duradouras
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-5 md:justify-end">
            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="size-7 rounded-md bg-white/20 md:size-8"
                />
              ))
              : socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    <Icon className="size-7 md:size-8" aria-hidden />
                  </a>
                );
              })}
          </nav>
        </div>

        <div className="mt-8 flex items-center justify-center border-t border-white/20 pt-4">
          <small className="font-sans text-xs uppercase text-white/60">
            © 2026 Debarros Tattoo
          </small>
        </div>
      </Container>
    </footer>
  );
}
