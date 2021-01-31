import React from 'react'
import TextInput from './TextInput'
import { BiUserCircle, BiMenu } from 'react-icons/bi'

export default function Header() {
    return (
        <nav className='border shadow-sm bg-white' style={{ display: 'flex' }}>
            <BiMenu />
            {/* <a href="#" className=""> */}
                <img src='https://firebasestorage.googleapis.com/v0/b/project-managemnt-a12b8.appspot.com/o/logo.png?alt=media&token=1683da03-f3d4-4bfb-9e9a-d6a7c98e6647' style={{ width: '71px', paddingRight: '5px', borderRadius: '5px' }} />
            {/* </a> */}

            <TextInput />
            <BiUserCircle />
        </nav>
    )
}
