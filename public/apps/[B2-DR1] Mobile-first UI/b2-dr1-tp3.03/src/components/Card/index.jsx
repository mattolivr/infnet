export default function Card({ title, description, children }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '24px',
    margin: '16px 0',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#2c3e50',
    margin: '0'
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
    margin: '0'
  };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <p style={descriptionStyle}>{description}</p>
      {children}
    </div>
  );
}
