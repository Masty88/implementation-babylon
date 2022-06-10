import React from 'react';
import {Size as Vector, Vector3} from "@babylonjs/core";

const Camera = (e) => {
    return (
        <arcRotateCamera autoAttach={false} name="arc" target={new Vector3(0, 1, 0)}
                         alpha={7 * Math.PI / 8} beta={3 * Math.PI/8}
                         radius={3} minZ={0.001} wheelPrecision={50}
                         lowerRadiusLimit={0.25} upperRadiusLimit={8} upperBetaLimit={Math.PI / 2}
        />
    );
};

export default Camera;
