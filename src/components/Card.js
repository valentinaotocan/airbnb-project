export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`../images/${props.item.coverImg}`} alt="" className="card-photo" />
      <div className="card-stats">
        <img src="../images/star.png" alt="Star" className="card-star" />
        <span>{props.item.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) &bull; </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-price">
        <span className="bold">From ${props.item.price} </span>/ person
      </p>
    </div>
  );
}
