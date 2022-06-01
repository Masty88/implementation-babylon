import React, {useMemo, Suspense, useContext, useRef, useEffect} from 'react';
import {
    AssetManagerContext,
    AssetManagerContextProvider,
    SceneLoaderContext,
    SceneLoaderContextProvider, TaskType, useAssetManager, useBeforeRender, useEngine,
    useSceneLoader
} from "react-babylonjs";
import "@babylonjs/loaders/glTF";
import {ActionManager, Vector3} from "@babylonjs/core";
import {Provider, useDispatch} from "react-redux";
import {setAnimation, setPlayer} from "../redux/animation/animationSlice";
import {store} from "../redux/store";


//TODO make it dynamic load base on user choice
const modelAssetTasks = [
    { taskType: TaskType.Mesh, rootUrl: `models/hand/`, sceneFilename: 'finalidle.glb', name: 'hand_1' },
    { taskType: TaskType.Mesh, rootUrl: `models/hand/`, sceneFilename: 'finalidle.glb', name: 'hand_2' },
];

//TODO add idle
const MyModels = (factory, deps) => {
    const assetManagerResult= useAssetManager(modelAssetTasks)
    const dispatch= useDispatch()
    useMemo(()=>{
        console.log(assetManagerResult)

        const hand=assetManagerResult.taskNameMap['hand_1'];
        hand.loadedMeshes[0].position= new Vector3(-2, 0, 0)
        dispatch(setPlayer(hand));

        const hand2=assetManagerResult.taskNameMap['hand_2'];
        hand2.loadedMeshes[0].position= new Vector3(2, 0, 0)
        hand2.loadedMeshes[0].rotation= new Vector3()

    })

    console.log(modelAssetTasks)
    return null;
};

const MyFallback = ({engine}) => {
    const context = useContext(AssetManagerContext);
    console.log('context in fallback:', context);
    const eventData = context?.lastProgress?.eventData;
    console.log(eventData)
    return <>
            <adtFullscreenUi name='ui'>
              <textBlock text="rendering"/>
           </adtFullscreenUi>
        </>
}

const Player=({engine})=>{
    return(
        <Provider store={store}>
        <AssetManagerContextProvider>
            <Suspense fallback={<MyFallback/>}>
                <MyModels />
            </Suspense>
       </AssetManagerContextProvider>
        </Provider>
        )
}

export default Player;
