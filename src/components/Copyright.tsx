export default function Copyright() {
  const year = new Date().getUTCFullYear();
  return (
    <div className="flex flex-col items-center w-full p-1 gap-2">
      <hr className="w-[70%] border-myLightGrey max-md:hidden" />
      <p className="text-myLightGrey font-bold max-md:mb-0.5">
        Copyright © {year} Daniel Vieira Martins
      </p>
    </div>
  );
}
