import React, { useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import { Menu } from 'primereact/menu';

export default function Drawer({
    show,
    toggle
}) {
    let items = [
        { label: 'New', icon: 'pi pi-fw pi-plus' },
        { label: 'Delete', icon: 'pi pi-fw pi-trash' }
    ];
    return (
        <Sidebar visible={show} onHide={toggle}>
            Menu
            <Menu model={items} style={{ margin: 0, width: '100%', border: 0 }} />
        </Sidebar>
    )
}
