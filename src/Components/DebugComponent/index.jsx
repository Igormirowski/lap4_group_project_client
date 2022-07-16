import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDebug, fetchMedia, loginUser } from '../../State/actionCreators'


import styles from './index.module.css'

function DebugComponent() {
  const myUserState = useSelector((state) => state.user)
  const myMediaState = useSelector((state) => state.media)
  console.log(`\nUSER\n `, myUserState)
  console.log(`\nMEDIA\n`, myMediaState)

  const dispatch = useDispatch()

  

  useEffect(() => {
    const scrollNote = document.querySelector('#scrollNote')
    console.log('* * * ', scrollNote.scrollTop)
    let prevState = 0
    const intervalRef = setInterval(() => {
      
      let currState = scrollNote.scrollTop += 1
      scrollNote.scrollTop = currState

      if (currState === prevState) clearInterval(intervalRef)

      prevState = currState
      console.log(`currState is ${currState} and prevState is ${prevState}`)
      
    }, 100) 
  }, [])
  
  
  return (
    <>
      <div
      onClick={() => dispatch(loginUser())}
      className={styles.debugElement} >Click Me
      </div>

      <div
      onClick={() => dispatch(fetchMedia())}
      className={styles.debugElement2} >Click Me
      </div>

      <iframe className={styles.iframe} title="debug title" width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?start=60&end=70">
      </iframe>
      {/* append to the address: ?mute=1&autoplay=1&loop=1&controls=0 */}

      <div 
        id="scrollNote"
        className={styles.textBox}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi eum veritatis voluptatem amet quos vel nam dolores quo. Odio ducimus cumque sequi assumenda ipsum, qui nemo nisi voluptatem. Quisquam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta quisquam eveniet accusamus id vel, assumenda iusto explicabo quos similique ipsam tenetur neque qui, adipisci sequi totam nesciunt? Rem, nemo!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi eum veritatis voluptatem amet quos vel nam dolores quo. Odio ducimus cumque sequi assumenda ipsum, qui nemo nisi voluptatem. Quisquam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta quisquam eveniet accusamus id vel, assumenda iusto explicabo quos similique ipsam tenetur neque qui, adipisci sequi totam nesciunt? Rem, nemo!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae animi eum veritatis voluptatem amet quos vel nam dolores quo. Odio ducimus cumque sequi assumenda ipsum, qui nemo nisi voluptatem. Quisquam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta quisquam eveniet accusamus id vel, assumenda iusto explicabo quos similique ipsam tenetur neque qui, adipisci sequi totam nesciunt? Rem, nemo!
      </div>
  </>
  )
}

export default DebugComponent
