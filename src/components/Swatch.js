const Swatch = ({ image, isSelected, onClick }) => {
    return (
      <div 
        onClick={onClick} 
        style={{
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: isSelected ? '5px solid #ff465c' : 'none',
          cursor: 'pointer',
        }}
      >
        <img 
          src={image} 
          alt="swatch" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
    );
  };

export default Swatch;
