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
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    FormControlLabel,
    TextField,
    Checkbox,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Snackbar,
} from '@material-ui/core';
import HomeWork from '@material-ui/icons/HomeWork';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

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
    dialogOpen: boolean;
    feedbackOpen: boolean;
    products: Product[];
    productInput: Record<string, string | undefined>;
}

export class ProductGrid extends React.Component<ProductGridProps, ProductGridState> {

    constructor(props: ProductGridProps) {
        super(props);
        this.state = { dialogOpen: false, feedbackOpen: false, products: [], productInput: {} };
    }

    deleteProduct(name: string) {
        if (window.confirm('Are you sure to delete the product?')) {
            const products = this.state.products.filter((product) => product.name !== name);
            this.setState({ products });
        }
    }

    componentDidMount() {
        this.setState({ products: PRODUCT_DATA });
    }

    handleDialogOpen() {
        this.setState({ dialogOpen: true, productInput: {} });
    }

    handleDialogClose() {
        this.setState({ dialogOpen: false, productInput: {} });
    }

    handleDialogSave() {
        const { productInput, products } = this.state;
        const { category, name, price } = productInput;

        if (!category || !name || !price) {
            this.setState({ feedbackOpen: true });
            return;
        }

        const product: Product = {
            category: productInput['category'] ?? '',
            name: productInput['name'] ?? '',
            price: productInput['price'] ?? '',
            stocked: 'true' === productInput['stocked'],
        };
        products.push(product);
        this.setState({ dialogOpen: false, products, productInput: {} });
    }

    handleProductInputChange(prop: string, value?: string) {
        const { productInput } = this.state;
        productInput[prop] = value;
        this.setState({ productInput });
    }

    handleFeedbackClose() {
        this.setState({ feedbackOpen: false });
    }

    render() {
        return (
            <Card>
                <AppBar position="static">
                    <Toolbar>
                        Product Grid
                        <IconButton aria-label="delete" onClick={(e) => this.handleDialogOpen()}>
                            <LibraryAdd fontSize="medium" color="secondary" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <List>
                    {this.state.products.map((product) => (
                        <ListItem key={product.name}>
                            <ListItemAvatar>
                                <Avatar>
                                    <HomeWork />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={product.name} secondary={product.price} />
                            <IconButton aria-label="delete" onClick={(e) => this.deleteProduct(product.name)}>
                                <DeleteIcon fontSize="medium" />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
                <Dialog open={this.state.dialogOpen} onClose={(e) => this.handleDialogClose()} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Register new product</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter the product information below.
                        </DialogContentText>
                        <FormControl fullWidth>
                            <InputLabel id="category-select-label">Category</InputLabel>
                            <Select labelId="category-select-label"
                                    id="category-select"
                                    value={this.state.productInput.category}
                                    onChange={(e) => this.handleProductInputChange('category', e.target.value as string)}>
                                <MenuItem value={'Sporting Goods'}>Sporting Goods</MenuItem>
                                <MenuItem value={'Electronics'}>Electronics</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            margin="dense"
                            id="name"
                            label="Product name"
                            type="text"
                            fullWidth
                            onChange={(e) => this.handleProductInputChange('name', e.target.value as string)}
                        />
                        <TextField
                            margin="dense"
                            id="price"
                            label="Price"
                            type="text"
                            fullWidth
                            onChange={(e) => this.handleProductInputChange('price', e.target.value as string)}
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="stocked"
                                color="primary"
                                onChange={(e) => this.handleProductInputChange('stocked', e.target.checked ? 'true' : 'false')}
                            />
                            }
                            label="Stocked?"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={(e) => this.handleDialogClose()} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={(e) => this.handleDialogSave()} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.feedbackOpen}
                    autoHideDuration={6000}
                    onClose={(e) => this.handleFeedbackClose()}
                    message="Invalid input"
                    action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={(e) => this.handleFeedbackClose()}>
                          <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                    }
                />
            </Card>
        );
    }
}
