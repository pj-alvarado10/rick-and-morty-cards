import { ICharacter } from "@/app/core/interfaces/character.interface";
import { Card, Spinner } from "react-bootstrap";
import styles from './card-character.module.css';

interface CardCharacterProps {
    character: ICharacter;
  }
export default function CardCharacter({ character }: CardCharacterProps){

    return (
        <Card
          bg={'dark'}
          text={'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
            <Card.Img variant="top" src={ character.image } />
            <Card.Header className="d-flex align-items-center">
            {
                character.status.toLowerCase().includes('dead') ?
                <Spinner animation="grow" variant="danger" /> :
                character.status.toLowerCase().includes('alive') ?
                <Spinner animation="grow" variant="success" /> :
                <Spinner animation="grow" variant="warning" />
            }
            <span className="ms-3">{ character.status }</span>
            </Card.Header>
          
          <Card.Body>
            <Card.Title className={styles.title}> { character.name } </Card.Title>
            <Card.Text>
              <p>{character.species}</p>
              <p>Gender: {character.gender}</p>
              <p>Origin: {character.origin.name}</p>
            </Card.Text>
          </Card.Body>
        </Card>
    );
}