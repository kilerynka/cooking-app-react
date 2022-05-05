import React from 'react'

export default function Search() {


    function search(event) {
        console.log(event.target.value)
    }
    return (
        <form>
            <input onChange={search} className='searchInput' placeholder='szukaj...'/>
        </form>
    )
}