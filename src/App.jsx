import Result from "./components/Result";
import Summary from "./components/Summary";
import Footer from "./components/Footer";
import { data } from "./data";
import "./index.css";

function summaryData(dat) {
  return (
    <>
      <Summary
        key={dat.id}
        icon={dat.icon}
        category={dat.category}
        score={dat.score}
        color={dat.color}
      />
      {/* {console.log(dat)} */}
    </>
  );
}

function App() {
  return (
    <>
      <main>
        <div>
          <Result />
          <div className="wrapper">
            <h3>Summary</h3>
            {data.map(summaryData)}
            <button className="continue">Continue</button>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
