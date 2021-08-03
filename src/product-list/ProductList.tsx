import React from 'react';
import {
    AppBar,
    Toolbar,
    Card,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    IconButton,
} from '@material-ui/core';
import HomeWork from '@material-ui/icons/HomeWork';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import DeleteIcon from '@material-ui/icons/Delete';

interface Product {
    category: string;
    name: string;
    price: string;
    stocked: boolean;
    description?: string;
}

const PRODUCT_DATA: Product[] = [
    {"category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football"},
    {"category": "Sporting Goods", "price": "$9.99", "stocked": true, "name": "Baseball"},
    {"category": "Sporting Goods", "price": "$29.99", "stocked": false, "name": "Basketball"},
    {"category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch"},
    {"category": "Electronics", "price": "$399.99", "stocked": false, "name": "iPhone 5"},
    {"category": "Electronics", "price": "$199.99", "stocked": true, "name": "Nexus 7"}
];

interface ProductGridProps {
    inStockOnly?: boolean;
}

interface ProductGridState {
    products: Product[];
}

export class ProductGrid extends React.Component<ProductGridProps, ProductGridState> {

    constructor(props: ProductGridProps) {
        super(props);
        this.state = { products: [] };
    }

    deleteProduct(name: string) {
        const products = this.state.products.filter((product) => product.name !== name);
        this.setState({ products });
    }

    componentDidMount() {
        this.setState({ products: PRODUCT_DATA });
    }

    render() {
        return (
            <Card>
                <AppBar position="static">
                    <Toolbar>
                        Product Grid
                        <IconButton aria-label="delete">
                            <LibraryAdd fontSize="medium" color="secondary" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <List>
                    {this.state.products.map((product) => (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <HomeWork />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={product.name} secondary={product.price} />
                            <IconButton aria-label="delete">
                                <DeleteIcon fontSize="medium" onClick={(e) => this.deleteProduct(product.name)} />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            </Card>
        );
    }
}
