import React from 'react';
import '../PublishedArticle.css'; // Or create a new CSS file if needed
import containerImage from '../images/Container-image.png';

// Import research group images
import member1 from '../images/Ace@10.jpg';
import member2 from '../images/Ace@10_a.jpg';
import member3 from '../images/Ace@10_b.jpg';
import groupPhoto from '../images/Ace@10_c.jpg';
import member4 from '../images/Ace@10_e.jpg';

// Image list
const researchImages = [
    { src: member1, alt: 'ACE @ 10 Exhibition in Ghana' },
    { src: member2, alt: 'ACE @ 10 Exhibition in Ghana' },
    { src: member3, alt: 'The FEDGEN Team at the ACE Exhibition' },
    { src: groupPhoto, alt: 'Prof. Adetiba & Prof. Emeka at the ACE Exhibition' },
    { src: member4, alt: 'ACE @ 10 Exhibition in Ghana' }
];

function Gallery() {
    return (
        <>
            <div className="central">
                <img
                    src={containerImage}
                    alt="Banner"
                    className="right-image"
                    style={{ height: '35vh' }}
                />
                <h2>FEDGEN GALLERY</h2>
            </div>

            <div
                className="works-container"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    padding: '30px'
                }}
            >
                {researchImages.map((img, index) => (
                    <div
                        key={index}
                        className="work-card"
                        style={{
                            width: '600px',
                            textAlign: 'center',
                            background: '#fff',
                            borderRadius: '12px',
                            padding: '10px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            style={{ width: '100%', borderRadius: '10px' }}
                        />
                        <p style={{ marginTop: '10px', fontWeight: '500' }}>{img.alt}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Gallery;
