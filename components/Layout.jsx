import React, { useState } from 'react'
import Drawer from './Drawer'
import Header from './Header'

export default function Layout(props) {
    const [state, setState] = useState({
        dawer: false
    })
    return (
        <div>
            <Header
                toggleDrawer={() => setState({ ...state, dawer: !state.dawer })}
            />
            <Drawer
                show={state.dawer}
                toggle={() => setState({ ...state, dawer: !state.dawer })}
            />
            <div id='app'>
                {props.children}
            </div>
        </div>
    )
}
