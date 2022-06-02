// import React, {useMemo, Suspense, useContext, useRef, useEffect, useCallback} from 'react';
// import {
//     AssetManagerContext,
//     AssetManagerContextProvider, Model,
//     SceneLoaderContext,
//     SceneLoaderContextProvider, TaskType, useAssetManager, useBeforeRender, useEngine,
//     useSceneLoader
// } from "react-babylonjs";
// import "@babylonjs/loaders/glTF";
// import {ActionManager, SetValueAction, Vector3} from "@babylonjs/core";
// import {Provider, useDispatch, useSelector} from "react-redux";
// import {setAnimation, setPlayer} from "../redux/animation/animationSlice";
// import {store} from "../redux/store";
//
// const MyFallback = () => {
//     const context = useContext(AssetManagerContext);
//     const eventData = context?.lastProgress?.eventData;
//     return <>
//             <adtFullscreenUi name='ui'>
//               <textBlock text="rendering"/>
//            </adtFullscreenUi>
//         </>
// }
//
//
//
// const Player=()=>{
//     let hand = null;
//     const handRef = useCallback(node => {
//                 hand = node;
//         }, []);
//
//     const onModelLoaded = (model)=>{
//         let mesh=model;
//         console.log("loademesh:", mesh)
//         mesh.animationGroups[2].play();
//     }
//
//     const onClick=()=>{
//         if(hand !== null){
//             console.log("ref click")
//         }
//     }
//
//     const onAnimation=(model)=>{
//         let animation=model.animationGroups;
//         console.log(animation)
//     }
//
//     return(
//             <>
//                 <Suspense fallback={<MyFallback/>}>
//                     <Model rootUrl={'models/hand/'} sceneFilename={'finalidle.glb'} onModelLoaded={onModelLoaded} />
//                 </Suspense>
//                 <adtFullscreenUi name="ui">
//                     <rectangle name="rect-1" height={0.2} width={0.1} thickness={12} cornerRadius={12}>
//                         <rectangle>
//                             <babylon-button name="close-icon" background="green" onPointerDownObservable={onClick} >
//                                 <textBlock text={'\uf00d click me'} fontFamily="FontAwesome" fontStyle="bold" fontSize={10} color="white" />
//                             </babylon-button>
//                         </rectangle>
//                     </rectangle>
//                 </adtFullscreenUi>S
//             </>
//         )
// }
//
// export default Player;
