// Classe pour le produit
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Classe pour un élément du panier d'achat
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Méthode pour calculer le prix total de l'élément
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Classe pour le panier d'achat
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Méthode pour ajouter des éléments au panier
    addItem(product, quantity) {
        const item = new ShoppingCartItem(product, quantity);
        this.items.push(item);
    }

    // Méthode pour supprimer un élément du panier
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Méthode pour obtenir le total des éléments dans le panier
    getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Méthode pour afficher les éléments du panier
    displayItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name} - Quantité: ${item.quantity} - Prix total: ${item.getTotalPrice()}`);
        });
    }
}

// Tests de la capacité de nos objets

// Créer des produits
const apple = new Product(1, "Pomme", 0.5);
const banana = new Product(2, "Banane", 0.3);
const orange = new Product(3, "Orange", 0.8);

// Créer un panier d'achat
const cart = new ShoppingCart();

// Ajouter des éléments au panier
cart.addItem(apple, 3);   // 3 pommes
cart.addItem(banana, 5);  // 5 bananes
cart.addItem(orange, 2);   // 2 oranges

// Afficher le panier
console.log("Éléments dans le panier :");
cart.displayItems();
console.log(`Total du panier : ${cart.getTotal()} €`);

// Supprimer un élément du panier (banane)
cart.removeItem(2); // Supprimer les bananes

// Afficher le panier après suppression
console.log("\nÉléments dans le panier après suppression :");
cart.displayItems();
console.log(`Total du panier après suppression : ${cart.getTotal()} €`);