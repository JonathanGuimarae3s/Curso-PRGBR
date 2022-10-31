onload = function () {
				var pegaItem = localStorage.getItem("texto");
				let h1 = document.getElementById("texto");
				h1.innerHTML = pegaItem;
			};

			function atualiza(elemento) {
				let valorH1 = elemento.value
				console.log(valorH1);
				let h1 = document.getElementById("texto");


				var criaSecao= localStorage.setItem("texto", valorH1);
                
				let pegaItem= localStorage.getItem("texto");
				h1.innerHTML = pegaItem;
			}
			function apagar() {
				localStorage.clear("texto");
			}

			let a = { ingredientes: "pao", vezes: 3 };



			let guardaItem = localStorage.setItem("bolo", JSON.stringify(a));
            let pegaItem
            alert(guardaItem);

		
			console.log(guardaItem);

            