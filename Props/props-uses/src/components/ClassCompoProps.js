import React from 'react';

class ClassCompoProps extends React.Component {
    render() {
        return (
            <div>
                <h1>Props- {this.props.name} {this.props.age} </h1>
                {this.props.children}
            </div>
        );
    }
}

export default ClassCompoProps;