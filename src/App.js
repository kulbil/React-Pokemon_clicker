import { useState } from 'react'
import spriteImg from "./img/assets/pokemon/pikachu.png";
import ShopButton from "./components/ShopButton.jsx";
import PokemonButton from "./components/PokemonButton.jsx";
import InventoryItem from "./components/InventoryItem";



function App() {

    const[coins, setCoins] = useState(0);
    const[purchases, setPurchases] = useState({
        pokeballs: 0,
        ultraballs: 0,
        masterballs: 0
    });

    function handleClick() {
        let totalUpgrades = 1
        totalUpgrades += (purchases.pokeballs)
        totalUpgrades += (purchases.ultraballs * 2)
        totalUpgrades += (purchases.masterballs * 5)
        setCoins(coins + totalUpgrades);
    }

    function handlePurchase(price, item) {
        if (coins >= price) {
            setCoins(coins - price)
            setPurchases((prev) => ({
                ...prev,
                [item]: prev[item] + 1
            }));
        }
    }

    const shopItems = [
        { name: "Pokeball", price: 10, amount: purchases.pokeballs, key: "pokeballs", toUnlock: "", toUnlockAmount: 0 },
        { name: "Ultraball", price: 20, amount: purchases.ultraballs, key: "ultraballs", toUnlock: purchases.pokeballs, toUnlockAmount: 3 },
        { name: "Masterballs", price: 100, amount: purchases.masterballs, key: "masterballs", toUnlock: purchases.ultraballs, toUnlockAmount: 10 }
    ]

    const inventoryItems = [
        {name: "Pokeballs", amount: purchases.pokeballs, key: "pokeballs"},
        {name: "Ultraballs", amount: purchases.ultraballs, key: "ultraballs"},
        {name: "Masterballs", amount: purchases.masterballs, key: "masterballs"}
    ]

    return (
        <div className="grid grid-cols-4 w-full min-h-screen mx-auto bg-pokemon-view">


            <div className="col-span-1">
                <div className="h-20 text-center text-3xl content-center bg-amber-500 m-4 rounded-3xl shadow-2xl">{"Coins: " + coins}</div>
                {inventoryItems.map((item) => (
                    <InventoryItem
                        name={item.name}
                        amount={item.amount}
                    />
                ))}
            </div>

            <div className="col-span-2 grid  place-items-center">
                <PokemonButton
                    handleClick={handleClick}
                    image={spriteImg}
                />

            </div>

            <div className="col-span-1">

                {shopItems.map((item) => (
                    <ShopButton
                        key={item.key}
                        name={item.name}
                        price={item.price}
                        coins={item.coins}
                        amount={item.amount}
                        toUnlock={item.toUnlock}
                        toUnlockAmount={item.toUnlockAmount}
                        onPurchase={() => handlePurchase(item.price, item.key)}
                    />
                ))}

            </div>
        </div>
    )
}

export default App;