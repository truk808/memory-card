import React from 'react';
import Container from "../UI/container/Container";

const ModuleItem = ({module}) => {
    return (
        <Container style={'card'}>
            {/*<div>*/}
                {module.name}
            {/*</div>*/}
        </Container>
    );
};

export default ModuleItem;