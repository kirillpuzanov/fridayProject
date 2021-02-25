import React, {useState} from 'react';
import styles from './Paginator.module.css';

type PaginatorType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    portionSize?: number
    onPageChanged: (pageNumber: number) => void
    togglePageSize: (pageNumber: number, pageSize: number) => void
}
// totalItemsCount -общее число запрашиваемых объектов на сервере, вообще все.
// pageSize - ItemCount - размер выводимых объектов на странице, задаем сами
// pagesCount -сколько у нас будет страниц, вычисляем исходя из (totalItemsCount / pageSize )
// portionSize - размер количетсва страниц ( кнопок - страниц ) навигации , задаем сами
export const Paginator = React.memo((props: PaginatorType) => {
    const {pageSize, totalItemsCount, currentPage, onPageChanged, portionSize = 5, togglePageSize} = props

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);

    let [portionNumber, setPortionNumber] = useState(1);
    // левая граница(крайняя левая страница) текущей порции ('текущей порции' -  где находимся)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    // правая граница(крайняя правая страница) текущей порции ('текущей порции' -  где находимся)
    let rightPortionPageNumber = portionNumber * portionSize;

    const nameClass = (p: number) => currentPage === p ? `${styles.pageNumber}  ${styles.selectedPage}` : styles.pageNumber

    return (
        <div className={styles.paginator}>
            <select value={pageSize} onChange={e => togglePageSize(currentPage, Number(e.currentTarget.value))}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>

            {(portionNumber > 1)
                ? <span>
                    <button onClick={() => setPortionNumber(1)}>to start</button>
                    <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
                </span>
                : ''
            }

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span className={nameClass(p)}
                                 key={p}
                                 onClick={() => {
                                     onPageChanged(p);
                                 }}>{p}</span>
                })}
            {portionCount > portionNumber
                ? <span>
                    <button className={styles.paginator_btn}
                            onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
                  <button onClick={() => setPortionNumber(portionCount)}>to end</button>
                </span>
                : ''
            }
        </div>
    )
})
