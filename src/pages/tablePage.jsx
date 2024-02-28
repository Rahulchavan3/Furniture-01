import React, { Component } from 'react';
import ProductCard from '../components/common/productCard';
import axios from 'axios'

class TablePage extends Component {
    state={
        table:[]
    }
    
    async componentDidMount() { 
        const {data} = await axios.get('https://woodworks-react.onrender.com/api/products')
        this.setState({table:data.tableProducts})
     }
    render() {
        return (
            <div className='max-width-1200 col-12 col-md-12 col-lg-10 mx-auto my-5 px-5'>
            <h1>Table Section</h1>
            <div className='row justify-content-around'>
                {
                    this.state.table.map((product) => (
                        
                        <div key={product.title} className='col-10 col-sm-5 col-md-4 col-lg-3 '>
                        <ProductCard product={product}
                            handleAddCart={this.props.handleAddCart}/>
                    </div> 
                    ))
                }
            </div>
        </div>
        );
    }
}
 
export default TablePage;