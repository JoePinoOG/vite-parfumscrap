import { useState } from 'react'
import './estilos/App.css'
const products = [
    {
      id: 1,
      name: 'Channel',
      href: '#',
      price: '$48',
      imageSrc: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      imageAlt: 'perfumechannel',
      desc: 'descripcion de prueba',
    },
    {
      id: 2,
      name: 'sauvage dior',
      href: '#',
      price: '$35',
      imageSrc: 'https://media.istockphoto.com/id/462318375/es/foto/hombres-aerosol-botella-de-perfume-azul-aislado-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=dDZ_GAO7ebIa0HaTbFmLvgDvu9z3dUlgtNsu4V4VoiM=',
      imageAlt: 'perfumerandom1',
      desc: 'descripcion de prueba',
    },
    {
      id: 3,
      name: 'Botella blanca',
      href: '#',
      price: '$89',
      imageSrc: 'https://media.istockphoto.com/id/517570960/es/foto/hombres-perfume-aislado-sobre-un-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=raBigpNln34KBWEfWcE5w4rMQ9sSd9vCtGcc_zF5flg=',
      imageAlt: 'perfumerandom2',
      desc: 'descripcion de prueba',
    },
    {
      id: 4,
      name: 'AwaS lattafa',
      href: '#',
      price: '$35',
      imageSrc: 'https://media.istockphoto.com/id/1002065178/es/foto/botella-de-perfume.jpg?s=1024x1024&w=is&k=20&c=wK-qLhlpznexhRpohSMwfqJCGLugi46kpEigoY7q9vw=',
      imageAlt: 'perfumerandom3',
      desc: 'descripcion de prueba',
    },
    {
        id: 5,
        name: 'Channel',
        href: '#',
        price: '$48',
        imageSrc: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: 'perfumechannel',
        desc: 'descripcion de prueba',
      },
      {
        id: 6,
        name: 'sauvage dior',
        href: '#',
        price: '$35',
        imageSrc: 'https://media.istockphoto.com/id/462318375/es/foto/hombres-aerosol-botella-de-perfume-azul-aislado-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=dDZ_GAO7ebIa0HaTbFmLvgDvu9z3dUlgtNsu4V4VoiM=',
        imageAlt: 'perfumerandom1',
        desc: 'descripcion de prueba',
      },
      {
        id: 7,
        name: 'Botella blanca',
        href: '#',
        price: '$89',
        imageSrc: 'https://media.istockphoto.com/id/517570960/es/foto/hombres-perfume-aislado-sobre-un-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=raBigpNln34KBWEfWcE5w4rMQ9sSd9vCtGcc_zF5flg=',
        imageAlt: 'perfumerandom2',
        desc: 'descripcion de prueba',
      },
      {
        id: 8,
        name: 'AwaS lattafa',
        href: '#',
        price: '$35',
        imageSrc: 'https://media.istockphoto.com/id/1002065178/es/foto/botella-de-perfume.jpg?s=1024x1024&w=is&k=20&c=wK-qLhlpznexhRpohSMwfqJCGLugi46kpEigoY7q9vw=',
        imageAlt: 'perfumerandom3',
        desc: 'descripcion de prueba',
      },
  ]

function Productos(){

    return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Perfumes destacados</h2>
    
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.desc}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
)

}

export default Productos