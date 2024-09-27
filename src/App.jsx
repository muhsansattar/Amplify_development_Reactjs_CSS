import './App.css';
import Navbar from './components/navbar/Navbar';
import ServicesData from './components/services/services';
import ImageGalleryComponent from './components/ImageGallery/imageGallery';
import   ContactForm from './components/form/form';
import AboutUs from './components/About/about';
import Cooding from './components/Cooding/cooding';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div>
     <Navbar/>
     <Cooding/>
     <AboutUs/>
     <ServicesData/>
     <ImageGalleryComponent/>
     <ContactForm/>
     <Footer/> 
    </div>
  )
}
export default App
