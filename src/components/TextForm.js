import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let upText = text.toUpperCase();
        setText(upText);
        props.showAlert("Converted to Upper Case", 'success');
    };

    const handleLoClick = () => {
        let upText = text.toLowerCase();
        setText(upText);
        props.showAlert("Converted to Lower Case", 'success');

    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div className=" container mb-3">
                <h1>{props.heading}</h1>
                <textarea
                    className="form-control"
                    id="myBox"
                    value={text}
                    onChange={handleOnChange}
                    rows="8"
                ></textarea>
                <button disabled = {text.length===0}
                    className="btn btn-primary my-3 mx-2"
                    onClick={handleUpClick}
                >
                    Convert to UpperCase
                </button>
                <button disabled = {text.length===0}
                    className="btn btn-primary my-3 mx-1"
                    onClick={handleLoClick}
                >
                    Convert to LowerCase
                </button>
            </div>
            <div className="container my-5">
                <h1>Your Text Summary</h1>
                <p>
                    {text.split(" ").filter((elements) => { return elements.length !== 0; }).length} words. <br />
                    {text.length} characters. <br />
                    {(text.split(" ").filter((elements) => { return elements.length !== 0; }).length) * 0.008} minutes of reading. <br />
                </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    );
}
