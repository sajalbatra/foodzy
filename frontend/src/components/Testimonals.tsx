const Testimonals = () => {
  return (
    <section className="flex justify-center items-center flex-col w-full">
    <div className="m-4 text-5xl font-medium font-playfair">

        <h4>What our Customers Say</h4>
    </div>
    <div className="flex justify-center items-center flex-wrap w-full">
        <div className="w-[500px] shadow-[2px_2px_30px_rgba(0,0,0,0.1)] bg-white p-5 m-4 cursor-pointer ">
            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-2.5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdPpaElrlGHhuJLw8HX-J4mMMq_NrL6VTvg&s" />
                    </div>
                    <div className="flex flex-col">
                        <strong>Liam mendes</strong>
                        <span>@liammendes</span>
                    </div>
                </div>
                <div className="text-[#f9d71c]">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
            <div className="text-[0.9rem] text-[#4b4b4b]">
                <p>This restaurant has such a cozy and charming atmosphere! From the moment you walk in, you feel right at home. The warm lighting, rustic decor, and comfortable seating make it an ideal place for a relaxed meal.
                Considering the fresh ingredients and flavorful dishes, you really get more than what you pay for. Highly recommended for those who want a quality meal without breaking the bank.
                </p>
            </div>
        </div>
        <div className="w-[500px] shadow-[2px_2px_30px_rgba(0,0,0,0.1)] bg-white p-5 m-4 cursor-pointer">
            <div className="flex flex-wrap mb-2.5">
                <div className="flex items-center">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-2.5-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0yYAiPdNDUOLGGSox0KXPhPza5rId77VZqcUHa3B2-lbmnGPB-bKom1D8BUTn_cVgHjQ&usqp=CAU" />
                    </div>
                    <div className="flex flex-col">
                        <strong>Noah Wood</strong>
                        <span>@noahwood</span>
                    </div>
                </div>
                <div className="text-[#f9d71c]">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
            <div className="text-[0.9rem] text-[#4b4b4b]">
                <p>A lovely experience from booking on the app so easy and then a very fast response. When we arrived our request for a private booth was accommodated.
                Came on a Sunday afternoon for Mother’s Day and was seated quickly. We were a pretty big party of 12 but the staff managed us well
                </p>
            </div>
        </div>
        <div className="w-[500px] shadow-[2px_2px_30px_rgba(0,0,0,0.1)] bg-white p-5 m-4 cursor-pointer">
            <div className="flex flex-wrap mb-2.5">
                <div className="flex items-center">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-2.5-img">
                        <img src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-OtCp1YSpRh2DOBRkuls3Mmxn-6R7QJ9zvazaMpX_4ana52wrD89GK8jMKEbstHuHLQ&usqp=CAU" />
                    </div>
                    <div className="flex flex-col">
                        <strong>Oliver Queen</strong>
                        <span>@oliverqueen</span>
                    </div>
                </div>
                <div className="text-[#f9d71c]">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
            <div className="text-[0.9rem] text-[#4b4b4b]">
                <p>It was super delicious! Mine was a takeout order so I was pretty happy with the quick service.
                We had a lovely meal here last night, with personal recommendations right for us. Got to try new flavours, and even walked away with a jar of our own freebie as a gift from the head chef
                </p>
            </div>
        </div>
        <div className="w-[500px] shadow-[2px_2px_30px_rgba(0,0,0,0.1)] bg-white p-5 m-4 cursor-pointer">
            <div className="flex flex-wrap mb-2.5">
                <div className="flex items-center">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-2.5-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4qAtqo1Wl7S5UaU63FPkg15Y5sDxeMGLgw&s" />
                    </div>
                    <div className="flex flex-col">
                        <strong>Barry Allen</strong>
                        <span>@barryallen</span>
                    </div>
                </div>
                <div className="text-[#f9d71c]">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
            <div className="text-[0.9rem] text-[#4b4b4b]">
                <p>Good food and acceptable price.
With good seating arrangement and a place to visit with family,business meeting and friends.
Good food with North Indian, Chinese and intercontinental
Service is superb they take care

.</p>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Testimonals
