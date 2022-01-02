import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

  return (
    <nav className="navigation">
      {/** divided into "dashdivs"  to group each link with its image for spacing*/}
      <div className="dashdiv">

        <img src="https://static.thenounproject.com/png/544-200.png" alt="" className="piecon" />
        <Link to='./Dashboard' style={{ textDecoration: 'none' }}>
          <h3 className="Dashboard1">Dashboard</h3>
        </Link>
      </div>
      <div className="dashdiv">

        <img src="https://icons-for-free.com/iconfiles/png/512/graph+graph+growth+growth+graph+line+graph+icon+icon-1320086625366433865.png" alt="" className="piecon" />
        <Link to='./Investments' style={{ textDecoration: 'none' }}  >
          <h3 className="Dashboard1">Investments</h3>
        </Link>
      </div>
      <div className="dashdiv">

        <img src="https://www.montanaoutdoor.com/wp-content/uploads/2019/09/shoot-l-or-R.png" alt="" className="piecon" />
        <Link to='./Transaction' style={{ textDecoration: 'none' }} >
          <h3 className="Dashboard1">Transactions</h3>
        </Link>
      </div>
      <div className="dashdiv">

        <img src="https://img.icons8.com/ios/452/wallet--v1.png" alt="" className="piecon" />
        <Link to='./Wallet' style={{ textDecoration: 'none' }}>
          <h3 className="Dashboard1">Wallet</h3>
        </Link>
      </div>
    </nav>
  )
}
export default Nav;