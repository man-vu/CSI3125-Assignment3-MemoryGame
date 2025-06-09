import React, { useState, useEffect } from 'react';
import Card, { CardData } from '../components/Card';

interface GameBoardProps {
  pairs: number;
  onFinish?: () => void;
}

const cardImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD_dYrr2xBMpxm7Mq5bHPHKLMhWk_xonziaFj1i8v1NjPEO2G6PJu1uNgMP5Sov8TZA3ePRnBrZsn8uVOZ9qpwmp7_PdtaUyEBSacaosu95VchD1QAgUFCI7GcIsZEOMtIalSDQutJOs_6_ByXuERhYwGmQDqipyssE3vuXb49-mEzJdKnpO88j0rXd78iz9sMQAFr1p1yyEb6kpP7CdAfgnw4JAIEndcFZx3NbjXcucNJgFhnCr40gIC--qAhhlUuDV9yR0N9r5X0K',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDUa18tY2dRH37tnGbthjby2U8_Psopi889qVHXChFPqUSZxOOY0aNJKhKh1yGrsksbgv15CB02FvqbpbwlhSAFctWvKgTDyfu0ucJm3GiKTxjzdc3aXjHeMLTzc6n5aupw9iFdppZXp1PaXShgw3hDPoM2mt8sEPclca6-VcoA0yWpAcadsBDUxk-mxE0HIfSdC7FEhPN7LZNKUAHfCEgRbA6hkllAGPQshG8UHwEGyGmXm-T8U-wI5_P4pQveliBtUIgM-nYzj5wB',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDnm_Vo9zl4hae9m6a0SCCfDfeGkNd8QcpVsxwbg8mt9DbT6VoHWBCTUo8fB0h3a6VjZKz5BJ6gJvClD_jBHV2HeQRGGzQVVQImT6evCkdF88I7na9jpVwBOwWl0OllZFnF0e71MNXIdhTYNhqb1yuoQXya9Gu1xR5j9H_0XxywP41WY73xeV_swLez4qtboP_A_s4CSarTBpdBmOUKg_CWDZOtVyVNvC-s2CbTZD6babhOX1gBIMvoUFwdF7mTQkPYzovC9lhW3RFN',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBPnNQFpusa9SW_IShGLKrrg1k3Z6ZGJOku0ERmvD-StQPrDhqrIGhKAR7vErVkRCXENWB1TpbziD1Htzsz60nQrbd1Ymm0Hrp-5QAMr5mT1Kc-iSnI7whEuR8RX0XAfuWGMxkfqvTIgo4F19i7UA-dce-ILvlWMHUcZepq3z7KVWy8mnt62kQgQDM11bNooQKGux8Ldjat_GRyWytOZkm3WeErSECKmiQA4d5I-spaI5cKb2Rx1BbpjJip5kPDqV4JN_cIF4kMdytb',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ145afPM2GqSLj7UkaTsmt7bxdU8n-VFnfu1zAXPtmWeKuPGLtj5MwRRvPQaK1UG2iF4h9hBcQ9w6ABoI5TWefeDh7dW8vR_JMbznb0m7HQSxklXlpamKNYmRnSAj8vkFQ4hPlB7sknje3YTnRlTHJaIs6K9JWH7ZYKyfrYa3jchVleCvrOnppZUL115eekRHurXKt7TlO4Yu9WyCkDhbpg1J0vKgy9AuB10pNwVk0gqMBAv6YPeYwRA09M3lygT9uD9iin4wkQI6',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBhnQhm1eAsJnZvfe4r1UyXy3VWck1UZ0GCW-sCiuHUbQq-Zs_zRtu12Ec4rslWilQJIRXL8r-A6fTM1iImUyIqd3rrrhLfYOwop1IJQHBL6mlZiLfAShM66VyBUdYCAaWPlbM2Qd1Ec38fZB6wzc1IgLcybdYkQF0aTaC2Al5NjdLgI7yzCrk79-O0hRdp59QOHAuzzCYTAyA12uxHe9BjpS4j-qv1IBTLvgcZdHbbsGKRA1EFTWRqlmPO4al5cAzGcwbhtwiENeYk',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBecb6GLjNkz8FoaDV7k5Fzhdxs-L9QIkn5_LQmbN93TP_zp-lk8OK_TINx-bri1p9A6Fz2rKzJLKQgg6NX8fWzpwVlC7LAXurwtBKakmhNwtgHvKQSqX05DlZxs7fTsE-XI-ywE9QKUOo7G_rz1KO5B64fsyTzQhC7D2QC0xn22pD2D4VX-zd27pfdeVTe1HZTEIQoW7D-ZFjHo8zTH1jQNiAN89is1y-y2rQ6GAXArJ8xm0t_RxYlu8zgjisDny1_AupZ-WPTiZvN',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuATxpgKDc22wsS3Dqq-KWU_pahZSB9lklyFL32W94md1po5GmJnFY6ftEr7k9cYSF3l7RzW8e0gOAlOOb594lfEZpYVCBNPmxVDVtXq7n1XVEz5I1ckiANUtKbu2kwAFQ9_kpRnlORlPhTCYhMO8amxur6OuavArDg_-Xqq_8Oqxew5sYoFMnLnwvFX0itMSAE21YFo0q95EtdBwKrQEayUvZffPGwAqKngyjz0seYKX3Q21DbzBO_njAJOyIPIq5feL9oWdc2rQI73',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAT77Tjr7JjEqQNS-aUSJ8r2qjPAVm0PsHvxpXTE4lb_UFrDFtGA9M1Uq8MGwuresUe0g8lMOi6wV7BmOH0kqaLTfowSwkfPqly978RXTAdF1kQhMucpJ3MzBqNZXw5lnesL93i5jz_KnyUgDCwotgwqTd3cr8W25P1m2SW7gPb_2ZJ1JYmCrK9hkevDy5jIu03qGjO-1NZI4ZxGfkxOy3asClTeh39vk2KHbkkV7u-lQsi7TFbORzkN_kYJx7ck_ehddox_k-SyhWp',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA_n2q08b2htzTMYrkf7S6b6CJcnqaufT5ETdUNDnQQ8KGe7WbYTS3u4AP8z0gPE5Vk4ASEl1lPGuxpUrP1jwki4skhtqIlnaO-4eCOqEH_syuRcC4kaZW27SrLwh3RkegnbHp2vgJQNcKaRkgBJayDfkAnEOOLqNzvr6XqfouAGCeIXJKpzQximHHDkAijFGvajGzPxjbeI2HsW_r0LuJJwQvDPLDdX0m5XF6TqVTUkYcW9PLJpW2r7iaAJpzIjQjdLUZhpQnDL13p',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC4WWXCoHFrRdKYhQCl0nJyCWKyfLfOKhAaQuD1m1jVGCu4U091TwVsDBMfCEQzPQa0z7bNYSzcB_Lu3eOaSmLyQ6KVRMr8_C_HN0YAYCj9ieI153-W6TVZRoP1escjSJVbeux2W6bl9lyRS2kIjOGvQyP9KBVBN3TdG7cyKiEhl2WNaVSVRCb6d8DfIWH1_HhavKxAHfZ7wawe7PMfVw_qHdzSgK0IFruDCQBZk4iX2vAO3vO2biX9hkITMfetXmbLetJDQmw07kUB',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB_W9mekyoI28Zbfrev563irHv1o3XnvRnIZiVwf2TsYnf5jV2qLqZoJsKLq24n3-_TV0BpppHrrAMT6ayHZdvM0jPYxRDvUMjrpVCyjmDM8OJhs_PX5bbf6Y0smG86UKayNKSkbNM_SguNDCiluHq0xbMJxXerNOAe1YLHPyylJwgRBdRstAOxAgl39zLzdWfa7H3Xi4IBTYTJkQ-brqhPEcq9T0wVGLTBrHygVA9z9x_hJL6jLdA60-WCDA-9OxvLjB6IhYf34G79',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDgmTt6O2oNF0jcGQ-ATh32NQhv0kS19o14gIHvO4RvxzEJp2y-TadQlWu-2u-ySJwIvAU_k12PuOzsB_QvdDJSkHDnv6JQm6deShgmu9lJicTM4esMBA9DnpZQhHTQe4rNEYH09H49smrVCCqi-x2FDfQm4pA5oDC_GXBtqgu7wHFgHljJQJ0wIzZlb080Zbyp7cVjWzYCpGkiyj4yN7TE2tQjAH-v-B9lMI55L2HVnCvdjb9WJ9rpTYo1AbA2FG9_7bhzp_S7TtbZ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA81EdvUh0CpVaFpyiJ4MTMN3yuxvJpDObUBFwMUfzWnHAKFKXtSOsIB203mpagv_buIQB28nQEtAmx49m3Iy7lNYW-01aRwi0Y-350gDgM_rJ2Od1XW43x5fr6_hyhe_JrED064mTin1ilaoYqk9NqhRz-KATJpjwmrRJqg-VBVpUhk36mTzmsrCZAb2cqvY3hiUJKFGoUyzx7iKj8PTZG4pqRn5FJE_tnqHLIS7p5_t4-_UZpTNiTNQs6Hf5X4dw_NSwfC9dqsT8n',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBjiLjuiYjM1CDhJZNLjXTjR9h5uMVqm9n8vraOVVxrGn2vl3tEc0NodC5KfxtAp_RkeyBMM2gqEdXJbxea7TNXNFO04HzymhY7p4bEyegQdw9nBq9zozqYgUzv652Z2zGlvX7azMa54IvMis9y36wu9FyX_Ql5KCrfHHnNcLo7FziWTYur2XwVe7WK9UApYL7O-Lbr8m2kJAASkl8kKs4ygJpfw6kuYkNkVFDXTObdfmcehbVk-nPapUbPtc-g7NWAeMAp0yQhNDG6',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDltt0MuTzPUfILOtLE5oFE-8WwEvyHgkGi0E-W3VjqRCMmSAOtlU9vc5eIpvgFhnSraBzzZTnYpsBaAM6dMfARHYHep0oIwCcLg3Nn9UCZyMsD5h2Jg1_wA4HQt3WgfAFDh6pgF0FtehZ5F9rKn9TLeGsIe7JdOiWCulFWjoNZi3SCd6NRYIzSxcutAzpzaVTKEc4G067qJfq04cQuUAalO89QbbGBqvJzLZ22ynTJyqM8RS0-5Ktwtg-bAHbv_rd7svk-8NDwOiCW',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCqz4SeZmoRdZtOnrLdC6vRLlH0-1txN1eEI3gty-noZ3yIgBbK_1MM6t3NNGTftsnW6-E8MsTc-v3sl2SvwRr86HAkTYK0q-_QEPexc4oK1N4o5iYHhCuhQvrNpAmIWomzjBf9WU7fMr3Yt1BXJ4w4ffHHhTZ1miyChE9JLQygWZ6SClaYMUY6h4Oc0BtKem43AbWircv_snyLZ_3vC5zFVvDKd5zbD65ipAFHAven05midHP13i0-hv3zWCv1ahlonuGBPLODu3Q4',
];

