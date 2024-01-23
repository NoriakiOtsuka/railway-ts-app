import { useNavigate } from 'react-router-dom'

import './home.scss'

export const Home = () => {
  const navigate = useNavigate()

  const handleProfile = () => {
    navigate('/profile')
  }

  return (
    <div className="Home">
      <header className="Home-header">
        <div>
          <button className="home-profile__button" onClick={handleProfile}>
            プロフィール
          </button>
        </div>
      </header>
      <main>
        <div className="home-title__text">YOASOBI</div>
      </main>
    </div>
  )
}
