import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

const CustomLink = ({ href, children }) => {
  const router = useRouter();
  const className = router.pathname === href ? `${children.props.classname} selected` : children.props.classname;
  return (
    <Link href={href}>
      React.cloneElement(children,
      {className}
      )
    </Link>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default CustomLink;
