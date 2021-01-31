import React, { useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import { SlideMenu } from 'primereact/slidemenu';

export default function Drawer({
    show,
    toggle
}) {
    const items = [
        {
            label: 'File',
            icon: 'pi pi-fw pi-file',
            items: []
        }
    ]
    return (
        <Sidebar visible={show} onHide={toggle}>
            Content
            <SlideMenu style={{ width: '100%', margin: 0 }} model={items} />
        </Sidebar>
    )
}
