



//*------just for practice------------




import { useState } from 'react'

export const FormForm = () => {

    const [person, setPerson] = useState({
        firstName: "",
        lastName: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setPerson((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div>
            <hr />
            <input name='firstName' onChange={handleChange} />
            <br />
            <input name='lastName' onChange={handleChange} />
            <h3>{person.firstName}</h3>
            <h3>{person.lastName}</h3>
        </div>
    )
}
