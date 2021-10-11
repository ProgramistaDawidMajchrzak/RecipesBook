import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './RecipesBar.css'

export default function BasicPagination({ pageNumbers, handleChange }) {

    return (
        <Stack spacing={0}>
            <Pagination className='pagination' onChange={(e) => handleChange(e.target.textContent)} count={pageNumbers} color="primary" />
        </Stack>
    );
}
