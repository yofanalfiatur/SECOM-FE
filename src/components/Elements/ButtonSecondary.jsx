import Link from "next/link";

const ButtonSecondary = (props) => {
  const { href, target, children } = props;
  return (
    <>
      <Link
        href={href}
        target={target}
        className="max-w-max font-raleway bg-white text-tosca text-[20px] px-4 py-3.5 rounded-[5px] tracking-[3px] uppercase "
      >
        {children}
      </Link>
    </>
  );
};

export default ButtonSecondary;
