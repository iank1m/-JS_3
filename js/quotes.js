const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다",
    author: "키케로",
  },
  {
    quote: "산다는 것 그것은 치열한 전투이다",
    author: "로망로랑",
  },
  {
    quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다",
    author: "사무엘존슨",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다",
    author: "파울로 코엘료",
  },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해",
    author: "찰리 채플린",
  },
  {
    quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다",
    author: "엘버트 허버드",
  },
  {
    quote: "신은 용기있는 자를 결코 버리지 않는다",
    author: "켄러",
  },
  {
    quote:
      "행복의 문이 하나 닫히면 다른 문이 열린다. 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가",
    author: "헬렌켈러",
  },
  {
    quote: "우리를 향해 열린 문을 보지 못하게 된다",
    author: "헬렌켈러",
  },
  {
    quote: "피할 수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote:
      "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐",
  },
  {
    quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에",
    author: "엘사 맥스웰",
  },
  {
    quote:
      "먼저핀꽃은 먼저진다 남보다 먼저 공을 세우려고 조급히 서둘것이 아니다",
    author: "채근담",
  },
  {
    quote: "행복한 삶을 살기위해 필요한 것은 거의 없다",
    author: "마르쿠스 아우렐리우스 안토니우스",
  },
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다",
    author: "L. 론허바드",
  },
  {
    quote:
      "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다",
    author: "제임스 오펜하임",
  },
  {
    quote:
      "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라. 모든 인생은 실험이다. 더 많이 실험할수록 더 나아진다",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "한 번의 실패와 영원한 실패를 혼동하지 마라",
    author: "F. 스콧 핏제랄드",
  },
  {
    quote: "내일은 내일의 태양이 뜬다",
    author: "",
  },
  {
    quote: "피할 수 없으면 즐겨라",
    author: "로버트 엘리엇",
  },
  {
    quote:
      "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는 것이다",
    author: "L. 론허바드",
  },
  {
    quote: "계단을 밟아야 계단 위에 올라설 수 있다",
    author: "터키 속담",
  },
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다",
    author: "앙드레 말로",
  },
  {
    quote:
      "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
    author: "단테",
  },
  {
    quote: "행복은 습관이다. 그것을 몸에 지니라",
    author: "허버드",
  },
  {
    quote:
      "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다",
    author: "톰 모나건",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
    author: "찰스 다윈",
  },
  {
    quote: "평생 살 것처럼 꿈을 꾸어라. 그리고 내일 죽을 것처럼 오늘을 살아라",
    author: "제임스 딘",
  },
  {
    quote:
      "네 믿음은 네 생각이 된다. 네 생각은 네 말이 된다. 네 말은 네 행동이 된다. 네 행동은 네 습관이 된다. 네 습관은 네 가치가 된다. 네 가치는 네 운명이 된다",
    author: "간디",
  },
  {
    quote:
      "일하는 시간과 노는 시간을 뚜렷이 구분하라. 시간의 중요성을 이해하고 매 순간을 즐겁게 보내고 유용하게 활용하라. 그러면 젊은 날은 유쾌함으로 가득 찰 것이고 늙어서도 후회할 일이 적어질 것이며 비록 가난할 때라도 인생을 아름답게 살아갈 수 있다",
    author: "루이사 메이 올콧",
  },
  {
    quote:
      "절대 포기하지 말라. 당신이 되고 싶은 무언가가 있다면, 그에 대해 자부심을 가져라. 당신 자신에게 기회를 주어라. 스스로가 형편없다고 생각하지 말라. 그래봐야 아무 것도 얻을 것이 없다. 목표를 높이 세워라. 인생은 그렇게 살아야 한다",
    author: "마이크 맥라렌",
  },
  {
    quote: "1퍼센트의 가능성, 그것이 나의 길이다",
    author: "나폴레옹",
  },
  {
    quote:
      "그대 자신의 영혼을 탐구하라. 다른 누구에게도 의지하지 말고 오직 그대 혼자의 힘으로 하라. 그대의 여정에 다른 이들이 끼어들지 못하게 하라. 이 길은 그대만의 길이요, 그대 혼자 가야할 길임을 명심하라. 비록 다른 이들과 함께 걸을 수는 있으나 다른 그 어느 누구도 그대가 선택한 길을 대신 가줄 수 없음을 알라",
    author: "인디언 속담",
  },
  {
    quote: "고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다",
    author: "괴테",
  },
  {
    quote:
      "삶은 소유물이 아니라 순간 순간의 있음이다. 영원한 것이 어디 있는가. 모두가 한 때일뿐. 그러나 그 한 때를 최선을 다해 최대한으로 살 수 있어야 한다. 삶은 놀라운 신비요 아름다움이다",
    author: "헬렌 켈러",
  },
  {
    quote:
      "실패는 중요하지 않다. 내가 성공할 수 있는 한 가지 방법을 발견한 것이다",
    author: "토마스 에디슨",
  },
  {
    quote: "당신이 할 수 있다고 믿든 못한다고 믿든, 믿는 대로 될 것이다",
    author: "헨리 포드",
  },
  {
    quote:
      "성공한 사람이 되기 위해선 한 가지 이상의 일을 하려는 열망이 있어야 한다",
    author: "모건 프리먼",
  },
  {
    quote: "어떤 일이든 하는 것보다는 어떻게 하는 것이 중요하다",
    author: "도움말",
  },
  {
    quote: "최선을 다하는 것은 가장 작은 행위보다도 크다",
    author: "앨버트 슈바이처",
  },
  {
    quote: "당신이 할 수 있다고 믿든 못한다고 믿든, 믿는 대로 될 것이다",
    author: "헨리 포드",
  },
  {
    quote: "당신의 미래를 결정하는 것은 현재 시점에서 하는 선택이다",
    author: "린다 브라운",
  },
  {
    quote:
      "성공은 결코 영원하지 않고 실패는 영원하지 않다. 변화하는 것이 삶이다",
    author: "새스크루스",
  },
  {
    quote: "미래에 관한 최고의 예측은 현재 창조하는 것이다",
    author: "피터 드러커",
  },
  {
    quote: "너는 믿는 대로 되리라",
    author: "오바마",
  },
  {
    quote: "행동은 모든 성공의 기초다",
    author: "파블로 피카소",
  },
  {
    quote: "비전은 눈에 보이지 않는 것을 보는 능력이다",
    author: "조나단 스위프트",
  },
  {
    quote: "사람은 나이가 아니라 포부를 잃어버렸을 때 늙는다",
    author: "새스크루스",
  },
  {
    quote:
      "성공한 사람이 되기 위해선 한 가지 이상의 일을 하려는 열망이 있어야 한다",
    author: "모건 프리먼",
  },
  {
    quote: "내비치지 않는 것은 달성할 수 없다",
    author: "나폴레옹",
  },
  {
    quote: "당신의 미래를 결정하는 것은 현재 시점에서 하는 선택이다",
    author: "린다 브라운",
  },
  {
    quote: "실패는 성공의 어머니다",
    author: "존 도너",
  },
  {
    quote: "오늘 걷는 작은 발걸음이 내일 큰 발전이 될 것이다",
    author: "초 라이오",
  },
  {
    quote: "가장 훌륭한 교육은 돈을 벌 수 있는 기술을 가르치는 것이다",
    author: "프랭클린",
  },
  {
    quote: "가장 큰 위험은 위험하지 않다는 것이다",
    author: "볼트 허",
  },
  {
    quote: "당신이 할 수 있다고 믿든 못한다고 믿든, 믿는 대로 될 것이다",
    author: "헨리 포드",
  },
  {
    quote: "당신은 당신이 믿는 대로 될 것이다",
    author: "나폴레옹 힐",
  },
  {
    quote: "위대한 일은 행동하는 것에서 시작된다",
    author: "계단",
  },
  {
    quote: "인생에서 중요한 일은 처음 시작한 것을 끝까지 완수하는 것이다",
    author: "칼빈 쿨리지",
  },
  {
    quote: "우리는 우리의 선택을 선택한다. 그 후 우리의 선택은 우리를 선택한다",
    author: "영어 속담",
  },
  {
    quote: "일방적인 선택을 받아들이지 말고, 당신이 선택한 선택에 책임을 지라",
    author: "토머스 제퍼슨",
  },
  {
    quote:
      "우리의 인생은 우리가 생각하는 대로 된다. 그러나 때로는 우리가 생각하지 않는 대로 된다",
    author: "벤자민 디즈레일리",
  },
  {
    quote: "성공은 가장 큰 실패에 이르러야만 올 수 있다",
    author: "줄리어스 카이사르",
  },
  {
    quote: "당신이 할 수 있다고 믿든 못한다고 믿든, 믿는 대로 될 것이다",
    author: "헨리 포드",
  },
  {
    quote: "성공은 준비된 기회가 만나는 것이다",
    author: "발",
  },
  {
    quote: "성공은 실패로부터 일어난다. 실패하면 포기하지 말고 계속 도전하라",
    author: "월트 디즈니",
  },
  {
    quote: "가장 좋은 방법을 찾지 못한 사람은 아무것도 시도하지 않은 사람이다",
    author: "알버트 아인슈타인",
  },
  {
    quote: "가장 큰 위험은 위험하지 않다는 것이다",
    author: "볼트 허",
  },
  {
    quote: "성공은 실패를 거듭한 뒤에 온다",
    author: "타마라 타일러",
  },
  {
    quote:
      "당신은 어디로 가고 싶은가? 그리고 당신이 어디로 향하느냐에 따라 세상은 당신을 따를 것이다",
    author: "J.R.R. 톨킨",
  },
  {
    quote:
      "당신이 원하는 모든 것은 곧 당신이 원하는 모든 것을 얻을 수 있다는 믿음을 갖고 행동하는 것이다",
    author: "메리 케이 애쉬",
  },
  {
    quote: "가장 큰 위험은 위험하지 않다는 것이다",
    author: "볼트 허",
  },
  {
    quote:
      "당신의 가능성을 믿어라. 그리고 그것은 당신이 어디로 갈지를 결정할 것이다",
    author: "빈스 롬바르디",
  },
  {
    quote:
      "당신이 가고자 하는 방향으로 계속 걸어가면, 마침내 당신은 그곳에 도착할 것이다",
    author: "찰스 킴브로",
  },
  {
    quote:
      "당신이 해야 할 일을 찾으십시오. 그리고 그 일을 하십시오. 그것이 인생의 비밀입니다",
    author: "아인랜드",
  },
  {
    quote: "당신이 가는 방향으로 향해라",
    author: "안토니 로비너",
  },
  {
    quote: "당신이 정말로 원한다면, 당신은 어떤 일이든 할 수 있다",
    author: "J.K. 롤링",
  },
  {
    quote: "꿈을 향해 달려라. 그리고 당신은 세상을 바꿀 수 있다",
    author: "하비 콜베인",
  },
  {
    quote: "당신이 어디에 있든지 상관없이, 당신이 누구인지를 중요시하세요",
    author: "밀든 홉킨스",
  },
  {
    quote: "포기하지 않으면, 언젠가는 성공할 것입니다",
    author: "알버트 아인슈타인",
  },
  {
    quote: "목표가 크지 않다면, 성취도 크지 않다",
    author: "로버트 H. 슐러",
  },
  {
    quote: "우리는 내일을 예측하지 못하지만, 우리는 그것을 만들 수 있다",
    author: "피터 드러커",
  },
  {
    quote:
      "아무것도 할 수 있다고 믿는다면, 세상은 당신의 조개장에 열려 있을 것입니다",
    author: "루이자 메이 올콧",
  },
  {
    quote:
      "당신은 당신이 세상을 변화시키기를 원한다면, 먼저 당신 스스로 변화해야 한다",
    author: "마하트마 간디",
  },
  {
    quote: "강한 의지는 어떤 역경에도 이길 수 있는 힘이다",
    author: "레오나르도 다 빈치",
  },
  {
    quote: "성공은 가장 큰 실패에 이르러야만 올 수 있다",
    author: "줄리어스 카이사르",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;