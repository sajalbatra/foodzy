
const Blogs = () => {
  return (
    <section className=   "flex justify-center items-center flex-col w-full">
  <div className="container mx-auto px-4">
    <h1 className="m-4 text-5xl font-medium font-playfair text-center">Our Blog & Articles</h1>
    <div className="flex flex-wrap justify-center">
      <article className="bg-white rounded-lg shadow-lg m-2 p-4 flex flex-col items-center w-full sm:w-1/2 md:w-1/3 flex-shrink-0">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXfgHhCqhnb494dvAhYzhk7viWWYWf4TL7w&s" alt="Blog Post 1" className="w-full rounded-lg"></img>
        <h3 className="text-xl font-semibold my-2">Delicious Recipes You Must Try</h3>
        <p className="text-gray-700">Explore our latest recipes that bring the taste of the restaurant to your home!</p>
        <a href="#" className="mt-2 text-yellow-400 font-bold">Read More</a>
      </article>
      <article className="bg-white rounded-lg shadow-lg m-2 p-4 flex flex-col items-center w-full sm:w-1/2 md:w-1/3 flex-shrink-0">
        <img src="https://blog.clover.com/wp-content/uploads/2023/01/staff-cooking-in-restaurant-commercial-kitchen.jpg" alt="Blog Post 2" className="w-full rounded-lg"></img>
        <h3 className="text-xl font-semibold my-2">Behind the Scenes at Our Kitchen</h3>
        <p className="text-gray-700">Get a glimpse of the magic that happens behind the scenes.</p>
        <a href="#" className="mt-2 text-yellow-400 font-bold">Read More</a>
      </article>
      <article className="bg-white rounded-lg shadow-lg m-2 p-4 flex flex-col items-center w-full sm:w-1/2 md:w-1/3 flex-shrink-0">
        <img src="https://c.ndtvimg.com/2019-12/0b4alk7_party_625x300_17_December_19.jpg" alt="Blog Post 3" className="w-full rounded-lg"></img>
        <h3 className="text-xl font-semibold my-2">Food Trends to Watch This Year</h3>
        <p className="text-gray-700">Discover the upcoming food trends that will tantalize your taste buds!</p>
        <a href="#" className="mt-2 text-yellow-400 font-bold">Read More</a>
      </article>
    </div>
  </div>
</section>
  )
}

export default Blogs
