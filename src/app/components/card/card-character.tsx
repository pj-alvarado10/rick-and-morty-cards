import { ICharacter } from "@/app/core/interfaces/character.interface";
import { Card, Spinner } from "react-bootstrap";
import styles from './card-character.module.css';

interface CardCharacterProps {
    character: ICharacter;
  }
export default function CardCharacter({ character }: CardCharacterProps){

    function createdFormat(){
        let date: string = "No date provided";
        if(character.created && character.created !== ""){
            const dateType = new Date(character.created);
            date = dateType.toISOString().split('T')[0];
        }
        return date;
    }

    return (
        <Card
          bg={'dark'}
          text={'white'}
          className={`mb-2 ${styles.card}`}
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
              <p><strong>Gender:</strong> {character.gender}</p>
              <p><strong>Type:</strong> {character.type == "" ? 'Without info' : character.type}</p>
              <p><strong>Origin:</strong> {character.origin.name}</p>
              <p><strong>Location:</strong> {character.location.name}</p>
              <p><strong>Created:</strong> {createdFormat()}</p>
            </Card.Text>
          </Card.Body>
        </Card>
    );
}