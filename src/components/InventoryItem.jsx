import React from 'react';

function InventoryItem( { name, amount} ) {
    return (
        <div className={`${amount < 1 ? "hidden" : "h-16 text-center content-center bg-white bg-opacity-50 m-4 rounded-3xl shadow-2xl"}`}>
            {name + ": " + amount}
        </div>
    )
}

export default InventoryItem;