import { useState } from 'react'
import './App.css'

import RoomCard from './RoomCard'

function App() {
  const [showComingSoonOnly, setShowComingSoonOnly] = useState(false)
  const [searchText, setSearchTextValue] = useState('')

  type RoomCardData = {
    title: string
    description: string
    status: string
  }

  const rooms: RoomCardData[] = [
    { title: 'API Room', description: 'Practice API Testing scenarios', status: 'Coming Soon' },
    { title: 'Accessibility Room', description: 'Explore accessibility testing challenges', status: 'Coming Soon' },
    { title: 'Shop Room', description: 'Try UI testing challenges', status: 'Coming Soon' },
    { title: 'Perf Room', description: 'Try Perf testing challenges', status: 'Coming Later' },

  ]

  const statusFilteredRooms = showComingSoonOnly
    ? rooms.filter((r) => r.status === 'Coming Soon')
    : rooms

  const roomsToShow = statusFilteredRooms.filter((r) => r.title.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <>
      <section id="center">
        <div>
          <h1>BreakItRoom</h1>
          <p>
            Break it. Test it. Fix it.
          </p>
        </div>
        <button
          type='button'
          onClick={() => setShowComingSoonOnly((showComingSoonOnly) => !showComingSoonOnly)}>Show Coming Soon Only Rooms
        </button>
        <input type='text' value={searchText} onChange={(event) => setSearchTextValue(event.target.value)}/>


        {roomsToShow.length>0 ? roomsToShow.map((r) =>
        (
          <RoomCard key={r.title} title={r.title} description={r.description} status={r.status} />
        )
        ) : <span>No Rooms to display</span>}

      </section>

      <div className="ticks"></div>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
