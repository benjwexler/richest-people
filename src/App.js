
import './App.css';
import Box, { degrees_to_radians } from './Box';

import React, { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei';
import { useSprings } from '@react-spring/three'
import { a } from 'react-spring'
import * as d3 from 'd3';
import Div100vh from 'react-div-100vh'
import useWindowSize from './hooks/useWindowSize';

const CardInfo = ({
  imgSrc,
  name,
  networth,
  opacity,
  onClick,
  hrefProfile,
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
              ${networth}
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
            </div>
            <button className="btn-view-profile">
              <a href={hrefProfile} target="_blank">Read Full Profile</a>
            </button>
          </div>
        </a.div>
      </div>
    </a.div>
  )
}

const dimensions = [140, 90, 20.5];

const InnerApp = ({ count, userHasClicked }) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= 576;
  const ref = useRef()
  const offsetCoords = [0, -60, -50];
  const endPositionPart1 = [0, -1000, -350];
  

  const cards = [
    {
      name: 'Jeff Bezos',
      imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142',
      networth: '177 Billion',
      hrefProfile: 'https://www.forbes.com/profile/jeff-bezos/?list=billionaires',
    },
    {
      name: 'Elon Musk', imgSrc: "https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704",
      networth: '151 Billion',
      hrefProfile: 'https://www.forbes.com/profile/elon-musk/?list=billionaires',
    },
    {
      name: 'Bernard Arnault', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dc05518ca425400079c659f%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4000%26cropY1%3D1209%26cropY2%3D5212', networth: '150 Billion',
      hrefProfile: 'https://www.forbes.com/profile/bernard-arnault/?list=billionaires',
    },
    {
      name: 'Bill Gates', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987', networth: '124 Billion',
      hrefProfile: 'https://www.forbes.com/profile/bill-gates/?list=billionaires',
    },
    {
      name: 'Mark Zuckerberg', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401', networth: '97 Billion',
      hrefProfile: 'https://www.forbes.com/profile/mark-zuckerberg/?list=billionaires',
    },
    {
      name: 'Warren Buffet', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5babb7f1a7ea4342a948b79a%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D748%26cropX2%3D3075%26cropY1%3D1753%26cropY2%3D4082', networth: '96 Billion',
      hrefProfile: 'https://www.forbes.com/profile/warren-buffett/?list=billionaires',
    },
    {
      name: 'Larry Ellison', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e8b62cfc095010007bffea0%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4529%26cropY1%3D652%26cropY2%3D5184', networth: '93 Billion',
      hrefProfile: 'https://www.forbes.com/profile/larry-ellison/?list=billionaires',
    },
    {
      name: 'Larry Page', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76bcaaa7ea43100043c836%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D227%26cropX2%3D2022%26cropY1%3D22%26cropY2%3D1817', networth: '91.5 Billion',
      hrefProfile: 'https://www.forbes.com/profile/larry-page?list=billionaires',
    },
    {
      name: 'Sergey Brin', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7c254bbe6f78090d831f%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D475%26cropX2%3D2887%26cropY1%3D168%26cropY2%3D2582', networth: '89 Billion',
      hrefProfile: 'https://www.forbes.com/profile/sergey-brin/?list=billionaires',
    },
    {
      name: 'Mukesh Ambani', imgSrc: 'https://thumbor.forbes.com/thumbor/190x190/smart/filters:format(jpeg)/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7829a7ea434b351ba0b6%2F416x416.jpg%3Fbackground%3D000000%26cropX1%3D206%26cropX2%3D2043%26cropY1%3D250%26cropY2%3D2089', networth: '84.5 Billion',
      hrefProfile: 'https://www.forbes.com/profile/mukesh-ambani/?list=billionaires',
    }

  ]

  const originCoords = [0, 0, 0];

  const lastCardAdditionalAnimations = [{
    opacity: 0,
    position: endPositionPart1,
    rotation: [degrees_to_radians(-150), 0, 0],
  },
  {
    opacity: .2,
    position: offsetCoords.map((coord, i) => coord + (offsetCoords[i] * 8)),
    rotation: [degrees_to_radians(-70), 0, 0],
  }]

  const springs = useSprings(
    cards.length,
    cards.map((item, i) => {
      let index = i - count

      if (index < 0) {
        index = cards.length + index;
      }

      const isLastCard = index === cards.length - 1;
      return ({
        from: {
          opacity: 1,
          // position: originCoords.map((coord, j) => coord + (offsetCoords[j] * i)),
          position: [0, 0, 0],
          rotation: [degrees_to_radians(-70), 0, 0],
          index,
        },
        to: [
          {
            rotation: [degrees_to_radians(isLastCard ? -100 : -70), 0, 0],
            opacity: index === 0 ? 1 : 0.2,
            position: isLastCard ? [0, -60, 50] : originCoords.map((coord, j) => {
              const offset = 0;

              return offset + coord + (offsetCoords[j] * index)
            }),
            index,
          },
          ...lastCardAdditionalAnimations,
        ]
          .slice(isLastCard && (!userHasClicked) ? lastCardAdditionalAnimations.length - 1 : 0, isLastCard ? lastCardAdditionalAnimations.length : 1)
        ,

        config: {
          duration: isLastCard ? 600 : 800,
          easing: isLastCard ? d3.easeBackOut.overshoot(1) : d3.easeQuadInOut,
        },

      })
    })
  );

  const createCards = () => {

    return (
      springs.map((spring, i) => {
        const { position, opacity, index } = spring;
        const { name, imgSrc, networth, hrefProfile } = cards[i];
        return (
          <Box
            key={i}
            rotation={spring.rotation}
            myRef={ref}
            position={position}
            dimensions={dimensions}>
            <Html
              className="content"
              position={[0, 0, 10.25]}
              transform distanceFactor={200}>
              <CardInfo
                index
                name={name}
                imgSrc={imgSrc}
                networth={networth}
                hrefProfile={hrefProfile}
                opacity={opacity} />
            </Html>
          </Box>

        )
      })
    )
  }


  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <group
        position={[0, isMobile ? 90 : 180, 50]}
      >
        {createCards()}
      </group>
    </>

  )
}

