import './App.css'
import  {PricingCard}  from './TASK1/PricingCard'
import Dashboard from './TASK3/Dashboard'

function App() {

  return (
    <div className="flex gap-6 justify-center items-start">
      <PricingCard
        plan="Free"
        price="0"
        features={["100 MB Storage", "2 Users", "Basic Support"]}
      />
      <PricingCard
        plan="Pro"
        price="10"
        features={["1 GB Storage", "10 Users", "Priority Support"]}
      />
      <PricingCard
        plan="Enterprise"
        price="100"
        features={["10 GB Storage", "100 Users", "Priority Support"]}
      />
      {/* <Dashboard /> */}
    </div>
  )
}

export default App
