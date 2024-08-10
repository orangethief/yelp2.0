

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Mini-Yelp. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#57886c',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  bottom: 0
};

export default Footer;
