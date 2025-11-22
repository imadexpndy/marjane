import { ImageWithFallback } from "./figma/ImageWithFallback";
import puzzleGame from "figma:asset/5270d3680798a91b7b07ca008ab97bda4371f38d.png";
import quizGame from "figma:asset/95f0f968163119c3a85df4328adbebc4f5cd8966.png";
import soccerGame from "figma:asset/d77825c2bee984b5d292866223e02c9e882b253b.png";

interface Game {
  id: number;
  name: string;
  image: string;
  link: string;
}

const games: Game[] = [
  {
    id: 1,
    name: "لعبة الصور المتحركة",
    image: puzzleGame,
    link: "https://a.cstmapp.com/p/1004664",
  },
  {
    id: 2,
    name: "لعبة الاسئلة",
    image: quizGame,
    link: "https://a.cstmapp.com/p/1004670",
  },
  {
    id: 3,
    name: "لعبة الركلات الحرة",
    image: soccerGame,
    link: "https://a.cstmapp.com/p/1004673",
  },
];

export function GameGrid() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen md:min-h-0">
      {/* Welcome Message */}
      <div className="p-6 md:p-10 mb-8 md:mb-12 mt-8 md:mt-12 text-center max-w-2xl mx-auto">
        <p className="text-2xl md:text-3xl font-bold leading-relaxed text-white mb-3" dir="rtl">
          مرحبا بكم فمساحة الألعاب ديال مرجان ! 🎮
        </p>
        <p className="text-lg md:text-2xl leading-relaxed text-white" dir="rtl">
          وجد راسك لتحديات ممتعة 🎉 اختار اللعبة اللي عجباتك، وكليكي غير على الصورة ديالها باش تبدا تلعب. حظ موفق للجميع 🙌
        </p>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-xs md:max-w-3xl lg:max-w-4xl mx-auto px-4 md:px-0">
        {games.map((game, index) => (
          <div
            key={game.id}
            className={`group relative bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
              index === 2 ? 'col-span-2 md:col-span-1 max-w-[calc(50%-0.5rem)] md:max-w-none mx-auto' : ''
            }`}
          >
            <a href={game.link} className="block">
              {/* Game name - small text on top for mobile, regular for desktop */}
              <div className="p-2 md:hidden bg-white">
                <p className="text-gray-800 text-center text-sm" dir="rtl">
                  {game.name}
                </p>
              </div>
              
              <div className="aspect-square relative overflow-hidden">
                {game.image.startsWith("figma:") ? (
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <ImageWithFallback
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Game name always visible below - desktop only */}
              <div className="p-3 md:p-4 bg-white hidden md:block">
                <p className="text-gray-800 text-center mb-3" dir="rtl">
                  {game.name}
                </p>
              </div>
            </a>
            
            {/* Participate Button */}
            <div className="px-3 pb-3 md:px-4 md:pb-4 bg-white">
              <a
                href={game.link}
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-2 md:py-3 rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                <span className="block text-center" dir="rtl">شارك الآن</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}