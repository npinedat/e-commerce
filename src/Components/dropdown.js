import { useState } from "react";

function Dropdown({ options }) {

    const [selectedOption, setSelectedOption] = useState("default");

    let slicedOptions;
    let text;

    if(typeof options !== "undefined" && options.length > 0) {
        text = "Seleccione una opción: ";
        slicedOptions = options.map( option => {
            return <option value={option.value}>{option.name}</option>
        });
    }else {
        text = "No hay opciones disponibles";
    }

    function onChange(e) {
        setSelectedOption(e.target.value);
    }

    return (
        <div className="dropdown">
            <select value = {selectedOption} className="form-select mb-3" onChange={onChange}>
                <option value="default">{text}</option>
                {slicedOptions}
            </select>
        </div>
    );
}

export default Dropdown;