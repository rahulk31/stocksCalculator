const initialPrice = document.querySelector('#initial-price');
const quantity = document.querySelector('#quantity');
const currentPrice = document.querySelector('#current-price');
const btn = document.querySelector('.btn');
const message = document.querySelector('.message');

const calculateProfitLoss = (initialPrice, quantity, currentPrice) => {
    console.log(initialPrice, quantity, currentPrice);
    if(currentPrice >= initialPrice) {
        let per = (((currentPrice - initialPrice) * 100) / initialPrice).toFixed(2);
        return [per, true];
    } 
    else {
        let per = (((initialPrice - currentPrice) * 100) / initialPrice).toFixed(2);
        return [per, false];
    }
}

const clickHandler = () => {
    if(initialPrice.value && quantity.value && currentPrice.value) {
        console.log(initialPrice.value, quantity.value, currentPrice.value)
        const [percentage, bool] = calculateProfitLoss(Number(initialPrice.value), Number(quantity.value), Number(currentPrice.value));

        console.log(bool)
        bool === true ? (message.innerText = `You have a PROFIT of ${percentage}%`) : (message.innerText = `You have a LOSS of ${percentage}%`)
        
    }
    else {
        message.innerText = 'Please fill valid details.🧐'
    }
}


btn.addEventListener('click', clickHandler);
