export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} alt="" className="card-photo" />
      <div className="card-stats">
        <img src="../images/star.png" alt="Star" className="card-star" />
        <span>{props.rating}</span>
        <span className="gray">({props.stats.reviewCount}) &bull; </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.price} </span>/ person
      </p>
    </div>
  );
}
