import logo from "../../assets/logo.webp";

export default function Header() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div>
          <img src={logo} width={100} height={100} />
        </div>
        <div></div>
      </div>
    </div>
  );
}
