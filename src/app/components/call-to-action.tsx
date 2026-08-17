import BtnSchedule from "../utils/btn-schedules";

type CallToActionProps = {
  whatsappPhone?: string;
};

export default function CallToAction({ whatsappPhone }: CallToActionProps) {
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center py-12 md:py-20 lg:py-28">
      <h1 className="font-display text-xl text-white md:text-2xl lg:text-4xl">
        Pronto para a próxima tattoo?
      </h1>
      <BtnSchedule whatsappPhone={whatsappPhone} />
    </div>
  );
}