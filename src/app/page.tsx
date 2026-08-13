import BtnSchedules from "./utils/btn-schedules";
import BtnSeeMore from "./utils/btn-see-more";
import Container from "./utils/container";
import Input from "./utils/input";
import Logo from "./utils/logo";
import { PageError } from "./utils/page-error";
import { PageSkeleton } from "./utils/page-skeleton";

export default function Home() {
  return (
    <Container>
        <BtnSchedules />
        <BtnSeeMore />
        <Logo />
        <Input type="text" placeholder="Digite seu nome" name="nome" />
        <Input type="email" placeholder="Seu e-mail" name="email" />
        <Input type="tel" placeholder="WhatsApp" name="telefone" />
        <PageSkeleton />
        <PageError />
        <br />
        <br />
    </Container>
  )
}
