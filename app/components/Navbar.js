const Navbar = () => {
  return (
    <div className="flex items-center justify-around pt-5 bg-transparent">
      <div>
        <img src="./logo.png" className="h-10" alt="logo" />
      </div>
      <div>
        <button className="bg-red text-white font-bold py-2 px-4 rounded">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
