import "./Footer.css";

function Footer() {
  const year = new Date("2024-02-03").getFullYear();
  return (
    <footer className="footer">
      <p>Developed by John Rojas</p>

      <p>{year}</p>
    </footer>
  );
}

export default Footer;
