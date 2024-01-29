import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const json = [
  {
    image: "/images/store/espace360.png",
    desc: "test desc",
    name: "Soirée bowling",
    link: "https://bdecesirouen.fr/boutique",
    ending_date: ""
  },
  {
    image: "/images/store/product1.jpg",
    desc: "test desc",
    name: "bowling espace 360",
    link: "",
    disabled: true
  },
  {
    image: "/images/store/espace360.png",
    desc: "test desc",
    name: "bowling espace 360",
    link: "",
  },
]



const test = () => {
  const [data, setData] = useState<Response>();
  return (
    <div>
      <h1 className="text-5xl text-center font-semibold underline decoration-secondary my-16 uppercase">
        Evenements
      </h1>
      <div className="carousel w-full" style={{ height: "400px" }}>
        {json.map((data, index) => {
          return (
            <div id={`slide${index}`} className="carousel-item relative w-full">
              <div className="card card-side bg-base-100 shadow-xl mx-auto">
                <figure><Image src={data.image} alt="Shoes" width={250} height={250} /></figure>
                <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
                  <p>{data.desc}</p>
                  <div className="card-actions justify-end">
                    <Link href={data.link} className="btn btn-primary">Boutique</Link>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${index == 0 ? json.length - 1 : index - 1}`} className="btn btn-circle">❮</a>
                <a href={`#slide${index == json.length - 1 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default test;
