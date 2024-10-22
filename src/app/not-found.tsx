import { Button } from "react-bootstrap";
import Link from "next/link";
import React from 'react';
import styles from '../styles/not-found.module.css';

export default function NotFound(){
    return (
        <div className={styles.notFound}>
            <div className="pt-5">
                <h1>
                     404 
                </h1>
            </div>
            <p className="text-center italic font-normal text-white mt-0 leading-5">
                <small>
                    The page you are searching <br/> is not in this
                    universe.
                </small>
            </p>
            <Link href="/">
                <Button
                variant="secondary"
                type="button"
                className="text-white mt-2"
                >
                GO TO AN EXISTING UNIVERSE
                </Button>
            </Link>
        </div>    
    );
}