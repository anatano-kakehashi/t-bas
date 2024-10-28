import tw from "twin.macro";

import { HiddenBrLgXl, HiddenBr, HiddenBrSm, HiddenBrMd, HiddenBrLg, HiddenBrXl, HightlightedText} from "assets/styles/TailwindComponents.jsx";

import skill1 from "assets/ak-images/skill/skill1.png";
import skill2 from "assets/ak-images/skill/skill2.png";
import skill3 from "assets/ak-images/skill/skill3.png";
import skill4 from "assets/ak-images/skill/skill4.png";


import teach1 from "assets/tbas-images/courses/teach-1.jpeg";
import teach2 from "assets/tbas-images/courses/teach-2.jpeg";
import walk from "assets/tbas-images/courses/walk.jpeg";
import stats from "assets/tbas-images/courses/stats.jpeg";
import teacher1 from "assets/tbas-images/courses/teacher-1.jpeg";
import teachers from "assets/tbas-images/courses/teachers.png";
import online from "assets/tbas-images/courses/online.jpeg";
import hand from "assets/tbas-images/courses/hand.jpeg";

// home page related information

export const header_footer = [
  {
    links: ["T-BASとは", "コースについて", "対面レッスン", "オンラインレッスン", "講師紹介", "ご利用者の声", "よくあるご質問", "アクセス", "お問い合わせ・相談"],
    endpoints:["aboutTbas", "inPerson", "online", "tutors", "feedback", "faq", "access", "contact"],
    address: "〒194-0041 東京都町田市玉川学園 2-11-22高橋ビル301",
    phone: "TEL/FAX：042-851-8680",
    hours: "電話受付時間：15:00-19:00",
    email: "メール：tbastamagawa@gmail.com"
  },
  {
    links: ["About T-BAS", "Courses", "In Person", "Online", "Teachers", "Feedback", "FAQ", "Access", "Contact"],
    endpoints:["aboutTbas", "inPerson", "online", "tutors", "feedback", "faq", "access", "contact"]
  }
]

export const home_hero = [
  {
    Heading:(
      <>
        IB学習サポートなら
        <HiddenBrSm />
        T-BASへ。
      </>
    ),
    Paragraph:(
        <>
          IBディプロマを取得した講師たちが教える信頼の塾
        </>
    )
  },
  {
  }
];

export const home_concerns = [
  {
    Heading:[ "このような", "お悩み", "はありませんか？" ],
    Skills:[
      "家庭教師だけでは不安だ",
      "子供の学習状況がさっぱり分からない",
      "IB学習をサポートしてくれるピッタリな塾が見つからない",
      "親が勉強を見れなくて困っている",
      "オンラインで習っていたが成績が上がらなかった"
    ],
    Subheading:["玉川学園前駅徒歩1分！", "IB専門塾の「T-BAS」にお任せください！"]
  },
  {
    
  }
];

export const home_trialLessons = [
  {
    Heading: [ "今なら", "3300円", "で", "体験レッスン受付中！" ],
    Subheading: "お気軽にご相談ください！",
    ActionButton: "お問い合わせ・相談"
  },
  {
    
  }
];

export const home_keyAspects = [
  {
    Heading: "T-BASの特徴",
    KeyAspects:[
      {
        SubHeading: "マンツーマン授業",
        Description: "生徒1人1人に寄り添い、最大限に効果を発揮できる1対1の授業をご提供。",
        ImageUrl: skill1
      },
      {
        SubHeading: "対面・オンライン対応",
        Description: "学校帰りや土日に教室でレッスン。ご自宅でのオンラインレッスンもご提供。",
        ImageUrl: skill2
      },
      {
        SubHeading: "3つのコース",
        Description: "Pre-MYPコース、MYPコース、DPコースの３つのコースをご提供。",
        ImageUrl: skill3
      }
    ]
  },
  {
    
  }
];

export const home_aboutMe = [
  {
    Heading: "あなたの講師",
    SubHeading: (<>未来のプログラマーの皆さん、 <HiddenBr /><HiddenBrLgXl />こんにちは！</>),
    Description: "私の名前はコウキです！現在マイクロソフトでソフトウェアエンジニアとして働いています。あなたの講師としてだけでなく、メンター・友人のような存在になれるよう心掛けております。",
    Button: "私について"
  },
  {
    Heading: "Your Teacher",
    SubHeading: "Hi there, future programmers! ",
    Description: "My name is Koki, and I'm currently working as a Software Engineer at Microsoft! I strive to not just be your tutor, but to also become a mentor-like figure and friend.",
    Button: "Get To Know Me"
  }
];

export const startJourneyInfo = [
  {
    Heading: "玉川学園IBのMYP・DP卒業生が指導",
    Description: (<>私たち講師陣は生徒1人1人に合ったサポートをご提供します。<HiddenBr/>国内外大学の入試対策やエッセイ作成指導も受付中です！</>),
    Button: "講師紹介"
  },
  {
  }
];

export const courseInfo = [
  {
    Heading: "コース紹介",
    Courses:[
      {
        SubHeading: "Pre-MYP",
        Features: [
          "EP5年生対象(入塾選抜あり）",
          "６年生から始まるMYPスキルの先取り学習",
          "学校の学習に余裕のあるお子様限定"
        ]
      },
      {
        SubHeading: "MYP",
        Features: [
          "成績アップのスキルを徹底指導",
          "手厚いトータルサポート",
          "DPで通用する力をつける"
        ]
      },
      {
        SubHeading: "DP",
        Features: [
          "DP学習＆生活サポート",
          "DP試験対策指導",
          "EEやIAの指導",
          "大学入試アドバイス＆志願書エッセイ指導"
        ]
      }
    ],
    Button1: "対面レッスン",
    Button2: "オンラインレッスン"
  },
  {
  }
];

