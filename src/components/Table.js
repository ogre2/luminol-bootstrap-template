import React from "react";
import bootstrap from "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const Table = () => {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
  const toolTips = {
    customFields:
      "Custom fields allow you to record additional information unique to your contacts, cases or sales opportunities.",
    activityReporting:
      "Shows activities completed by each user and the specific activity types.",
    twoFactorAuth:
      "Add an extra layer of security to your Capsule Account using your mobile device.",
    apiAccess:
      "Use Capsule's API to integrate with your custom or third party application.",
  };

  return (
    <table className="table features-table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col" className="table-text-center">
            Others
          </th>
          <th scope="col" className="table-text-center">
            Luminol
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row" className="w-100">
            Storage
          </th>
          <td className="table-text-center">
            <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
          </td>
          <td className="table-text-center">
            <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
          </td>
        </tr>

        <tr>
          <th scope="row" className="w-100">
            Custom Fields
            <i
              className="bi bi-info-circle text-muted small ms-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={toolTips.customFields}
            ></i>
          </th>
          <td className="table-text-center">
            <i className="bi bi-x-lg fs-18 text-muted"></i>
          </td>
          <td className="table-text-center">
            <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
          </td>
        </tr>

        <tr>
          <th scope="row" className="w-100">
            Task Management
          </th>
          <td className="table-text-center">
            <i className="bi bi-x-lg fs-18 text-muted"></i>
          </td>
          <td className="table-text-center">
            <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
          </td>
        </tr>

        <tr>
          <th scope="row" className="w-100">
            Activity Reporting
            <i
              className="bi bi-info-circle text-muted small ms-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={toolTips.activityReporting}
            ></i>
          </th>
          <td className="table-text-center">
            <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
          </td>
          <td className="table-text-center">
            <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
          </td>
        </tr>

        <tr>
          <th scope="row" className="w-100">
            Two-Factor Authentication
            <i
              className="bi bi-info-circle text-muted small ms-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={toolTips.twoFactorAuth}
            ></i>
          </th>
          <td className="table-text-center">
            <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
          </td>
          <td className="table-text-center">
            <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
          </td>
        </tr>

        <tr>
          <th scope="row" className="w-100">
            API Access
            <i
              className="bi bi-info-circle text-muted small ms-1"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={toolTips.apiAccess}
            ></i>
          </th>
          <td className="table-text-center">
            <i className="bi bi-x-lg fs-18 text-muted"></i>
          </td>
          <td className="table-text-center">
            <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
          </td>
        </tr>

        <tr>
          <th scope="row" className="w-100">
            Implementation Support
          </th>
          <td className="table-text-center">
            <i className="bi bi-x-lg fs-18 text-muted"></i>
          </td>
          <td className="table-text-center">
            <i className="bi bi-check2 fs-24 text-primary d-flex align-self-start justify-content-center"></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
