import { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function App() {
  const [showReveal, setShowReveal] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonKey, setNoButtonKey] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize No button position to center-right
    if (noButtonRef.current && containerRef.current && noButtonPosition.x === 0) {
      const container = containerRef.current.getBoundingClientRect();
      const button = noButtonRef.current.getBoundingClientRect();
      setNoButtonPosition({
        x: container.width / 2 + 40,
        y: container.height / 2 - button.height / 2
      });
    }
  }, [noButtonPosition.x]);

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Calculate safe boundaries (with padding)
    const padding = 20;
    const maxX = container.width - button.width - padding;
    const maxY = container.height - button.height - padding;

    // Generate random position within safe boundaries
    const newX = Math.random() * maxX + padding;
    const newY = Math.random() * maxY + padding;

    setNoButtonPosition({ x: newX, y: newY });
    setNoButtonKey(prev => prev + 1);
  };

  const handleYesClick = () => {
    setShowReveal(true);
  };

  if (showReveal) {
    return (
      <div className="reveal-container">
        <div className="reveal-content">
          <div className="floating-hearts">
            <Heart className="heart heart-1" />
            <Heart className="heart heart-2" />
            <Heart className="heart heart-3" />
            <Heart className="heart heart-4" />
            <Heart className="heart heart-5" />
          </div>
          <div className="reveal-message">
            <h1 className="reveal-title">Happy Birthday Pondati!</h1>
            <div className="reveal-text">
              <p>I know you're thinking that I forgot your birthday, but I didn't.</p>
              <p>Thank you for everything.</p>
              <p>Thank you for loving me.</p>
              <p>Thank you for all the moments we have spent together.</p>
              <p>Be happy, stay healthy.</p>
              <p className="signature">Happy Birthday Pondati, my sweet potato! 🥔💕</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="valentine-container">
      <div className="floating-hearts-bg">
        <Heart className="heart-bg heart-bg-1" />
        <Heart className="heart-bg heart-bg-2" />
        <Heart className="heart-bg heart-bg-3" />
        <Heart className="heart-bg heart-bg-4" />
      </div>
      
      <div className="valentine-content" ref={containerRef}>
        <div className="valentine-card">
          <Heart className="main-heart" fill="currentColor" />
          <h1 className="valentine-title">Pondati, will you be my Valentine?</h1>
          
          <div className="buttons-container">
            <button
              onClick={handleYesClick}
              className="yes-button"
              aria-label="Yes"
            >
              Yes! 💕
            </button>
            
            <button
              ref={noButtonRef}
              key={noButtonKey}
              onMouseEnter={moveNoButton}
              onPointerDown={(e) => {
                e.preventDefault();
                moveNoButton();
              }}
              onTouchStart={(e) => {
                e.preventDefault();
                moveNoButton();
              }}
              className="no-button"
              style={{
                position: 'absolute',
                left: `${noButtonPosition.x}px`,
                top: `${noButtonPosition.y}px`,
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              aria-label="No"
            >
              No
            </button>
          </div>
        </div>
      </div>

      <footer className="valentine-footer">
        <p>
          Built with <Heart className="footer-heart" fill="currentColor" /> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
