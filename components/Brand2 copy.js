import Image from "next/image";
import Link from "next/link";

export default function Top() {
  return (

<div className="relative z-20 flex justify-center items-center flex-wrap h-screen overflow-hidden md:mb-50">
  <div className="relative z-20 w-full flex flex-wrap justify-around max-w-4xl">
    <div className="w-full md:w-64">
      <div className="relative mb-10">
        <img src="https://images.unsplash.com/photo-1499914485622-a88fac536970?w=640" className="w-64 h-64 object-cover" />
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-start">
          <div className="w-1 h-16 bg-gray-900 -mb-6" />
        </div>
      </div>
      <h3 className="text-xs uppercase tracking-tighter text-center font-sans">Pinterest Management</h3>
    </div>
    <div className="w-full md:w-64 md:mt-16">
      <div className="relative mb-10">
        <img src="https://images.unsplash.com/photo-1462078563783-650e23af549d?w=640" className="w-64 h-64 object-cover" />
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-start">
          <div className="w-1 h-16 bg-gray-900 -mb-6" />
        </div>
      </div>
      <h3 className="text-xs uppercase tracking-tighter text-center font-sans">Instagram Strategy</h3>
    </div>
    <div className="w-full md:w-64 md:mt-32">
      <div className="relative mb-10">
        <img src="https://images.unsplash.com/photo-1553531580-652231dae097?w=640" className="w-64 h-64 object-cover" />
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-start">
          <div className="w-1 h-16 bg-gray-900 -mb-6" />
        </div>
      </div>
      <h3 className="text-xs uppercase tracking-tighter text-center font-sans">Brand Design</h3>
    </div>
  </div>
  <div className="z-10 w-1/2 h-full bg-gray-400 absolute top-0 right-0 -mr-20" />
  <div className="z-10 w-1 h-64 bg-gray-100 absolute bottom-0 right-0 mr-5" />
</div>
  )
}