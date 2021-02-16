import React from 'react';

export default function Listing({ items }) {

  return (
    <div className="item-list">
      {
        items.map(item =>
          item.url ?
            <div className="item" key={item.listing_id}>
              <div className="item-image">
                <a href={item.url}>
                  <img src={item.MainImage.url_570xN} alt=""/>
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{item.title.length > 50 ? item.title.substring(0, 49) + '...' : item.title}</p>
                <p className="item-price">
                  {
                    item.currency_code === 'USD' ? '$' + item.price :
                      item.currency_code === 'EUR' ? '€' + item.price :
                        item.price + ' ' + item.currency_code
                  }
                </p>
                <p className=
                  {
                    item.quantity <= 10 ? 'item-quantity level-low' :
                      item.quantity <= 20 ? 'item-quantity level-medium' :
                        'item-quantity level-high'
                  }>{item.quantity} left
                </p>
              </div>
            </div>
            : null
        )
      }
    </div>
  )
}

Listing.defaultProps = {
  items: []
};
