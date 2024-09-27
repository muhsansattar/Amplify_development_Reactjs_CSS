
const ServiceCard=({icon,title,description})=>{
    return(
        <>
        <div className="service-card">
            <img src={icon} alt={`${title} icon`} />
            {title}
            <p>{description}</p>
        </div>
        </>
    )
}
export default ServiceCard;