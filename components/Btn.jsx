import { Button } from 'primereact/button'
import React from 'react'

export default function Btn({
    text,
    onClick,
    className,
    disabled,
    loading
}) {
    return (
        <Button
            className={className}
            onClick={onClick}
            disabled={disabled || loading}
            label={text}
        >
            {/* {text} */}
        </Button>
    )
}
