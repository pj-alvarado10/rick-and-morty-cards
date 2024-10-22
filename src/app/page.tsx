'use client';
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import useCustomHookFetchCharacter from "./hooks/use-custom-hook-fetch-character";
import Header from "./components/navbar/header";
import Footer from "./components/footer/footer";
import Image from "next/image";
import CardCharacter from "./components/card/card-character";

export default function Home() {
  const [data] = useCustomHookFetchCharacter("https://rickandmortyapi.com/api/character");
  
  return (
    <>
    <Header />
    <main className={styles.main}>
      <Container>
        <h1 className="py-4">Characters</h1>

        {
          !data &&
          <div className="d-flex justify-content-center align-items-center">
            <div className="pt-2">
              <Image
                src="/loader.gif"
                width="0"
                height="200"
                style={{ width: 'auto' }}
                alt="Rick and Morty logo"
              />
            </div>
          </div>
        }
        {
          <div className="d-flex flex-wrap justify-content-between">
            {
              data?.results.map((character) => (
                <div key={character.id} className="mb-4 mx-auto me-md-4">
                 <CardCharacter 
                  character={character}
                 />
                </div>
              ))
            }
          </div>
        }
        
        {
          (data?.results?.length ?? 0) < 1 &&
          <div className="d-flex justify-content-center">
             <p className={styles.empty}>
              Nobody in the universe yet!
            </p>
          </div>
        }

      </Container>
    </main>
    <Footer />
    </>
  );
}
