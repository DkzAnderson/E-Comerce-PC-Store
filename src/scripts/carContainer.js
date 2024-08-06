let carContainer = {
    items : [],

    AddItem(item){
        this.items.push(item);
    },

    RemoveItem(item){

        const newItems = this.items.filter(items => items !== item);

        console.log(newItems);
    },

    RefreshItems(items){
        this.items = items;
    }

}


export default carContainer;