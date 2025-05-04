import React from 'react';

const AksharPrabhavam: React.FC = () => {
  const isMobile = window.innerWidth <= 768;

  const galleryStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    height: isMobile ? 'auto' : '300px',
    padding: '0 1rem',
    overflow: 'hidden',
  };

  const imageStyle: React.CSSProperties = {
    width: isMobile ? '40%' : '10%',
    height: isMobile ? '200px' : '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    border: '2px solid white',
    transition: 'all 0.5s ease-out',
    cursor: 'pointer',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isMobile) e.currentTarget.style.width = '50%';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isMobile) e.currentTarget.style.width = '10%';
  };

  const sectionStyle: React.CSSProperties = {
    background: '#fffefc',
    padding: '3rem 1rem',
    fontFamily: 'Segoe UI, sans-serif',
    lineHeight: '1.7',
    color: '#3b2f2f',
    maxWidth: '1000px',
    margin: 'auto',
  };

  const cardStyle: React.CSSProperties = {
    background: '#fef3c7',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.8rem' : '2.4rem',
    color: '#92400e',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '2rem',
    letterSpacing: '0.5px',
  };

  const subheadingStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.2rem' : '1.6rem',
    color: '#b45309',
    fontWeight: 700,
    marginBottom: '1rem',
  };

  const listStyle: React.CSSProperties = {
    paddingLeft: '1.2rem',
    marginTop: '0.5rem',
    fontSize: isMobile ? '0.95rem' : '1rem',
  };

  const highlightText: React.CSSProperties = {
    color: '#92400e',
    fontWeight: 600,
  };

  return (
    <div style={{ background: '#fffefc', minHeight: '100vh' }}>
      {/* Image Gallery */}
      <div style={{ paddingTop: '2rem' }}>
        <div style={galleryStyle}>
          {[
            'https://images.unsplash.com/photo-1455368109333-ebc686ad6c58?q=80&w=1470&auto=format&fit=crop',
            'https://plus.unsplash.com/premium_photo-1664528201657-378dbf6a4a91?q=80&w=1472&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1516651000622-7f32fe80a57a?q=80&w=1470&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?q=80&w=1470&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1455368109333-ebc686ad6c58?q=80&w=1470&auto=format&fit=crop',
            'https://plus.unsplash.com/premium_photo-1664528201657-378dbf6a4a91?q=80&w=1472&auto=format&fit=crop',
        
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              style={imageStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={sectionStyle}>
        <h1 style={headingStyle}>Akshara Prabhavam</h1>

        <div style={cardStyle}>
          <p>
            <span style={highlightText}>Akshara Prabhavam</span> is a transformative rural education initiative in Dharwad.
            We aim to empower underprivileged children through engaging academic, cultural, and life skill programs.
          </p>
        </div>

        <div style={cardStyle}>
          <h2 style={subheadingStyle}>Our Focus Areas</h2>
          <ul style={listStyle}>
            <li><strong>📘 Academic Coaching:</strong> Daily support for students aged 12–15 from rural communities.</li>
            <li><strong>💡 Value-based Learning:</strong> Instilling discipline, kindness, and focus through mentoring.</li>
            <li><strong>🎨 Cultural Expression:</strong> Music, dance, art, and drama integrated into weekly sessions.</li>
            <li><strong>🧘 Well-being:</strong> Guided yoga and meditation to encourage mental clarity and peace.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={subheadingStyle}>Special Programs</h2>
          <ul style={listStyle}>
            <li><strong>🌟 Character Building Camps:</strong> Residential camps teaching leadership and responsibility.</li>
            <li><strong>🤝 Community Projects:</strong> Children contribute through cleanliness drives and civic tasks.</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h2 style={subheadingStyle}>Impact So Far</h2>
          <ul style={listStyle}>
            <li><strong>4500+</strong> children impacted across Dharwad villages.</li>
            <li><strong>800+</strong> students in leadership development programs.</li>
            <li><strong>85+</strong> academic modules taught.</li>
            <li><strong>75+</strong> villages actively involved.</li>
          </ul>
        </div>

        <div style={{ ...cardStyle, background: '#fde68a', textAlign: 'center' }}>
          <p style={{ fontSize: isMobile ? '1rem' : '1.3rem', fontWeight: 600 }}>
            Together, we are lighting the path for the next generation of rural changemakers. 💫
          </p>
        </div>
      </div>
    </div>
  );
};

export default AksharPrabhavam;
