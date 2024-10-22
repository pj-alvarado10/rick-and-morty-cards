'use client';
import React from 'react';
import Image from "next/image";
import { Container, Navbar } from "react-bootstrap";
import styles from "./header.module.css";

export default function Header(){

    return (
      <div className={styles.navBackground}>
        <Container>
        <Navbar.Brand href="./">
          <Image
            src="/logo.svg"
            width="0"
            height="50"
            className={styles.logo}
            alt="Rick and Morty logo"
          />
        </Navbar.Brand>
      </Container>
      </div>
    )
}