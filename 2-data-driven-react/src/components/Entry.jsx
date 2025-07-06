export default function Entry() {
  return (
    <article className="entry">
      <div className="entry__image-container">
        <img
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          className="entry__image"
        ></img>
      </div>
      <div className="entry__content">
        <img src="/marker.png" className="entry__marker"></img>
        <span className="entry__country-name">JAPAN</span>
        <a
          href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          className="entry__google-maps-link"
        >
          View on Google Maps
        </a>
        <h2 className="entry__name">Mount Fuji</h2>
        <span className="entry__dates">12 Jan, 2023 - 24 Jan, 2023</span>
        <p className="entry__description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}
