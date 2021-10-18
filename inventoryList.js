const inventoryList = () => {
    let items = ["Shirt", "Jeans"];
    // let items = [];
    const add = (val) => {
        const filterItem = items.includes(val);
        if (!val){
            console.log("No Items");
        } else if(items.length === 0 || !filterItem){
            items.push(val);
            console.log(items, "added item");
            console.log(filterItem);
            return items;
        } else if (filterItem){
            console.log(`${val} names already added!`);
        }
    }
    const remove = (val) => {
        const filterItem = items.includes(val);
        if(items.length > 0 && filterItem){
            items = items.filter(item => item !== val)
            console.log(items, "remove item")
            console.log(filterItem)
            return items;
        } else {
            console.log("No Items");
        }
    }
    const getList = () => {
        return items;
    }

    return { add, remove, getList };
}

const obj = inventoryList();
const operationCount = 1;

for(let i = 0; i <= operationCount; i++){
    const operationInfo = ["add", "Trouser"];
    if(operationInfo[0] === "add"){
        obj.add(operationInfo[1]);
    } else if (operationInfo[0] === "remove"){
        obj.remove(operationInfo[1]);
    } else if(operationInfo[0] === "getList"){
        const res = obj.getList();
        if(res.length == 0){
            console.log("No Items\n");
        } else {
            console.log(`${res.join(',')}\n`)
        }
    }
}