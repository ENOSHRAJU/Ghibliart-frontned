import Hero from '../Components/Hero';
import Features from '../Components/Features';
import Samples from '../Components/Samples'
import About from '../Components/About'
import CreateCard from '../Components/CreateCard';
import Footer from '../Components/Footer';
import Header from '../Components/Header'

function Home() {
    return (
        <div>
            <div className="px-6">
                <Header isCreatePage={false}/>
                <Hero/>
                <Features/>
                <Samples/>
                <About/>
                <CreateCard/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;