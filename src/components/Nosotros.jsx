import React, { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container">
        <h1 className="main-title">Nosotros</h1>
        <p>Bienvenidos a Milkshakeshake!, el lugar donde la frescura, el sabor y la salud se mezclan en cada sorbo. Nuestra pasión por los ingredientes naturales y nutritivos nos llevó a crear un espacio donde cada batido es más que una bebida: es una experiencia deliciosa y revitalizante.</p>
    </div>
  )
}

export default Nosotros