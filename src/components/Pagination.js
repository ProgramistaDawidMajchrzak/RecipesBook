import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './RecipesBar.css'

export default function BasicPagination({ recipesPerPage, totalRecipes, handleChange }) {

    const [pageNumbers, setPageNumber] = useState()

    setTimeout(
        () => {
            for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
                setPageNumber(i)
            }
        }, 1000)

    return (
        <Stack spacing={0}>
            <Pagination className='pagination' onChange={(e) => handleChange(e.target.textContent)} count={pageNumbers} color="primary" />
        </Stack>
    );
}