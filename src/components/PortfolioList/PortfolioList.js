import React from 'react';
import { products } from '../../data';
import Portfolio from '../Portfolio/Portfolio';
import './PortfolioList.css';
const PortfolioList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Premium is what I belive in</h1>
                <p className="pl-desc">
                    This is a creative portfolio that your work has been waiting for.
                    Beautiful stores, stunning portfolio styles and a whole lot more awaits
                    inside.
                </p>
            </div>
            <div className="pl-list">
                {
                    products.map(product => <Portfolio id={product.id} project={product}></Portfolio>)
                }
            </div>
        </div>
    );
};

export default PortfolioList;