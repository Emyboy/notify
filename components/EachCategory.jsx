import React from 'react'
import { Divider } from 'primereact/divider';

export default function EachCategory({
    category
}) {
    return (
        <div className='mt-3'>
            <h6>{category}</h6>
            <Divider />
        </div>
    )
}
