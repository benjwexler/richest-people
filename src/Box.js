import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, animated as a } from '@react-spring/three'
import * as THREE from 'three'

export function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export default function Box(props) {

  const {dimensions, color, myRef, rotation, children, opacity} = props;
  // This reference will give us direct access to the THREE.Mesh object
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <a.mesh
    visible={false}
      {...props}
      ref={myRef}
      rotation={rotation}
      // scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={dimensions} />
      <meshStandardMaterial color={color || 'blue'} side={THREE.DoubleSide}/>
      {children}
    </a.mesh>
  )
}