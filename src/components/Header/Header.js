import React from 'react';

export default function Header() {

    const headerStyle = {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: 10
    };

    return (
        <header style={headerStyle}>
            <h1>Memory Partition Allocation Visualizer</h1>
        </header>
    )
}
