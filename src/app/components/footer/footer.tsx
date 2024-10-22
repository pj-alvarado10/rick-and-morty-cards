'use client';
import React from 'react';
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer(){
    return (
        <footer className='w-100 d-flex justify-content-center'>
            <Image
                src="/footer.svg"
                width="0"
                height="70"
                className={styles.footer}
                alt="Rick and Morty footer"
            />
        </footer>
    )
}