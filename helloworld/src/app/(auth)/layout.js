'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import './styles.css'
import { useState } from "react";

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

export default function AuthLayout({ children }) {
  const pathname = usePathname();
  const [input, setInput] = useState('')

  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="layout"></input>
      </div>
      <div className="button-container">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? "red" : "blue"}
            >
              {link.name}
            </Link>
          )
        })}
        {children}
      </div>
    </div>
  )
}