const App = () => {
  const handleBuy = (item) => {
    alert(`You have purchased a ${item}!`);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <div>your best shopping hub with lowest price</div>
      <h1>Marketplace</h1>
      <div>
        <button
          style={{ margin: "10px", padding: "10px 20px" }}
          onClick={() => handleBuy("Car")}
        >
          Buy Car
        </button>
        <button
          style={{ margin: "10px", padding: "10px 20px" }}
          onClick={() => handleBuy("Bike")}
        >
          Buy Bike
        </button>
        <button
          style={{ margin: "10px", padding: "10px 20px" }}
          onClick={() => handleBuy("Vegetables")}
        >
          Buy Vegetables
        </button>
      </div>
    </div>
  );
};

export default App;
