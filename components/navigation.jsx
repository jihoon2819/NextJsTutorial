"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./navigation.module.css"
export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path == "/" ? "🦣" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path == "/about-us" ? "🦣" : ""}
        </li>
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}

// 자동으로 react hydration을 통해서 강제 새로고침이 없는 네비게이션을 만들수 있게됨
// 하지만 초기화 되는동안에 인터넷이 매우 느리다면 그동안은 새로고침이 발생함
