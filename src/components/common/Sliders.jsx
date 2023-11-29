import Slider from "react-slick"
import Spor from "../../assets/img/0003715_air-force-1-07-low_600.jpeg"
import Spor2 from "../../assets/img/nike-air-force-1-07-world-wide-ck7648-001-2-695x695.jpeg"

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="px-5 py-6"> 
      <Slider {...settings} >
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
          <div className="text-6xl font-bold">Kalitenin Adresi</div>
          <div className="text-lg my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti autem, illum magnam quod error suscipit fugit corrupti voluptas magni sapiente iusto ducimus ipsum dolore eligendi dolorem iste quaerat obcaecati cumque?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam laborum aliquam dolores necessitatibus dolorem nostrum ex quia dicta eveniet similique sed, nam nesciunt, labore animi molestias tenetur asperiores, optio sapiente!</div>
          <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200 ">İncele</div>
          </div>
          <img src= {Spor} />
        </div>
        <div className="!flex items-center bg-gray-100 px-6" >
        <div className="">
          <div className="text-6xl font-bold">Kalitenin Adresi</div>
          <div className="text-lg my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti autem, illum magnam quod error suscipit fugit corrupti voluptas magni sapiente iusto ducimus ipsum dolore eligendi dolorem iste quaerat obcaecati cumque?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit, dicta reiciendis architecto doloremque quia officiis culpa quam eos labore ab asperiores voluptas a totam nisi, ad hic, adipisci consequatur?</div>
          <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200 ">İncele</div>
          </div>

          <img src= {Spor2} className="h-[600px] w-[750px]"/>
        </div>
        

      </Slider>
    </div>
  )
}

export default Sliders
