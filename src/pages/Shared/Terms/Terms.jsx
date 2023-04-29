import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h3>Terms and conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt expedita necessitatibus aliquid modi repellat veritatis voluptas eius laborum ea eos ipsum enim aperiam alias consectetur atque animi itaque fugit eligendi, numquam nostrum? Iure, odio ea doloribus impedit exercitationem ipsam doloremque quae aliquid facere deserunt. Perferendis a rerum eos accusamus.</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Terms;