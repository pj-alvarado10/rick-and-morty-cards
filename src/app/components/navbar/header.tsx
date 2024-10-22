'use client';
import React, { Suspense } from 'react';
import Image from "next/image";
import { Container, Navbar } from "react-bootstrap";
import styles from "./header.module.css";
import SkeletonNavbar from './skeleton-navbar';

export default function Header(){

    return (
      <div className={styles.navBackground}>
        <Container>
        <Navbar.Brand href="./">
        <Suspense fallback={<SkeletonNavbar/>}>
          <Image
            src="/logo.svg"
            width="0"
            height="50"
            className={styles.logo}
            alt="Rick and Morty logo"
          />
        </Suspense>
        </Navbar.Brand>
      </Container>
      </div>
    )
}