const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const GameBoard: React.FC<GameBoardProps> = ({ pairs, onFinish }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [flipped, setFlipped] = useState<CardData[]>([]);

  useEffect(() => {
    const data: CardData[] = [];
    for (let i = 1; i <= pairs; i++) {
      const image = cardImages[(i - 1) % cardImages.length];
      data.push({ id: i * 2 - 1, value: i, image, flipped: false, matched: false });
      data.push({ id: i * 2, value: i, image, flipped: false, matched: false });
    }
    shuffle(data);
    setCards(data);
  }, [pairs]);

  const onFlip = (card: CardData) => {
    if (flipped.length === 2) return;
    const newCards = cards.map(c => (c.id === card.id ? { ...c, flipped: true } : c));
    setCards(newCards);
    const newFlipped = [...flipped, { ...card, flipped: true }];
    setFlipped(newFlipped);
    if (newFlipped.length === 2) {
      setTimeout(() => {
        handleMatch(newFlipped[0], newFlipped[1]);
      }, 800);
    }
  };

  const handleMatch = (first: CardData, second: CardData) => {
    if (first.value === second.value) {
      const matchedCards = cards.map(c =>
        c.value === first.value ? { ...c, matched: true } : c
      );
      setCards(matchedCards);
      if (matchedCards.every(c => c.matched)) {
        onFinish && onFinish();
      }
    } else {
      setCards(cards.map(c => (c.flipped && !c.matched ? { ...c, flipped: false } : c)));
    }
    setFlipped([]);
  };

  return (
    <div className="grid grid-cols-4 gap-3 justify-center p-4">
      {cards.map(card => (
        <Card key={card.id} card={card} onFlip={onFlip} />
      ))}
    </div>
  );
};

export default GameBoard;
