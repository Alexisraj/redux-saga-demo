/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./content.css";

const Details = (props) => {
  return (
    <div>
      <a className="close" href="#" onClick={() => props.onClose()}>
        <img src="./close.png" alt="close" />
      </a>
      <div>
        <h4 className="Header">The detailed Report for {props.book.title}</h4>
        <div className="tableSection">
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-2fdn">Day</th>
                <th className="tg-0lax">
                  <span>{props.selectedDay}</span>
                </th>
                <th className="tg-0lax" colSpan="2">
                  <i className={`wi ${props.selectedWeatherIcon} display-4`} />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0lax">Max</td>
                <td className="tg-0lax">
                  <span>{props.selectedDayMax}&deg;</span>
                </td>
                <td className="tg-0lax">Min</td>
                <td className="tg-0lax">
                  <span>{props.selectedDayMin}&deg;</span>
                </td>
              </tr>
              <tr>
                <td className="tg-0lax" colSpan="2">
                  Weather
                </td>
                <td className="tg-0lax" colSpan="2">
                  <span>{props.selectedWeatherType}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Details;
