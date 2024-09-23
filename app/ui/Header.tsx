import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <div className='bg-gray-300 px-20 py-3 flex justify-between'>
          <Link href="/">Logo</Link>
          <div>USER</div>
    </div>
  )
}

export default Header