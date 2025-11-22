import { GameGrid } from "./components/game-grid";
import mobileBg from 'figma:asset/0592cc826b2ed2f06b3267dba830435c1ba576e7.png';
import tabletBg from 'figma:asset/ee15403360dcba3810e929db6438a084f04fd891.png';
import desktopBg from 'figma:asset/6cb3581c429a9d7e19e03e366fcd0ce728e21531.png';

export default function App() {
  return (
    <div 
      className="min-h-screen"
    >
      <style>{`
        .bg-gradient-to-br {
          background-image: url(${mobileBg});
          background-size: cover;
          background-position: 45% center;
          background-repeat: no-repeat;
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .bg-gradient-to-br {
            background-image: url(${tabletBg}) !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
          }
        }
        
        @media (min-width: 1024px) {
          .bg-gradient-to-br {
            background-image: url(${desktopBg}) !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
          }
        }
      `}</style>
      <div className="bg-gradient-to-br min-h-screen">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <GameGrid />
        </div>
      </div>
    </div>
  );
}