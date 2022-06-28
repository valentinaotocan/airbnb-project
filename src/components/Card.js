
export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`../images/${props.img}`}
        alt=""
        className="card-photo"
      />
      <div className="card-stats">
        <img src="../images/star.png" alt="Star" className="card-star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) &bull; </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price} </span>/ person
      </p>
    </div>
  );
}
