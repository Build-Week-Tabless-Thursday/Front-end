import React from 'react'

const Login = () => {
    const [form, setForm] = useState({name: '', password: ''})

    const ChangeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const SubmitForm = () => {
        
    }
    

    return(
        <div>
            {/* <form>
                <input
                    name = 'name'
                    placeholder = 'name'
                    onChange = {ChangeHandler}
                    value = {form.name}
                />

            </form> */}
        </div>
    )
}

export default Login