# react-material

- React 어플리케이션을 생성할 것. 가능한 한 typescript 템플릿 사용하여 typescript에 적응 요망

```
npx create-react-app react-material --template typescript
```

- `yarn start`로 프로젝트가 브라우저에서 제대로 동작하는지 확인

- `tsconfig.json` 파일에 `strictNullChecks` 옵션 추가

```
{
  "compilerOptions": {
    "strictNullChecks": true
    // ...
  }
}
```

- Material-UI core 설치

```
yarn add @material-ui/core
```

- Material-UI SVG Icon 설치

```
yarn add @material-ui/icons
```

- App.tsx를 아래와 같이 변경

```
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary">
          시작이 반이다
        </Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

- 브라우저에서 변경 확인
