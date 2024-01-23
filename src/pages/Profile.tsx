import { useNavigate } from 'react-router-dom'

import './profile.scss'
import ikuraImage from '../image/ikura.png'
import ayaseImage from '../image/ayase.png'

export const Profile = () => {
  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/')
  }

  return (
    <div className="Profile">
      <header className="Profile-header">
        <div>
          <button className="home-back__button" onClick={handleHome}>
            Home
          </button>
        </div>
      </header>
      <main>
        <div className="profile-title__text">PROFILE</div>
        <article className="profile-article-main__text">
          <h1>YOASOBI</h1>
          <p>
            コンポーザーのAyase、ボーカルのikuraからなる、“小説を音楽にするユニット”YOASOBI。
          </p>
          <p>
            2019年11月に公開したデビュー曲「夜に駆ける」は、公開直後から瞬く間に注目を集め、国内の各種配信チャートでも1位を席巻、複数カ国のバイラルチャートにもランクインし、2020年の年間Billboard
            JAPAN総合ソング・チャートとストリーミング・ソング・チャートでは1位を獲得。現在ストリーミング累計再生回数は史上初となる10億回を突破。
          </p>
          <p>
            4月12日(水)リリース、TVアニメ『【推しの子】』オープニング主題歌「アイドル」は、Billboard
            JAPAN 総合ソング・チャート“JAPAN Hot
            100”で、21週連続で総合首位を獲得し、Billboard
            JAPANの歴代連続首位記録を更新、加えて史上最速でストリーミング累計再生回数は4億回を突破した。さらに、米ビルボード・グローバル・チャート“Global
            Excl. U.S.”、Apple Music「トップ100：グローバル」、YouTube music
            charts TOP 100 songs
            Globalでも首位を獲得し、J-POP史上初となる記録を次々と打ち立て続けている。
          </p>
          <p>
            4月24日に全世界配信されたTikTok
            LIVEでは累計視聴者数約63万人、同時視聴者12万人超えと、TikTok
            LIVEにおける国内アーティストのパフォーマンスライブで最高の視聴者数を記録。初アリーナツアー『YOASOBI
            ARENA TOUR 2023
            “電光石火”』では追加公演含めて7都市14公演で計13万人動員。8月には、88rising主催「HEAD
            IN THE CLOUDS Los
            Angeles」にて、初のLAフェス出演を果たすなど、全方位で話題を巻き起こしている。
          </p>
        </article>
        <article className="profile-article-member__text">
          <section>
            <h1>ikura</h1>
            <h3>Singer - Songwrieter / vocal</h3>
            <img
              className="profile-article-member__img"
              src={ikuraImage}
              alt="ikura"
            />
            <p>
              2000年9月25日生まれ、東京都出身。シンガーソングライター“幾田りら”として活動し、2021年3月に配信リリースした「Answer」は、東京海上日動あんしん生命「あんしん就業不能保障保険」ＣＭソングに起用。7月16日に公開となった細田守監督映画『竜とそばかすの姫』では、主人公・すずの親友役で初の声優を務めた。ドラマ主題歌やCMソングを多数手がけており、多方面で精力的に活動を続けている。
            </p>
          </section>
          <section>
            <h1>Ayase</h1>
            <h3>VOCALOID producer / composer</h3>
            <img
              className="profile-article-member__img"
              src={ayaseImage}
              alt="ayase"
            />
            <p>
              1994年4月4日生まれ、山口県出身。2018年12月にVOCALOID楽曲を投稿開始。切なさと哀愁を帯びたメロディ、考察意欲を掻き立てる歌詞で人気を博し、2019年4月に発表した「ラストリゾート」はYouTube1600万再生突破。2019年11月リリースの初EP「幽霊東京」は即完。ボカロ楽曲を自身が歌唱するセルフカバーにも定評があり、「夜撫でるメノウ」は4700万再生を突破。自身がボーカルを務める楽曲もリリースする中、ボカロPとしての活動、さまざまなアーティストへの楽曲提供も行っている。
            </p>
          </section>
        </article>
      </main>
    </div>
  )
}
