import { useState } from "react"

const ControlledForm = props => {
    // State to hold the form data.
    const [form, setForm] = useState({
        name: "",
        age: 0,
    })

    // handleChange function
    const handleChange = event => {
        // Dynamically update the state using the event object.
        // This function always looks the same.
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        // Prevent page refresh on submission.
        event.preventDefault()

        // Do what you want with the form data.
        console.log(form)
    }

    // The JSX for the form, binding the functions and state to our inputs.
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Your Name"
                />
                <input
                    type="number"
                    value={form.age}
                    onChange={handleChange}
                    name="age"
                    placeholder="Your Age"
                />
                <input type="submit" value="Submit Form" />
            </form>
            <p>{form.name ? <>{form.name} is {form.age}</> : <>no input yet</>}</p>
        </>
    )
}

export default ControlledForm