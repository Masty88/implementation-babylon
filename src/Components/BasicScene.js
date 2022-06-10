import React, {Suspense, useCallback, useContext, useEffect, useState} from 'react';
import {Color4, HemisphericLight, Texture, Vector3} from "@babylonjs/core";
import {
    AssetManagerContext,
    Engine,
    Model,
    Scene,
    TaskType,
    useAssetManager, useCanvas,
    useEngine,
    useScene
} from "react-babylonjs";
import Camera from "./Camera";
import Light from "./Light";
import {useDispatch, useSelector} from "react-redux";
import "@babylonjs/loaders/glTF";
import {setPlayer} from "../redux/animation/animationSlice";


const Loader=({loading})=>{
    const engine = useEngine();
    useEffect(()=>{
        if(loading){
            engine.displayLoadingUI()
        }else{
            engine.hideLoadingUI()
        }
    },[loading])
}


const MyFallback = () => {
    const scene= useScene();
    console.log(scene)
    const context = useContext(AssetManagerContext);
    const eventData = context?.lastProgress?.eventData;
    return <>
        <adtFullscreenUi name='ui'>
            <textBlock text="rendering"/>
        </adtFullscreenUi>
    </>
}


const BasicScene = () => {
    const [input,setInput]=useState('')
    const scene= useScene()
    const[loading,SetLoading]= useState(true)
    const dispatch= useDispatch();
    const {player}= useSelector(state=>state.animation)
    const onModelLoaded = (model)=>{
        let mesh=model;
        dispatch(setPlayer(mesh))
    }
    const onClick=()=>{
        setInput("test");
        scene.getMeshByName("player1")
    }
    useEffect(()=>{
        if(player){
            console.log("player loaded", player)
            SetLoading(false);
        }
       // player.animationGroups.stop()
    },[player])

    useEffect(()=>{
        if(player){
            let random= Math.floor(Math.random() * ( 3 - 1 + 1) + 1)
            console.log(random)
            player.animationGroups[random].play();
        }
    },[input])

    return (
        <>
            <Engine antialias={true} adaptToDeviceRatio canvasId="renderCanvas">
                {loading ? (<Loader loading={loading}/>): (<Loader loading={loading}/> )}
                    <Scene cam clearColor={new Color4(0.2, 0.4, 0.75, 1.0)}>
                        <Camera/>
                        <Light/>
                        <ground name='ground1' width={6} height={6}  />
                        <Suspense fallback={<MyFallback/>}>
                            <Model name="player1" rootUrl={'models/hand/'} sceneFilename={'finalidle.glb'} onModelLoaded={onModelLoaded} />
                        </Suspense>
                        {/*TODO separate gui into a components*/}
                        <adtFullscreenUi name="ui">
                            <rectangle name="rect-1" height="30px" width="90px" thickness={0} cornerRadius={0}>
                                <rectangle>
                                    <babylon-button name="close-icon" background="green" onPointerDownObservable={()=>{onClick()}} >
                                        <textBlock text={'INPUT'} fontFamily="FontAwesome" fontStyle="bold" fontSize={10} color="white" />
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
