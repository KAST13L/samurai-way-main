import React from 'react';
import s from "../components/Content/Users/Users.module.css";

type PaginatorPropsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = ({totalUserCount, pageSize, currentPage,onPageChanged}) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div style={{textAlign: 'center'}}>
        {pages.map((p, index) => <span key={index}>
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
    </div>
};

