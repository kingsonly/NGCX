import { GasCylinder } from 'assets'
import React,{useState} from 'react'
import { FaStar } from 'react-icons/fa'
import { FiEye, FiHeart, FiShuffle } from 'react-icons/fi'
import { Colors,BadegeColor } from 'theme/colors'


interface hoverFunctionProps{
  hoverStatus:boolean;
  Cta: () => void
}

interface popularComponentProps{
  Image:string;
  Badge:string;
  Title:string;
  Subtitle:string;
  Price:string;
  Discount:string;
  Wishlist:()=>void;
  Cta:()=>void;
  Badgetext:string;
  Size:string;
  Ratting?:string;

}
const HoverableDiv = (props:hoverFunctionProps ) => {
  const {hoverStatus,Cta}=props
  return (
    <div> 
      
      { hoverStatus ?
        <ul className='bg-white border-1 border-light-green rounded-lg flex'>
          <li className=' p-2' onClick={Cta}>
            <FiHeart color={Colors['ncgx-green']} size={24} />
          </li>
          <li className=' p-2 border-x-2 border-x-light-green'>
            <FiShuffle color={Colors['ncgx-green']} size={24} />
          </li>
          <li className=' p-2'>
            <FiEye color={Colors['ncgx-green']} size={24} />
          </li>
        </ul>:""
}
    </div>
  );
};

const Popular = (props:popularComponentProps) => {
  const {Image,Badge,Title,Subtitle,Price,Discount,Wishlist,Cta,Badgetext,Size,Ratting } = props

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
    return true
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    return true
  };

  return (
    <div className='bg-white hover:border-green border border-[#E5E5E5] hover:shadow-lg pt-5 rounded-lg'>
      <div className='flex justify-start'>
        {Badge != null ?
         <div className={`rounded-r-full text-white text-xs p-2 ${BadegeColor[Badge]}`}>{Badgetext}%</div>:""
        }
       
      </div>
        <div className='p-7'>
            <div className='relative'>
              <img src={Image} alt="gas cylinder" className='w-64' />
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='h-full w-full flex justify-center items-center absolute top-0 left-0'>
                <HoverableDiv
                hoverStatus={isHovering}
                Cta={Wishlist}
                />
              </div>
            </div>

            <div className='mt-5' >
              <div className='mb-5'>
                <p className='text-sm text-lightgray'>{Title}</p>
                <p className='font-bold text-sm text-gray'>{Subtitle}</p>
              </div>

              <div className='mb-5'>
                <div className='flex items-center'>
                  <FaStar color={Colors['ncgx-mustard']}/>
                  <FaStar color={Colors['ncgx-mustard']}/>
                  <FaStar color={Colors['ncgx-mustard']}/>
                  <FaStar color={Colors['ncgx-mustard']}/>
                  <FaStar color='#ccc'/>

                  <span className='ml-4 text-lightgray' >({Ratting})</span>
                </div>
                <p className='text-lightgray'>{Size}kg</p>
              </div>

              <div className='flex w-full justify-between items-center'>
                <div className='flex items-baseline'>
                  <p className='font-bold text-2xl text-green'>&#8358;{Price}</p>
                  <p className='text-xs text-lightgray'>&#8358;{Discount}</p>
                </div>
                <button data-testid="buy-button" className="text-green bg-extra-light-green rounded-md p-2 px-3" onClick={Cta}><span className='font-bold'>Buy</span> +</button>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Popular