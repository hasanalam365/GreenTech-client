
import Demo from "./Demo";


const Testimonial = () => {

    return (
        <div className="flex flex-col md:flex-col lg:flex-row  gap-10 bg-gray-100 p-4 md:p-8 lg:p-16 ">
            {/* testimonital left */}
            <div className="w-full md:2/5 lg:w-2/5 space-y-3">
  <h5 className="font-medium text-red-600">Customer Voices</h5>
  <h3 className="text-3xl font-semibold">What Our Buyers Say</h3>
  <p>
    Hear from our happy customers across the globe! Whether it's smart home gadgets, the latest smartphones, or cutting-edge wearables, our users share how our products have enhanced their daily lives. Real experiences, trusted quality — see why people love shopping with us.
  </p>
</div>

            {/* testimonials rigth  */}
            <div className="w-full lg:w-3/5">
                {/* <TestimonialRight></TestimonialRight> */}
                <Demo></Demo>
            </div>
        </div>
    );
};

export default Testimonial;