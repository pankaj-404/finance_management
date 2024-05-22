import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import { getLoggedInUser } from "@/lib/actions/user.actions"

const Home = async () => {
  const loggedIn = await getLoggedInUser()

  return (
    <section className="home">
      <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.name || 'Guest'}
              subtext="Access and manage your accounts and transactions"
            />
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={10000}
            />
          </header>
          Recent Transactions
      </div>
      {/* @ts-ignore */}
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 4352.70},{ currentBalance: 9485.10}]} />
    </section>
  )
}

export default Home