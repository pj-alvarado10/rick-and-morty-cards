'use client';
import { useReducer } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CHARACTERS_ENDPOINT } from "./core/constants/endpoints";
import Image from "next/image";
import useCustomHookFetchCharacter from "./hooks/use-custom-hook-fetch-character";
import Header from "./components/navbar/header";
import Footer from "./components/footer/footer";
import CardCharacter from "./components/card/card-character";
import PaginationCharacters from "./components/pagination/pagination-characters";
import styles from "./page.module.css";

const initialState = {
  page: `${CHARACTERS_ENDPOINT}/?page=1`,
};

function paginationReducer(state: any, action: any) {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return { ...state, page: action.page };
    default:
      return state;
  }
}

export default function Home() {

  const [state, dispatch] = useReducer(paginationReducer, initialState);
  const [data] = useCustomHookFetchCharacter(state.page);

  function changePage(page: string){
    dispatch({ type: 'CHANGE_PAGE', page });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
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
          <Row>
            {
              data?.results.map((character) => (
                <Col xs={12} md={6} lg={3} key={character.id} className="mb-4 mx-auto d-flex justify-content-center">
                 <CardCharacter 
                  character={character}
                 />
                </Col>
              ))
            }
          </Row>
        }

        {
          data &&
          <div className="pt-4 d-flex justify-content-center">
            <PaginationCharacters statePage={state.page} info={data?.info!} changePage={(page: string) => changePage(page)} />
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
