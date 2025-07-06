export default function Entry(props) {
  console.log(props);
  return (
    <article className="entry">
      <div className="entry__image-container">
        <img
          src={props.img.src}
          alt={props.img.alt}
          className="entry__image"
        ></img>
      </div>
      <div className="entry__content">
        <img src="/marker.png" className="entry__marker"></img>
        <span className="entry__country-name">{props.country}</span>
        <a href={props.googleMapsLink} className="entry__google-maps-link">
          View on Google Maps
        </a>
        <h2 className="entry__name">{props.name}</h2>
        <span className="entry__dates">{props.dates}</span>
        <p className="entry__description">{props.text}</p>
      </div>
    </article>
  );
}
