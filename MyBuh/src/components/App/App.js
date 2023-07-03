import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchOrg } from "../../redux/orgSlice";
import { fetchOwn } from "../../redux/ownshipSlice";
import OrganizationList from "../OrganizationList/OrganizationList";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispath = useDispatch();
  const org = useSelector((state) => state.organization.organization);
  const ownship = useSelector((state) => state.ownship.ownships);
  const taxSystems = useSelector((state) => state.taxSystem.taxSystems);

  useEffect(() => {
    dispath(fetchOrg());
    dispath(fetchOwn());
  }, [dispath]);

  return (
    <Container fluid="md">
      <div className="App">
        <p className="app-title"> Мои организации</p>
        <OrganizationList organization={org} ownships={ownship} />
      </div>
    </Container>
  );
}

export default App;
