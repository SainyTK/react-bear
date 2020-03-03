import React from 'react';

const InputForm = props => {
    const { data, onChange } = props;
    return (
        <div>
            <h2>Add bear</h2>
            Name:<input type="text" onChange={(e) => onChange({ ...data, name: e.target.value })} /> <br />
            Weight:<input type="number" onChange={(e) => onChange({ ...data, weight: e.target.value })} /> <br />
            img:<input type="text" onChange={(e) => onChange({ ...data, img: e.target.value })} /> <br />
            <button onClick={() => props.addBear()}>Add new bear</button>
        </div>
    )
}

export default InputForm