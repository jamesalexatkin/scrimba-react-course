export default function Entry() {
  return (
    <div className="entry">
      <img
        src="https://scrimba.com/links/travel-journal-japan-image-url"
        className="entry__image"
      ></img>
      <div className="entry__content">
        <img src="/marker.png" className="entry__marker"></img>
        <span className="entry__country-name">JAPAN</span>
        <span className="entry__google-maps-link">View on Google Maps</span>
        <h1 className="entry__name">Mount Fuji</h1>
        <span className="entry__dates">12 Jan, 2023 - 24 Jan, 2023</span>
        <p className="entry__description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
