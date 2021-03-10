import React from 'react';
import { Table } from 'react-bootstrap';

const Result = ({ data }) => {

  const fields = [
    {
      key: 'house_purchase_value',
    title: 'House Purchase Value'
      
    }, {
      key: 'house_purchase_cost_per_month',
      title: 'House Cost per Month'
    },
    {
      key: 'house_rent_value_per_month',
    title: 'House Rent Value per Month'
      
    },
    {
      key: 'amortized_transaction_cost',
      title: 'Amortized Transaction Cost'
    },
    {
      key: 'insurance_cost',
      title: 'Insurance Cost'
    },
    {
      key: 'mortgage_interest',
      title: 'Mortgage Interest'
    },
    {
      key: 'mortgage_percent',
      title: 'Mortgage Percent'
    },
    {
      key: 'property_tax',
      title: 'Property Tax'
    },
    {
      key: 'repairs_cost',
      title: 'Repairs Cost'
    },
  ];

  return (
    <div>
     

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Details</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {
            fields.map(field => {
              return (
                <tr>
                  <td>{field.title}</td>
                  <td>{data[field.key]}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Result;

