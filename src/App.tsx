import Layout from "./layout/Layout"
import Sidebar from "./layout/Sidebar"


function App() {

  return (
    <div className="flex xl:max-w-7xl m-auto">
      <aside>
        <Sidebar />
      </aside>
      <main className="flex-1 min-w-0">
        <Layout />
      </main>
    </div>

  )
}

export default App
