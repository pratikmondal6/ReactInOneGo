import React from 'react';

const PropsComponent = (props) => {
    return (
        <div>
            <h1>Props- {props.name} {props.age} </h1>
            {props.children}
        </div>
    );
}


export default PropsComponent;