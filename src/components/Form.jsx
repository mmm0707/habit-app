import React, { useState } from 'react'

const Form = () => {

    // const [value, setValue] = useState('')

    const handleSubmit = () => {
       e.preventDefault()
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    tyep='text'
                    // onChange={e => {
                    //     console.log(e.target.value)
                    // }}
                />
            </form>
        </>
    )
}

export default Form