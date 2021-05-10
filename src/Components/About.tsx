import { FC } from 'react'
import '../styles/about.css'

export const About: FC = () => {
  return (
    <div className="about">
      <div className="about_container">
        <img
          className="about__image"
          src="https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Gaming-Setups.jpg"
          alt="about__image"
        />
        <div className="about_text">
          <h1>Example title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corrupti aut laboriosam voluptates in eos!
            Possimus deserunt, a repellat dolore sit veniam exercitationem optio necessitatibus eos itaque qui quam
            provident? Esse aperiam modi praesentium atque, omnis incidunt odit iure ipsam ad veniam doloribus pariatur
            magni soluta illo expedita autem voluptatum sint explicabo itaque sunt cum quam necessitatibus? Facere, quia
            assumenda.
          </p>
        </div>
      </div>
    </div>
  )
}
