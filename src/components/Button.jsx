const Button = ({ children, variant = 'primary', onClick }) => {
  const baseClasses = "px-4 py-2 rounded font-medium transition duration-200"

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button