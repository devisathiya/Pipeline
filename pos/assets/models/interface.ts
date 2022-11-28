export interface Interface {

}

export interface IInvoiceUpdate {
    "invoice_id": string,            
    "sub_total": string,   
    "discount": string,   
    "discount_type": string,   
    "header_discount": string,   
    "header_disc_perc": string,   
    "fractions": string,   
    "charges": string,   
    "total": string,   
    "paid": string,   
    "change": string,   
    "hold": "0",
    "voided": "0",
    "inv_type": "S",
    "sold_sub_total": string,   
    "sold_discount": string,   
    "sold_charges": string,   
    "sold_total": string,   
    "sold_paid": string,   
    "sold_change": string,   
    "refunded": string,   
    "count_refund":string,   
    "detail_count": string,   
    "payment_count": string,   
    "completed": "0",
    "receipt_type": "O",
    "customer_id": "0",
    "customer_code": "",
    "person_code": "",
    "order_type": "O",
    "order_status": "P",
    "table_code": "",
    "number_of_person": "1",
    "split_invoice": "0",
    "split_order": "0",
    "items" : Array<IItems>
}


export interface IItems { 
    "invoice_detail_id": "1",            
    "product_id": "190",
    "product_upc": "RCOF009",
    "sold_upc": "RCOF009",
    "quantity": "1.00",
    "regular_price": "30.00",
    "price": "30.00",
    "amount": "36.80",
    "sold_quantity": "1.00",
    "sold_price": "32.00",
    "sold_amount": "36.80",
    "voided": "0",
    "balance_quantity": "1.00",
    "group_no": "0",
    "promotion": "0",
    "weight_item": "0",
    "vat_taxable_value": "32.00",
    "vat_tax_code": "010",
    "vat_tax_percent": "15.00",
    "vat_tax_value": "4.80",
    "vat_tax_balance": "4.80",
    "vat_tax_type": "S",
    "strategy_code": "",
    "discount_type": "V",
    "discount_value": "0.00",
    "discount_amount": "0.00",
    "note_desc": "",
    "is_child": "F",
    "is_child_charge": "F",
    "parent_id": "" 
}