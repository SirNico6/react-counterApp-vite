
const sayHi = (firstName) => {
    return `Hello ` + firstName;
}

export const HelloWorldApp = () => {
  return (
    <>
        <h1>Hello World App</h1>
        <p>{sayHi("Nico")}</p>
    </>
  )
}
