import Image from "next/image";
import Link from "next/link";

export default function Top() {
  return (

<header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
  {/* <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
    Welcome to my site!
  </div> */}
  <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
    <source src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/Best_grow_choice_for_2ftx4ft_Mars_Hydro_SP_3000_Led_Grow_Light_New_2020.mp4?v=1614304644" type="video/mp4" />Your browser does not support the video tag.
    
  </video>
</header>
  )
}