
import React, { useState } from 'react'
import { animated as a } from '@react-spring/three'

export function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

export default function Box(props) {

  const { dimensions, myRef, rotation, children } = props;

  return (
    <a.mesh
      visible={false}
      {...props}
      ref={myRef}
      rotation={rotation}
    >
      <boxGeometry args={dimensions} />
      <meshStandardMaterial />
      {children}
    </a.mesh>
  )
}