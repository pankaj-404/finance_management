import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"

const Home = async () => {
  const loggedIn = {firstName: "Pankaj"}

  return (
    <section className="home">
      <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn.firstName || 'Guest'}
              subtext="Access and manage your accounts and transactions"
            />
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={10000}
            />
          </header>
      </div>

      
    </section>
  )
}

export default Home