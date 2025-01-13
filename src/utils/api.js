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

  console.log("Backend response:", result);

  // Validate and extract probability_class_1
  if (result && typeof result.probability_class_1 === "number") {
    const probabilityOfClass1 = result.probability_class_1;
    console.log("Probability of class 1:", probabilityOfClass1);
    return (probabilityOfClass1 * 100).toFixed(2); // Convert to percentage
  } else {
    console.error("Error: Unexpected response format", result);
    throw new Error("Unexpected response format: " + JSON.stringify(result));
  }
};