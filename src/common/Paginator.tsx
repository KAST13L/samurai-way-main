import React, {useState} from 'react';
import s from "../components/Content/Users/Users.module.css";

type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    portionSize?: number
}

export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            totalUserCount,
                                                            pageSize,
                                                            currentPage,
                                                            onPageChanged,
                                                            portionSize = 10
                                                        }) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1 ) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize

    return <div style={{textAlign: 'center'}}>
        <button
            style={{width:'70px'}}
            disabled={portionNumber === 1}
            onClick={()=>{setPortionNumber(el => el - 1)}}>
            {"<"}
        </button>
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p, index) => <span key={index}>
                    <span
                        className={s.page}
                        onClick={() => {
                            onPageChanged(p)
                        }}
                        style={currentPage === p
                            ? {color: 'red'}
                            : {}
                        }>{p}</span>-
                </span>)}
         <button
            style={{width: '70px'}}
            disabled={portionNumber === portionCount}
            onClick={() => {
                setPortionNumber(el => el + 1)
            }}>
            {">"}
        </button>
    </div>
};

