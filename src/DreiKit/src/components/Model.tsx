import { useEffect } from 'react';
import { useGLTF, useKTX2 } from '@react-three/drei';
import { type Object3D, type Object3DEventMap } from 'three';
import { useThree } from '@react-three/fiber';
import { KTX2Loader } from 'three-stdlib';

type ModelProps = {
    url: string;
    grapher: [
        Object3D<Object3DEventMap>[],
        (o: Object3D<Object3DEventMap>[]) => void,
    ];
    preprocessor?: (
        updateKey: (okey: string, nkey: string) => boolean,
        elm: Object3D<Object3DEventMap>,
    ) => void;
};

const Model = ({ url, grapher: [, setGraph], preprocessor }: ModelProps) => {
    const gltf = useGLTF(url, true, true);

    useEffect(() => {
        const graph = gltf.scene.children;

        if (graph === undefined) {
            throw new Error(
                `Something wrong with model GRAPH. Check it's implementation`,
            );
        }

        setGraph(graph);
    }, [gltf, setGraph, preprocessor]);

    return (
        <>
            <primitive object={gltf.scene} />
        </>
    );
};

export default Model;
