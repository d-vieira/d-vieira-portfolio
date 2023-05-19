export default function Copyright() {
  const year = new Date().getUTCFullYear();
  return (
    <div className="flex flex-col items-center mt-10">
      <hr className="w-[70%] border-myLightGrey" />
      <p className="text-myLightGrey font-bold mt-5 mb-5">
        Copyright © {year} Daniel Vieira Martins. Todos os direitos reservados.
      </p>
    </div>
  );
}
