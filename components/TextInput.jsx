import React from 'react'
import { InputText } from 'primereact/inputtext';

export default function TextInput({
    placeholder,
    onChange,
    className
}) {
    return (
        <InputText
            placeholder={placeholder}
            onChange={e => onChange(e)}
            className={className}
            style={{ width: '100%' }}
        />
    )
}
