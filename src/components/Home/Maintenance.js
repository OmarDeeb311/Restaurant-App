export default function Maintenance() {
  return (
    <div className="maintenance pt-5 pb-5 ">
      <h3 className="main-title m-0 border border-3 m-auto mb-5 p-2 text-center position-relative border-black text-uppercase z-1">
        Maintenance
      </h3>
      <div className="container d-flex justify-content-center ">
        <table border={1} className="w-100">
          <thead>
            <tr>
              <th className="text-center pt-2 pb-2 fst-italic ">
                Date of Maintenance
              </th>
              <th className="text-center pt-2 pb-2 fst-italic ">
                Impact on Restaurant
              </th>
              <th className="text-center pt-2 pb-2 fst-italic ">
                Cost of Maintenance
              </th>
            </tr>
          </thead>
          <tbody>
            <Maint
              Date={"12/11/2023"}
              Impact={"Complete Shutdown"}
              Cost={250}
            />
            <Maint Date={"29/11/2023"} Impact={"Partial Shutdown"} Cost={100} />
            <Maint Date={"15/12/2023"} Impact={"Partial Shutdown"} Cost={70} />
            <Maint Date={"20/12/2023"} Impact={"Normal Operations"} Cost={30} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Maint({ Date, Impact, Cost }) {
  return (
    <tr>
      <td className="text-center pt-2 pb-2 fs-5 fw-semibold">{Date}</td>
      <td className="text-center pt-2 pb-2 fs-5 fw-semibold"> {Impact} </td>
      <td className="text-center pt-2 pb-2 fs-5 fw-semibold text-danger">
        ${Cost}
      </td>
    </tr>
  );
}
