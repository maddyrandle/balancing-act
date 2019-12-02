var closeIcon = document.querySelector(".close-icon");
var walletIcon = document.querySelector(".wallet");
var mainContainer = document.querySelector(".main-container");
var mainHeading = document.querySelector("#main-heading");
var walletContainer = document.querySelector(".wallet-container");

closeIcon.addEventListener("click", removeBanner);
walletIcon.addEventListener("click", displayTransactionsPage);




function removeBanner() {
  if (event.target.classList.contains("close-icon")) {
    event.target.parentElement.remove();
  }
}

function hideMainContent() {
  mainContainer.classList.add("hidden");
  mainHeading.classList.add("hidden");
}

function displayTransactionsPage() {
  hideMainContent();
  showWallet();
}


function showWallet() {
  var walletPageHtml = `
    <section class="wallet-user-summary">
      <div class="transactions-page-header">
        <h1 class="transactions-page-title">Transactions</h1>
        <button class="transaction-btns all" type="button" name="button">ALL</button>
        <button class="transaction-btns inflow" type="button" name="button">INFLOW</button>
        <button class="transaction-btns outflow" type="button" name="button">OUTFLOW</button>
      </div>
      <section class="transaction-page-container">
        <div class="transaction-page-leftside">
          <p class="far-left">Date</p>
          <p class="middle-left">Payee</p>
          <p class="middle-right">Inflow</p>
          <p class="far-right">Outflow</p>
        </div>
      </section>
    </section>
    <form class="wallet-recent-transactions">
      <fieldset>
        <h1 class="new-transaction">New Transaction</h1>
      <div class="guts">
        <label for="">Type of Transaction:</label>
        <select class="drop-down">
          <option class="drop-down-text" value="">Expense</option>
          <option value=""></option>
        </select>
        <label for="">Category:</label>
        <select class="drop-down">
          <option value="">- Select One -</option>
          <option value=""></option>
        </select>
        <label for="">Account From:</label>
        <select class="drop-down">
          <option value="">- Select One -</option>
          <option value=""></option>
        </select>
        <label for="">Payee:</label>
        <input class="input-box" type="text" name="" value="">
        <label for="">Outflow:</label>
        <input class="input-box" type="text" name="" value="">
        <label for="">Inflow:</label>
        <input class="input-box" type="text" name="" value="">
      </div>
      <button class="expense-btn" type="button" name="button">Log Expense</button>
      </fieldset>
    </form>
  `;
      walletContainer.insertAdjacentHTML("afterbegin", walletPageHtml);
}
