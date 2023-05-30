import EmailForm from "./EmailForm";

export default function Contact() {
  return (
    <section className="flex flex-col items-center -mt-1">
      <div className="w-full h-36 bg-gradient-to-b from-myDarkGrey to-white to-90% from-30%" />
      <div
        id="Contato"
        className="my-24 flex flex-col items-center gap-8 w-full "
      >
        <h3 className="text-myGreen text-5xl">Contato</h3>
        <EmailForm />
      </div>
      <div className="w-full h-36 bg-gradient-to-b from-myDarkGrey to-white to-90% from-30% rotate-180" />
    </section>
  );
}
