export class Product {
  id: string = '';
  name: string = '';
  count: number | undefined;
  cost: string = '';
  price: string = '';

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.count) this.count = initializer.count;
    if (initializer.cost) this.cost = initializer.cost;
    if (initializer.price) this.price = initializer.price;
  }
}
