

const QuotesList = ({AllQuotes}) => {
    return (
        <table>
        <thead>
          <tr>
            <th>QID</th>
            <th>Requested</th>
            <th>Customer Info</th>
            <th>Requested Services</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {AllQuotes.map((quotes) => (
            <tr key={quotes.id}>
             <td>{quotes.id}</td>
             <td>{quotes.requested}</td>
             <td>{quotes.customerInfo}</td>
             <td>{quotes.requestedServices}</td>
             <td>{quotes.address}</td>
             <td>{quotes.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

export default QuotesList;