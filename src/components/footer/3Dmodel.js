import React from 'react';
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export const Model = () => {
    const obj = useLoader(OBJLoader, "/bsuir.obj");

    return (
        <primitive
            object={obj}
            position={[0, 0, 0]}
            scale={[6, 6, 6]}
            rotation={[-Math.PI/2, 0, 0]}
             // Привязываем ref к модели для обновления угла поворота
        />
    );
}
