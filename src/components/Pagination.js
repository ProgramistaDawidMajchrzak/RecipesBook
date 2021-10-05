import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
// import { useState } from 'react';

export default function BasicPagination({ recipesPerPage, totalRecipes, handleChange}) {

    const [pageNumbers, setPageNumber] = useState()

    setTimeout(
        () => {
            for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
                setPageNumber(i)
            }
        }, 1000)

    return (
        <Stack spacing={1}>
            {/* <Pagination count={10} /> */}
            <Pagination onChange={(e) => handleChange(e.target.textContent)} count={pageNumbers} color="primary" />
            {/* <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled /> */}
        </Stack>
    );
}