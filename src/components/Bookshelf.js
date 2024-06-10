import React, { useState, useEffect } from 'react';

const Bookshelf = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(savedBooks);
    }, []);

    return (
        <div className="bookshelf-container">
            <h2>My Bookshelf</h2>
            <div className="results-container">
                {bookshelf.map((book) => (
                    <div key={book.key} className="book-card">
                        <div id='inner-box'>
                            <div className='text-content'>
                                <span>Book Title: </span>
                                <h3> {book.title}</h3>
                            </div>
                            <h3><span>Edition count: </span>{book.edition_count}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;
