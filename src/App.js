import './App.css'

import UncontrolledComponent from './form/UncontrolledComponent'

function App() {
  // const [name, setName] = useState('Casio')
  // const [visible, setVisible] = useState(true)
  return (
    <div className='App'>
      {/* <button onClick={() => setName('Apple')}>Change Name</button>
      <button onClick={() => setVisible(false)}>Hide Clock</button>
      {visible && <Clock name={name} />} */}
      {/* <Layout>
        <h1>Helasdlo</h1>
        <BareInput
          type='text'
          value='hello'
          autoFocus
          className='input-control'
          onChange={() => {}}
        />
      </Layout> */}
      {/* <LoginControl hidden={false} isLoggedIn={true} /> */}
      {/* <CorrectlyState /> */}
      {/* <ProductList />
       */}
      {/* <Form /> */}
      <UncontrolledComponent />
    </div>
  )
}

export default App
