import { FC } from 'react'
import { useEffect } from 'react'
import { database, auth } from '../firebase'

const Wishlist: FC = () => {
  const handleReadDatabase = async () => {
    let wishlistRef = database.ref(`wishlist/${auth.currentUser?.uid}`)
    wishlistRef.on('value', (snapshot) => {
      const data = snapshot.val()
      console.log(data)
    })
  }
  useEffect(() => {
    handleReadDatabase()
  })

  return <div></div>
}

export default Wishlist
