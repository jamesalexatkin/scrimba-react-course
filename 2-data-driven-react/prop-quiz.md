1.  What do props help us accomplish?

    _A way to pass parameters as dynamic data into a component._

2.  How do you pass a prop into a component?

    _Declare a parameter `props` in the component's function parameters._

3.  Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
    DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

    _No, since the DOM element won't have that property declared. React JSX elements are converted into native HTML elements at runtime and are effectively syntactic sugar around them._

4.  How do I receive props in a component?
    function Navbar() {
    return (
    <header>
    ...
    </header>
    )
    }

        _Use `props.xyz`._

5.  What data type is `props` when the component receives it?

    _A JS object._
