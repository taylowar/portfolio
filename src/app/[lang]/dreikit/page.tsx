'use client';

import { motion } from 'framer-motion';
import { Suspense, useState } from 'react';
import { type Object3D, type Object3DEventMap } from 'three';
import { Canvas } from '@react-three/fiber';
import {
    CubeCamera,
    Environment,
    OrbitControls,
    PerspectiveCamera,
    Stage,
} from '@react-three/drei';

import ModelView from './model-view';

import DreiKit from '~/DreiKit/src/DreiKit';
import { cn } from '~/lib/util';
import Loading from '~/components/ui/Loading';

const ModelViewer = ({
    postprocessor,
    grapher,
}: {
    postprocessor: () => void;
    grapher: [
        Object3D<Object3DEventMap>[],
        (o: Object3D<Object3DEventMap>[]) => void,
    ];
}) => {
    grapher;

    const preprocessor = (
        _updateKey: (okey: string, nkey: string) => boolean,
    ) => {
        // TODO: fix 3d model
        // updateKey('mighty.rack', 'mighty.rack.legExtension');
    };

    return (
        <>
            <OrbitControls
                target={[0, 2.0, 0]}
                rotateSpeed={2.25}
                dampingFactor={0.9}
            />
            <PerspectiveCamera
                makeDefault
                fov={30}
                zoom={0.5}
                position={[4, 2, 8]}
            />
            <CubeCamera resolution={128} frames={60}>
                {(_texture) => (
                    <>
                        <Environment preset="city" />
                        {
                            <Stage
                                intensity={0.2}
                                shadows="contact"
                                environment="city"
                            >
                                <mesh position={[0, 0.75, 0]}>
                                    <ModelView
                                        // eslint-disable-next-line
                                        url={`/models/chair/scene-cmp.gltf`}
                                        preprocessor={preprocessor}
                                        postprocessor={postprocessor}
                                        grapher={grapher}
                                    />
                                </mesh>
                            </Stage>
                        }
                    </>
                )}
            </CubeCamera>
        </>
    );
};

export default function Page() {
    const [graph, setGraph] = useState<Object3D<Object3DEventMap>[]>([]);
    const [laoded, setLoaded] = useState(false);

    const postprocessor = () => {
        // RackAssemblyConsole.urlQueryParser.consume(
        //     PARSERS,
        //     SX_15_DEFAULT,
        //     searchParams,
        //     LD,
        // );
        DreiKit.Renderer.showAll();
        // RackAssemblyConsole.render(
        //     { router, pathname, mutSearchParams, lang },
        //     LD,
        // );

        // Load motorization when page is loaded hahaha i feel very anxious
        setLoaded(true);
    };

    return (
        <motion.section
            id="contact"
            className="
                m-auto
                mb-20
                max-h-[40rem]
                w-[min(100%,60rem)]
                scroll-mt-28
                p-16
                text-center
                sm:mb-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.5,
            }}
            viewport={{
                once: true,
            }}
        >
            <main
                className="
                relative
                grid 
                h-[30rem]
                overflow-hidden"
            >
                {!laoded && (
                    <span className="absolute place-self-center">
                        <Loading />
                    </span>
                )}
                <Canvas
                    shadows
                    className={cn(laoded && 'bg-white', 'cursor-grab')}
                >
                    <ModelViewer
                        postprocessor={postprocessor}
                        grapher={[graph, setGraph]}
                    />
                </Canvas>
            </main>
        </motion.section>
    );
}
