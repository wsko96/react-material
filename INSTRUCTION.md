# react-material

## Lab-03

- src/theme.ts 파일을 아래 내용으로 추가할 것

```
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
           light: '#777',
           main: '#555',
           dark: '#000',
        },
        secondary: {
          main: '#f44336',
        },
    },
    typography: {
        h6: {
            fontFamily: 'Ubuntu',
        },
        button: {
            fontStyle: 'italic',
        },
    }
});

export default theme;
```

- public/index.html 페이지에서 title 위에 아래 추가

```
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700&display=swap" />
```

- index.tsx 파일을 아래와 같이 변경. 즉 커스텀 테마를 만들고, 그것을 ThemeProvider를 통해 App 컴포넌트를 감싸서 적용

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

- 다이얼로그 title (h6) 과 버튼 텍스트에 적용된 것 확인
