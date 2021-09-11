import logo from './logo.svg';
import './App.css';
import Box, { degrees_to_radians } from './Box';

import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, act, useThree } from '@react-three/fiber'
import { Html, enter, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import { useSpring, useSprings, useSpringRef, useChain } from '@react-spring/three'
import { a } from 'react-spring'
import * as d3 from 'd3';

const CardInfo = ({
  imgSrc,
  name,
  networth,
  opacity,
  onClick,
  // imgSrc,
}) => {
  return (
    <a.div className="wrapper" onClick={onClick}>
      <div className="box" style={{}}>
        <a.div className="inner-box" style={{ opacity }}>
          <div className="top-row">
            <div className="img-container">
              <img
                className="img-prof-pic"
                src={imgSrc}

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
              <div>{name}</div>
              {/* <div>Musk</div> */}
            </div>
            <button className="btn-view-profile">Read Full Profile</button>

          </div>
        </a.div>
      </div>
    </a.div>
  )
}



const dimensions = [140, 90, 20.5]
const positions = {
  1: [0, 0, 0],
  2: [0, -60, -50],
  3: [0, -120, -100],
  4: [0, -180, -150],
  5: [0, -240, -200],
  6: [0, -300, -250],
}

// const numCardsArr = Array.from(Array(10));





const InnerApp = ({ count, setCount }) => {


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
  const offsetCoords = [0, -60, -50];

  const endPositionPart1 = [0, -1100, -350];

  // const durationSpring1 = 500;
  const durationSpring1 = 600;

  const spring1 = useSpring(
    {
      // reset: true,
      from: {
        position: [0, -100, 0],
        rotation: [degrees_to_radians(-140), 0, 0],
      },
      ref: springRef1,
      onRest: () => {
        setActiveSpring(2)

      },
      position: endPositionPart1,
      rotation: [degrees_to_radians(-140), 0, 0],
      opacity: 0,
      config: {
        duration: durationSpring1,
      },
    })



  const spring2 = useSpring(
    {
      // reset: true,
      delay: durationSpring1,
      ref: springRef2,
      onRest: () => {
        setActiveSpring(1)

      },
      to: {
        position: offsetCoords.map((coord, i) => coord + (offsetCoords[i] * 9)),
        rotation: [degrees_to_radians(-70), 0, 0],
        opacity: 1,
      },
      from: {
        position: endPositionPart1,
        rotation: [degrees_to_radians(-150), 0, 0],
        opacity: 0,
      },
      config: {
        duration: 800,
        easing: d3.easeBackOut.overshoot(1.5),
      },
    })
  const { position, rotation, opacity } = activeSpring === 1 ? spring1 : spring2
  // const { position, rotation, opacity } = spring1



  const chain = useChain([springRef1, springRef2], [0, 0])

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

  const names = [
    { name: 'Jeff Bezos', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142', networth: 1, },
    { name: 'Elon Musk', imgSrc: "https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704", networth: 1, },
    { name: 'Bernard Arnault', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dc05518ca425400079c659f%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4000%26cropY1%3D1209%26cropY2%3D5212', networth: 1, },
    { name: 'Bill Gates', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987', networth: 1, },
    { name: 'Mark Zuckerberg', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401', networth: 1, },
    { name: 'Warren Buffet', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5babb7f1a7ea4342a948b79a%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D748%26cropX2%3D3075%26cropY1%3D1753%26cropY2%3D4082', networth: 1, },
    { name: 'Larry Ellison', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e8b62cfc095010007bffea0%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4529%26cropY1%3D652%26cropY2%3D5184', networth: 1, },
    { name: 'Larry Page', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76bcaaa7ea43100043c836%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D227%26cropX2%3D2022%26cropY1%3D22%26cropY2%3D1817', networth: 1, },
    { name: 'Sergey Brin', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7c254bbe6f78090d831f%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D475%26cropX2%3D2887%26cropY1%3D168%26cropY2%3D2582', networth: 1, },
    { name: 'Mukesh Ambani', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7829a7ea434b351ba0b6%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D206%26cropX2%3D2043%26cropY1%3D250%26cropY2%3D2089', networth: 1, }

  ]

  const cards = names;

  const originCoords = [0, 0, 0];




  //     const positions = originCoords.map((coord, j) => coord + (offsetCoords[j] * i);

  //     var indexToSplit = arr.indexOf('c');
  // var first = arr.slice(0, indexToSplit);
  // var second = arr.slice(indexToSplit + 1);

  const springs = useSprings(
    cards.length,
    cards.map((item, i) => {
      let index = i - count

      if (index < 0) {
        index = cards.length + index;
        // console.log('index', index)
      }

      const isLastCard = index === cards.length - 1;
      return ({
        from: {
          opacity: 1,
          position: originCoords.map((coord, j) => coord + (offsetCoords[j] * i)),
          rotation: [degrees_to_radians(-70), 0, 0],
          index,
        },
        to: [
          {position: [0, 0, 0]},
          {
            opacity: index === 0 ? 1 : 1.2,
            position: originCoords.map((coord, j) => {

              // if(isLastCard || true) {
              //   return [10, 10, 10]
              // }
              // const offset = (j === 1 && index === cards.length - 1 ? 320 : 0);
              const offset = 0;

              return offset + coord + (offsetCoords[j] * index)
            }),
            // rotation: index === cards.length - 1 ? [degrees_to_radians(-160), 0, 0] : [degrees_to_radians(-70), 0, 0],
            // rotation: [degrees_to_radians(-70), 0, 0],
            index,
          },
          {
            // opacity: 1,
            position: [0, -100, 100],
          },
          {
            // opacity: 1,
            position: endPositionPart1,
            // rotation: [degrees_to_radians(-150), 0, 0],
          },
          {
            // opacity: 1,
            position: offsetCoords.map((coord, i) => coord + (offsetCoords[i] * 9)),
        // rotation: [degrees_to_radians(-70), 0, 0],
          }
        ]
        .slice(0, false ? cards.length : 2)
        ,

        config: {
          // duration: isLastCard ? 2200 : 800,
          // easing: isLastCard ? d3.easeBackOut.overshoot(2) : d3.easeQuadInOut,
        },

      })
    })
  );

  const createCards = (numCards, originCoords = [0, 0, 0], offsetCoords = [0, 0, 0]) => {

    return (
      springs.map((spring, i) => {
        const { position, opacity, index } = spring;
        console.log('position', position)
        // console.log('spring', spring)
        // console.log('index', index)

        // if(index.animation.from === 9) return null;
        // console.log('opacity', opacity)
        return (
          <Box
            key={i}
            rotation={spring.rotation}
            myRef={ref}
            position={position
              // .to(o => o)
            }
            dimensions={dimensions}>
            <Html


              className="content"
              // position={[0, 0, 0]} 
              position={[0, 0, 10.25]}
              transform distanceFactor={400}>
              <CardInfo
                index
                name={cards[i].name}
                imgSrc={cards[i].imgSrc}
                onClick={() => setCount(prevVal => {
                  const newVal = prevVal + 1;
                  return newVal >= cards.length ? 0 : newVal
                })}

                opacity={opacity} />
            </Html>
          </Box>

        )
      })
    )


  }


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

        {createCards(10, [0, 0, 0], [0, -60, -50])}
        {/* <Box
          // key={i}
          rotation={rotation} position={position} dimensions={dimensions}>
          <Html


            className="content"
            // position={[0, 0, 0]} 
            position={[0, 0, 10.25]}
            transform distanceFactor={400}>
            <CardInfo
              index
              name={cards[count - 1]?.name}
              imgSrc={cards[count - 1]?.imgSrc}
              onClick={() => setCount(prevVal => {
                const newVal = prevVal + 1;
                return newVal >= cards.length ? 0 : newVal
              })}

              opacity={1} />
          </Html>
        </Box> */}

      </group>
      {/* </Center> */}
    </>

  )
}

function App() {
  // const [cameraPosition, setCameraPosition] = useState([-60, 450, 180])
  const [cameraPosition, setCameraPosition] = useState([-60, 450, 180])
  const cameraRef = useRef();

  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const innerAppProps = { count, setCount }

  const [rankCoords, setRankCoords] = useState({ left: 0, top: 0 })

  const handleResize = () => {
    // return;
    setTimeout(() => {
      console.log('count', count)
      const dimensions = document.querySelectorAll('.content')[countRef.current] ?.getBoundingClientRect();
      // const dimensionsLast = document.querySelectorAll('.content')[9]?.getBoundingClientRect();
      if (!dimensions) return;

      setRankCoords({ left: dimensions.left, top: dimensions.top })

      document.querySelector('.heading-rank').style.left = `${Math.round(dimensions.left)}px`
      // document.querySelector('.heading-rank').style.top = `${Math.round(dimensions.top - 50)}px`
    }, 0)

    // console.log('dimensions', dimensions)
  }

  useEffect(() => {
    setTimeout(() => {
      handleResize()
    }, 100)

    window.addEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    countRef.current = count;
  }, [count])


  return (
    <div className="App" style={{ height: '100vh', display: 'flex', transform: 'scale(1.0)' }}>
      <h1
        // style={{left: rankCoords.left, top: rankCoords.top}}
        className="heading-rank">#{count + 1}</h1>
      <Canvas
        ref={cameraRef}
        // camera={{ position: [-5, 450, 240], fov: 45, }}
        camera={{ position: cameraPosition, fov: 45, }}
      >
        <InnerApp {...innerAppProps} />
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
