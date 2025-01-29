export default function Logo({ nota, width }) {
  return (
    <div>
      <img src="/img/logo.png" alt="Logo Molisana" width={width} />
      {nota && <p>{nota}</p>}
    </div>
  );
}
