export const getInitials = (name: string) => {
  const matches = name.match(/\b(\w)/g)!
  return matches.join('').toUpperCase()
}

export const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
