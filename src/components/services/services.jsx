import ServiceCard from "./serviceCardData";
import webdesign from '../../assets/webdesign.png';
import webdevelopment from '../../assets/webdevelopment.png';
import hostedsolutions from '../../assets/hostedsolutions.png';
import landingpage from '../../assets/landingpage.png';
import customdesign from '../../assets/customdesign.png';
import ecommercedevelopment from '../../assets/ecommercedevelopment.png';
import multilanguagesolution from '../../assets/multilanguagesolution.png';
import inhousesystem from '../../assets/inhousesystem.png';
import onlinemarketting from '../../assets/onlinemarketting.png';
import './services.css';
const services = [
    {
        icon: webdesign,
        title: <h4>Web <br/> Dev</h4>,
        description: 'Our expert web design solutions blend creativity & functionality to bring your vision to life.',
    },
    {
        icon: webdevelopment,
        title: <h4>Web <br/>Development</h4>,
        description: 'We use the latest programming techniques and tools, working with all popular languages like JS, PHP, Python, and more.',
    },
    {
        icon: hostedsolutions,
        title: <h4>Hosted <br/>Solutions</h4>,
        description: 'Experience the simplicity and reliability of cloud hosting and backup for your software and apps.',
    },
    {
        icon: landingpage,
        title: <h4>Landing <br/>Pages</h4>,
        description: 'Want a simple & stunning website? We have the most competitive options for you.',
    },
    {
        icon: customdesign,
        title: <h4>Custom <br/>Integrations</h4>,
        description: 'Unlock endless possibilities by connecting your services seamlessly. Let us customize and set up the perfect integration.',
    },
    {
        icon: ecommercedevelopment,
        title: <h4>E-Commerce <br/>Development</h4>,
        description: 'Revolutionize your shopping experience. Our online stores outshine brick-and-mortar shops, hands down.',
    },
    {
        icon: multilanguagesolution,
        title: <h4>Multi Language<br/>Solutions</h4>,
        description: 'Dive into global possibilities with our expertise in multi-language and right-to-left web solutions and software.',
    },
      {
        icon: inhousesystem,
        title: <h4>In-house<br/>Systems</h4>,
        description: "Ready to streamline operations? Let's create your custom in-house solution for your production or inventory needs.",
    },
    {
        icon: onlinemarketting,
        title: <h4>Online<br/>Marketing</h4>,
        description: 'Enhance your online presence now. Google listings, social media management, SEO optimization expertly handled.',
    },
];

const ServicesData=()=>{
    return(
        <div className="serve-container">
            <h2 id="serve">Our Services</h2>
            <p id="expert">Expert Services: Tailored Solutions for Your Needs</p>
        <div className="services-container">
        {services.map((service,index)=>(
            <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            />
        ))}
        </div>
        </div>
    );
};

export default ServicesData;