import React from 'react';
import {Vector3} from "@babylonjs/core";

const Light = () => {
    return (
            <hemisphericLight name='hemi' direction={Vector3.Up()} intensity={1.5} />
    );
};

export default Light;
