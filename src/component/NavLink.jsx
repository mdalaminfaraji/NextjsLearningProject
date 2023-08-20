"use client"
import ClassNames from "../utils/ClassNames";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const NavLink = ({children, href,exact=false, activeClassName, ...props}) => {
    const pathname = usePathname();
    const active=exact?pathname==href:pathname.startsWith(href);
    const classes=ClassNames(props.className, active && activeClassName);
    if(classes){
        props.className=classes
    }
    return (
        <Link href={href} {...props}>
            {children}            
        </Link>
    );
};

export default NavLink;