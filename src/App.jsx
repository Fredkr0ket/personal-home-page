import Clock from 'react-clock'
import Tasks from './components/task_manager/Tasks'
import './index.css'
function App() {

  return (
    <div className='flex flex-row h-screen bg-background'>
      <div className='w-1/4'>
        <Tasks />
      </div>
    </div>
  )
}

export default App
