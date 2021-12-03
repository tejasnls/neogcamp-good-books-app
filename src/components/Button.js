import React from 'react';

const Button = (props) => {
    const category = props.category;
    return (
        <div>
            <button onClick={()=>props.onSelect(category)}>
                {category}
            </button>
        </div>
    )
}

export default Button;
