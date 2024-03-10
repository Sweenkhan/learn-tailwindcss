import "./App.css";

function App() {
  return (
    <div className="bg-black text-white flex items-center justify-center pt-6">
      <div className="cards flex justify-center items-center max-w-2xl flex-wrap gap-4">
        <div className="flex items-center content-center flex-col  border border-white p-5 max-w-xs rounded-2xl pb-1 border-dotted">
          <div>
            <img
              className=""
              width="60px"
              src="https://i.pinimg.com/564x/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.jpg"
              alt="just-for-checking"
            />
          </div>
          <div className="text-center">
            <h2 className="font-bold py-2 text-xl">1.Flipkart</h2>
            <p>
              Flipkar is an E-Commerce website. where user can find out what
              they want to buy
            </p>
          </div>
          <button className="bg-sky-500 w-full rounded mt-2 hover:text-black hover:bg-white font-bold md:text-slate-900">
            Click ME
          </button>
        </div>

        <div className="flex items-center content-center flex-col  border border-white p-5 max-w-xs rounded-2xl border-dotted pb-1">
          <div>
            <img
              className=""
              width="60px"
              src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
              alt="just-for-checking"
            />
          </div>
          <div className="text-center">
            <h2 className="font-bold py-2 text-xl">2.Amazon</h2>
            <p>
              Amazon is an E-Commerce website. where user can find out what they
              want to buy
            </p>
          </div>
          <button className="bg-sky-500 w-full rounded mt-2 hover:text-black hover:bg-white font-bold md:text-slate-900">
            Click ME
          </button>
        </div>

        <div className="flex items-center content-center flex-col  border border-dotted border-white p-5 max-w-xs rounded-2xl my-5 pb-1">
          <div>
            <img
              className=""
              width="60px"
              src="https://dfupublications.com/images/2022/07/02/Myntra_large.jpeg"
              alt="just-for-checking"
            />
          </div>
          <div className="text-center">
            <h2 className="font-bold py-2 text-xl">3.Myntra</h2>
            <p>
              Myntra is an E-Commerce website. where user can find out what they
              want to buy
            </p>
          </div>
          <button className="bg-sky-500 w-full rounded mt-2 hover:text-black hover:bg-white font-bold md:text-slate-900">
            Click ME
          </button>
        </div>

        <div className="flex items-center content-center flex-col  border border-white p-5 max-w-xs rounded-2xl border-dotted pb-1">
          <div>
            <img
              className=""
              width="45px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Meesho_Logo_Full.png/600px-Meesho_Logo_Full.png"
              alt="just-for-checking"
            />
          </div>
          <div className="text-center">
            <h2 className="font-bold py-2 text-xl">4.Meesho</h2>
            <p>
              Meesho is an E-Commerce website. where user can find out what they
              want to buy
            </p>
          </div>
          <button className="bg-sky-500 w-full rounded mt-2 hover:text-black hover:bg-white font-bold md:text-slate-900">
            Click ME
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
