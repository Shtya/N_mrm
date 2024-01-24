import React from 'react'

const Header = ({header , type , handleFilter}) => {
  return (
    <ul className="header" >  {header?.map((e,index)=> (<li className={type == e.type ? "active p" : "p"}  onClick={_=>handleFilter(e.type)} key={index}>{e.name}</li>))}  </ul>

  )
}

export default Header