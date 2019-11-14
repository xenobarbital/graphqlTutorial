import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  const displayBooks = () => {
    if (loading) {
      return (<div>Loading books...</div>)
    } else {
      return data.books.map(book => (
        <li key={book.id}>
          {book.name}
        </li>
      ));
    }
  }

  return (
    <div>
      <ul id="book-list">
        {displayBooks()}
      </ul>
    </div>
  );
}

export default BookList;
