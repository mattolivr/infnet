export default function Button({ label, onClick }) {
  const buttonStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '6px',
    border: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s, transform 0.1s',
    fontFamily: 'inherit'
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = '#2980b9';
    e.target.style.transform = 'translateY(-2px)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = '#3498db';
    e.target.style.transform = 'translateY(0)';
  };

  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </button>
  );
}
