import foolImage from "../assets/cardImages/00theFool.jpg";
import magicianImage from "../assets/cardImages/01theMagician.jpg";
import priestImage from "../assets/cardImages/02theHighestPriestest.jpg";

const tarotMock = [
  {
    id: 1,
    name: "The Fool",
    image: foolImage,
    meaning: {
      positive: "새로운 시작과 기회가 찾아옵니다.",
      negative: "충동적인 선택을 조심하세요.",
      advice: "모험을 즐기되 신중하게 행동하세요.",
    },
  },
  {
    id: 2,
    name: "The Magician",
    image: magicianImage,
    meaning: {
      positive: "자신의 능력을 믿고 활용할 때입니다.",
      negative: "자신감이 지나쳐 오만해질 수 있습니다.",
      advice: "자신을 믿고 목표를 향해 나아가세요.",
    },
  },
  {
    id: 3,
    name: "The Highest Priestess",
    image: priestImage,
    meaning: {
      positive: "통찰력",
      negative: "움직임이나 행동력의 부족, 소통의 부족, 욕구 불만, 스트레스",
      advice: "나 자신에 대해 깊게 들여다보세요.",
    },
  },
];

export default tarotMock;
