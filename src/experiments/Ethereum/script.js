const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const installation = document.querySelector('.installation');

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  showAccount.innerHTML = account;
}

if(ethereum == 'undefined')
{
  installation.innerHTML = 'No'
}
else{
  installation.innerHTML = 'Yes'
}