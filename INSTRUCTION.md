# react-material

## Lab-02

- src/product-list 폴더를 추가하고, 그 폴더 안에 ProductList.tsx 파일을 아래 내용으로 생성할 것

```
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
                                <DeleteIcon fontSize="medium" />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
            </Card>
        );
    }
}
```

- src/product-list 폴더에 index.ts 파일을 아래 내용으로 추가할 것

```
export * from './ProductList';

```

- App.tsx의 내용을 아래와 같이 변경할 것

```
import './App.css';
import { ProductGrid } from './product-list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductGrid inStockOnly={false} />
      </header>
    </div>
  );
}

export default App;
```

- 브라우저에서 확인, 그리고 전체적인 구조를 이해할 것

- 삭제 아이콘 버튼을 클릭하면, 해당 제품을 삭제하는 이벤트 핸들러를 작성할 것.

  Hint: 이벤트핸들러 설정은 아래와 같이 애로우 함수로 표시. JavaScript의 Array.filter() 함수를 사용해
        해당 제품 이름을 제외한 나머지만을 걸러내어 state.products 변경

```
    <DeleteIcon fontSize="medium" onClick={(e) => this.deleteProduct(product.name)} />
```

- 단순한 형태의 Confirmation Dialog를 추가하여, 위 단계에서 바로 삭제되던 것을,
  "삭제하시겠습니까?" 메시지 후, OK 버튼 클릭 시에만 삭제하도록 변경할 것. Cancel 클릭 시에는 삭제 안함

        참고: https://material-ui.com/components/dialogs/#confirmation-dialogs

- Product Grid 타이틀 옆의 '추가' 버튼 클릭 시, 새 Dialog를 띄워,
  category, name, stocked, price 등의 입력 폼 컨트롤을 표시하고,
  OK 버튼 시, 새 제품을 추가하는 로직을 구현할 것

