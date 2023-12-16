import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import {
  faBed,
  faCalendarDays,
  faCar,
  faHotel,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
export default function Search() {
  const [openCalendar, setopenCalendar] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [member, setMember] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
    open: false,
  });

  function optionHangdlerFunc(option, opration) {
    setMember((prev) => {
      return {
        ...prev,
        [option]: opration ? member[option] + 1 : member[option] - 1,
      };
    });
  }

  return (
    <div>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <b style={{fontSize: "20px"}}> Book Your Room Now:</b>
        </div>
        <div
          className="headerSearchItem"
          onClick={() =>
            openCalendar ? setopenCalendar(false) : setopenCalendar(true)
          }
        >
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span className="headerSearchText">
            {format(date[0].startDate, "dd/MM/yyyy")} to{" "}
            {format(date[0].endDate, "dd/MM/yyyy")}
          </span>
          {openCalendar ? (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          ) : null}
        </div>
        <div className="headerSearchItem">
          <div
            onClick={() => {
              setMember((prevMember) => ({
                ...prevMember,
                open: member.open ? false : true,
              }));
            }}
          >
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span className="headerSearchText" style={{ marginLeft: "10px" }}>
              {member.adult} Adults : {member.children} Children :{" "}
              {member.rooms} Rooms
            </span>
          </div>
          {member.open ? (
            <div className="memberOptions">
              <div className="memberOptionItem">
                <span className="memberOptionText">Adults</span>
                <div className="optionCounter">
                  <button
                    disabled={member.adult < 1}
                    className="memberOptionCounterBtn"
                    onClick={() => optionHangdlerFunc("adult", false)}
                  >
                    -
                  </button>
                  <span className="memberOptionCounter">{member.adult}</span>
                  <button
                    className="memberOptionCounterBtn"
                    onClick={() => optionHangdlerFunc("adult", true)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="memberOptionItem">
                <span className="memberOptionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={member.children < 1}
                    className="memberOptionCounterBtn"
                    onClick={() => optionHangdlerFunc("children", false)}
                  >
                    -
                  </button>
                  <span className="memberOptionCounter">{member.children}</span>
                  <button
                    className="memberOptionCounterBtn"
                    onClick={() => optionHangdlerFunc("children", true)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="memberOptionItem">
                <span className="memberOptionText">Rooms</span>
                <div className="optionCounter">
                  <button
                    disabled={member.rooms < 1}
                    className="memberOptionCounterBtn"
                    onClick={() => optionHangdlerFunc("rooms", false)}
                  >
                    -
                  </button>
                  <span className="memberOptionCounter">{member.rooms}</span>
                  <button
                    className="memberOptionCounterBtn"
                    onClick={() => optionHangdlerFunc("rooms", true)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="headerSearchItem">
          <Button className="headerBtn">Check</Button>
        </div>
      </div>
    </div>
  );
}
