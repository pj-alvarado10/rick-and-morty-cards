import { Pagination } from "react-bootstrap";
import { IInfo } from '../../core/interfaces/character.interface';
import { CHARACTERS_ENDPOINT } from "@/app/core/constants/endpoints";

interface PaginationCharactersProps {
    statePage: string;
    info: IInfo;
    changePage: (page: string) => void;
  }

export default function PaginationCharacters({statePage, info, changePage}: PaginationCharactersProps){
    const currentPage: string = statePage.split('=')[1];
    return (
    <Pagination>
        <Pagination.First onClick={() => changePage(`${CHARACTERS_ENDPOINT}/?page=1`)} />
        <Pagination.Prev onClick={() => changePage(info.prev)} disabled={!info.prev} />
        <Pagination.Ellipsis />
        <Pagination.Item active>{currentPage}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Next onClick={() => changePage(info.next)} disabled={!info.next} />
        <Pagination.Last onClick={() => changePage(`${CHARACTERS_ENDPOINT}/?page=${info.pages}`)} />
    </Pagination>
    );
}