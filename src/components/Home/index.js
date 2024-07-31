import Navbar from '../navbar'
import './index.css'

const Home = () => (
    <>
        <Navbar />
        <div className='banner-coantainer'>
            <p className='title'><span className='highlight-text'>UNIQUE RV CAMPING </span>AT THOUSAND OF DESTINATIONS THOUGHTOUT SOUTH INDIA</p>
            <button className='start'>START YOUR ADVENTURE</button>
        </div>
        <div className='trip-container'>
            <img src="https://middlemarketgrowth.org/wp-content/uploads/2022/08/recreational-vehicles-industry-update.jpg" className='rv-image' alt="" />
            <div className='trip-details'>
                <h1 className='vaction-title'>Vacation Cost  Comparison Study</h1>
                <p className='description'>
                    A new study conducted by an outside, independent firm has found that RV vacations cost much less than other types of vacation travel, even when factoring in fuel prices and the cost of RV ownership. According to the study, commissioned by Go RVing and the RV Industry Association, CBRE Hotels Advisory Group found there are average cost savings of up to 60% for a four-person travel party, while a two-person travel party saves up to an average of 46%, depending on factors such as the type of RV and type of vacation.
                </p>
            </div>

        </div>
        <div className='exlore-card-container'>
            <div className='card'>
                <img src="https://img.freepik.com/premium-vector/vector-illustration-camping-car-flat-design-style_844724-4260.jpg?w=996" className='rv-explor' alt="card-image" />
                <div className='expoler-details'>
                    <h3>Find Your RV </h3>
                    <p>Discover your next adventure</p>
                    <button className='card-button'>Explore</button>
                </div>
            </div>

        </div>
    </>


)

export default Home