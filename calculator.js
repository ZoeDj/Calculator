const calculateBtn = document.querySelector(".calculate-btn");

document.querySelector("form").addEventListener("submit", calculateResults);

function calculateResults(e) {
  e.preventDefault();

  const loanAmount = document.querySelector(".loan");
  const interstRate = document.querySelector(".intrest");
  const repayYears = document.querySelector(".years");
  const monthlyPayment = document.querySelector(".monthly-payment");
  const totalPayment = document.querySelector(".total-payment");
  const totalIntrest = document.querySelector(".total-intrest");

  const principal = parseFloat(loanAmount.value);
  const calculatedIntrest = parseFloat(interstRate.value) / 100 / 12;
  const calculatedPayments = parseFloat(repayYears.value) * 12;

  const x = Math.pow(1 + calculatedIntrest, calculatedPayments);
  const monthly = (principal * x * calculatedIntrest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalIntrest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    console.log("error");
  }
}
