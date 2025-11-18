import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

// Default layout
import DefaultLayout from "./components/DefaultLayout"

// All pages
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"

// Budget context
import BudgetContext from "./contexts/BudgetContext"

function App() {

  {/* State budgetMode */}
  const [budgetMode, setBudgetMode] = useState(false)

  return (
    <>
      <BudgetContext.Provider value={{budgetMode, setBudgetMode}}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/ChiSiamo" element={<ChiSiamo />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Products/:id" element={<SingleProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetContext.Provider>
    </>
  )
}

export default App
