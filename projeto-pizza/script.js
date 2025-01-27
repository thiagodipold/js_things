const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);
let cart = [];
let modalQt = 1;
let modalKey = 0;
let size = '';
//listagem das pizzas
pizzaJson.map((item, index)=>{
	let pizzaItem = c('.models .pizza-item').cloneNode(true);
	//preencher as infos em pizzaitem

	pizzaItem.setAttribute('data-key', index);
	pizzaItem.querySelector('.pizza-item--img img').src = item.img;
	pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$: ${item.price.toFixed(2)}`;
	pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
	pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
	pizzaItem.querySelector('a').addEventListener('click', (e)=>{
		e.preventDefault();
		console.log("clicou na pizza");
		let key = e.target.closest('.pizza-item').getAttribute('data-key');
		modalQt = 1;
		modalKey = key;

		c('.pizzaBig img').src = pizzaJson[key].img;
		c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
		c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
		c('.pizzaInfo--actualPrice').innerHTML = `R$: ${pizzaJson[key].price.toFixed(2)}`;
		c('.pizzaInfo--size.selected').classList.remove('selected');
		cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
			if(sizeIndex == 2){
				size.classList.add('selected'); // adiciona o selected na pizza grande
			}
			size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
		})
		//console.log(pizzaJson[key]);
		c('.pizzaInfo--qt').innerHTML = modalQt;

		c('.pizzaWindowArea').style.opacity = 0;
		c('.pizzaWindowArea').style.display = 'flex';
		setTimeout(()=>{
			c('.pizzaWindowArea').style.opacity = 1;
		}, 200);



	});
	c('.pizza-area').append(pizzaItem);

});

//eventos do modal
function closeModal() {
	c('.pizzaWindowArea').style.opacity = 0;
	setTimeout(()=>{
		c('.pizzaWindowArea').style.display = 'none';
	}, 500)
};

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
	item.addEventListener('click', closeModal);
});

c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
	if(modalQt>1){ //verificacao trava para nao conseguirem remover outra pizza
		modalQt--;
		c('.pizzaInfo--qt').innerHTML = modalQt;
	}
	
});

c('.pizzaInfo--qtmais').addEventListener('click', ()=>{
	modalQt++;
	c('.pizzaInfo--qt').innerHTML = modalQt;
});

cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
	size.addEventListener('click',(e)=>{
		c('.pizzaInfo--size.selected').classList.remove('selected');
		size.classList.add('selected');
	});
});

c('.pizzaInfo--addButton').addEventListener('click',()=>{
	//qual a pizza?
	//console.log(`A pizza é ${modalKey}`);
	//qual tamanho?
	size = parseInt(c('.pizzaInfo--size.selected').getAttribute('data-key'));
	//console.log(`O tamanho é ${size}`);
	//quantas pizzas?
	//console.log(`Quantidade ${modalQt}`);
	let identifier = pizzaJson[modalKey].id+'@'+size;
	let key = cart.findIndex( (item) => item.identifier == identifier);

	if(key > -1){
		cart[key].qt += modalQt;
	} else{
		cart.push({
			identifier,
			id: pizzaJson[modalKey].id,
			size: size,
			qt: modalQt
		});
	}

	updateCart()
	closeModal();
});

c('.menu-openner').addEventListener('click', ()=>{
	if(cart.length > 0){
		c('aside').style.left = '0';
	}
});

c('.menu-closer').addEventListener('click', ()=>{
	c('aside').style.left = '100vw';
});

function updateCart() {
	c('.menu-openner span').innerHTML = cart.length;
	if(cart.length > 0){
		c('aside').classList.add('show');
		c('.cart').innerHTML = ''; // zera toda vez que da update para nao duplicar

		let subtotal = 0;
		let desconto = 0;
		let total = 0;
		for(let i in cart){
			let pizzaItem = pizzaJson.find( (item)=> item.id == cart[i].id);
			subtotal += pizzaItem.price * cart[i].qt;
			//console.log(pizzaItem);
			let cartItem = c('.models .cart--item').cloneNode(true);
			cartItem.querySelector('img').src = pizzaItem.img;
			cartItem.querySelector('.cart--item-nome').innerHTML = `${pizzaItem.name} ${pizzaItem.sizes[cart[i].size]}`;
			cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
			cartItem.querySelector('.cart--item-qtmais').addEventListener('click', ()=>{
				cart[i].qt++;
				updateCart();
			});
			cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', ()=>{
				if(cart[i].qt > 1){
					cart[i].qt--;
				} else {
					cart.splice(i, 1);
				}
				updateCart();
			})
			c('.cart').append(cartItem);

			desconto = subtotal * 0.1; // 10% de desconto
			total = subtotal - desconto;

			c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
			c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
			c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;
		}	
	} else{
		c('aside').classList.remove('show');
		c('aside').style.left = '100vw';
	}
}