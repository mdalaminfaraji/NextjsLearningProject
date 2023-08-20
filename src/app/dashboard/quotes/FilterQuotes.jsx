const options = [
    { value: 'all', label: 'All' },
    { value: 'new', label: 'New' },
    { value: 'today', label: 'Today' },
    { value: 'last7', label: 'Last 7 days' },
    { value: 'last30', label: 'Last 30 days' },
  ];

const FilterQuotes = () => {
    return (
        <select >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    );
};

export default FilterQuotes;