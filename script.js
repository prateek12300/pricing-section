const billingToggle = document.getElementById("billing-toggle");
const monthlyLabel = document.getElementById("monthly-label");
const yearlyLabel = document.getElementById("yearly-label");
const prices = document.querySelectorAll(".price");
const billingNotes = document.querySelectorAll(".billing-note");

function updateBilling(isYearly) {
  billingToggle.setAttribute("aria-checked", String(isYearly));
  billingToggle.setAttribute(
    "aria-label",
    isYearly ? "Switch to monthly billing" : "Switch to yearly billing"
  );

  monthlyLabel.classList.toggle("active", !isYearly);
  yearlyLabel.classList.toggle("active", isYearly);

  prices.forEach((price) => {
    const amount = isYearly ? price.dataset.yearly : price.dataset.monthly;
    const period = isYearly
      ? price.dataset.yearlyPeriod
      : price.dataset.monthlyPeriod;

    price.textContent = amount;
    price.setAttribute("aria-label", `${amount} rupees ${period}`);
  });

  billingNotes.forEach((note) => {
    note.textContent = isYearly
      ? note.dataset.yearlyNote
      : note.dataset.monthlyNote;
  });
}

billingToggle.addEventListener("click", () => {
  const isYearly = billingToggle.getAttribute("aria-checked") === "true";
  updateBilling(!isYearly);
});
