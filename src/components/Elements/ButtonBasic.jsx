import { Link } from "@/i18n/navigation";

const ButtonBasic = (props) => {
  const { href, target, children, className } = props;
  return (
    <Link
      href={href}
      target={target}
      className={`font-raleway text-white bg-tosca text-[2rem] px-6 py-3 transition-all ease duration-200 hover:opacity-70 ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonBasic;
