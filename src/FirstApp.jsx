import propTypes from  "prop-types"

export const FirstApp = ({title, subTitle}) => {
  return (
    <h1>{title}</h1>
  )
}

FirstApp.propTypes = {
  title: propTypes.string  
}