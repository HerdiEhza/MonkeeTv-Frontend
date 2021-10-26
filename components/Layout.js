import CategoryButtons from "./CategoryButtons"
import RunningText from "./RunningText"
import Navbar from "./Navbar"

const Layout = ({ children, categories }) => {
  return (
    <div className="flex justify-center bg-gray-200">
      <div className="max-w-screen ml-2 mr-2 flex flex-col min-h-screen w-full">
        {/* <CategoryButtons categories={categories}/> */}
        <div className="flex-grow"  key={categories.id}>{children} </div>
        <RunningText />
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
      />
    </div>
  )
}

export default Layout
