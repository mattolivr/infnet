export default function TextoEstilizado() {
  const paragrafoStyle = {
    backgroundColor: '#f0f4f8',
    color: '#2c3e50',
    padding: '24px',
    fontFamily: 'Georgia, serif',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '20px auto'
  };

  return (
    <p style={paragrafoStyle}>
      Este é um texto estilizado usando inline styles em React.
    </p>
  );
}
