import Navbar from "./components/Navbar"; // Import Default Component
import { Header } from "./components/Header";
import { useState } from "react";

const App = () => {

  const [name, setName] = useState("Luis Rodriguez");

  const handleChange = () => {

  }

  return (
    <>
      {/* <!-- Navigation--> */}
      <Navbar />
      {/* <!-- Header--> */}
      <Header name={name} />
      {/* <!-- Content section 1--> */}
      <section id="scroll">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/01.jpeg" alt="..." /></div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">For those about to rock...</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Content section 2--> */}
      <section>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/02.jpeg" alt="..." /></div>
            </div>
            <div className="col-lg-6">
              <div className="p-5">
                <h2 className="display-4">We salute you!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Content section 3--> */}
      <section>
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5"><img className="img-fluid rounded-circle" src="/assets/img/03.jpeg" alt="..." /></div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">Let there be rock!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="py-5 bg-black">
        <div className="container px-5"><p className="m-0 text-center text-white small">Copyright &copy; Your Website 2022</p></div>
      </footer>
    </>
  )
}

export default App;
