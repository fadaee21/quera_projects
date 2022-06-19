



//*------just for practice------------




import { useState } from 'react'

function Form() {
    const [form, setForm] = useState({
        name: '',
        password: '',
        errors: {
            name: null,
            password: null,
        },
    })

    const handleError = (name, value) => {

        switch (name) {
            case 'name': {
                form.errors.name = value.length < 5 ? 'نام باید حداقل ۵ حرف باشد.' : null
                break
            }
            case 'password': {
                form.errors.password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g.test(value)
                    ? null
                    : 'پسورد باید حداقل یک عدد و یک حرف بزرگ و کوچک و حداقل 8 کاراکتر یا بیشتر داشته باشد.'
                break
            }
            default: {
                break
            }
        }
        return form.errors
    }




    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        const errors = handleError(name, value)
        setForm((prevForm) => ({ ...prevForm, [name]: value, errors }))
    }

    const validateForm = (errors) => {
        return Object.values(errors).every((val) => !val)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm(form.errors)) {
            alert(form.name + " " + form.password)
        } else {
            alert('فرم معتبر نیست!')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    className="form-control"
                    placeholder="نام"
                    type="text"
                    name="name"
                    onChange={handleChange}
                />
                {form.errors.name && (
                    <div className="text-danger">{form.errors.name}</div>
                )}
            </div>
            <div className="form-group">
                <input
                    className="form-control mt-3"
                    placeholder="پسورد"
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
                {form.errors.password && (
                    <div className="text-danger">{form.errors.password}</div>
                )}
            </div>
            <button type="submit" className="btn btn-primary mt-3">
                ثبت
            </button>
        </form>
    )
}

export default Form