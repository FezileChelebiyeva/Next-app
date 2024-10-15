"use client"
import { usePathname } from 'next/navigation'; // Use usePathname instead of useRouter
import Link, { LinkProps } from 'next/link';
import { FC, ReactNode } from 'react';

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  activeClassName: string;
  className?: string;
}

const NavLink: FC<NavLinkProps> = ({ href, children, activeClassName, className = '', ...props }) => {
  const pathname = usePathname(); // Get the current route's pathname

  // Determine if the link is active by comparing the current route
  const isActive = pathname === href;

  const combinedClassName = isActive ? `${className} ${activeClassName}`.trim() : className;

  return (
    <Link href={href} {...props} legacyBehavior>
      <a className={combinedClassName}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;