let url = " https://economia.awesomeapi.com.br/last/USD-BRL";

fetch(url)
	.then((res) => {
		return res.json();
	})
	.then((dados) => {
		return (dollar = +dados.USDBRL.high);
	});

function converter() {
	let dolar = +document.querySelector("input").value;
	let calcReais = dolar * dollar;
    let dolarsinho= dolar.toLocaleString("en-us", {
		style: "currency",
		currency: "USD",
	});
	let real = calcReais.toLocaleString("pt-br", {
		style: "currency",
		currency: "BRL",
	});

	let h1 = document.querySelector("body");
	h1.innerHTML += `Este  é o resultado de ${dolarsinho}dólares convertidos em reais, ${real} reais`;
}
