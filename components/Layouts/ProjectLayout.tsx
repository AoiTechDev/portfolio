import React from 'react'

const ProjectLayout = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <main className="w-full text-white  min-h-screen flex-col">{children}</main>
  )
}

export default ProjectLayout