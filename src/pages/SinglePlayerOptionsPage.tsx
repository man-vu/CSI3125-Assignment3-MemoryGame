import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

interface SinglePlayerOptionsPageProps {
  onStart: (pairs: number) => void;
  onSettings?: () => void;
}

const levels = [
  {
    title: 'Level 1',
    pairs: 4,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1WIM2tagkLUN-9v4pJaiJXFUJyf5fsuryv_UjmfDiFVovv1c3CrCyJ_a5lKL7WRPxLmDLkwHtV7m33RyDVqV5Jn9kEOw4gBkyQW-YKewK4rgxR8KZ5SjlgHk-FeIETrCn2eO0_IwL82oBy7HEDYYIYUzxMV583h6GFu4xx9ZzVH25ClTzE6JWXZj7B0aRrtjNsvLb9NkdbNGhdrPq8GnH4-L5lBazugtXmdXYQ_iymtRPFxgogvac5uhurFYpTUue93yY4v_BUg3E',
  },
  {
    title: 'Level 2',
    pairs: 6,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9O_xLbnuN_zhHw91fwMXwOMVXhTUzM1tu7xIF-Y333n5yAcb6Y9AaCfbEfi8bOfO_oi0S5rRT9HQcvFMb2VggNDiwakjUoNx53YSN9xx-UtFiQ9dpsPpNX-FORYZ286vv3w5fJi0AiyIe8RLiEiPMQAfoB-wGoNa3354jiWL0Zb0cI0a-Kq1WFB_eztk09DTBw6jHNkhZ-kJvCwUPXhq9BrzKzDbzLejyDm5NcwqDCLH_ORX8_ELKrZG7vuBSPwrbtl8tLG2QZ99S',
  },
  {
    title: 'Level 3',
    pairs: 8,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXENHIoHKBCar1tHGsSqCY6Jyd9o2jd3SavWzTtHN8DzCzrkJm3Soxsm7YoT3ZZ9TulAPSLA0HK1ywEF4DO7UtmEGH9JZH5ITrcLXo_xlfC-Cn3xPPPfTmAuagu_vBijHRmPE8L14q4foXx62Q1G4AbJwMyHmtI34Kf_MjSp0eWl6jHtPjOEfUkwym74dZ3ALf2-XDnhGc1Fk78cprrJV3lM6hDCFrkQI6FGKP5fZrWl36Myejiici1YeNb9tq1X_bmXXhQAcQuKem',
  },
  {
    title: 'Level 4',
    pairs: 10,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZgDiceSV_42efdh76iYWOAP_3iTy9M7IDTxJvMC_E4XDuRcWLSKf8-P84hGFeOVjUzaH1ZznwUiGh5GFBHuuT3jWXR8KYKqh7B1ShxhLwsEdO8pGa1gx0fDikei_stJ0LgxuidpPnbAS9EQmBQ4--vXgK2Cqy6tCDW_vNDuk3sglzyG0UtJClvnAVHo5XoNpczwAME5_SBk7rwTHoRBsK_sKoVdmchxSvSPom2FrRMRVwx5p3wF9jpVIMwwVnlhFX5FIN6UohhoUZ',
  },
  {
    title: 'Level 5',
    pairs: 12,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAWgjCZ3xCZN67cgYkQHtB1OON_FBRKNjfbHMt_jhQmOqcMAI2mVH3eSeY6xvc_WGLRXbx_bPSgZb2gHl2ISA1oy2aOtESYbC4jv43Er7QWrcMn_CxVpMR4r0v7XaqcL7GyGF_R-vIFnPT14K_Z6Kzs9WWJo7YolkPNfXIvIZ9ws0njh4uj8apDF_-0ekkVtL7eb9dP3HjyqTJdGMZBhJPJD36RlJEo0dJgBAFIZriat8E44j5_CzhNJdYiazeLKr-ykFWfErGbZqPp',
  },
  {
    title: 'Level 6',
    pairs: 15,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlrht_-EFcQWrUiSRnx_zwx8fztL3y42ZDaw22xZbuWtzemhsrSokld0UqWGDmS00XcVNX2bMQQyjOHUyfLAIu58xEMNKojWAIRT020mzMgMt_eL1P8lD3WxGm7wGuETfnuja4NFL5Xgh9kWlbUK_AK7WJgUGcGwmt6refZLOvRxocexr0Lo-8zMb1SZgvnOm3KVZeoe5I4VjwpRJLZl7L_vvtL_DGFfYi5ehc6KzgdyeTnaheDveDWvdvENuyxm6QRxm7ivS-EZob',
  },
];

const difficulties = ['Easy', 'Medium', 'Hard'] as const;

type Difficulty = typeof difficulties[number];

const SinglePlayerOptionsPage: React.FC<SinglePlayerOptionsPageProps> = ({ onStart, onSettings }) => {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');

  const start = () => {
    onStart(levels[selectedLevel].pairs);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
      <Header onSettings={onSettings} />
      <div className="flex-1 flex flex-col items-center p-4 w-full max-w-xl mx-auto">
        <div className="w-full mb-4">
          <p className="text-2xl font-bold">Single Player</p>
          <p className="text-sm text-[#90adcb]">Choose a level and test your memory skills!</p>
        </div>
        <h3 className="text-lg font-bold mb-2 self-start">Difficulty</h3>
        <div className="flex gap-3 mb-4">
          {difficulties.map(d => (
            <label
              key={d}
              className={`text-sm flex items-center justify-center rounded-xl border px-4 h-11 cursor-pointer ${
                difficulty === d ? 'border-2 border-[#0c7ff2]' : 'border-[#314d68]'
              }`}
            >
              <input type="radio" className="hidden" checked={difficulty === d} onChange={() => setDifficulty(d)} />
              {d}
            </label>
          ))}
        </div>
        <h3 className="text-lg font-bold mb-2 self-start">Levels</h3>
        <div className="grid grid-cols-2 gap-3 mb-6 w-full">
          {levels.map((lvl, idx) => (
            <div
              key={lvl.title}
              onClick={() => setSelectedLevel(idx)}
              className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer border ${
                selectedLevel === idx ? 'border-[#0c7ff2]' : 'border-[#314d68]'
              }`}
            >
              <div
                className="rounded-lg w-10 h-10 bg-center bg-cover"
                style={{ backgroundImage: `url(${lvl.image})` }}
              />
              <h2 className="text-base font-bold">{lvl.title}</h2>
            </div>
          ))}
        </div>
        <Button onClick={start}>Start Game</Button>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePlayerOptionsPage;
