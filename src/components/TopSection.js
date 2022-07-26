import React from 'react'
import IconCart from './IconCart'
import SearchBar from './SearchBar'
import Title from './Title'

function TopSection({title}) {
    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-around', backgroundColor:'#ADADAD'}}>
                <Title title={title} style={{color:'green'}}/>
                <IconCart />
            </div>
            <SearchBar />
        </div>

    )
}

export default TopSection