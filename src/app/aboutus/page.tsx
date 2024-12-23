import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-bag h-[286px] w-[1920px]">
        <h1 className="text-[40px] text-blue-950  font-bold pt-[125px] ml-52">About Us</h1>
      </div>
      <div>
        <img src="/page sort by.png" alt="" className="ml-[310px] mt-[140px]" />
      </div>
      <div className="flex gap-14 justify-center mt-20">
        <img src="/Group 73.png" alt="" />
        <div>
          <h1 className="text-[36px] text-blue-950 font-bold">
            Know About Our Ecomerce
            <br /> Business, History
          </h1>
          <p className="text-para2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices
            <br />
            mattis aliquam, malesuada diam est. Malesuada sem tristique amet
            erat vitae
            <br /> eget dolor lobortis. Accumsan faucibus vitae lobortis quis
            bibendum quam.
          </p>
          <button className="py-2 px-2  w-[156px] h-[56px] text-white font-semibold text-[17px] mt-10 bg-pink-500">
            {" "}
            Contact Us
          </button>
        </div>
      </div>
      <h1 className="text-center text-[30px] font-bold mt-24">Our Features</h1>
      <div className="flex gap-10 mt-16 justify-center ">
        <div className=" bg-white rounded-lg border-none shadow-2xl p-6 mb-10 ">
          <div className="w-[270px] h-[220px]">
            <img src="/free-delivery 1.png" alt="" className="ml-28" />
            <h1 className="text-blue-950 text-[17px] font-bold text-center">
              {" "}
              Free delivery
            </h1>
            <p className="text-para2 text-center">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br /> Massa purus gravida.
            </p>
          </div>
        </div>
        <div className=" bg-white rounded-lg border-none shadow-2xl p-6 mb-10 ">
          <div className="w-[270px] h-[220px]">
            <img src="/cashback 1.png" alt="" className="ml-28" />
            <h1 className="text-blue-950 text-[17px] font-bold text-center">
              {" "}
              Free delivery
            </h1>
            <p className="text-para2 text-center">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br /> Massa purus gravida.
            </p>
          </div>
        </div>
        <div className=" bg-white rounded-lg border-none shadow-2xl p-6 mb-10 ">
          <div className="w-[270px] h-[220px]">
            <img src="/premium-quality 1.png" alt="" className="ml-28" />
            <h1 className="text-blue-950 text-[17px] font-bold text-center">
              {" "}
              Free delivery
            </h1>
            <p className="text-para2 text-center">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br /> Massa purus gravida.
            </p>
          </div>
        </div>
        <div className=" bg-white rounded-lg border-none shadow-2xl p-6 mb-10 ">
          <div className="w-[270px] h-[220px]">
            <img src="/24-hours-support 1.png" alt="" className="ml-28" />
            <h1 className="text-blue-950 text-[17px] font-bold text-center">
              {" "}
              Free delivery
            </h1>
            <p className="text-para2 text-center">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br /> Massa purus gravida.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bag text-center mb-16 h-[454px]  mt-28">
        <h1 className="text-center text-[30px] font-bold py-8">
          Our Client Say!
        </h1>
        <div className="flex justify-center gap-3 mt-3">
          <img src="/RukI4qZGlQs.png" alt="" className="mt-3" />
          <img src="/OhKElOkQ3RE.png" alt=""/>
          <img src="/GH-mSApoKO0.png" alt=""  className="mt-3"/>
        </div>
        <h1 className="text-[17px] font-bold mt-4">Selina Gomez</h1>
        <p className="text-para2">Ceo At Webecy Digital</p>
        <p className="text-para2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
          ultrices quam vel dui sollicitudin<br/> aliquet id arcu. Nam vitae a enim
          nunc, sed sapien egestas ac nam. Tristique ultrices dolor<br/> aliquam
          lacus volutpat praesent.
        </p>
      </div>
    </div>
  );
};

export default page;
