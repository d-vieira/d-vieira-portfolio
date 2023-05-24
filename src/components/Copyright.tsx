export default function Copyright() {
  const year = new Date().getUTCFullYear();
  return (
    <div className="flex flex-col items-center mt-10">
      <hr className="w-[70%] border-myLightGrey max-md:hidden" />
      <p className="text-myLightGrey font-bold mt-5 mb-5 max-md:mb-0.5 max-md:w-[90%] max-md:text-center ">
        Copyright © {year} Daniel Vieira Martins
      </p>
    </div>
  );
}
