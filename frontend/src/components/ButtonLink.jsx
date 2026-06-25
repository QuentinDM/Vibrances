import { Link } from "react-router-dom";

export default function ButtonLink({ to, children, className = "", ...props }) {
  return (
    <Link className={`btn btn-primary ${className}`.trim()} to={to} {...props}>
      {children}
    </Link>
  );
}
