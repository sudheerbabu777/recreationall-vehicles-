import './index.css'

const Navbar = () => (
    <div className="nav-container">
        <div className='logo-container'>
            <img src="https://media.istockphoto.com/id/1495869659/vector/camper-van-rv-summer-camping-travel-vacation-comfortable-truck-car-isometric-icon-vintage.jpg?s=1024x1024&w=is&k=20&c=rHj70s-MM1Cioa2mik_w9GQzgRiEV3mHB7rJ4hkPIPM="  className='logo' alt="logo"/>

        </div>
        <ul className='nav-list-container'>
            <li> Home</li>
            <li>
                All Vehicels For Sale
            </li>
            <li> Shipping rates</li>
            <li> Contact</li>
            <li> About Us</li>
            <li>
                <button className='button'>
                    Login
                </button>
            </li>
        </ul>

    </div>
)

export default Navbar