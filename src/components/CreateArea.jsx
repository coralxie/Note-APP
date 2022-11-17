import React, { useState } from "react";

function CreateArea(props) {
    const [input, setInput] = React.useState({ title: "", content: "" });

    function handleChange(event) {
        const { name, value } = event.target;
        setInput((preInput) => {
            return {
                ...preInput,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(input);
        setInput({ title: "", content: "" });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    value={input.title}
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                />
                <textarea
                    onChange={handleChange}
                    value={input.content}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
