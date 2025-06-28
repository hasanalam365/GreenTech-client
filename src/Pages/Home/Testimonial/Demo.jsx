import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

import { LiaQuoteLeftSolid } from "react-icons/lia";
const reviews = [
    {
      name: "Sarah Thompson",
     
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review: "Absolutely love this store! The product selection is fantastic and the delivery was incredibly fast. Will definitely shop again!"
    },
    {
      name: "Arjun Mehta",
     
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      review: "I bought a smartwatch and it exceeded my expectations. Seamless checkout experience and great customer support. Highly recommended!"
    },
    {
      name: "Isabella Rossi",
     
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      review: "The UI of the website is so smooth and responsive. I loved how easy it was to find the latest gadgets. A delightful experience!"
    },
    {
      name: "Liam O'Connor",
      
      image: "https://randomuser.me/api/portraits/men/34.jpg",
      review: "Purchased a security camera for my studio. The quality is outstanding and the price was unbeatable. I'm very satisfied."
    },
    {
      name: "Yuki Tanaka",
      
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      review: "One of the best gadget websites I've come across. Clean design, excellent product information, and responsive customer care."
    },
    {
      name: "Ahmed Khalid",
     
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      review: "A truly professional e-commerce platform. Bought a smart home device and received it within 2 days. Everything worked perfectly!"
    },
    {
      name: "Emily Nguyen",
     
      image: "https://randomuser.me/api/portraits/women/30.jpg",
      review: "Beautiful layout and fast load times. I was able to compare several gadgets easily before choosing. A+ for usability!"
    },
    {
      name: "Carlos Mendez",
     
      image: "https://randomuser.me/api/portraits/men/50.jpg",
      review: "From smartwatches to speakers, everything I ordered was authentic and packed with care. This site is now my go-to for tech shopping."
    },
    {
      name: "Anastasia Petrova",
     
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      review: "Very impressed with the product descriptions and customer reviews. Helped me make the right choice every time!"
    },
    {
      name: "Daniel Kim",
      
      image: "https://randomuser.me/api/portraits/men/13.jpg",
      review: "Top-tier service! I ordered multiple smart home items and each arrived perfectly on time. Highly efficient and trustworthy."
    }
  ];
  

const Demo = () => {

   

    return (
        <div className="">
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                pagination={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
         
         {reviews.map((item, index) => (
  <SwiperSlide key={index}>
    <div className="bg-base-100 shadow-xl p-8 h-[220px] space-y-2">
      <div className='flex justify-between items-center'>
        <div className='flex gap-5 items-center'>
          <img className='h-[50px] w-[50px] rounded-full' src={item.image} alt={item.name} />
          <div>
            <h4 className='text-xl font-medium'>{item.name}</h4>
           
          </div>
        </div>
        <div>
          <LiaQuoteLeftSolid className='text-4xl text-red-600'></LiaQuoteLeftSolid>
        </div>
      </div>
      <p>{item.review}</p>
    </div>
  </SwiperSlide>
))}

       
             

            </Swiper>
        </div >
    );
};

export default Demo;