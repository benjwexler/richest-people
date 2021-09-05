import logo from './logo.svg';
import './App.css';
import Box, { degrees_to_radians } from './Box';

import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, act, useThree } from '@react-three/fiber'
import { Html, enter, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import { useSpring, useSpringRef, useChain } from '@react-spring/three'
import { a } from 'react-spring'

const CardInfo = ({
  imgSrc,
  name,
  networth,
  opacity,
}) => {
  return (
    <a.div className="wrapper">
              <div className="box" style={{}}>
              <div className="inner-box" style={{opacity}}>
                <div className="top-row">
                  <div className="img-container">
                    <img
                      className="img-prof-pic"
                      src="https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704"

                    />
                  </div>

                  <div className="net-worth-amount">
                    $151 Billion
                </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexGrow: 1,
                  }}
                >
                  <div className="name-container"
                  >
                  <div>Elon Musk</div>
                  {/* <div>Musk</div> */}
                  </div>
                  <button className="btn-view-profile">Read Full Profile</button>

                </div>
              </div>
              </div>
            </a.div>
  )
} 



const dimensions = [180, 90, 20.5]
const positions = {
  1: [0, 0, 0],
  2: [0, -60, -50],
  3: [0, -120, -100],
  4: [0, -180, -150],
  5: [0, -240, -200],
  6: [0, -300, -250],
}