export const home_testimonials = [
  {
    heading: "T-BASご利用者の声",
    learnMore: "もっと見る",
    reviews: [
      {
        subHeading: "この塾にずっと通っていて本当に助かっております",
        description: "オープン当初から通わせていただいており、最初は正直、親の意向で通っておりましてもう3年になりますが、この塾にずっと通っていて本当に助かっております。今では本人も自ら行って先生に教わりたいという態度に変わって来ています。なかなか教科の先生には質問できなくても身近な塾の先生に気楽に質問できて、わからない事を恥じることもなく深く理解できるまで質問して解決していただいています。オンラインでも受けられますが、やはり対面というのは良いところですね。これからもどうぞよろしくお願いします。"
      },
      {
        subHeading: "知らないままだったら落第の道だったかもしれません",
        description: "大変お世話になりありがとうございました。先輩である先生方には、IBの実践的な知恵を教えていただき感謝しております。知らないままだったら落第の道だったかもしれません。塾長の適切なアドバイスにより救っていただき心より感謝いたします。指定校推薦という道を教えていただいたことも有り難く、その中で行きたい大学も見つけられたのは何よりでした。いろいろとご指導いただき本当にありがとうございました。"
      },
      {
        subHeading: "試験では不得意科目から脱しつつあるような好結果がでました",
        description: "今学期の成績はお陰さまで、Mathは努力が実り、力がつき、安定してきたようです。試験では不得意科目から脱しつつあるような好結果がでました。確実に進級への自信と意欲に直結しております。改めまして温かいお支えに感謝しております。"
      }
    ]
  },
  {

  }
];


export const tutors_list = [
  {
    heading: "講師紹介",
    tutors: [
      {
        name: "Teacher _",
        education: [
          "上智大学経済学部",
          "玉川IB卒（IBDP取得済）"
        ],
        subjects: [
          "EP", "MYP", "DP"
        ],
        comment: "私は英語が決して得意ではなかった状態でIBコースに進学しましたが、最終的にはDPスコアをしっかりと取得することができました。この経験が生徒さんのIBライフに役立てられるよう、お手伝いさせていただければと思います。私個人的な意見ではありますが、英語ができなくてもIBは努力次第で自分自身の成長とともにしっかりと結果を出すことができます！"
      },
      {
        name: "Teacher _",
        education: [
          "上智大学経済学部",
          "玉川IB卒（IBDP取得済）"
        ],
        subjects: [
          "EP", "MYP", "DP"
        ],
        comment: "私は英語が決して得意ではなかった状態でIBコースに進学しましたが、最終的にはDPスコアをしっかりと取得することができました。この経験が生徒さんのIBライフに役立てられるよう、お手伝いさせていただければと思います。私個人的な意見ではありますが、英語ができなくてもIBは努力次第で自分自身の成長とともにしっかりと結果を出すことができます！"
      },
      {
        name: "Teacher _",
        education: [
          "上智大学経済学部",
          "玉川IB卒（IBDP取得済）"
        ],
        subjects: [
          "EP", "MYP", "DP"
        ],
        comment: "私は英語が決して得意ではなかった状態でIBコースに進学しましたが、最終的にはDPスコアをしっかりと取得することができました。この経験が生徒さんのIBライフに役立てられるよう、お手伝いさせていただければと思います。私個人的な意見ではありますが、英語ができなくてもIBは努力次第で自分自身の成長とともにしっかりと結果を出すことができます！"
      },
      {
        name: "Teacher _",
        education: [
          "上智大学経済学部",
          "玉川IB卒（IBDP取得済）"
        ],
        subjects: [
          "EP", "MYP", "DP"
        ],
        comment: "私は英語が決して得意ではなかった状態でIBコースに進学しましたが、最終的にはDPスコアをしっかりと取得することができました。この経験が生徒さんのIBライフに役立てられるよう、お手伝いさせていただければと思います。私個人的な意見ではありますが、英語ができなくてもIBは努力次第で自分自身の成長とともにしっかりと結果を出すことができます！"
      },
      {
        name: "Teacher _",
        education: [
          "上智大学経済学部",
          "玉川IB卒（IBDP取得済）"
        ],
        subjects: [
          "EP", "MYP", "DP"
        ],
        comment: "私は英語が決して得意ではなかった状態でIBコースに進学しましたが、最終的にはDPスコアをしっかりと取得することができました。この経験が生徒さんのIBライフに役立てられるよう、お手伝いさせていただければと思います。私個人的な意見ではありますが、英語ができなくてもIBは努力次第で自分自身の成長とともにしっかりと結果を出すことができます！"
      }
    ]
  }
];

export const tutors_acceptance = [
  {
    heading: "講師の大学合格実績",
    colleges: [
      "慶應義塾大学文学部",
      "慶應義塾大学総合政策学部(英語学位）",
      "早稲田大学国際教養学部",
      "早稲田社会科学部（英語学位）"
    ],
    closer: "他多数"
  }
]

// in person lessons

export const lessons = [
  {
    InPersonHeading: "対面レッスン",
    OnlineHeading: "オンラインレッスン"
  }
];

