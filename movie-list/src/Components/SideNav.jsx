import tv from './Images/tv.png'
import home from './Images/Home.png'
import projector from './Images/Movie Projector.png'
import Tvshow from './Images/TV Show.png'
import calendar from './Images/Calendar.png'
import logout from './Images/Logout.png'


export default function SideNav() {
  return (
      <div  className=' w-[14rem] h-screen'>
          <nav className='flex flex-col justify-evenly item-center border-red-600 border-2 rounded-r-xl h-screen'>
              <div className=' flex self-center items-center gap-16 font-bold'>
                  <img src={tv} />
                  <p>MovieBox</p>
              </div>
              <div className='self-center w-full'>
                  <div className='flex items-center  gap-6 py-3 px-9 hover:border-r-2 border-r-red-600 focus-visible:border-r-2 '>
                      <img className='w-[1.3rem] h-fit' src={home} />
                      <p>Home</p>
                  </div>
                  <div className='flex items-center  gap-6 py-3 px-9 w-full'>
                      <img className='w-[1.3rem]' src={projector} />
                      <p>Movies</p>
                  </div>
                  <div className='flex items-center  gap-6 py-3 px-9 w-full'>
                      <img className='w-[1.3rem]' src={Tvshow} />
                      <p>TV Series</p>
                  </div>
                  <div className='flex items-center  gap-6 py-3 px-9 w-full'>
                      <img className='w-[1.3rem]' src={calendar} />
                      <p>Upcoming</p>
                  </div>
              </div>

              <div className='border-4 w-36 text-center mx-auto relative p-2'>
                  <p className='text-sm text-left'>
                      Play movie quizzes and earn free tickets
                  </p>
                  <p className='text-xs text-gray-400 text-left'>50k people are playing now</p>
                  <button className='bg-red-400 py-1 p-2 text-center mt-4 text-white text-sm rounded-xl'>Start playing</button>
              </div>

              <div className='mx-auto flex items-center gap-2'>
                  <img src={logout} />
                  <p>Log out</p>

                </div>
          </nav>
    </div>
  )
}
