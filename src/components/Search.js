import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [bookshelf, setBookshelf] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(savedBooks);
    }, []);

    const fetchBooks = async (query) => {
        setLoading(true);
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10&page=1`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            const filteredResults = data.docs.filter(book =>
                book.title.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filteredResults);
        } catch (error) {
            console.error('An error occurred:', error);
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    const debouncedFetchBooks = useCallback(
        debounce((query) => {
            if (query.length > 0) {
                fetchBooks(query);
            } else {
                setResults([]);
            }
        }, 300),
        []
    );

    useEffect(() => {
        debouncedFetchBooks(query);
        return () => {
            debouncedFetchBooks.cancel();
        };
    }, [query]);

    const addToBookshelf = (book) => {
        const savedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        const updatedBookshelf = [...savedBooks, book];
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
        setBookshelf(updatedBookshelf);
    };

    const isBookInBookshelf = (book) => {
        return bookshelf.some((shelfBook) => shelfBook.key === book.key);
    };

    return (
        <div className="search-container">
            <h1>Search by book name</h1>
            <input
                type="text"
                placeholder="Search for books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
            {query.length === 0 && <p className='search'>Start Searching</p>}
            {loading && query.length > 0 && <div className="loading-message">Loading...</div>}
            <div className="results-container">
                {results.length > 0 && (
                    results.map((book) => (
                        <div key={book.key} className="book-card">
                            <div id='inner-box'>
                                <div className='text-content'>
                                    <span>Book Title: </span>
                                    <h3>{book.title}</h3>
                                </div>
                                <h3><span>Edition count: </span>{book.edition_count}</h3>
                            </div>
                            {!isBookInBookshelf(book) && (
                                <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
                            )}
                        </div>
                    ))
                )}
            </div>
            {results.length <= 0 && (

                !loading && query.length > 0 && <p className='noresult'>No results found.</p>

            )}
        </div>
    );
};

export default Search;
