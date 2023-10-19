export default function FAQ() {
  return (
    <div className="section-padding">
      <h1 className="section-heading">Frequently Asked Question</h1>
      <div className="max-w-2xl mx-auto">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            How do I book a hotel or accommodation?
          </div>
          <div className="collapse-content">
            <p>
              Booking a hotel or accommodation is easy on our website. Simply
              enter your destination, check-in and check-out dates, and the
              number of guests. Then, browse through the available options,
              select your preferred one, and follow the booking instructions.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            How can I cancel or modify my booking?
          </div>
          <div className="collapse-content">
            <p>
              To cancel or modify your booking, visit the My Reservations
              section on our website and follow the provided instructions.
              Please review the cancellation policy of your booking for any
              applicable fees.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            How do I get from the airport to my hotel?
          </div>
          <div className="collapse-content">
            <p>
              We recommend using [Transportation Option] for airport transfers.
              You can pre-book it on our website or find transportation options
              at the airport upon arrival.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-200"
        >
          <div className="collapse-title text-xl font-medium">
            What travel documents do I need for international travel?
          </div>
          <div className="collapse-content">
            <p>
              The required travel documents vary by country. Please check our
              Travel Documents section for information on passports, visas, and
              any other necessary documents for your destination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
