import React, { useState } from 'react'
import styles from './Pagination.module.css'
import { useSearch } from '../../context/SearchContext';

const Pagination = () => {
    const { clickEvent, setSearchResult } = useSearch();
    const [count, setCount] = useState(1);
    const [pButton, setPButton] = useState(false);
    const [nButton, setNButton] = useState(false);



    async function handlePreviosButton() {
        setCount((prev) => {
            return prev - 1;
        });

        if (clickEvent.includes("?")) {
            var url = `${clickEvent}&limit=10&page=${count-1}`
        } else {
            var url = `${clickEvent}?limit=10&page=${count-1}`
        }

        
            const response = await fetch(url,
                {
                    method: "GET",
                    headers: {
                        projectID: "f104bi07c490",
                    }
                }
            );
            let data = await response.json();
            console.log(data.data);
            setSearchResult(data.data);
           
        console.log(count - 1);
        if (count === 4) {
            setNButton(false);
            setPButton(false);
        } else if (count === 3) {
            setPButton(false);
            setNButton(false);
        } else if (count === 2) {
            setPButton(true);
            setNButton(false);
        }
    }

    async function handleNextButton() {
        setCount((prev) => {
            return prev + 1;
        });

        if (clickEvent.includes("?")) {
            var url = `${clickEvent}&limit=10&page=${count + 1}`
        } else {
            var url = `${clickEvent}?limit=10&page=${count + 1}`
        }

            const response = await fetch(url,
                {
                    method: "GET",
                    headers: {
                        projectID: "f104bi07c490",
                    }
                }
            );
            const data = await response.json();
            console.log(data.data);
            setSearchResult(data.data);

            if (!response.ok) {
                alert('failled')
                return;
            }

        console.log(count + 1);
        if (count === 1) {
            setPButton(false);
            setNButton(false);
        } else if (count === 2) {
            setPButton(false);
            setNButton(false);
        } else if (count === 3) {
            setPButton(false);
            setNButton(true);
        }
    }

    return (
        <div className={styles.pagination}>
            <button disabled={pButton} onClick={handlePreviosButton} style={count === 1 ? { background: 'grey' } : { background: '#003380' }}>Previous</button>
            <span>Page: {count}</span>
            <button disabled={nButton} onClick={handleNextButton} style={count === 4 ? { background: 'grey' } : { background: '#003380' }}>Next</button>
        </div>
    )
}

export default Pagination