export const inPerson_WhySelect = [
  {
    Heading: "選ばれる６つの理由",
    Reasons:[
      {
        SubHeading: "玉川学園IB生にぴったりな塾",
        Description: "T-BASは玉川学園IBに特化した塾です。優秀な玉川学園IBを卒業した講師が沢山在籍しているので、主要科目の勉強だけでないトータルサポートが可能です。海外IBや他校IB卒の優秀な講師も在籍。幅広い指導の提供をしています。",
        ImageUrl: teach1
      },
      {
        SubHeading: "マンツーマンの対面レッスン",
        Description: "何と言っても1:1の対面レッスンに勝るものはありません。T-BASではカフェなどと違い学習環境の整った教室で集中してレッスンが出来ますので自信を持ってお勧めします。",
        ImageUrl: teach2
      },
      {
        SubHeading: "駅ちか！学校帰りに立ち寄れる",
        Description: "玉川学園前駅北口から徒歩１分！こんなに便利で落ち着いた学習環境を提供できるのはT-BASだけです！",
        ImageUrl: walk
      },
      {
        SubHeading: "実績：入塾後のスコアアップ率驚異の98.5%！",
        Description: "T-BASでは、学習のコツを指導するだけでなく、IB生に必要なタイムマネージメントの力をつけていきます。課題は時間をかけて質の高いものを作り上げるように意識を高めていきます。",
        ImageUrl: stats
      },
      {
        SubHeading: "サポートがすごい！",
        Description: "T-BASは塾長がいるので、生徒も保護者も日頃から何でも気軽に相談することが出来ます。自信を持って楽しく学習が出来るようにサポートします。塾長は「保護者＆生徒＆講師」を連携させて質の高い授業を提供するように講師を導きます。また、プレMYP/MYPコースはレッスンの学習報告も閲覧できるので学習状況が分かり保護者も安心です。",
        ImageUrl: teacher1
      },
      {
        SubHeading: "講師がすごい！",
        Description: "T-BASの講師はほとんどが早慶上智ICU立教やトロント大学など難関大学に通っています。高いGPAとIBDPハイスコアの成績優秀な講師が在籍しています。彼らは成績を取る方法を熟知しているので是非レッスンでコツを掴んで下さい！",
        ImageUrl: teachers
      }
    ]
  }
];

export const online_WhySelect = [
  {
    Heading: "選ばれる６つの理由",
    Reasons:[
      {
        SubHeading: "玉川学園IB生にぴったりな塾",
        Description: "T-BASは玉川学園IBに特化した塾です。優秀な玉川学園IBを卒業した講師が沢山在籍しているので、主要科目の勉強だけでないトータルサポートが可能です。海外IBや他校IB卒の優秀な講師も在籍。幅広い指導の提供をしています。",
        ImageUrl: teach1
      },
      {
        SubHeading: "マンツーマンレッスン",
        Description: "1:1で講師と対話しながらのレッスンなのでレッスン最後まで集中することが出来ます。お子様の理解度に合わせた丁寧な指導で成績アップを目指します。",
        ImageUrl: teach2
      },
      {
        SubHeading: "オンラインレッスン",
        Description: "自宅で気軽にレッスンが出来ます。家が遠かったり部活や習い事が毎日のようにある方には、負担が少なくコンスタントに学習を進めることが出来るのでお勧めの学習スタイルです。",
        ImageUrl: online
      },
      {
        SubHeading: "実績：入塾後のスコアアップ率驚異の98.5%！",
        Description: "T-BASでは、学習のコツを指導するだけでなく、IB生に必要なタイムマネージメントの力をつけていきます。課題は時間をかけて質の高いものを作り上げるように意識を高めていきます。",
        ImageUrl: stats
      },
      {
        SubHeading: "サポートがすごい！",
        Description: "T-BASは塾長がいるので、生徒も保護者も日頃から何でも気軽に相談することが出来ます。塾長は「保護者＆生徒＆講師」を連携させて質の高い授業を提供するように講師を導きます。また、レッスンの学習報告も閲覧できるのでお子様の様子が分かり保護者も安心です。",
        ImageUrl: hand
      },
      {
        SubHeading: "講師がすごい！",
        Description: "T-BASの講師はほとんどが早慶上智ICU立教やトロント大学など難関大学に通っています。高いGPAとIBDPハイスコアの成績優秀な講師が在籍しています。彼らは成績を取る方法を熟知しているので是非レッスンでコツを掴んで下さい！",
        ImageUrl: teachers
      }
    ]
  }
];

// why learn CS related information

export const whyCS_WhatIsCS = [
  {
    Heading:"学ぶメリット",
    SubHeading:(
      <>
        コンピューター<HiddenBr/>
        サイエンスとは？
      </>
    ),
    Paragraph:"コンピューターサイエンスとは、コンピューターに関しての知識を学ぶだけではなく、私たちを日々取り巻くテクノロジーを理解することです。私たちの電子機器やアプリを動かしているテクノロジーの舞台裏を覗き見ることができる超能力を持っているようなものです。想像してみてほしい：あなたが今このメッセージを読むために使っている電話やこのウェブサイトを構築したプログラムはすべてコンピューターサイエンスの世界で生まれました。"
  },
  {
    Heading:"WHY LEARN",
    SubHeading: (
      <>
        What is Computer Science?
      </>
    ),
    Paragraph:"Computer Science is not just about computers; it's about understanding the digital world that surrounds us. It's like having a superpower that lets you peek behind the scenes of technology. Imagine this: the smartphone you use to search the web & call your loved ones, the cars we all drive in everyday, or the computer you use to complete homework assignments were all created by Computer Science. By understanding Computer Science, you will become aware of the technology surrounding our daily lives and understand how they were programmed/created!"
  }
];

