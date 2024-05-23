import React from 'react'

const RadialBlur = ({precent = '10'}: {precent?: string}) => {
  return (
    <div className={`absolute pointer-events-none inset-0 flex items-center opacity-80 justify-center dark:bg-black bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_${precent}%,black)]`}></div>
)
}

export default RadialBlur