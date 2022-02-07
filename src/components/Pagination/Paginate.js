import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Paginate = ({ page, pages, keyword }) => {
  return (
    pages > 1 && (
      <Pagination>
        <Pagination.Prev disabled={false} />
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`}
          >
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
        <Pagination.Next />
      </Pagination>
    )
  );
};

export default Paginate;
