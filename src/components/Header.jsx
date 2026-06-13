import React from 'react'

function Header() {
  return (
    <div>
        <div>
             <Link to="/" className="block px-4 py-2 transition-all hover:bg-gray-50 hover:pl-6"><i class="fa-solid fa-sack-dollar fa-bounce" style="color: rgb(255, 212, 59);"></i>  My Finance</Link>
            
        </div>
    </div>
  )
}

export default Header