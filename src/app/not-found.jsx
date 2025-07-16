import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <section className="container mx-auto flex flex-col gap-6 justify-center items-center w-full p-36">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <Link href="/" className="hover:text-sky-400">
          Kembali ke beranda
        </Link>
      </section>
    </>
  );
};
export default NotFound;