export const whyCS_WhyImp = [
  {
    Heading:(
      <>
        何故重要なの？
      </>
    ),
    Paragraph:(
      <>
        数十年後、世界はテクノロジーの進歩で劇的に変化するでしょう。自動運転する車、AIが病気を治したり手術を行い、完全に没入できるバーチャルリアリティ。これらはSFの夢ではなく、コンピューターサイエンスのおかげで現実になりつつあります。
        <br />
        コンピューターサイエンスを学ぶことで、私たちの生活を取り巻く新たなソフトウェアに精通することができ、他の誰よりも一歩先を行くことができます。例えば、AIが怖くて馴染みのない概念ではなくなり、AIがどのように作られるのか、そしてどのように我々がAIを活用するかを理解することができます！
      </>
    )
  },
  {
    Heading:(
      <>
        Why is it <HiddenBrMd />
        Important?
      </>
    ),
    Paragraph:(
      <>
        Now, let's fast forward a bit. In the next couple of decades, you'll see some incredible things happen in technology. Picture this: cars that drive themselves, AI that cures diseases & performs surgeries, and virtual reality environments where you can be fully immersed. These are not just sci-fi dreams; they're coming to fruition thanks to Computer Science. 
        <br />
        By learning computer science, you will become familiar with these technological concepts and the emerging software that surrounds our lives; thus, being a step ahead of everyone else. For instance, AI won't be a scary / unfamiliar concept anymore. Instead you will understand how AI is created and how YOU can take control and utilize AI to your advantage! 
      </>
    )
  }
];

export const whyCS_ThreeReasonings = [
  {
    Heading: (<>コンピューターサイエンスを<br />学ぶ事で何が得られますか？</>),
    SubHeading1 : (<>技術スキルの高い需要／<br/>多様なキャリアの機会：</>),
    Paragraph1: (
      <>
        上記のセクションで述べたように、コンピューターサイエンスはあらゆるところに存在しており、今後も私たちの生活に影響を与え続けるだろう。この重要性に伴い、プログラマーも極めて需要になっています！実際、米国労働統計局によると、ソフトウェアエンジニアの仕事は他のどの分野よりも速く成長するという。
        <br />
        もう一つの重要な点は、コンピューターサイエンスには様々なサブフィールドがあるということです。ゲーム開発、UI/UX（デザインと研究）、サイバーセキュリティ、データサイエンス、iOS/Androidアプリ開発など、数え上げればきりがない！
      </>
    ),
    SubHeading2: (<>ワーク・ライフ・バランス<br/>と有利な福利厚生：</>),
    Paragraph2: (
      <>
        最後に、ソフトウェアエンジニアは、高給、良い保険、素晴らしいオフィス設備など、非常に有利な福利厚生があります。一例として、平均的な新卒のソフトウェアエンジニアの年収は約10万ドルです。これとは対照的に、大学を卒業し、就職活動に苦労する専攻は山ほどある。就職できたとしても、新卒の平均給与は5万ドルです。
        <br />
        もちろん、お金がすべてではありませんが、高収入のお陰で早くに引退したり、いつも行きたかった旅行、学びたかった新しい言語など、様々な機会の扉を開くことができます。
      </>
    ),
    SubHeading3: "最新テクノロジーが理解出来る：",
    Paragraph3: (
      <>
        今日の世界では、テクノロジーのノウハウをある程度、話さなければならない。SNSで「いいね！」をクリックし、投稿をシェアしているところを想像してみてほしい。その裏で何が起こっているのか、不思議に思ったことはないだろうか？SNSは、あなたが何を好み、どこに行き、どのように見えるかまで、あなたに関する大量のデータを収集している！ちょっと不気味だ。しかし、コンピューターサイエンスを理解していれば、これらのプラットフォームをただ利用するだけでなく、どのように機能しているのかを知ることができる。あなたがコントロールするのであって、彼らがコントロールするのではない。
      </>
    ),
    SubHeading4: "創造力が強くなる：",
    Paragraph4: (
      <>
        コンピューターサイエンスは単なる数字やコードではありません。クリエイティブな遊び場なのです。自分のビデオゲームをデザインしたり、見事なデジタルアートを作ったり、現実世界の問題を最新のAI技術で解決したいと思ったことはありませんか？コンピューターサイエンスでは、そのようなことがすべてできます。コンピューターサイエンスは、あなたの想像力のためのツールキットを持つようなものです。
      </>
    )
  },
  {
    Heading: (
      <>
        What Will I Get From <HiddenBrLgXl /> Learning Computer Science?
      </>
    ),
    SubHeading1 : (<>High Demand for Tech Skills / <HiddenBrLgXl />Diverse Career Opportunities:</>),
    Paragraph1: (
      <>
        As I discussed in the above sections, computer science is legitimately everywhere and will continue to impact our lives in the future. And as expected, since programming is so important, there is an extremely high demand for programmers! In fact, the U.S. Bureau of Labor Statistics says jobs in tech will grow faster than any other field. 
        <br />
        Another important aspect is that there are various subfields within Computer Science. You can dive into Game Development, UI/UX (Design & Research), Cyber Security, Data Science, iOS/Android app dev, and the list goes on! 
      </>
    ),
    SubHeading2: (<>Work / Life Balance & <br/>Lucrative Benefits:</>),
    Paragraph2: (
      <>
        As you may have expected, in relation to the high demand and diverse career options, software engineers also have extremely lucrative benefits: high salary, wonderful healthcare, amazing office amenities, to name a few. To put things in perspective, the average entry-level software engineer makes ~$120,000 a year in the United States. 
        <br />
        In contrast to this, there are tons of other majors where students graduate from a 4-year university, but struggle to find a job. And even when they do find one, the average new-grad’s salary is $60,000. Of course money isn't everything, but it can open doors to opportunities that you’ve always wanted to do like traveling or learning a new language. 
      </>
    ),
    SubHeading3: "Understand the Digital World: ",
    Paragraph3: (
      <>
        In today's world, you've got to speak the language of tech. Imagine you're on social media, clicking 'like,' and sharing posts. Did you ever wonder what happens behind the scenes? Social media platforms collect tons of data about you – what you like, where you go, even how you look! It's kinda spooky. But if you understand Computer Science, you won't just use these platforms; you'll know how they work. You'll be in control, not them.
      </>
    ),
    SubHeading4: "Unleash Your Creativity:",
    Paragraph4: (
      <>
        Here's the best part – Computer Science isn't just numbers and code. It's your creative playground. Ever wanted to design your own video game, create stunning digital art, or solve real-world problems with clever tech solutions? Computer Science lets you do all that and more. It's like having a toolkit for your imagination.
      </>
    )
  }
];

export const whyCS_WhyDive = [
  {
    Heading:(
      <>
        では、私はなぜ<HiddenBr/>
        コンピューター<HiddenBrLgXl/>サイエンスを学ぶべきなのでしょうか？
      </>
    ),
    SubHeading1:"それは：",
    SubHeading2:"あなたが学びたいから！",
    Paragraph:(
        <>
          これらは素晴らしい理由のほんの一部ですが、最大の理由はあなたの好奇心と探究心でしょう。そして、もしあなたがこの道を選んだなら、私はその一歩一歩をお手伝いします。
        </>
    )
  },
  {
    Heading:(
      <>
        So why should I dive into <HiddenBrLgXl />Computer Science?
      </>
    ),
    SubHeading1:"It's simple: ",
    SubHeading2:"because you want to!",
    Paragraph:(
      <>
        These are just a few reasons why it's awesome, but your biggest reason should be your curiosity and desire to explore. And hey, if you choose this path, I'll be here to help you every step of the way.
      </>
    )
  }
];

// about me related information

export const aboutMe_IntroHero = [
  {
    Heading:"私について",
    SubHeading:(<>未来のプログラマーの<HiddenBrLg />皆さん、<HiddenBr/><HiddenBrXl />こんにちは！ 👋</>),
    Paragraph:[
      "コンピューター","サイエンス",
      "の素晴らしさを教える、",
      "コウキ",
      "です。"
    ]
  },
  {
    Heading:"ABOUT ME",
    SubHeading:"Hi there, future programmers! 👋",
    Paragraph:[
      "I'm ",
      "Koki, ",
      "your guide into the awesome world of ",
      "Computer Science."
    ]
  }
];

export const aboutMe_JourneyHero = [
  {
    Heading:"私の経歴",
    Paragraph:"現在マイクロソフトでソフトウェア・エンジニアとして働いていますが、ほんの5年前まで私はコンピューターサイエンスが何なのかを全く知りませんでした。そんなゼロからのスタートでしたが、色んな経験を積み学ぶ事が出来ました。",
    Description1: "様々な授業、インターンシップ、プロジェクトを通じて、ウェブサイトの作り方やAI/MLの学習方法など、素晴らしい技術を学んで来ました。加えて、私はプログラミング以外の重要なライフスキルも学びました：チームワーク、コミュニケーション、問題解決、など。これまで経験した事、これから学ぶ事を全部取り入れて君に最高の授業を提供して行きたいです。",
    Description2: "だから、もしあなたがコンピューターサイエンスを怖いと感じたり、学ぶ準備が出来てないと感じたりしているなら、ただ思い出してほしい：私もたった5年前はあなたと同じく怖く感じてました。あなたの旅はまだ始まったばかりで、私はあなたの事を全力でサポートします。絶対楽しい未来が待っているよ！",
    Journey:[
      {
        SubHeading: "UC Santa Barbara",
        Date: "２０１８秋",
        Description: (<>コンピューターサイエンスの<br />経験がないままUCSBに入学</>),
      },
      {
        SubHeading: "Japan",
        Date: "２０１９夏",
        Description: "日本でインターンと留学経験"
      },
      {
        SubHeading: "Northrop Grumman",
        Date: (<>２０２０夏＆<br /> ２０２１春・夏</>),
        Description: (<>Northrop Grummanで<br/>SWE & AI/MLインターン</>)
      },
      {
        SubHeading: "Invoca",
        Date: "２０２１秋",
        Description: (<>Invoca CS Capstoneの<HiddenBrLgXl />チームリーダー<br/>UCSB CS Summitで3位入賞</>)
      },
      {
        SubHeading: "UCSB Game Development",
        Date: "２０２２春",
        Description: (<>RPGビデオゲームを開発、<br/>UCSB CS Fairでトップ5入賞</>)
      },
      {
        SubHeading: "Microsoft",
        Date: "２０２２秋",
        Description: (<>Microsoft Azureで<br/>ソフトウェアエンジニア</>)
      }
    ]
  },
  {
    Heading:"My Journey",
    Paragraph:"I'm working as a Software Engineer at Microsoft right now (pretty wild, huh?), but just five years ago, I was in your shoes, not knowing a thing about Computer Science. I started from scratch, and it's been an amazing adventure. Below, you can see some of my relevant experiences I have in the realm of Computer Science.",
    Description1: "I learned some amazing technical skills like how to create a website or how to train an AI/ML model through various projects, coursework, and industry experience. Throughout this journey, though, I also learned important life skills that helped me get to where I am today. Life's not just about coding, right? It's also about things like teamwork, communication, and problem-solving, and I've got some great stories to share about that as well.",
    Description2: "So, if you're feeling intimidated by Computer Science or feel like you aren't prepared to learn, don't worry. Remember that I started from scratch too and look where I am now. Your journey is just beginning, and it's going to be a fantastic ride!",
    Journey:[
      {
        SubHeading: "UC Santa Barbara",
        Date: "2018 Fall",
        Description: "Entered UCSB without any experience in Computer Science"
      },
      {
        SubHeading: "Japan",
        Date: "2019 Summer",
        Description: "Interned and Studied Abroad in Japan"
      },
      {
        SubHeading: "Northrop Grumman",
        Date: (<>2020 Summer & <br /> 2021 Spring+Summer</>),
        Description: (<>SWE & AI/ML Internship with <br />Northrop Grumman</>)
      },
      {
        SubHeading: "Invoca",
        Date: "2021 Fall",
        Description: (<>Team Lead for the Invoca <br />CS Capstone project <br/> placing 3rd at the UCSB CS Summit</>)
      },
      {
        SubHeading: "UCSB Game Development",
        Date: "2022 March",
        Description: (<>Developed an RPG Video Game, <br />placing top 5 at the UCSB CS Fair</>)
      },
      {
        SubHeading: "Microsoft",
        Date: "2022 Fall",
        Description: "Software Engineer at Microsoft Azure"
      }
    ]
  }
]

export const aboutMe_TeachHero = [
  {
    Heading:"私が教える事",
    SubHeading:[
      "私は単なる講師ではなく、", 
      "あなたの",
      "メンター",
      " ・ ",
      "友人",
      "だと思ってください。"
    ],
    Paragraph:"コンピューターサイエンスをマスターする手助けをするだけでなく、履歴書の書き方や大学進学のためのアドバイスなど、人生の教訓もお伝えします。"
  },
  {
    Heading:"What I'll Teach You",
    SubHeading:[
      "I'm not just your tutor;", 
      "think of me as your ",
      "mentor",
      " and ",
      "friend."
    ],
    Paragraph:"I'll not only help you master Computer Science but also share life lessons like how to create a resume or give you valuable advice for college and beyond."
  }
];

export const aboutMe_WhyMeHero = [
  {
    Heading:"私と学ぶべき理由？",
    SubHeading1:"共感できるエンジニア",
    Paragraph1:(
    <>
      大学受験のとき、私は気まぐれで「コンピューター・エンジニア」を専攻として選びました。理系の授業は得意でしたし、コンピューターは将来役に立つだろうと言う甘い考えでUCSBに入学しました。その当時、僕にはプログラミングの経験が全く無かったのですが、他の生徒もきっと同じだろうと思ってました。
      <br/><br/>
      しかし、僕とは対照的にほとんどの生徒が既にプログラミングを学んでいて、将来エンジニアになりたいと言う強い思いを抱いていました。なぜ皆はこんなにも多くのことを知っているのだろう？なぜ皆はエンジニアを目指そうと思ったのだろう？その答えは意外と簡単で、彼らにはアドバイスを貰える人々が身近にいたからでした。自分の家族だったり友達の両親など既にエンジニアになっている人々を知っていました。だからこそエンジニアは何をしていて、どうしたら彼らもエンジニアになれるかを知っていたからです。
      <br/><br/>
      私の親族内ではこの分野を探求したのは自分が初めてだったので、私には導いてくれる人が周りに居ませんでした。だからこそ、私はあなたの力になりたいのです。あなたがいつでも頼れる、何でも聞けるメンターとなり一緒に励み、あなたが素晴らしいソフトウェア・エンジニアになる手助けが出来ればと願っています。
    </>),
    SubHeading2:"熱心なサポーター",
    Paragraph2:(
      <>
        日系一世として、私はアメリカで成長して行く中、多くの葛藤や障害に直面し、圧倒されそうになることがよくありました。そのような時期に、ある素晴らしい英語チューターと出会い、私の状況は完全に好転しました。彼の思いやりと多大なサポートによって、英語を楽しく学ぶ事ができるようになりました。<br/><br/>
        彼のおかげで、学校での成績が良くなっただけでなく、色んな文化にも触れて、素晴らしい友達もできました。この経験以来、私は教えること、そして生徒の人生に良い影響を与えることを心掛けています。私が学んだことを分かち合い、皆さんの成功の手助けをしたいです！
      </>)
  },
  {
    Heading:"Why Me?",
    SubHeading1:"Relatable Engineer",
    Paragraph1:(
    <>
      When I was applying for college, I chose 'Computer Engineering' on a whim because I thought it sounded interesting and I had a strong STEM background. But here's the thing - I was the first in my family to explore this field, and I didn't have anyone to guide me. So, when I started at UCSB, I had absolutely no programming experience.  
      <br/><br/>
      I thought maybe others were in the same boat, but as I got to know my peers, I realized most of them already had some experience. It made me wonder, why did they know so much already? 
      <br/><br/>
      The answer was simple - they had someone to turn to for help, someone who knew about Software Engineering. I didn't have that advantage. 
      That's why I want to be your tutor - I want to be that mentor you can always rely on, the one you can ask any question, and together, we'll work hard to prepare you to become an awesome Software Engineer.
    </>),
    SubHeading2:"Eager and Willing Helper",
    Paragraph2:(
      <>
        As a first generation Japanese-American, I faced tons of struggles and hurdles growing up that often left me feeling overwhelmed. During such difficult times, I met this incredible English tutor who completely turned things around for me. Through his compassion and tremendous support, he not only changed my outlook on English but helped me believe in myself. 
        <br/><br/>
        Thanks to him, I not only started doing great in school but also made some awesome American friends. Ever since that experience, I've been super passionate about teaching and making a positive impact on students' lives. I'd love to share what I've learned and help you succeed too!
      </>)
  }
];

export const aboutMe_MyGoalHero = [
  {
    Heading:"私の目標",
    Paragraph:[
      "私の主な目標？ソフトウェア・エンジニアリングのエキサイティングな世界、大学生活、そしてあなたの輝かしい未来に備えることです。一緒に学び、成長し、そして楽しみましょう！ ",
      "一緒にこの素晴らしい旅に出ましょう！🚀"
    ]
  },
  {
    Heading:"My Goal",
    Paragraph:[
      "My main goal? To prepare you for the exciting world of software engineering, university life, and your bright future. Together, we'll learn, grow, and have a blast doing it! ",
      "Let's embark on this incredible journey together! 🚀"
    ]
  }
]


// services related
export const services_Hero = [
  {
    Heading:"サービス内容",
    SubHeading1: "こんにちは！ ",
    SubHeading2:(
    <>
      あなたの架け橋の<HiddenBr />プログラミング授業で期待<HiddenBr />できることを簡単に紹介します！
    </>),
    Paragraph:(
      <>
        これからプログラミングを始める方も、すでにプログラミングの経験がある方もご安心ください。このロードマップは、単にコース進行のフレームワークとして機能します。
        <br /> <br />
        質問があったり、何から始めたらいいか分からないですか？大丈夫です！あなたの興味や達成したい事に合わせたロードマップを作成します！
      </>)
  },
  {
    Heading:"SERVICE",
    SubHeading1: "Hey there! ",
    SubHeading2:"Here's a quick look at what you can expect in Anatano Kakehashi's programming course!",
    Paragraph:(
    <>
      Don't worry if you're just starting out or have some programming experience already – we can customize your journey. This roadmap merely serves as a framework for the course progression.
      <br /> <br />
      Got questions or not sure where to begin? No problem! Just shoot me a message, and we'll team up to create a roadmap that's all about your interests and what you want to achieve!
    </>)
  }
];

