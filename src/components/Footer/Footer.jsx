import { MDBFooter } from "mdb-react-ui-kit";
import "./Footer.css";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted Container">
      <section className="" style={{ color: "white" }}>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <p>Company:E-Shoes</p>
              </h6>
              <p>
                This is the place where you will find the best shoes on the
                market.
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Córdoba, ARG Estrada 7566.
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                e-shoes@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 054 351 6886599
              </p>
            </div>
          </div>
        </div>
      </section>
    </MDBFooter>
  );
}
