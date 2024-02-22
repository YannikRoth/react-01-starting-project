/* only 1 parameter allowed, should be called props */
/*
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
*/

/* here we are using destructuring */
export default function CoreConcept({image, title, description}) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }