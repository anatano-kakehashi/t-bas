import tw from "twin.macro";

import { HiddenBrLgXl, HiddenBr, HiddenBrSm, HiddenBrMd, HiddenBrLg, HiddenBrXl, HightlightedText} from "assets/styles/TailwindComponents.jsx";

import skill1 from "assets/tbas-images/home/HP_01.svg";
import skill2 from "assets/tbas-images/home/HP_02.svg";
import skill3 from "assets/tbas-images/home/HP_03.svg";

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
      <>
        家庭教師だけ
        <HiddenBrSm />
        では不安だ
      </>,
      <>
        子供の学習状況が
        <HiddenBrSm />
        さっぱり分からない
      </>,
      <>
        IB学習をサポート
        <HiddenBrSm />
        してくれるピッタリな
        <HiddenBrSm />
        塾が見つからない
      </>,
      <>
        親が勉強を見れなくて
        <HiddenBrSm />
        困っている
      </>,
      <>
        オンラインで
        <HiddenBrSm />
        習っていたが
        <HiddenBrSm />
        成績が上がらなかった
      </>
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
        Description: (<>
          徒1人1人に寄り添い、最大限に効果を
          <HiddenBrSm />
          生発揮できる1対1の授業をご提供。
        </>),
        ImageUrl: skill1
      },
      {
        SubHeading: "対面・オンライン対応",
        Description: (<>
          学校帰りや土日に教室でレッスン。
          <HiddenBrSm />
          ご自宅でのオンラインレッスンもご提供。
        </>),
        ImageUrl: skill2
      },
      {
        SubHeading: "3つのコース",
        Description: (<>
          Pre-MYPコース、MYPコース、DPコースの
          <HiddenBrSm />
          ３つのコースをご提供。
        </>),
        ImageUrl: skill3
      }
    ]
  },
  {
    
  }
];

export const startJourneyInfo = [
  {
    Heading: "玉川学園IBのMYP・DP卒業生が指導",
    Description: (<>私たち講師陣は生徒1人1人に合ったサポートをご提供します。<HiddenBrSm/>国内外大学の入試対策やエッセイ作成指導も受付中です！</>),
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
          (<>
            ６年生から始まる
            <HiddenBrSm />
            MYPスキルの先取り学習
          </>),
          (<>
            学校の学習に余裕のある
            <HiddenBrSm />
            お子様限定
          </>)
        ]
      },
      {
        SubHeading: "MYP",
        Features: [
          (<>
            成績アップのスキルを
            <HiddenBrSm />
            徹底指導
          </>),
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
          (<>
            大学入試アドバイス＆
            <HiddenBrSm />
            志願書エッセイ指導
          </>)
        ]
      }
    ],
    Button1: "対面レッスン",
    Button2: "オンラインレッスン"
  },
  {
  }
];

export const testimonials = [
  {
    heading: "ご利用者の声",
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
      },
      {
        subHeading: "自信と安心に繋がっています",
        description: "いつもお世話になっております。IBのアセスメントは保護者でも理解することが難しいことが多々あり、T-BASのサポートには大変感謝しております。最近IBをご卒業された先輩方が生徒目線で指導して下さり、本人の自信と安心に繋がっております。宿題をサポート下さったり、試験前の復習、カリキュラムの予習などのご指導が特に助かっております。これからもどうぞよろしくお願い致します。"
      },
      {
        subHeading: "成績面も精神面も安定！",
        description: "️初めて先生にMathへの苦手意識の克服をお手伝いいただいてから、もうすぐ2年になります。途中、DP対策及びメンターとして、新しい先生にバトンタッチされてからも、成績面も精神面も安定し、何より保護者としてのハラハライライラが無くなりました。特にタイムマネージメントと、当事者意識を持って取り組むことが出来るようになり、先生方には大変感謝しております。先生という身近なrole modelに導いていただき、本人も受験やその先の学びについて具体的にイメージ出来るようになって来ていると思います。どうぞ最後までよろしくお願いいたします。"
      },
      {
        subHeading: "充実した学校生活になりました",
        description: "️7年生の手探りの状態よりT-BASのおかげで成績も上がり、充実した学校生活になったと思っております。塾長はじめ、担当してくださいました先生方に感謝申し上げます。今までの経験を活かして留学先でも頑張って欲しいと思っています！本当にありがとうございました。"
      },
      {
        subHeading: "担当の先生のご指導がマッチしています",
        description: "娘はまだ数回ですがとても良い感触を持たせて頂いているようで、感謝しております。担当の先生のご指導がマッチしているようです。当方としては、初回に成績表を見ながら親身になってカウンセリング下さった塾長が、入塾の大きな決め手となったと思います。今後も良い先生がたくさん継続や増員され、ますますご繁栄されますこと、切に願っております！"
      },
      {
        subHeading: "マンツーマンで取り組める環境がいい",
        description: "T-BASの学校の課題に合わせて担当の先生とマンツーマンで取り組める環境はとても良く、？を放置せずに確認出来る環境がある事に感謝しています！"
      },
      {
        subHeading: "成績が良くなった!",
        description: "夏休みも対応いただき感謝しております。熱心にご指導いただき、また会話も楽しかったと本人も言っておりました。お陰様でご指導いただいた教科は成績が良くなりまして本当に感謝です。"
      },
      {
        subHeading: "T-BASに行くのが楽しい!",
        description: "本日もお世話になりました。安心な環境と先生方のお陰で「T-BASに行くのが楽しい」と申しております。ありがとうございます。"
      },
      {
        subHeading: "成長を日々実感しています",
        description: "いつもご指導ありがとうございます。先生方のご指導のおかげで、勉強方法や、自分なりの意見を述べたりと成長を日々実感しております。大変ありがとうございます。夏休みもしっかり勉強したいと思いますので、宜しくお願いします。"
      },
      {
        subHeading: "授業がよく分かるようになった",
        description: "塾でお世話になり始め、授業がよく分かるようになった、とIB教育の学ぶ楽しさを知り充実した日々です。"
      },
      {
        subHeading: "進級への自身と意欲に直結しています",
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
        gender: "Male",
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
        gender: "Male",
        education: [
          "トロント大学",
          "玉川IB卒（IBDP取得済）",
          "ニュージーランド留学経験あり"
        ],
        subjects: [
          "Chem(SL)", "Econ(SL)", "Math(HL)", "Phy(SL)"
        ],
        comment: "こんにちは。IBを経験し、勉学だけではなく色々なことを学んだので 勉強に限らず試験のコツや心持ちなどのアドバイスができればと考えています。 自分の得意科目は数学で、math HLを取っていました。IBは辛いかもしれませんが一緒に頑張りましょう！"
      },
      {
        name: "Teacher _",
        gender: "Female",
        education: [
          "テンプル大学",
          "玉川IB卒（IBDP取得済）"
        ],
        subjects: [
          "Art", "CASのサポート等", "EE", "EP", "MYP", "TOK"
        ],
        comment: "テンプルジャパンキャンパスに進学し、現在は国際教養と政治学を専攻しています。T-BASでの講師歴は今年で3年目になるので、主にMYP生を担当していますが文系や理数系関係なく多岐に渡って生徒をサポートしています。DP生は主に美術やCAS、EE、TOKなどの指導を中心としています。当塾には経験と知識が豊富な講師陣がお待ちしております。どうぞ一度体験レッスンにお越しください。"
      },
      {
        name: "Teacher _",
        gender: "Female",
        education: [
          "国際基督教大学"
        ],
        subjects: [
          "EP", "MYP", "DP", "Econ(HL)", "MathAA(SL)"
        ],
        comment: "I&Sやeconomicsの社会科目を得意としております。ただ答えを教えるのではなく、ひとりひとりの理解力を引き出すような、IBらしい指導を心がけています。その場その場の課題だけでなく、MYP、DPの過程とその先を考慮して学習をサポートしてきます！"
      },
      {
        name: "Teacher _",
        gender: "Female",
        education: [
          "早稲田大学国際教養学部"
        ],
        subjects: [
          "EP", "MYP", "DP", "Econ(HL)", "MathAA(SL)"
        ],
        comment: "英語のスキルがゼロに近いところからMYPに入り言語の壁や課題に苦戦しましたが、試行錯誤を繰り返したIBの生活はとても充実していて成長できたと感じています。IBで培ったスキルや経験を生かして、英語の勉強や日々の学習をサポートできるように勤めてまいります。T-BASで皆さんにお会いできることを楽しみにしております。"
      },
      {
        name: "Teacher _",
        gender: "Male",
        education: [
          "慶應義塾大学総合政策学部",
          "玉川IB卒（IBDP取得済）",
          "オーストラリア留学経験あり"
        ],
        subjects: [
          "EnglishB(HL)", "EP", "JapaneseA(HL)", "Math(MYP)", "MYP"
        ],
        comment: "僕は海外経験がないままMYPに入りましたが、日々の勉強や留学を通して英語力の成長を実感してきました。 日々の学習サポートに加えて、推薦入試のアドバイスや英検対策など、IBで培った経験を存分に活かせるように頑張りますのでどうぞよろしくお願いします。"
      },
      {
        name: "Teacher _",
        gender: "Male",
        education: [
          "トロント大学"
        ],
        subjects: [
          "MathAA(HL)", "Phy(HL)", "Chem(SL)"
        ],
        comment: "トロント大学の応用科学と工学部のEngineering Scienceというプログラムで航空宇宙工学科を専攻しております。生物学を除く全ての理系科目において、直感的に理論を説明するアプローチを用い、出来る限り楽しい授業をしていきます！よろしくお願いいたします。"
      },
      {
        name: "Teacher _",
        gender: "Male",
        education: [
          "エディンバラ大学",
          "玉川IB卒（IBDP取得済）",
          "イギリス留学経験あり"
        ],
        subjects: [
          "Core科目", "EnglishA/B", "EP", "History", "I＆S", "JapaneseA/B", "MYP"
        ],
        comment: "慶應義塾大学文学部に進学後、現在はエディンバラ大学で英文学を専攻しています。 英語と国語を中心に、幅広い年齢層の生徒を教えることができます。また、国内受験・海外受験 ともに豊富な知識を持っています。体験授業でお待ちしております！"
      },
      {
        name: "Teacher _",
        gender: "Female",
        education: [
          "上智大学法学部",
          "海外IB卒(IBDP取得済)"
        ],
        subjects: [
          "DP", "EP", "MYP"
        ],
        comment: "こんにちは！私は海外のIBディプロマを取得しました。そこで学んだ経験を活かし、勉学のみならず海外入試や進学後の生活などの面でも生徒さん達をサポートできます。どうぞよろしくお願いします。"
      },
      {
        name: "Teacher _",
        gender: "Female",
        education: [
          "上智大学法学部",
          "海外IB卒(IBDP取得済)"
        ],
        subjects: [
          "DP", "EP", "MYP", "MathAA(SL)", "Chem(SL)"
        ],
        comment: "こんにちは！私は海外のIBディプロマを取得しました。そこで学んだ経験を活かし、勉学のみならず海外入試や進学後の生活などの面でも生徒さん達をサポートできます。どうぞよろしくお願いします。"
      },
      {
        name: "Teacher _",
        gender: "Female",
        education: [
          "ハワイ大学",
          "Tokyo West International School → Tamagawa Academy IB（IBDP取得済）"
        ],
        subjects: [
          "Biology", "English A", "EP", "History", "Japanese", "Math(AI)", "MYP"
        ],
        comment: "I’m bilingual in English and Japanese and a graduate of the IB MYP and DP program. I look forward to teaching all of you. If you have any questions, feel free to ask me anything!!"
      },
      {
        name: "Teacher _",
        gender: "Male",
        education: [
          "国際基督教大"
        ],
        subjects: [
          "MYP", "DP", "Bio(HL)", "Econ(HL)"
        ],
        comment: "中学1年に頃に英検5級に落ちたほどの英語力だった私ですが、最後はDPをそれなりの成績で修めることができました。英語力の高い海外経験豊富な生徒に囲まれながら何度IBを辞めようと思った事でしょうか。しかし、最後まで諦めずに続けて良かったと思っています。努力すれば結果が付いてくる時代は必ず訪れます。その結果を少しでも良くするお手伝いをさせていただければと思いますので、一緒に頑張りましょう！"
      },
      {
        name: "Teacher _",
        gender: "Male",
        education: [
          "上智大学法学部",
          "開智日本橋高校IB卒（IBDP取得済）"
        ],
        subjects: [
          "MathAA(SL)", "MYP"
        ],
        comment: "こんにちは！僕は生徒さんに寄り添い、勉強が苦にならないよう楽しく授業するのがモットーです！よろしくお願いいたします！"
      },
      {
        name: "Teacher _",
        gender: "Male",
        education: [
          "上智大学法学部",
          "玉川IB卒（IBDP取得済）"
        ],
        subjects: [
          "MathAA(SL)", "MYP", "Bio(HL)"
        ],
        comment: "こんにちは！僕は生徒さんに寄り添い、勉強が苦にならないよう楽しく授業するのがモットーです！よろしくお願いいたします！"
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
      "早稲田社会科学部（英語学位）",
      "鹿児島大学医学部",
      "慶應義塾大学経済学部(英語学位)",
      "上智大学国際教養学部",
      "上智大学経済学部",
      "上智大学法学部国際関係法学科",
      "上智大学総合グローバル学部",
      "上智大学外国語学部英語学科",
      "ICU",
      "立教大学異文化コミュニケーション学部",
      "立教大学GLAP",
      "立教大学法学部国際ビジネス法学科",
      "法政大学経済学部国際経済学科",
      "テンプル大学ジャパン",
      "エディンバラ大学",
      "バーミンガム大学",
      "ダラム大学",
      "トロント大学",
      "マギル大学",
      "ブリティッシュコロンビア大学",
      "アルバータ大学",
      "ワシントン大学",
      "ニューヨーク大学",
      "南カリフォルニア大学",
      "カリフォルニア大学",
      "ハワイ大学",
      "クイーンズランド大学",
      "メルボルン大学",
      "オークランド大学",
      "グリフィス大学"
    ],
    closer: "他多数"
  }
]

