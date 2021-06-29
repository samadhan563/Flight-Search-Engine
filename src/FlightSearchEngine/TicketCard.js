import React from 'react';

function TicketCard(props) {
  const { filteredData, passengerCount } = props;

  return (
    <>
      {filteredData.map((data, i) => {
        return (
          <div className="card mb-4" id="ticket_card" key={i}>
            <div className="card-body">
              <div style={{ display: 'flex' }}>
                <div
                  style={{width: '100%', fontSize: '13px', display: 'flex', lineHeight: '1.5rem'}}>
                  <div>
                    <div style={{ marginBottom: '6px', display: 'flex',justifyContent: 'space-between', }}>
                      <span>
                        <h4>₹ {data.price * passengerCount}</h4>
                      </span>
                      <span style={{ fontSize: '11px' }}>
                        <b>{passengerCount} P</b>
                      </span>
                    </div>
                    <div>
                      <h5>
                        {data.from.short} {'>>'} {data.to.short}
                      </h5>
                    </div>
                    <div>{data.code}</div>
                    <div><b>Depart:</b> {data.departTime}</div>
                    <div><b>Arrive:</b> {data.arrivalTime}</div>
                  </div>
                </div>
                <div
                  style={{ display: 'flex', alignItems: 'center',  width: '40%',  flexDirection: 'column', }} >
                  <div style={{ height: '100px', width: '140px' }}>
                    <img
                      src={data.flightImg}
                      alt="flight_img"
                      style={{ height: '100%', width: '100%' }}
                    />
                  </div>
                  <div>
                    <button type="button" className="btn btn-info"> <b>Book</b> </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default TicketCard;