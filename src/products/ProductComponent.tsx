import * as React from "react";
import ProductInterface from "./ProductInterface";
export default class ProductComponent extends React.Component<ProductInterface, {}> {
  constructor (props: ProductInterface){
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Product Component</h1>
        You have <b>{this.props.count}</b> packets of <b>{this.props.name}</b>
        <br/>
        They cost you <b>${this.props.count * +this.props.cost}</b> and would be worth <b>${this.props.count * +this.props.price}</b>.
      </div>
    )
  }
}