// lessons
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
        SubHeading: (<>
          玉川学園IB生に
          <HiddenBrSm />
          ぴったりな塾
        </>),
        Description: "T-BASは玉川学園IBに特化した塾です。優秀な玉川学園IBを卒業した講師が沢山在籍しているので、主要科目の勉強だけでないトータルサポートが可能です。海外IBや他校IB卒の優秀な講師も在籍。幅広い指導の提供をしています。",
        ImageUrl: teach1
      },
      {
        SubHeading: (<>
          マンツーマンの
          <HiddenBrSm />
          対面レッスン
        </>),
        Description: "何と言っても1:1の対面レッスンに勝るものはありません。T-BASではカフェなどと違い学習環境の整った教室で集中してレッスンが出来ますので自信を持ってお勧めします。",
        ImageUrl: teach2
      },
      {
        SubHeading: (<>
          駅ちか！
          <HiddenBrSm />
          学校帰りに
          <HiddenBrSm />
          立ち寄れる
        </>),
        Description: "玉川学園前駅北口から徒歩１分！こんなに便利で落ち着いた学習環境を提供できるのはT-BASだけです！",
        ImageUrl: walk
      },
      {
        SubHeading: (<>
          実績：入塾後の
          <HiddenBrSm />
          スコアアップ率
          <HiddenBrSm />
          驚異の98.5%！
        </>),
        Description: "T-BASでは、学習のコツを指導するだけでなく、IB生に必要なタイムマネージメントの力をつけていきます。課題は時間をかけて質の高いものを作り上げるように意識を高めていきます。",
        ImageUrl: stats
      },
      {
        SubHeading: (<>
          サポートが
          <HiddenBrSm />
          すごい！
        </>),
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
        SubHeading: (<>
          玉川学園IB生に
          <HiddenBrSm />
          ぴったりな塾
        </>),
        Description: "T-BASは玉川学園IBに特化した塾です。優秀な玉川学園IBを卒業した講師が沢山在籍しているので、主要科目の勉強だけでないトータルサポートが可能です。海外IBや他校IB卒の優秀な講師も在籍。幅広い指導の提供をしています。",
        ImageUrl: teach1
      },
      {
        SubHeading: (<>
          マンツーマン
          <HiddenBrSm />
          レッスン
        </>),
        Description: "1:1で講師と対話しながらのレッスンなのでレッスン最後まで集中することが出来ます。お子様の理解度に合わせた丁寧な指導で成績アップを目指します。",
        ImageUrl: teach2
      },
      {
        SubHeading: (<>
          オンライン
          <HiddenBrSm />
          レッスン
        </>),
        Description: "自宅で気軽にレッスンが出来ます。家が遠かったり部活や習い事が毎日のようにある方には、負担が少なくコンスタントに学習を進めることが出来るのでお勧めの学習スタイルです。",
        ImageUrl: online
      },
      {
        SubHeading: (<>
          実績：入塾後の
          <HiddenBrSm />
          スコアアップ率
          <HiddenBrSm />
          驚異の98.5%！
        </>),
        Description: "T-BASでは、学習のコツを指導するだけでなく、IB生に必要なタイムマネージメントの力をつけていきます。課題は時間をかけて質の高いものを作り上げるように意識を高めていきます。",
        ImageUrl: stats
      },
      {
        SubHeading: (<>
          サポートが
          <HiddenBrSm />
          すごい！
        </>),
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

// access info
export const access = [
  {
    heading: "アクセス",
    subHeading: (<>
      T-BAS玉川学園
      <HiddenBrSm />
      〒194-0041 東京都町田市玉川学園2-11-22高橋ビル301
    </>),
    instructions:[
      (<>
        玉川学園前駅北口の階段を下りて目の前の信号を渡ります。
        <HiddenBrSm />
        （スーパー三和側の出口です）
      </>),
      (<>
        左に少し進むと右手に1階が床屋さんの建物
        <HiddenBrSm />
        （高橋ビル）があります。
      </>),
      (<>
        3階301号室がT-BAS玉川学園です。(駅から徒歩1分です)
      </>)
    ]
  }
]

// faq
export const faqInfo = [
  {
    heading: "よくあるご質問",
    subHeaders:[
      "レッスンについて",
      "料金について",
      "入塾について"
    ],
    lesson:[
      {
        question: "体験レッスンはやっていますか？",
        answer: "はい、1時間3300円で受講できます。"
      },
      {
        question: "レッスン形態について教えてください。",
        answer: (<>1:1の完全マンツーマンレッスンです。講師は担当制です。<HiddenBrSm/>
                対面レッスンとオンラインレッスンがあります。<HiddenBrSm/>
                毎週のレッスン回数は週1回以上お好きな回数に出来ます。<HiddenBrSm/>
                1回のレッスン時間は1時間以上お好きな時間に出来ます。
                </>)
      },
      {
        question: "振替はできますか？",
        answer: (<>前日夜7時までにご連絡いただければ後日振替が可能です。<HiddenBrSm/>
                振替はオンラインレッスンになる場合や別の講師が担当する場合があります。<HiddenBrSm/>
                振替期限は学年末の3月末迄とさせて頂きます。
                </>)
      },
      {
        question: "どのような先生が教えるのでしょうか？",
        answer: (<>IBコースは全員がIBDP取得済みの講師です。<HiddenBrSm/>
                その中でも成績上位の玉川学園IB卒の講師が多く在籍しています。<HiddenBrSm/>
                さらにT-BASの講師は塾長の指導教育を受けていますので質の高いレッスンをご提供します。
                </>)
      },
      {
        question: "塾に行けない日はオンラインレッスンに変更できますか？",
        answer: "はい、ご連絡頂ければいつでも変更可能です。差額分はご返金できませんのでご了承ください。"
      },
      {
        question: "振替が溜まってしまっているのですが・・・",
        answer: "夏休みや春休みなど学校がお休みの時期に集中レッスンも出来ますのでご安心下さい。"
      }
    ],
    price:[
      {
        question: "体験レッスンはいくらでしょうか？",
        answer: "対面レッスン・オンラインレッスン、どちらも1時間3300円になります。"
      },
      {
        question: "授業料はいくらでしょうか？",
        answer: "今現在の基本料金は以下の通りです。",

        // add code for table
        inPersonTable: {
          heading: "対面レッスン",
          keyNote: "※設備使用料金が別途1100円/月かかります",
          priceSuffix: "円(税別)/時間",
          courses:[
            {
              heading: "Pre-MYP",
              stdPriceHeading: "通常料金",
              stdPrice: "7000",
              dealPriceHeading: "週3時間以上の場合",
              dealPrice: "6500"
            },
            {
              heading: "MYP",
              stdPriceHeading: "通常料金",
              stdPrice: "7000",
              dealPriceHeading: "週3時間以上の場合",
              dealPrice: "6500"
            },
            {
              heading: "DP",
              stdPriceHeading: "通常料金",
              stdPrice: "7500",
              dealPriceHeading: "週3時間以上の場合",
              dealPrice: "7400"
            }
          ]
        },
        onlineTable: {
          heading: "オンラインレッスン",
          priceSuffix: "円(税別)/時間",
          courses:[
            {
              heading: "MYP",
              stdPriceHeading: "通常料金",
              stdPrice: "6000"
            },
            {
              heading: "DP",
              stdPriceHeading: "通常料金",
              stdPrice: "6000"
            }
          ]
        }
      },
      {
        question: "対面レッスンは授業料と施設使用料の他に追加料金はありますか",
        answer: (<>ありません。T-BASは講師の交通費やカフェ代もかからないので<HiddenBrSm/>
                他よりも安く駅ちかで対面レッスンが受講できるお得な塾です。
                </>)
      },
      {
        question: "日頃の相談は料金がかかりますか？",
        answer: (<>塾長との相談は一切料金はかかりません。気軽にご相談ください。<HiddenBrSm/>
                講師によるエッセイ対策などは授業料と同じ料金を頂きます。
                </>)
      },
      {
        question: "授業料の支払い方法は？",
        answer: (<>毎月お振込みでお願いしております。<HiddenBrSm/>
          前月末か当月初めにお振込みのご連絡をさせて頂きます。
          </>)
      }
    ],
    join:[
      {
        question: "入塾テストはありますか？",
        answer: (<>プレMYPコースは入塾選抜があります。<HiddenBrSm/>
                テストはありませんが、学校の成績や英語力から判断します。
                </>)
      },
      {
        question: "入塾までの流れを教えて下さい。",
        answer: (<>まずはお電話かメールで要望をお聞かせ下さい。<HiddenBrSm/>
          ご希望であれば、体験レッスン(1時間3300円)や塾長との面談(無料)ができますのでご利用下さい。<HiddenBrSm/>
          その後、レッスン日時と講師が決まり次第レッスン開始になります。
          </>)
      },
      {
        question: "入会金はいくらでしょうか？",
        answer: "現在、入会金は0円です。"
      }
    ]
  }
]