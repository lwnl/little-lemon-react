const Footer = () => {
  return (
    <footer>
      <img
        src="http://www.little-lemon-restaurant.com/static/img/logo_footer.png"
        alt="logo"
      />
      <p className="copy-right">
        © {new Date().getFullYear()} Little Lemon
      </p>
    </footer>
  );
};

export default Footer;