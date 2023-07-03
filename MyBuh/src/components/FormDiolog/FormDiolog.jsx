import React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { changeOrganization } from "../../redux/orgSlice";
import "./css/form-diolog.css";

const FormDiolog = ({
  form,
  type,
  taxSystems,
  defValue,
  orgTaxId,
  defName,
  id,
}) => {
  const [checkBox1, setCheckBox1] = useState(true);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);
  const [defValueState, setDefValue] = useState(defValue);
  const [defNameStat, setDefNameStat] = useState(defName);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
    console.log("oprn");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const checkFirst = () => {
    setCheckBox1(true);
    setCheckBox2(false);
    setCheckBox3(false);
  };
  const checkSecond = () => {
    setCheckBox1(false);
    setCheckBox2(true);
    setCheckBox3(false);
  };
  const checkThree = () => {
    setCheckBox1(false);
    setCheckBox2(false);
    setCheckBox3(true);
  };

  return (
    <React.Fragment>
      <button className="card-set-edit" onClick={() => handleClickOpen()}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.6604 1.5291L19.9863 2.20331L21.7827 3.9861L22.4707 3.30148H22.4672L22.4916 3.27715C22.4985 3.25978 22.5055 3.23892 22.5055 3.22154C22.5055 3.19722 22.495 3.16942 22.4742 3.14857H22.4707L22.3943 3.06516L20.8446 1.5291C20.8237 1.51173 20.789 1.49783 20.7542 1.49783V1.49435C20.7195 1.49435 20.6847 1.50478 20.6604 1.5291ZM13.3323 0.156386C13.7458 0.156386 14.0828 0.490009 14.0828 0.903562C14.0828 1.32059 13.7458 1.65422 13.3323 1.65422H3.5685C2.99865 1.65422 2.48092 1.88705 2.10913 2.2589C1.73387 2.63423 1.50107 3.15204 1.50107 3.72545V20.4344C1.50107 21.0009 1.73387 21.5187 2.10913 21.894L2.14388 21.9288C2.51219 22.2832 3.01602 22.5022 3.5685 22.5022H20.2782C20.8446 22.5022 21.3623 22.2693 21.7341 21.894C22.1093 21.5187 22.3421 21.0009 22.3421 20.4344V10.669C22.3421 10.2554 22.6792 9.91833 23.0927 9.91833C23.5062 9.91833 23.8432 10.2554 23.8432 10.669V20.4344C23.8432 21.4144 23.4436 22.3076 22.7973 22.9539C22.151 23.6003 21.258 24 20.2782 24H3.5685C2.61296 24 1.74081 23.6177 1.098 22.9991L1.04936 22.9539C0.403069 22.3076 0 21.4144 0 20.4344V3.72545C0 2.74544 0.403069 1.8523 1.04936 1.20591C1.69565 0.556036 2.58864 0.156386 3.5685 0.156386H13.3323ZM19.6076 0.469157L17.8633 2.20331L21.7827 6.09557L23.527 4.36142C24.1594 3.73241 24.1559 2.70722 23.527 2.08167L21.9009 0.469157C21.2685 -0.156386 20.2365 -0.156386 19.6076 0.469157ZM6.02161 13.9878L17.0989 2.96438L21.0183 6.85665L9.94104 17.8801L4.66302 19.2841L6.02161 13.9878ZM17.0989 5.07385L7.36284 14.7628L6.74434 17.1816L9.17313 16.5352L18.8953 6.85665L17.0989 5.07385Z"
            fill="#005DA1"
          />
        </svg>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <button onClick={() => console.log(defName)}>123</button>
        <DialogContent>
          <p>Редактировать данные организации</p>
          <Tabs
            defaultActiveKey={
              type == "too" ? "too" : type == "ip" ? "ip" : "others"
            }
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="too" title="ТОО">
              <Form
                onSubmit={(e) => {
                  e.preventDefault(false);
                }}
              >
                <Form.Label>Выберите систему налогообложения</Form.Label>
                <Form.Select aria-label="Default select example">
                  {taxSystems.map((tax) => {
                    return orgTaxId == tax.id ? (
                      <option key={tax.id} value={tax.id} selected>
                        {tax.full}
                      </option>
                    ) : (
                      <option key={tax.id} value={tax.id}>
                        {tax.full}
                      </option>
                    );
                  })}
                </Form.Select>
                <Form.Group className="mb-3" controlId="bin">
                  <Form.Label style={{ marginTop: "20px" }}>
                    Введите ИИН/БИН
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите ИИН/БИН"
                    value={defValueState}
                    onChange={(e) => setDefValue(e.target.value)}
                    maxLength="12"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="bin">
                  <Form.Label>Введите название компании</Form.Label>
                  <Form.Label
                    style={{
                      position: "absolute",
                      bottom: "85px",
                      left: "26px",
                      marginBottom: "0",
                      padding: "6px",
                      borderRight: "1px solid #ced4da",
                    }}
                  >
                    ТОО
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите название"
                    style={{ paddingLeft: "50px" }}
                    value={defNameStat}
                    onChange={(e) => setDefNameStat(e.target.value)}
                  />
                </Form.Group>
                <button
                  className="form-button"
                  onClick={() =>
                    dispatch(
                      changeOrganization({
                        id,
                        company_name: defNameStat,
                        company_tin: defValueState,
                      })
                    )
                  }
                >
                  Сохранить
                </button>
              </Form>
            </Tab>
            <Tab eventKey="ip" title="ИП">
              <Form onSubmit={() => console.log("lol")}>
                <Form.Label>Выберите систему налогообложения</Form.Label>
                <Form.Select aria-label="Default select example">
                  {taxSystems.map((tax) => {
                    return orgTaxId == tax.id ? (
                      <option key={tax.id} value={tax.id} selected>
                        {tax.full}
                      </option>
                    ) : (
                      <option key={tax.id} value={tax.id}>
                        {tax.full}
                      </option>
                    );
                  })}
                </Form.Select>
                <Form.Group className="mb-3" controlId="ip">
                  <Form.Label style={{ marginTop: "20px" }}>
                    Введите ИИН/БИН
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите ИИН/БИН"
                    value={defValueState}
                    onChange={(e) => setDefValue(e.target.value)}
                    maxLength="12"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ip">
                  <Form.Label>Введите название компании</Form.Label>
                  <Form.Label
                    style={{
                      position: "absolute",
                      bottom: "85px",
                      left: "26px",
                      marginBottom: "0",
                      padding: "6px",
                      borderRight: "1px solid #ced4da",
                    }}
                  >
                    ИП
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите название"
                    style={{ paddingLeft: "50px" }}
                    value={defNameStat}
                    onChange={(e) => setDefNameStat(e.target.value)}
                  />
                </Form.Group>
                <button
                  className="form-button"
                  onClick={() =>
                    dispatch(
                      changeOrganization({
                        id,
                        company_name: defNameStat,
                      })
                    )
                  }
                >
                  Сохранить
                </button>
              </Form>
            </Tab>
            <Tab eventKey="others" title="Прочие">
              <Form onSubmit={() => console.log("lol")}>
                <Form.Group>
                  <Form.Check
                    checked={checkBox1}
                    label="Юридические лица"
                    type="radio"
                    name="group1"
                    id="check1"
                    onChange={() => checkFirst()}
                  />
                  <Form.Check
                    checked={checkBox2}
                    label="Частная практика"
                    type="radio"
                    name="group1"
                    id="check2"
                    onChange={() => checkSecond()}
                  />
                  <Form.Check
                    checked={checkBox3}
                    label="Физические лица"
                    type="radio"
                    name="group1"
                    id="check3"
                    onChange={() => checkThree()}
                  />
                </Form.Group>
                {checkBox1 ? (
                  <div>
                    <Form.Label>Выберите систему налогообложения</Form.Label>
                    <Form.Select aria-label="Default select example">
                      {taxSystems.map((tax) => {
                        return orgTaxId == tax.id ? (
                          <option key={tax.id} value={tax.id} selected>
                            {tax.full}
                          </option>
                        ) : (
                          <option key={tax.id} value={tax.id}>
                            {tax.full}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </div>
                ) : (
                  <div></div>
                )}
                <Form.Group className="mb-3" controlId="other">
                  <Form.Label style={{ marginTop: "20px" }}>
                    Введите ИИН/БИН
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите ИИН/БИН"
                    value={defValueState}
                    onChange={(e) => setDefValue(e.target.value)}
                    maxLength="12"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ip">
                  <Form.Label>Введите название компании</Form.Label>
                  <Form.Label
                    style={{
                      position: "absolute",
                      bottom: "85px",
                      left: "26px",
                      marginBottom: "0",
                      padding: "6px",
                      borderRight: "1px solid #ced4da",
                    }}
                  >
                    {checkBox1 || checkBox2 ? "ЮЛ" : "ФЛ"}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Введите название"
                    style={{ paddingLeft: "50px" }}
                    value={defNameStat}
                    onChange={(e) => setDefNameStat(e.target.value)}
                  />
                </Form.Group>
                <button
                  className="form-button"
                  onClick={() =>
                    dispatch(
                      changeOrganization({
                        id,
                        company_name: defNameStat,
                      })
                    )
                  }
                >
                  Сохранить
                </button>
              </Form>
            </Tab>
          </Tabs>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default FormDiolog;
