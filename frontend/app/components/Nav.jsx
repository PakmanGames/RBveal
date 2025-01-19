const Nav = ({ name }) => {
  console.log(name)
  return (
    <>
      <nav>
        <div className="flex justify-center">
          <section className="flex justify-between p-6 w-3/5">
            <img src="rbc_logo.svg" alt="logo" className="w-36" />
            <div className="space-x-12">
              <a
                href=""
                className="text-blue-500 py-4 px-8 border-2 border-blue-500"
              >
                {name ? `Welcome, ${name}` : "Signed In"}
              </a>
              <a href="" className="text-black bg-yellow-300 py-4 px-8">
                Sign Out
              </a>
            </div>
          </section>
        </div>

        <section className="bg-rbcblue flex justify-center ">
          <div className="flex justify-between p-3 w-3/5 text-white">
            <div className="space-x-8">
              <a href="">Products & Services</a>
              <a href="">My Accounts</a>
              <a href="">Help Centre</a>
            </div>
            <h1>January 19, 2025</h1>
          </div>
        </section>

        <section className="bg-rbcgray flex justify-center">
          <div className="flex justify-between p-3 w-3/5 text-black">
            {" "}
            <div className="space-x-8">
              <a href="">Accounts Summary</a>
              <a href="">Profile & Account Settings</a>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};
export default Nav;
