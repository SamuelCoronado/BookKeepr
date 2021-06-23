import React, {useEffect, useState} from 'react'

import {books} from '../books';

const BookComponent = ({name, author, image}) => {
    return(
        <div className="flex flex-col h-44 w-28 rounded shadow-md p-1">
            <img src={image} alt="" className="h-4/6"/>
            <h2 className="font-semibold">{name}</h2>
            <h2 className="text-gray-400 text-xs">{author}</h2>
        </div>
    )
}

const SearchComponent = ({searchTerm}) => {

    const [results, setResults] = useState(null);

    const getBooks = (search) => {

        let booksArr = [];

        books.forEach(book => {
            if(book.name.includes(search)) booksArr.push(book);
            console.log(typeof book.name);
        });

        setResults(booksArr);
        console.log(results);
    }

    useEffect(() => {
        getBooks(searchTerm);
        console.log('asdas');
    }, [searchTerm])

    return (
        <div className="flex gap-6">
            
           {
               results === null? null
               :

               results.map((result) => {
                   return(
                       <BookComponent name={result.name} author={result.author} image={result.image} />
                   )
               })
           }
        </div>
    )
}

export default SearchComponent;
