import React, {useContext, useEffect} from 'react';
import {Color4, HemisphericLight, Texture, Vector3} from "@babylonjs/core";
import {AssetManagerContext, Engine, Scene, TaskType, useAssetManager, useEngine} from "react-babylonjs";
import Camera from "./Camera";
import Light from "./Light";
import Player from "./Player";
import {useSelector} from "react-redux";

const modelAssetTasks = [
    { taskType: TaskType.Mesh, rootUrl: `models/hand/`, sceneFilename: 'finalidle.glb', name: 'hand_1' },
    { taskType: TaskType.Mesh, rootUrl: `models/hand/`, sceneFilename: 'finalidle.glb', name: 'hand_2' },
];

const Loader=()=>{
    const engine = useEngine();
    useEffect(()=>{
        engine.displayLoadingUI()
        setTimeout(()=>{
            engine.hideLoadingUI()
        },1000)
    },[])
}

const BasicScene = () => {
    const {player}= useSelector(state=>state.animation)
    return (
        <>
            <Engine antialias={true} adaptToDeviceRatio canvasId="renderCanvas">
                <Scene clearColor={new Color4(0.2, 0.4, 0.75, 1.0)}>
                    <Camera/>
                    <Light/>
                    <ground name='ground1' width={6} height={6} subdivisions={2} />
                    <Player/>
                    <adtFullscreenUi name="ui">
                            <rectangle name="rect-1" height={0.2} width={0.1} thickness={12} cornerRadius={12}>
                                <rectangle>
                                    <babylon-button name="close-icon" background="green" onPointerDownObservable={()=>{
                                        player.loadedAnimationGroups[1].play();
                                    }} >
                                        <textBlock text={'\uf00d click me'} fontFamily="FontAwesome" fontStyle="bold" fontSize={10} color="white" />
                                    </babylon-button>
                                </rectangle>
                            </rectangle>
                    </adtFullscreenUi>
                </Scene>
            </Engine>
        </>
    );
};

export default BasicScene;
