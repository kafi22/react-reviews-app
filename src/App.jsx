import { useState } from "react"
import reviews from "./Component/Db/data"
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi';

const App = () => {

  const [index, setIndex] = useState(0)
  
  const {name, id, job, text, image} = reviews[index]

  console.log(reviews)

  const prevBtn = () => {

    setIndex((currentIndex) => {
      const newItem = currentIndex - 1
      if(newItem < 0) {
        return reviews.length - 1
      }
      return newItem;
    })


  }

  const nextBtn = () => {

    setIndex((currentIndex) => {
      const newItem = currentIndex + 1
      if(newItem > reviews.length - 1) {
        return 0
      }
      return newItem;
    })

  }

  const randomItem = (reviews) => {

    const random = (Math.floor(Math.random() * reviews.length - 1) + 1)
    
    setIndex((nextItem) => nextItem = random)
    
  }








  return (
    <div className="grid place-content-center min-h-screen ">
      <div className=" bg-neutral-300 w-[400px] p-4 m-2 flex flex-col justify-center items-center space-y-2  rounded-md shadow-md" key={id}>
        <img src={image} alt=""  className=" h-20 w-20 object-cover block  rounded-full border-r-4 ring-blue-400 border-blue-300"/>
        <div className=" details flex flex-col justify-center items-center mt-2">
        <h1 className=" text-lg text-cyan-600  font-medium tracking-wider">Name : {name}</h1>
        <p>{job}</p>
        <code className=" text-sm leading-6 my-2 text-center">{text}</code>
        </div>
        <div className=" chevrons">
          <button onClick={prevBtn}>
          <BiChevronLeft size={30} className=" hover:text-cyan-600 transition-colors"  />
          </button>
          <button onClick={nextBtn}>
          <BiChevronRight size={30} className="hover:text-cyan-600 transition-colors" />
          </button>
        </div>
        <div >
          <button className=" bg-blue-300 text-white py-2 px-4 rounded-md cursor-pointer text-center" onClick={() => randomItem(reviews)}>Surprise Me</button>
        </div>
      </div>
    </div>
  )
}

export default App