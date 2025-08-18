import { Link } from "@/i18n/navigation";

const ButtonSecondary = (props) => {
  const { href, target, children } = props;
  return (
    <>
      <Link
        href={href}
        target={target}
        className="max-w-max font-raleway bg-white text-tosca text-[13px] lg:text-[20px] px-3 py-3 lg:px-4 lg:py-3.5 rounded-[5px] tracking-[3px] uppercase transition-all ease duration-200 hover:opacity-70 "
      >
        {children}
      </Link>
    </>
  );
};

export default ButtonSecondary;
