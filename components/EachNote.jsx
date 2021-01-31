import React from 'react'

export default function EachNote({
    data
}) {
    return (
        <div class="col-md-4 bg-white each-note m-1">
            <div className='p-1'>
                <b>{data.title}</b><br />
                {data.note}
            </div>
        </div>
    )
}
