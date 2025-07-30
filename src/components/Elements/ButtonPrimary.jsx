import Link from "next/link";

const ButtonPrimary = (props) => {
  const { href, target, children, className } = props;

  return (
    <>
      <Link
        href={href}
        target={target}
        className={`flex flex-col items-center w-full max-w-full sm:max-w-max sm:max-h-max font-raleway bg-tosca text-white text-sm lg:text-[20px] px-4 py-4 lg:px-5 lg:py-5 rounded-[5px] tracking-[4px] leading-none uppercase ${className}`}
      >
        {children}
      </Link>
    </>
  );
};

export default ButtonPrimary;
