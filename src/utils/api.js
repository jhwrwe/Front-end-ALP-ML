export const classifyData = async (features) => {
    console.log("Sending features to backend:", features); // Log the features before sending
  
    const response = await fetch("http://localhost:5000/classify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ features }),
    });
  
    const result = await response.json();
  
    console.log("Backend response:", result); // Log the response from the backend
  
    if (result.prediction) {
      console.log("Prediction:", result.prediction);
      return result.prediction;
    } else {
      console.error("Error:", result.error);
      throw new Error(result.error);
    }
  };  