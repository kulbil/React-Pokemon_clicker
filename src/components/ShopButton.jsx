import React from 'react';

function ShopButton( {name, price, coins, amount, toUnlock, toUnlockAmount, onPurchase} ) {
    return (
        <div className={`${toUnlock < toUnlockAmount ? "hidden" : "grid grid-cols-4 items-center content-between m-1"}`}>
            <button
                className="col-span-3 h-16 text-center bg-blue-400 bg-opacity-90 m-4 rounded-3xl shadow-2xl border-blue-600 border-2 transform hover:scale-110 active:scale-100 transition-all"
                onClick={onPurchase}
                disabled={coins < price}
            >
                Buy {name} for {price} coins
            </button>
            <div className="text-2xl text-end font-bold pr-5">
                x{amount}
            </div>
        </div>
    )
}

export default ShopButton;