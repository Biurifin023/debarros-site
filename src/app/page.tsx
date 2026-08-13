import BtnSchedules from "./utils/btn-schedules";
import BtnSeeMore from "./utils/btn-see-more";
import Input from "./utils/input";
import Logo from "./utils/logo";

export default function Home() {
  return (
    <div>
        <BtnSchedules />
        <BtnSeeMore />
        <Logo />
        <Input type="text" placeholder="Digite seu nome" name="nome" />
        <Input type="email" placeholder="Seu e-mail" name="email" />
        <Input type="tel" placeholder="WhatsApp" name="telefone" />
    </div>
  )
}
