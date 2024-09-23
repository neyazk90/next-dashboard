import React from 'react'
import Header from '../ui/Header'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>

    </>
  )
}

export default layout