function App() {
  const cameraPosition = [-60, 480, 180];
  const cameraRef = useRef();
  const [count, setCount] = useState(0);
  const [userHasClicked, setUserHasClicked] = useState(false);
  const innerAppProps = { count, userHasClicked }
  

  return (
    <Div100vh
      className="App"
      style={{ display: 'flex', transform: 'scale(1.0)' }}
    >
      <div className="page-title-mobile">
        <div
          className="title-line-1-mobile"
        >
          <span style={{ color: '#1ea394' }}>Top</span> 10 Richest People
        </div>
        <div
          className="title-line-2-mobile"
        >
          <span style={{ colorz: '#1ea394' }}>Reimagined</span> by <span style={{ color: '#1ea394' }}>Ben Wexler</span>
        </div>
      </div>

      <h1 className="page-title">
        <div className="title-line-1">
          <span style={{ color: '#1ea394' }}>Top</span> 10 Richest People
        </div>
        <div className="title-line-2">
          <span style={{ colorz: '#1ea394' }}>
            Reimagined
          </span> by <span style={{ color: '#1ea394' }}>Ben Wexler</span>
        </div>
        <div style={{ display: 'flex' }} className="heading-rank2">
          <div className="d-flex">
            <button
              className="previous" onClick={() => {
                setUserHasClicked(true)
                setCount(prevVal => {
                const newVal = prevVal - 1;
                return newVal < 0 ? 9 : newVal
              })}}>
              <i className="fas fa-arrow-left icon-previous"></i>
            </button>

            <h1
              className="rankNum"
              style={{
                margin: 0,
              }}
            >
              {count + 1}
            </h1>
            <div className="m-auto next-prev-text" />
          </div>
    
          <div className="d-flex">
            <div className="m-auto next-prev-text">
            </div>
            <button className="next" onClick={() => {
              setUserHasClicked(true)
              setCount(prevVal => {
              const newVal = prevVal + 1;
              return newVal >= 10 ? 0 : newVal
            })}}>
              <i className="fas fa-arrow-right icon-next"></i>
            </button>
          </div>
        </div>

      </h1>
      <div style={{ display: 'none', }} className="heading-rank2">
        <div className="d-flex">
          <div className="previous" onClick={() => setCount(prevVal => {
            const newVal = prevVal - 1;
            return newVal < 0 ? 9 : newVal
          })}>
            <i className="fas fa-arrow-left icon-previous"></i>
          </div>

          <h1
            style={{ margin: 0, minWidth: 90 }}
          >
            {count + 1}
          </h1>
          <div className="m-auto next-prev-text" />
        </div>

        <div className="d-flex">
          <div className="m-auto next-prev-text">
          </div>
          <div className="next" onClick={() => setCount(prevVal => {
            const newVal = prevVal + 1;
            return newVal >= 10 ? 0 : newVal
          })}>

            <i className="fas fa-arrow-right icon-next"></i>
          </div>
        </div>

      </div>
      <Canvas
        ref={cameraRef}
        className="canvas-container"
        camera={{ position: cameraPosition, fov: 45, }}
      >
        <InnerApp {...innerAppProps} />
      </Canvas>
    </Div100vh>
  );
}

export default App;
