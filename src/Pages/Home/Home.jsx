
import PostSide from '../../Components/PostSide/PostSide'
import ProfileSide from '../../Components/ProfileSide/ProfileSide'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide/>
     <PostSide/>
      <div className="RightSide">Rightside</div>
    </div>
  )
}

export default Home