export const services_Roadmap = [
  [
    {
      Heading: "Python 入門",
      SubHeading1: "推定時間：",
      SubHeading2: "週1回受講の場合、〜1年",
      Paragraph: (
      <>
        Pythonは初心者に優しいプログラミング言語でありながら、<HiddenBrLgXl/>非常に汎用性が高い。<HiddenBr/>実際、世界中のプログラマーの50％がPythonを<HiddenBr/>利用しています。
      </>),
      WhatTeach: "何を教えるか：",
      WhatTeachParagraph: "Pythonはそのシンプルさと読みやすさで知られる初心者に優しいプログラミング言語なので、Pythonを通してプログラミングの基本的な概念をすべてカバーします。これを通して、将来ウェブ開発やゲーム開発など様々なコンセプトを学ぶための基礎を固めます。",      
      WhyImportant: "なぜ重要なのか：",
      WhyImportantParagraph: "Pythonは、幅広い用途に適した非常に汎用性の高いプログラミング言語です。今日、PythonはWeb開発、データ分析、AI/ML など様々な分野で利用されています。さらに、世界中のプログラマーのほぼ50％がPythonを業務に活用しています。したがって、Pythonを学ぶことは、ソフトウェア・エンジニアのキャリアにおいて間違いなく役立ちます。",
      SkillsObtained: "身につくスキル：",
      Skills: [
        (<>
          プログラミング /<br/>
          アルゴリズムの基礎
        </>),
        "基本的なデータ構造の理解",
        (<>
          オブジェクト指向<br/>
          プログラミング
        </>)
      ]
    },
    {
      Heading: "GitHub　入門",
      SubHeading1: "推定時間：",
      SubHeading2: "週1回受講の場合、〜三ヶ月",
      Paragraph: "GitHubを学ぶことで、コードの変更を効率的に追跡し、異なるバージョンを管理し、他のプログラマーと共同作業することができます。フォーチュン100社の90％以上がGitHubを利用しています。",
      WhatTeach: "何を教えるか：",
      WhatTeachParagraph: "GitHubは間違いなくソフトウェアエンジニアとして学ぶべき最も重要な技術の1つなので、GitHubをすべてカバーします：例えば、コードの管理、チームとの共同作業、チームの管理方法など。",      
      WhyImportant: "なぜ重要なのか：",
      WhyImportantParagraph: "GitHubを利用する事で複数のプログラマーが、衝突することなく同時に同じプロジェクトに取り組むことができます。それはまるで、クラスのプロジェクトで友達と同じ google ドキュメントで作業するようなものです。また、GitHubでチームの課題を効率的に管理し、優先順位をつけることもできます。これにより、プロジェクトを整理し、重要な問題を確実に対処することができます。多くの企業、特にTech業界では、コードの管理にGitHubを使っています。実際、Fortune 100企業の90%以上がGitHubを使っているため、GitHubの効果的な使い方を知っていることは、ソフトウェア開発の仕事を探す上で貴重なスキルです。",
      SkillsObtained: "身につくスキル：",
      Skills: [
        (<>チーム・コラボレーション用の<HiddenBr/>Gitとバージョン<HiddenBrLgXl />管理の基礎</>),
        (<>プロジェクト管理の基礎</>),
        (<>Githubページで<br />ウェブサイトを公開</>)
      ]
    },
    {
      Heading: "Web開発 入門",
      SubHeading1: "推定時間：",
      SubHeading2: "週1回受講の場合、〜1年",
      Paragraph: "Web開発は、技術業界で最も需要の高いスキルの1つです。なぜなら、そのスキルはプログラマーに様々なプロジェクトに適用できる汎用性の高いスキルセットを備えているからです。",
      WhatTeach: "何を教えるか：",
      WhatTeachParagraph: "入門コースでは、Web制作のFront EndとなるHTML/CSSを教えます。その過程で、ポートフォリオサイトや履歴書の実装に取り組みます！その後、PythonのFlaskフレームワークを使ってBack Endについて学びます。授業が終了したら、クラスメイトと一緒に、ウェブサービスを作成するグループプロジェクトを開始します！",      
      WhyImportant: "なぜ重要なのか：",
      WhyImportantParagraph: "ソフトウェア・エンジニアになるには、ウェブ開発のスキルが非常に役に立ちます。特にフルスタック（フロントエンド、バックエンド、データベース、api）を理解することは、あらゆるエンジニア職に役立ちます。もう一つの極めて重要な要素は、プログラマーが自分のオンラインビジネスを作ったり、フリーランスのエンジニアとして様々なプロジェクトに携わったりできることです。",
      SkillsObtained: "身につくスキル：",
      Skills: [
        (<>HTML/CSS<HiddenBr/>の基礎</>),
        (<>Python Flaskを使って<HiddenBr/>ウェブサイトを構築</>),
        (<>自分のポートフォリオ<HiddenBr/>ウェブサイトと<HiddenBrLgXl/>履歴書を<HiddenBr/>作成する</>),
        (<>仲間と協力してウェブ・<HiddenBr/>プロジェクト<HiddenBrLgXl/>を作成する</>)
      ]
    }
  ] ,
  [
    {
      Heading: "Intro to Python",
      SubHeading1: "Estimated Time:",
      SubHeading2: "~1 year if taking courses once a week",
      Paragraph: "Python is a beginner friendly programming language, yet extremely versatile. In fact, almost ~50% of all programmers in the world utilize Python in their work.",
      WhatTeach: "What Will I Teach:",
      WhatTeachParagraph: "Since Python is a beginner friendly programming language known for its simplicity and readability, I will cover all the fundamental concepts in programming through Python. Through this, we will establish a solid groundwork for learning various concepts like web development or game development in the future.",      
      WhyImportant: "Why is it Important:",
      WhyImportantParagraph: "Python is an extremely versatile programming language suitable for a wide range of applications. Today, Python is used in various fields like web development, data analysis, and artificial intelligence. Additionally, almost ~50% of all programmers in the world utilize Python in their work; thus, learning Python will definitely help you in your Software Engineering career. This versatility makes it a valuable skill to have in your toolkit.",
      SkillsObtained: "Skills You Will Obtain:",
      Skills: [
        "Basics of programming concepts, algorithms, and problem-solving",
        (<>Understanding fundamental <HiddenBr/>data structures</>),
        (<>Introduction to Object <HiddenBr/>Oriented Programming</>)
      ]
    },
    {
      Heading: "GitHub",
      SubHeading1: "Estimated Time:",
      SubHeading2: "~3 Months if taking courses once a week",
      Paragraph: "Learning GitHub allows programmers to efficiently track changes in their code, manage different versions, and collaborate with others on software development projects. Over 90% of Fortune 100 companies use GitHub.",
      WhatTeach: "What Will I Teach:",
      WhatTeachParagraph: "Since GitHub is arguably one of the most important technologies to learn as a Software Engineer, I will cover all of the essential components of GitHub: how to manage code and collaborate with a team.",      
      WhyImportant: "Why is it Important:",
      WhyImportantParagraph: "GitHub provides a platform for collaboration. Multiple developers can work on the same project simultaneously without conflicts. It’s almost like working on the same google doc with your friends on a class project, but instead for programming. GitHub also allows developers to manage and prioritize tasks, bugs, and feature requests efficiently. This helps keep projects organized and ensures that important issues are addressed. Many companies, especially in the tech industry, use GitHub to manage their code repositories. In fact, over 90% of Fortune 100 companies use GitHub. Thus, knowing how to use GitHub effectively is a valuable skill when seeking a career as a software engineer.",
      SkillsObtained: "Skills You Will Obtain:",
      Skills: [
        "Basics of Git and Version Control for team collaboration",
        "Basics of Project Management",
        (<>Publish / Host a website <HiddenBr/>via Github Pages</>)
      ]
    },
    {
      Heading: "Intro to Web Development",
      SubHeading1: "Estimated Time:",
      SubHeading2: "~1 year if taking courses once a week",
      Paragraph: "Web development is one of the most in-demand skills in the tech industry because the skills equip programmers with a versatile skill set that can be applied to various projects and domains.",
      WhatTeach: "What Will I Teach:",
      WhatTeachParagraph: "In the intro course, I will teach HTML/CSS for the front-end of web development. Through the process, we will work on implementing a portfolio website and a resume for your careers! Afterwards, we will learn about back-end web development through the use of Python’s Flask framework. Once we complete the lessons, we will start a group web project with fellow classmates where the students will create a web service from scratch!",      
      WhyImportant: "Why is it Important:",
      WhyImportantParagraph: "Web development skills are extremely useful if you want to become a software engineer. Specifically understanding the full-stack (front-end, back-end, databases, authentication, apis) will help you in every Software Engineering role. Another extremely vital component of web development is that programmers can create their own online businesses or work as freelance engineers on various projects. Ultimately, web development provides the tools to bring entrepreneurial ideas to life.",
      SkillsObtained: "Skills You Will Obtain:",
      Skills: [
        "Basics of HTML / CSS",
        "Python Flask to build backend",
        (<>Create your own portfolio <HiddenBrLgXl/>website and resume</>),
        (<>Collaborate with fellow students <HiddenBrLgXl/>to create a web project</>)
      ]
    }
  ]
];


