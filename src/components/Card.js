import star from "../img/star.svg";

export default function Card(props) {
  console.log(props);
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && (
        <div className="status">
          <p>{badgeText}</p>
        </div>
      )}
      <img
        src={require(`../img/${props.item.coverImg}`)}
        className="card-img"
      ></img>
      <div className="rating-wrapper">
        <img src={star} className="star"></img>
        <p className="rating">{props.item.stats.rating}</p>
        <p className="votes">({props.item.stats.reviewCount})</p>
        <span className="dot"></span>
        <p className="location">{props.item.location}</p>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="pricing">
        <span>From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
