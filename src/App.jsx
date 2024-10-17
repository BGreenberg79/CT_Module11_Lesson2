import UserProfile from './1_exploring_state_and_class_components.jsx'
import MoviesList from './2_enhancing_functional_components_with_react_hooks.jsx'

function App() {

  return (
    <div>
      < UserProfile initialName='Chester'/>
      {/* Added initialName prop */}
      < MoviesList />
    </div>
  )
}

export default App
