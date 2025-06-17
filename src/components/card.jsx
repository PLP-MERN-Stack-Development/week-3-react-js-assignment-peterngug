const Card = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-500 shadow rounded-lg p-4">
      {title && <h3 className="text-xl mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  )
}

export default Card