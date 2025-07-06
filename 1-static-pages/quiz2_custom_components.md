1. What is a React component?

    _A React element which is written as an individual piece of JSX It is reusable. Often written as a function._

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

    _Needs PascalCase in the function name._

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```

    _It's more idiomatic to invoke Header as JSX rather than a function call._