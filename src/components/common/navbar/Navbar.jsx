import NavbarLeft from "./NavbarLeft"
import NavbarRight from "./NavbarRight"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-10/12 m-auto py-5">
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar
