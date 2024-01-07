// import React from 'react';
// import styles from './ContentStreamingPage.module.css';
// import { useSelector } from 'react-redux';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

// function ContentThreeJS() {
//     return (
//         <div className={' bg-indigo-800  w-[full]  mx-[30px]'}>
//             <div className={'h-5/6 p-0 '}>
//                 <Canvas
//                     camera={{
//                         position: [0, 0, 7],
//                         fov: 30,
//                     }}
//                 >
//                     <color attach="background" args={['#ececec']} />
//                     // three-drei usage
//                     <OrbitControls />
//                     <mesh rotation={[Math.PI / 10, 10, 10]}>
//                         // three-fiber usage
//                         <torusGeometry />
//                         <meshNormalMaterial />
//                     </mesh>
//                 </Canvas>
//                 <div
//                     className={
//                         'text-current text-7xl italic font-light z-40 p-5'
//                     }
//                 ></div>
//             </div>
//         </div>
//     );
// }

// export default ContentThreeJS;
import React from 'react';

export default function ContentThreeJS() {
    return <div>ContentThreeJS</div>;
}
