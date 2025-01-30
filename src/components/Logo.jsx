export default function Logo(props) {
  return (
    <div>
      <img src="/img/logo.png" alt="Logo Molisana" width={props.width} />
      {props.nota && <p>{props.nota}</p>}
    </div>
  );
}
