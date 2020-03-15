import { useRouter} from "next/router";
import Link from "next/link";

const CustomLink = ({href, children}) => {
    const router = useRouter();
    const className = router.pathname === href ? `${children.props.classname} selected` : children.props.classname;
    return <Link href={href}>React.cloneElement(children, {className})</Link>;
};
export default CustomLink;