const InnerApp = () => {


  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref ?.current) return;
    //  ref.current.rotation.x += 0.01
    //  ref.current.position.y -= 0.1;
  })

  useEffect(() => {
    if (!ref ?.current) return;
    //     const smoothness= 0.1 // 0 to 1 only
    //     const targetPosition = ref.current.position.clone();
    // targetPosition.y -= -30;

    // ref.current.position.y = lerp(curY, (curTop / state.zoom) * factor, 0.1)
    // ref.current.lerp(targetPosition, smoothness);

  }, [])

  const springRef1 = useSpringRef();
  const springRef2 = useSpringRef();

  // const activeSpringRef = useRef(1)
  const [activeSpring, setActiveSpring] = useState(1);

  const endPositionPart1 = [0, -10, 60];
  // const durationSpring1 = 500;
  const durationSpring1 = 500;

  const spring1 = useSpring(
    {
      ref: springRef1,
      onRest: () => {
        setActiveSpring(2);
        // activeSpringRef.current = 2;
        console.log("1 ENDED")

      },
      to: {
        // position: [0, -10, 80],
        position: endPositionPart1,
        rotation: [degrees_to_radians(-70), 0, 0],
        opacity: 0,
        // position: [0, -10, -40],
        // rotation: [degrees_to_radians(-70), 0, 0],
      },
      from: {
        position: [0, 40, 20],
        rotation: [degrees_to_radians(-120), 0, 0],
        opacity: 1,
        //      position: [0, -30, 80],
        // rotation: [degrees_to_radians(-90), 0, 0],
      },
      config: { duration: durationSpring1 },
    })



  const spring2 = useSpring(
    {
      delay: durationSpring1,
      ref: springRef2,
      onRest: () => { console.log("2 ENDED") },
      to: {
        // position: [0, -10, 80],
        // rotation: [degrees_to_radians(-90), 0, 0],
        position: [0, 40, -60],
        rotation: [degrees_to_radians(-70), 0, 0],
        opacity: 1,
      },
      from: {
        // position: [0, 30, 20],
        // rotation: [degrees_to_radians(-70), 0, 0],
        //  position: [0, -30, 80],
        position: endPositionPart1,
        rotation: [degrees_to_radians(-90), 0, 0],
        opacity: 0,
      },
      config: { duration: 500 },
    })
  // const { position, rotation, opacity } = activeSpring === 1 ? spring1 : spring2
  const { position, rotation, opacity } = spring1 


  const spring3 = useSpring(
    {
      // ref: springRef1,
      onRest: () => {
        // setActiveSpring(2);
        // activeSpringRef.current = 2;
        console.log("1 ENDED")

      },
      to: {
        // position: [0, 60, 20],
        position: [0, 40, -30],
        // position: endPositionPart1,
        rotation: [degrees_to_radians(-70), 0, 0],
        // opacity: 0,
        // position: [0, -10, -40],
        // rotation: [degrees_to_radians(-70), 0, 0],
      },
      from: {
        position: [0, 20, 0],
        rotation: [degrees_to_radians(-70), 0, 0],
        // opacity: 1,
        //      position: [0, -30, 80],
        // rotation: [degrees_to_radians(-90), 0, 0],
      },
      config: { duration: 400 },
    })
  const chain = useChain([springRef1, springRef2])
  console.log('chain', chain)


  const springBox2 = useSpring(
    {
      // ref: springRef1,
      onRest: () => {
        // setActiveSpring(2);
        // activeSpringRef.current = 2;
        console.log("1 ENDED")

      },
      to: {
        // position: [0, 60, 20],
        position: [0, 40, 0],
        // position: endPositionPart1,
        rotation: [degrees_to_radians(-70), 0, 0],
        // opacity: 0,
        // position: [0, -10, -40],
        // rotation: [degrees_to_radians(-70), 0, 0],
      },
      from: {
        position: [0, 10, -20],

        rotation: [degrees_to_radians(-70), 0, 0],
        // opacity: 1,
        //      position: [0, -30, 80],
        // rotation: [degrees_to_radians(-90), 0, 0],
      },
      config: { duration: 400 },
    })



  return (

    /* <div style={{transform: 'scale(1.5)', 
    perspective: 909
    }
    }
    >
    <div className="three-d-paper">
      Hello
    </div>

    <div className="three-d-paper3" />
    </div> */


    <>
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <Center alignTop> */}
      {/* <gridHelper args={[1000, 1000, `white`, `gray`]} /> */}
      <group
        // position={[-60, 150, 50]}
        position={[0, 150, 50]}
        >
      
        <Box rotation={rotation} myRef={ref} position={positions[1]} dimensions={dimensions}>
          <Html className="content" position={[0, 0, 0]} transform distanceFactor={400}>
          <CardInfo opacity={1} />
          </Html>
        </Box>

        <Box rotation={rotation} position={positions[2]} dimensions={dimensions}>

          <Html className="content" position={[0, 0, 0]} transform distanceFactor={400}>
          <CardInfo opacity={0.2} />
          </Html>
        </Box>

        <Box rotation={rotation} position={positions[3]} dimensions={dimensions}>
          <Html className="content" position={[0, 0, 0]} transform distanceFactor={400}>
          <CardInfo opacity={0.2} />
          </Html>
        </Box>
        <Box rotation={rotation} position={positions[4]} dimensions={dimensions}>
          <Html className="content" position={[0, 0, 0]} transform distanceFactor={400}>
          <CardInfo opacity={0.2} />
          </Html>
        </Box>

        <Box rotation={rotation} position={positions[5]} dimensions={dimensions}>
          <Html className="content" position={[0, 0, 0]} transform distanceFactor={400}>
          <CardInfo opacity={0.2} />
          </Html>
        </Box>
        <Box rotation={rotation} position={positions[6]} dimensions={dimensions}>
          <Html className="content" position={[0, 0, 0]} transform distanceFactor={400}>
          <CardInfo opacity={0.2} />
          </Html>
        </Box>
        
      </group>
      {/* </Center> */}
    </>

  )
}

function App() {
  const [cameraPosition, setCameraPosition] = useState([-60, 450, 180])
  const cameraRef = useRef();

  // useEffect(() => {
  //   cameraRef.current.position = cameraPosition
  // }, [cameraPosition])
  // const { camera } = useThree()
  // useEffect(() => void camera.position.set(0, 0, 200), )
  return (
    <div className="App" style={{ height: '100vh', display: 'flex', transform: 'scale(1.0)' }}>
    <h1 className="heading-rank">#1</h1>
      <Canvas
        ref={cameraRef}
        // camera={{ position: [-5, 450, 240], fov: 45, }}
        camera={{ position: cameraPosition, fov: 45, }}
      >
        <InnerApp />
      </Canvas>
      <div style={{ position: 'absolute', bottom: 5, right: 5 }}>
        <div>X: <input type="number" value={cameraPosition[0]}
          onChange={(ev) => setCameraPosition((prevVal) => {
            const newPosition = [...prevVal]
            newPosition[0] = parseFloat(ev.target.value);
            console.log('newPosition', newPosition)
            return newPosition
          })}
        />
        </div>
        <div>X: <input type="number" /></div>
        <div>X: <input type="number" /></div>
      </div>
    </div>
  );
}

export default App;
